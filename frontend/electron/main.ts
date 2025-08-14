import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { app, BrowserWindow} from "electron";
import path from "path";

function createWindow() {

  const splashWidth = 400;
  const splashHeight = 300;

  const splash = new BrowserWindow({
    width: splashWidth,
    height: splashHeight,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    resizable: false,
    movable: false,
  });

  splash.loadFile(path.join(__dirname, "../electron/splash.html"));

  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    icon: path.join(__dirname, "../public/Fav_Icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
    },
  });

  window.setMenu(null)

  // Se estiver em dev (com vite rodando), carrega URL do vite:
  if (process.env.NODE_ENV === "development") {
    window.loadURL(import.meta.env.VITE_API_URL);
    // window.webContents.openDevTools(); //DevTools
  } else {
    // No build, carrega o arquivo index.html gerado pelo Vite
    window.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  // Quando a janela principal estiver pronta, fecha a splash e mostra ela
  window.webContents.on("did-finish-load", () => {
    if (splash && !splash.isDestroyed()) {
      splash.destroy();
    }
    window.show();
  });

  window.on("close", () => {
    app.quit();
  });
}

// Quando o Electron terminar de inicializar:
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Finalizar app quando todas janelas forem fechadas (exceto macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
