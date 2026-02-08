export function initBackground(root) {
    const background = document.createElement('div');
    
    background.className = 'background';
    background.id = 'background';

    root.appendChild(background);
}