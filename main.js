const { app, BrowserWindow } = require('electron');
const DIST_PATH = `file://${__dirname}/dist`;
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    backgroundColor: '#ffffff',
    icon: `${DIST_PATH}/assets/electron-app/logo.png`,
    webPreferences: {
      webSecurity: false
    }
  });

  win.loadURL(`${DIST_PATH}/electron-app/index.html`);

  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function() {
    win = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});
