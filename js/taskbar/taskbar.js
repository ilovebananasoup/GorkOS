import { initClock } from "./clock.js";
import { open } from "../window-manager.js";

export function initTaskbar(root) {


    const taskbar = document.createElement('div');
    taskbar.className = 'taskbar';
    taskbar.id = 'taskbar';



    const appArea = document.createElement('div');
    appArea.className = 'taskbar-app-area';
    appArea.id = 'taskbar-app-area';

    const testApp = document.createElement('div');
    testApp.className = 'taskbar-app';
    testApp.id = 'taskbar-test-app';
    testApp.onclick = () => open({id: 'test-app', name: 'Test App'});

    appArea.appendChild(testApp);

    const infoArea = document.createElement('div');
    infoArea.className = 'taskbar-info-area';
    infoArea.id = 'taskbar-info-area';

    const timeEl = document.createElement('div');
    timeEl.className = 'taskbar-time';
    timeEl.id = 'taskbar-time';
    
    const dateEl = document.createElement('div');
    dateEl.className = 'taskbar-date';
    dateEl.id = 'taskbar-date';

    taskbar.appendChild(appArea);
    taskbar.appendChild(infoArea);

    infoArea.appendChild(timeEl);
    infoArea.appendChild(dateEl);

    root.appendChild(taskbar);

    initClock(timeEl,dateEl,infoArea)
}

