// Función para actualizar reloj
function updateClock() {
    const now = new Date();

    document.getElementById('hours').textContent = String(now.getHours()).padStart(2, '0');
    document.getElementById('minutes').textContent = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('seconds').textContent = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('date').textContent = now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Ejecutar cada segundo
setInterval(updateClock, 1000);
updateClock(); // inicializar al cargar

// Botón de instalación PWA
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('Resultado de la instalación:', outcome);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    } else {
        alert('Instalación no disponible ahora.');
    }
});