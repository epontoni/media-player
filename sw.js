const VERSION = "v1";

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== 'GET') {
        return;
    }

    // If request is not made with http protocol (puede que haya extensiones instaladas que realicen peticiones)
    if (!(event.request.url.indexOf('http') === 0)) return;

    // Is it cached?
    event.respondWith(cachedResponse(request));

    // Update cache
    event.waitUntil(updateCache(request));
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/favicon.ico',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny_512kb.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request, {cache: "no-store"});
    return cache.put(request, response);
}