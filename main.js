const {app, BrowserWindow} = require('electron')

let win = null

app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    resizable: false,
    frame: process.platform !== 'darwin',
    webPreferences: {nodeIntegration: true}
  })

  win.loadURL(`file://${__dirname}/src/index.html`)

  app.on('closed', () => {
    win = null
    app.quit()
  })

})
