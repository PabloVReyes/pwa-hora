// ===== RELOJ =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    const dateStr = now.toLocaleDateString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('date').textContent = dateStr;
}

setInterval(updateClock, 1000);
updateClock(); // inicializa al cargar

// ===== PWA INSTALL =====
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const iosHint = document.getElementById('iosHint');

// Detecta iOS
const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
const isInStandaloneMode = ('standalone' in window.navigator) && window.navigator.standalone;

if (isIos && !isInStandaloneMode) {
    iosHint.style.display = 'block';
    installBtn.style.display = 'none';
}

// Detecta Android/Chrome
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        console.log(choiceResult.outcome);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    } else {
        alert('Instalación no disponible actualmente.');
    }
});

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker registrado'))
        .catch((err) => console.error('Error SW:', err));
}