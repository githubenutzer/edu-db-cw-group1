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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "57d98b7a682efe5863574798bca2931f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.4e88c80f.css",
    "revision": "2bd11eae5486cb900fb807116e9424f9"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test_img_1.3d440514.png",
    "revision": "3d440514bfe2650cd1a9ced1f9a213d5"
  },
  {
    "url": "assets/img/test_img_10.c87fa8f9.png",
    "revision": "c87fa8f9348a4534fce9f455d803cd9a"
  },
  {
    "url": "assets/img/test_img_11.e9748838.png",
    "revision": "e9748838405100a1f084540e7c825b1f"
  },
  {
    "url": "assets/img/test_img_12.e8dbfe9a.png",
    "revision": "e8dbfe9a9702c42d861c64c4cbdf98b3"
  },
  {
    "url": "assets/img/test_img_13.5b445148.png",
    "revision": "5b44514826bdf180bb8c8a45429b9257"
  },
  {
    "url": "assets/img/test_img_14.87b34db7.png",
    "revision": "87b34db7435b0b67804d80272637c82f"
  },
  {
    "url": "assets/img/test_img_15.126cf348.png",
    "revision": "126cf34852b5d08e88dc96924230a96e"
  },
  {
    "url": "assets/img/test_img_2.42876f7e.png",
    "revision": "42876f7e36072d8364499df7264c3f41"
  },
  {
    "url": "assets/img/test_img_3.49fd1c0d.png",
    "revision": "49fd1c0d3fd3ab60654651712503cb1e"
  },
  {
    "url": "assets/img/test_img_4.0c911f7d.png",
    "revision": "0c911f7d6b4d8a37fcf746c31efb1a52"
  },
  {
    "url": "assets/img/test_img_5.988b7dbf.png",
    "revision": "988b7dbf1c8a10d0e7ffc2b67db6c147"
  },
  {
    "url": "assets/img/test_img_6.bb5506ad.png",
    "revision": "bb5506ad4821cd23094b63bbcfea6f54"
  },
  {
    "url": "assets/img/test_img_7.7fcdecff.png",
    "revision": "7fcdecffc2becad7b3ac12e51b98e694"
  },
  {
    "url": "assets/img/test_img_8.b26fcef4.png",
    "revision": "b26fcef48de7e40e64b8428a176fd3f5"
  },
  {
    "url": "assets/img/test_img_9.74733e38.png",
    "revision": "74733e380ac7f9296200456af514b5f3"
  },
  {
    "url": "assets/js/1.44aa416b.js",
    "revision": "1814c1025f9b4e042cfca87754a753a6"
  },
  {
    "url": "assets/js/10.34cccb11.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.e94752d3.js",
    "revision": "8529ae0b470be13c694e20da1b1f7d42"
  },
  {
    "url": "assets/js/14.0f130fbb.js",
    "revision": "8045f89180e6d7bc528d1d4cd87fc2a0"
  },
  {
    "url": "assets/js/15.9b45e2d3.js",
    "revision": "a981caff8648d317e5239c9b509433ce"
  },
  {
    "url": "assets/js/16.3fba0f2e.js",
    "revision": "9c9b85761e3581afc55cb4d3621688a6"
  },
  {
    "url": "assets/js/17.065b22e8.js",
    "revision": "1a784140c9fafe733a47fbcedffbac76"
  },
  {
    "url": "assets/js/18.3687cd53.js",
    "revision": "b88a16ee9b0932231ce9b6817618b68a"
  },
  {
    "url": "assets/js/19.e97a1789.js",
    "revision": "8efd83a3e98c13ba980a887569327bbc"
  },
  {
    "url": "assets/js/2.31537b5e.js",
    "revision": "74de3e53722d9c7ade309c44d90cf3af"
  },
  {
    "url": "assets/js/20.edab266a.js",
    "revision": "6a2119b2bb8ecf22137a2e49f4256452"
  },
  {
    "url": "assets/js/21.4e1cc404.js",
    "revision": "81041c8b09232f0fe7762bc47cc012f3"
  },
  {
    "url": "assets/js/22.8c2f48ed.js",
    "revision": "6ea3985ce9470744d0289cbf480cde84"
  },
  {
    "url": "assets/js/23.6332bedd.js",
    "revision": "0393bf62740d7668ff50b3911e3fd4ae"
  },
  {
    "url": "assets/js/24.75fcd03d.js",
    "revision": "e21bdc326860d6fd0a04feb25cf08e83"
  },
  {
    "url": "assets/js/25.2346a27f.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.64a380ff.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.987fd2d4.js",
    "revision": "df1f8191ad74a517c393d85d011bd85c"
  },
  {
    "url": "assets/js/28.8f5c1da8.js",
    "revision": "e6ebf2b2045da6987fc675bbd22bbf9d"
  },
  {
    "url": "assets/js/29.796c6e28.js",
    "revision": "03f0274c25e757b5c6be1041cf9a487f"
  },
  {
    "url": "assets/js/3.90c9f46a.js",
    "revision": "159f2ae06d83459b0189e5b7e1bb83d3"
  },
  {
    "url": "assets/js/30.0034aee8.js",
    "revision": "5b2cd0f18aae6bdb6b147963e68b7b01"
  },
  {
    "url": "assets/js/31.8629efbf.js",
    "revision": "d8379d48063c9f2c125a41723c906e17"
  },
  {
    "url": "assets/js/32.c15f0c53.js",
    "revision": "0c00ade25cc8d7ca0c7d7b0d358ec6aa"
  },
  {
    "url": "assets/js/33.6ea36b78.js",
    "revision": "b5878b961fefe5ab6a417ea8f070fd33"
  },
  {
    "url": "assets/js/34.6ccaef41.js",
    "revision": "dedbb1ea4f57b903527ab658871a42fe"
  },
  {
    "url": "assets/js/35.bcdec437.js",
    "revision": "6b3ec019df0e72a22d66d1f4c217f136"
  },
  {
    "url": "assets/js/36.98c68644.js",
    "revision": "482f67a30d14e26190975a9906d149bf"
  },
  {
    "url": "assets/js/37.611cf381.js",
    "revision": "738062b796e4f6e2ec422487bc7feaa9"
  },
  {
    "url": "assets/js/38.925d42b8.js",
    "revision": "845269a874500b0707712020971f8da5"
  },
  {
    "url": "assets/js/39.555fd877.js",
    "revision": "3ecd8700a6a40ef0f685d83e2f69e4c3"
  },
  {
    "url": "assets/js/4.d89c84ca.js",
    "revision": "2f7b69d65bce8cbeb4ea5f4f5f121304"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.d924d9a2.js",
    "revision": "6db2f24c3da26c3dedd7b2369fcfda93"
  },
  {
    "url": "assets/js/6.b07be8cb.js",
    "revision": "855b89c51ee29f9a1aa9bd5526e616a9"
  },
  {
    "url": "assets/js/7.66963738.js",
    "revision": "5671e6ef5f9f67bc7df948cdccc2ad91"
  },
  {
    "url": "assets/js/8.2b4e0518.js",
    "revision": "17956606c699c66810d6d1dfe1587b12"
  },
  {
    "url": "assets/js/9.3749ca08.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.c55dc3ad.js",
    "revision": "71bce5830e1e9b30ac2f93393e7f5211"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "04d254bdb612009b35bb3b919b19788a"
  },
  {
    "url": "design/index.html",
    "revision": "8bd61b93e254cd2fbef4b0219f6223c9"
  },
  {
    "url": "index.html",
    "revision": "76d35abd1e1295e79811eb7618b412e7"
  },
  {
    "url": "intro/index.html",
    "revision": "4f4d99ec2dc5d9710d9f1a973a93ba99"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "12636ca632c7421f6a8eff6702d8e5dd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c5f7e9e74da1dab41e8117c4216f1564"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eb5456a22a62defc2def4ed9835680c8"
  },
  {
    "url": "software/index.html",
    "revision": "ca16cfe0591fa254eacf9d77e4d33388"
  },
  {
    "url": "test/index.html",
    "revision": "5f7f22bed04089451065ed6e83f54df8"
  },
  {
    "url": "use cases/index.html",
    "revision": "f75d74d8b049dcf15c693824da250265"
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
