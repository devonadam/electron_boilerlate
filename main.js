const { app, BrowserWindow } = require("electron");
let path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    vibrancy: "under-window",
    visualEffectState: "active",
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./index.html");
};

app.whenReady().then(() => {
  createWindow();
});
