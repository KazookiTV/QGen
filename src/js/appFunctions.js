const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;
const closeBtn = document.getElementById('close');
const minimizeBtn = document.getElementById('minimum');
const maximizeBtn = document.getElementById('maximum');
// when close is clicked close the app
closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
})
maximizeBtn.addEventListener('click', () => {
    ipc.send('maximizeApp');
})
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp');
})