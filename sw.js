const CACHE_NAME = "lavan-cache-v2";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "/lavan/",
        "/lavan/index.html",
        "/lavan/manifest.json",
        "/lavan/icon-192-new.png",
        "/lavan/icon-512-new.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});