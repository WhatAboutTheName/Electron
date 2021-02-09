const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');

let mainWindow, tray;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        fullscreenable: false,
        resizable: false,
        alwaysOnTop: true,
        frame: false,
        backgroundColor: '#412adb'
    });
    mainWindow.hide();
    mainWindow.loadFile('index.html');
}

function createTray() {
    tray = new Tray(path.join(__dirname, './img/cloud.png'));
    tray.setToolTip('Fast Cloud');
    tray.on('click', () => {
        mainWindow.isVisible() ? mainWindow.hide() : showWindow();
    })

    function showWindow() {
        const windowBounds = mainWindow.getBounds();
        const trayBounds = tray.getBounds();
        const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
        const y = Math.round(windowBounds.height - trayBounds.height * 2 - 3);
        mainWindow.setPosition(x, y, false);
        mainWindow.show();
    }
}

app.on('ready', () => {
    createTray();
    createWindow();
})
