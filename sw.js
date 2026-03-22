self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
});

self.addEventListener('fetch', (event) => {
    // PWA offline cache simple
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});