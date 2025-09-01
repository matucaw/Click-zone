self.addEventListener('install', (event) => {
  self.skipWaiting(); // força ativação imediata
  console.log('Service Worker instalado e pronto para atualização!');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // toma controle das abas abertas
});

// Intercepta todas as requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request) // sempre busca do servidor
      .catch(() => caches.match(event.request)) // fallback se offline
  );
});
