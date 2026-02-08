export function open(app) {
    const window = document.createElement('div');
    window.className = 'window';
    window.id = `window-${app.id}`;

    const titleBar = document.createElement('div');
    titleBar.className = 'window-titlebar';
    titleBar.textContent = app.name;

    const contentArea = document.createElement('iframe');
    contentArea.className = 'window-content-area';
    contentArea.src = `apps/${app.id}`;

    window.appendChild(titleBar);
    window.appendChild(contentArea);
    document.getElementById('window-root').appendChild(window);
}