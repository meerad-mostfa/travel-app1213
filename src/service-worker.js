// تحديد اسم التخزين المؤقت
const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = [
    '/', // المسار الجذر
    '/styles.css', // المسار الصحيح لملف CSS المجمّع
    '/bundle.js' // المسار الصحيح لملف JavaScript المجمع
];

// تثبيت الـ Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// تنشيط الـ Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => {
                    return cacheName !== CACHE_NAME;
                }).map((cacheName) => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// التعامل مع طلبات الشبكة
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
