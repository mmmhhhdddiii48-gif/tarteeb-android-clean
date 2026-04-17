const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('tarteebDesktop', {
  isDesktop: true,
  openExternal: (url) => ipcRenderer.invoke('tarteeb-open-external', url)
});
