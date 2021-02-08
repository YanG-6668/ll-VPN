
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open('v-1').then(function(cache) {
      return cache.addAll([
        './css/app.css',
        './js/app.js',
        './img/promo.svg',
        './img/features.svg',
        './img/card.png',
        './img/card.webp',
        './img/free-plan.svg',
        './img/Standard-plan.svg',
        './img/Premium-plan.svg',
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  )
})
