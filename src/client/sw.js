workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.routing.registerRoute(/.*/, workbox.strategies.networkFirst(), "GET");
