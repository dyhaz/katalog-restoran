import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

// Installing Service Worker ...
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

// Activating Service Worker ...
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
