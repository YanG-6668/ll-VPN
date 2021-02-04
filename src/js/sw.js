const CACHE = 'CACHE-v1';

self.addEventListener("install", function (e) {
  e.waitUntil(precache())
})

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

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(
      [
        '../css/app.css',
        './app.js',
        '../img/global-network.svg',
        '../fonts/Rubik-Medium.woff2',
        '../fonts/Rubik-Bold.woff2',
        '../fonts/Rubik-Regular.woff2'
      ]
    )
  })
}


// , '../img/'
