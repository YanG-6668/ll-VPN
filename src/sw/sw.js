
// self.addEventListener("install", function (e) {
//   console.log('Инсталлируем');
//   e.waitUntil(
//     caches.open('v-1').then(function(cache) {
//       return cache.addAll([
//         '/css/app.css',
//         '/img/promo.svg',
//         '/img/features.svg',
//       ]);
//     })
//   );
// });

// self.addEventListener('fetch', function (e) {
//   console.log("Идет запрос на:",e.request.url);
//   e.respondWith(
//     caches.match(e.request)
//     .then(function (response) {
//       if (response) {
//         console.log('Нашли в кеше:', e.request.url);
//         return response;
//       }
//       console.log('Возвращаем из сети:', e.request.url);
//       return fetch(e.request);
//     })
//   )
// })


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw/',
        '/sw/app.css',
        '/sw/app.js',
        '/sw/img/promo.svg',
        '/sw/img/features.svg',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
