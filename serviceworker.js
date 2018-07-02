const version = 5
const staticCacheName = `V${version}-staticFiles`

addEventListener('install', evt => {
  skipWaiting()
  evt.waitUntil(
    caches.open(staticCacheName).then(staticCache => {
      // Nice to have
      staticCache.addAll([
        'fonts/Tofino-Regular.otf',
        'images/arrow.svg',
        'images/avatarpic.jpg'])
      // Must have
      return staticCache.addAll(['css/bundle.css', 'js/bundle.js'])
    })
  )
})

addEventListener('fetch', evt => {
  const request = evt.request
  evt.respondWith(
    // First, look in the cache
    caches.match(request).then(responseFromCache => {
      if (responseFromCache) {
        return responseFromCache
      }
      // Otherwise fetch from the network
      return fetch(request)
    })
  )
})

addEventListener('activate', evt => {
  evt.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName != staticCacheName) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        return clients.claim()
      })
  )
})
