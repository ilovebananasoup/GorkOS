import { initTaskbar } from "./taskbar/taskbar.js";
import { initBackground } from "./background/background.js";

function boot() {
    const desktopRoot = document.getElementById('desktop-root');
    const windowRoot = document.getElementById('window-root');
    const systemUIRoot = document.getElementById('system-ui-root');
    
    initTaskbar(systemUIRoot);
    initBackground(desktopRoot);
}

boot();