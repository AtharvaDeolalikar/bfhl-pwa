// let installPrompt = null;
// const installButton = document.querySelector("#install");

// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   installPrompt = event;
//   installButton.removeAttribute("hidden");
// });

// installButton.addEventListener("click", async () => {
//     if (!installPrompt) {
//         return;
//     }
//     const result = await installPrompt.prompt();
//     console.log(`Install prompt was: ${result.outcome}`);
//     disableInAppInstallPrompt();
// });

// function disableInAppInstallPrompt() {
//     installPrompt = null;
//     installButton.setAttribute("hidden", "");
// }

// window.addEventListener("appinstalled", () => {
//     disableInAppInstallPrompt();
// });
  
// function disableInAppInstallPrompt() {
//     installPrompt = null;
//     installButton.setAttribute("hidden", "");
// }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    // Add other resources you want to cache, such as CSS, JS, images
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
