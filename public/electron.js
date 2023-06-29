const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = app.isPackaged ? false : require('electron-is-dev');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

ipcMain.on("sluchacz1",(event,data)=>{
  console.warn(data) 

	 event.reply("dopowiedz1","od serwera odpowiedz")

})
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
