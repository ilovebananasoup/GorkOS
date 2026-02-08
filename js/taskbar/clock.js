
export function initClock(timeEl, dateEl, infoAreaEl) {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}:${seconds}`;
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        dateEl.textContent = `${day}/${month}/${year}`;


        infoAreaEl.title = now.toLocaleString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
        })
    }
    updateClock();
    setInterval(updateClock, 1000);
}