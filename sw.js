self.addEventListener("install", (event) => {
  // ativa imediatamente a nova versão
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // força os clientes (abas/instalações) a usarem a nova versão
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // sempre busca do servidor primeiro
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
