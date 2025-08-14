import { contextBridge, ipcRenderer } from "electron";

export {};

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (message: string) => ipcRenderer.send("message", message),
  onMessage: (callback: (message: string) => void) =>
    ipcRenderer.on("message", (_, data) => callback(data)),
});