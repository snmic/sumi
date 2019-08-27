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
    "url": "404.html",
    "revision": "b0571120ad44152fa90ddcc5155a87f1"
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
    "url": "assets/js/app.d7bfdd45.js",
    "revision": "3e0550255e068adbe1fe14d66075ee0a"
  },
  {
    "url": "assets/js/vendors~flowchart.dcec1649.js",
    "revision": "14e12908b09243e29b12ab0382e3f2e3"
  },
  {
    "url": "category/Flutter.html",
    "revision": "7ac2780f600b22c8962cf22d981b9549"
  },
  {
    "url": "category/index.html",
    "revision": "2225369a97cf0c137d10642b4dfbec5d"
  },
  {
    "url": "index.html",
    "revision": "1e2bc5c14931c3f55891d5fe9744d4fb"
  },
  {
    "url": "live/index.html",
    "revision": "e5ba72604ee494997cbf150abe64a640"
  },
  {
    "url": "tag/Flutter.html",
    "revision": "07ab90a65c88413eb49f0d4035a09228"
  },
  {
    "url": "tag/index.html",
    "revision": "6a172ee40b8912d78a097a1e56993f92"
  },
  {
    "url": "tag/Vue.html",
    "revision": "daa9de8fc89598a59efe739259f1ea53"
  },
  {
    "url": "timeLine/index.html",
    "revision": "c9c152ea670d3d10af353f37176014c3"
  },
  {
    "url": "views/flutter/01.html",
    "revision": "d3172f2ab670711997ad818a40155469"
  },
  {
    "url": "views/flutter/02.html",
    "revision": "a67610adbaff200b1c4e9588168af25a"
  },
  {
    "url": "views/other/guide.html",
    "revision": "0cbd9dbbe4ee90d026979968b41e61d0"
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
