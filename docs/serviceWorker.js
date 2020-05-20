// ライブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
    {
        url:'./index.html',
        revision:'12345'
    },
    {
        url:'./script/acc.js',
        revision:'12345'
    },
    {
        url:'./style/acc.css',
        revision:'12345'
    }
]);

self.addEventListener('fetch', function(e) {

});