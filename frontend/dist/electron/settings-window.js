const { BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let settings;

module.exports = createSettingWindow = (parent, color = '#412adb') => {

    settings = new BrowserWindow({
        title: 'Настройки',
        width: 450,
        height: 400,
        fullscreenable: false,
        resizable: false,
        frame: false,
        alwaysOnTop: false,
        show: color === '#412adb' ? false : true,
        backgroundColor: color,
        parent: parent,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    settings.loadURL(`file://${path.join(__dirname, '../dist/index.html?settings')}`);
}


ipcMain.on('settings_hide', (e) => {
    e.preventDefault();
    settings.hide();
});

ipcMain.on('new_background_color', () => {
    settings.close();
});
