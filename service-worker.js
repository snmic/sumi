/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "360wallpaper.jpg",
    "revision": "c1eb4136fa4d4d19a1cb852034402642"
  },
  {
    "url": "404.html",
    "revision": "195d0b2c668d1a54c4f9ec64d5452e13"
  },
  {
    "url": "assets/css/0.styles.a52e88ad.css",
    "revision": "5823edbec5f6f110248ef8512589675d"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.af648086.js",
    "revision": "3418b5af4da3636fca8984f5693cba3c"
  },
  {
    "url": "assets/js/10.c4b0b8b3.js",
    "revision": "a4ca3ebe4d80d3e1fc5c2ef7ec95af98"
  },
  {
    "url": "assets/js/11.3e55b7eb.js",
    "revision": "ac5597b61b7c407532286a5d4ad466a4"
  },
  {
    "url": "assets/js/12.87d77630.js",
    "revision": "68e8436155df5016492e0aa9e8a34060"
  },
  {
    "url": "assets/js/13.c85c4e68.js",
    "revision": "716bb84a85d4eba6758cc7b4aeefb74e"
  },
  {
    "url": "assets/js/14.4d0b8590.js",
    "revision": "6edb24b2990dab9d9babdbb09d001f4c"
  },
  {
    "url": "assets/js/15.61bc5614.js",
    "revision": "b4faea0fcb25bcefcd116edceba9c010"
  },
  {
    "url": "assets/js/4.2e978903.js",
    "revision": "34e9a643baa5ace3d95973c6477df108"
  },
  {
    "url": "assets/js/5.739fb1b5.js",
    "revision": "b004397d6e34d58a2b6aa3bbfaefe3e9"
  },
  {
    "url": "assets/js/6.31e6e084.js",
    "revision": "ffde476e76bd987b9c68d6fcc5840380"
  },
  {
    "url": "assets/js/7.e86f40ff.js",
    "revision": "260517f3b80c3bb78bf4519d0aafaa98"
  },
  {
    "url": "assets/js/8.b80d7f4b.js",
    "revision": "1a4c2f9920e3122a01a78d006a456346"
  },
  {
    "url": "assets/js/9.36885985.js",
    "revision": "96284db63eb49707ec4ea9e37f528775"
  },
  {
    "url": "assets/js/app.497c64e8.js",
    "revision": "6dabbda8f37702b7ef1e2a5eb11719da"
  },
  {
    "url": "assets/js/vendors~flowchart.dcec1649.js",
    "revision": "14e12908b09243e29b12ab0382e3f2e3"
  },
  {
    "url": "bg.jpg",
    "revision": "2d8db40eaf6578c1db70b10544658c96"
  },
  {
    "url": "category/Flutter.html",
    "revision": "a27300f6a99e45b24864b1246b27e12f"
  },
  {
    "url": "category/index.html",
    "revision": "7a89980927ae3696b14dd17457b0022b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "b6095d28aa560a59b45a10047165b6c8"
  },
  {
    "url": "live/index.html",
    "revision": "fe1204b09026ae3c2b2d70e1727fe2f1"
  },
  {
    "url": "tag/Flutter.html",
    "revision": "c74dd9db15a29c04403f34f2a9c0ed20"
  },
  {
    "url": "tag/index.html",
    "revision": "6918d6dc8743529066cd02b0c44a5dba"
  },
  {
    "url": "tag/Vue.html",
    "revision": "3bf84f82577954960275091c13bbbee6"
  },
  {
    "url": "timeLine/index.html",
    "revision": "569311e2f81d02f6ff0c51edf928c579"
  },
  {
    "url": "views/flutter/01.html",
    "revision": "75b0788322c8c9a8160d776c956d7a34"
  },
  {
    "url": "views/flutter/02.html",
    "revision": "cacaa3cf8e00c2f76af967790d38b0bc"
  },
  {
    "url": "views/other/guide.html",
    "revision": "e430add80ab297c735100bca13aad8dd"
  },
  {
    "url": "yudr.jpg",
    "revision": "5d765eff057438ae1057962ca49b1f09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
