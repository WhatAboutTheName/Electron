const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');
const settingsWindow = require('./settings-window');

let mainWindow, tray;

function createMainWindow(color = '#412adb') {
    mainWindow = new BrowserWindow({
        title: 'Фото альбом',
        width: 300,
        height: 400,
        fullscreenable: false,
        resizable: false,
        alwaysOnTop: true,
        frame: false,
        show: false,
        backgroundColor: color,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html?main')}`);
}

function createTray() {
    tray = new Tray(path.join(__dirname, '../dist/img/cloud.png'));
    tray.setToolTip('Fast Cloud');
    tray.on('click', () => {
        mainWindow.isVisible() ? mainWindow.hide() : showWindow();
    })

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Открыть', click: () => showWindow() },
        { label: 'Выход', role: 'quit' }
    ]);

    tray.setContextMenu(contextMenu);
}

function showWindow() {
    const windowBounds = mainWindow.getBounds();
    const trayBounds = tray.getBounds();
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
    const y = Math.round(windowBounds.height - trayBounds.height * 2 - 4);
    mainWindow.setPosition(x, y, false);
    mainWindow.show();
}

app.on('ready', () => {
    createTray();
    createMainWindow();
    settingsWindow(mainWindow);
});

ipcMain.on('new_background_color', (e, background) =>{
    mainWindow.hide();
    createMainWindow(background);
    settingsWindow(mainWindow, background);
    showWindow();
});
