'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8b5d303468d970dab510e593417587b4",
".git/config": "5a5cd2a131153abe0d2e90f219f24cde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ce9e9a4e911584b88ad5ceeba486c47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc2abcef0100782ff1b40bfb8c27da1b",
".git/logs/refs/heads/dev": "dc2abcef0100782ff1b40bfb8c27da1b",
".git/logs/refs/remotes/origin/dev": "fcadff1e59aff3a738cd4a2eb265344e",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/62acf467a3ec1c94e5773d7485f53048337aec": "25566abfe89f9434a4c5589ca6693d83",
".git/objects/07/6d939f2138b0e38f97eb728c3928776506f746": "1d9d20fe72f4f777e52f7eefe98a91af",
".git/objects/09/beea2bae547d0887a3def7ce08c4dc94a0aff5": "d346f1e830487288e5022f4df9318751",
".git/objects/0b/1460079ccda6197ac79759769f30e4064923d1": "44ea31131b49bfb43d6ffbb0141510c1",
".git/objects/0b/926dfc0d94991e605289a8e16bbda74c9a701a": "79daf797a92fc5ac588866e81253351d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/ceef1aa1d820f4917154f463515f538dcec8fd": "42f1eb477e4cf91d7197d765a0adafcb",
".git/objects/17/ee8573112f3463877005221c1dc995d9c151b7": "730f96e4f8a14c249b34daedee6e07d6",
".git/objects/19/0114649c8f37268fba67ee614a5004802ae0aa": "695a990d6adea39bab89fdd34268ba61",
".git/objects/1d/0021e8f4582822df4cda73dc91cdef60013dec": "7f4811609dca0aa9a40dda38aae31f53",
".git/objects/1f/1dfe5715cb490d549aad9a525160be5e61bc99": "05360a22c644a819db62a05cb2e228c7",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/23/aa6ccbe21f70d6e1be242735ceff0222d2382c": "7e4cd924b87d6e969836db99af652367",
".git/objects/27/0d374a3e48399e4db4cd7798cdbecfee6a467a": "ee060ca2dff25b1b267b874a0319ec41",
".git/objects/28/4d7e2c1cf6d92de952fbf8ef17848b7769f54a": "1eb34adad6de2f7351322d671b713e14",
".git/objects/29/0812e9a97e7335e283b081ae9043a0664ace57": "efc79aeb56311f18216fc7190922999f",
".git/objects/29/9dea3ac8d47baca1aea9f6d5f0e58f712bb84d": "c3514e76345c1a98c571d42814a75262",
".git/objects/2c/5b7c540d0b884b0e0f83b04e08966a79a8967d": "65b732b0ac9e4de3b78abb9f98d52681",
".git/objects/2d/af2be6899f3e7c7e7295992c91f678b14ad81e": "19956f2bc650bdbcdbe8e84683ac2ef4",
".git/objects/33/42dc80277f5a7ae2ae3e5aca865b87bf2bd83b": "a22bb7a6cc02e6f6e99d3f03608ec6df",
".git/objects/36/e97f5c8de6687be2830e5e9092160b89083f4d": "a0eb3ccf3bc150d6540a37b16ef90c75",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/98827b7724d60690e7e616055526c4d7072607": "589c015a5e1c913b3978a7e0871cea31",
".git/objects/3f/b5f704f87927ce5f4862a44cd56b9a5ac9395a": "85671bda42395350f2345141a83f0f91",
".git/objects/3f/dd03659f4e920a484c6f418e4db1e4f8619f36": "a63765471b24c510f129ce2e7916a052",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/f2edc68daa94e5445e7c0c0bef020b754484be": "ae097e5320109f3fd3551a1302fe7d05",
".git/objects/45/6cb4e2e8e2ffe53220e427150b4ee3327a5712": "2ae07ce6cac45b107bbdeefbd0c5fc92",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5a1170e736114cf42b5e206c7dacc8e8efab3b": "6b29a11e7bb7120db2cc2c25c2c69eeb",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/52/5f67afea6c73a07be2c38a45cb3ce07387482c": "cb15bd507ecb055b94f3369c220709be",
".git/objects/52/88a3fcf819af44f45f8c35b1de2d270d9b15ab": "0874464a8a349464205b38af8fea36e6",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/f78441ed497367e7afa4cd53138fcad8268804": "907e30fbf1a98894b4eb1d58cfbb8c00",
".git/objects/59/0af5712d81619f8771b7b44d6b66fd6ca5875e": "9a15c3d6da8542279adacfa119b9ff12",
".git/objects/5a/44520993d819cb23206a10833218c1f22db3bd": "7afe6d1865069f536d9d3a9d349f150c",
".git/objects/5b/21f96ff4ca42ff68998945f2ff881f951e510e": "27043768bf0afb87f2efe234baff85b0",
".git/objects/5d/7710ace11c748917812a49c2e21ce91353197b": "2ebf05a74725c45aca4ba623962c2902",
".git/objects/5e/d99f77ce1daa20ba7fcc452e07ce2587e1a2fd": "ab6181503d2041768719a3e708648e73",
".git/objects/64/080d4c6075a55e9b32835aa6ae21751729e36e": "6a079112a545af78eae97c1d2a706d7b",
".git/objects/66/1ca236162e463779df9ac98412979b192ec8e4": "aba7c3a1d1503a8c153fdc9b84154699",
".git/objects/66/f800ee7a864bfdc354645eb6064fa8fea5c4e6": "4a75439b43da1d12aba7e7b12ff6351e",
".git/objects/68/82328bbacfc949b805de8c9c5add83d3372242": "915dbc35c608857f79c8852ee579003f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/6e40a24015f2f65c1ac1c676cafb5c7decb206": "9d6042d9700f7809edd8612615628af9",
".git/objects/6b/9ec3117ed586d76dc98013fb89db005c6e7893": "0b091ba29dd2a67298a72d1a8e012682",
".git/objects/6c/0def8873a645f5c96d8c14d5a4058bc05d7427": "e3b0f19b459343af03aec9b9d73ab22b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/1f0e68043432ec338d8c7631b47fccc91e1826": "a7fb97abffb20f4b3ecdec618167d541",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/4e67a0d5f170d012f284fbfb47c7f107f54f99": "4a9084dd011dd6c20082f406e88f19ac",
".git/objects/7c/aac7da393244ea7494ab255c278656bd759df5": "d76f272c03f3a97e2aa52d43473dbd53",
".git/objects/83/ca03677829a990f10e8731f1acbfdc543b25b4": "4dc44557a45a14bb506105817f56bf7e",
".git/objects/87/c0ce70dcf021eae199abe1edf830d5571b6490": "01f3bf4d33d97d1c3aa45023078df51c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8ae1d827f6363bb6f32aed372eee73ad975392": "f06deca792039750ab78cdb282c33e3f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1f1b961c09438e684872db561f2c96c81bc2a8": "dd82fe561886583b1f69bf129814506c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/d46065c707a9bf0aba041fd8c0e06f928339b6": "45d44c36d5b8a013e944aaa9fafda7e4",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/a1/f6998783cd2acc3b321b5c7bb43dbf9fe64067": "95645dc02ca2a115bd8a5f61fc1161a4",
".git/objects/a3/45489afad8c75e9e163f07994b32d07a355d05": "bf8f0a3282ef41eb23da8c2a34603077",
".git/objects/aa/b3661ec60c6ce6ff8e65f4d547418e055c608a": "7c4f1e3b16d2e0f690cc736a437ccd6b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/854c101dfac33b29de8fd222689d388bd28a41": "4b3cf427d15ebb1552adf3c795285819",
".git/objects/af/c57d729061ab55650f26aed820a0fc256e7013": "2c466cd9cfcc1d73d70ec7191fd3dd2b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5682e19ee79f4f72c72a708b072ec11e802f8e": "9673f8bc58a84f52b06036a6110f5ce3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/fe2d1dab4f0cf817356a364f20c4f37690fc90": "f53fe7e2c3c548a6ba1d500950b544b8",
".git/objects/c3/ca8015921de42e4f3ec9c6135aa1e81db439f2": "ce98c93b820a8fad8bfa946922011409",
".git/objects/c6/f863f93e539cec58015fe44d56057bae7e8bf9": "d2c54d88144eb7c4fce500632b73a6bb",
".git/objects/c7/30d0b5ac9c33773d5676340b072cc418c9ce1c": "bee55442b864c89952ac09b20213a3f8",
".git/objects/cb/56c07155759f9cd2629e3d006482aaa690c4c4": "4a56b92b18b030a1747cc16c7ad6105f",
".git/objects/cc/f5b27033c0a008467eeb61db81f811b81dbe52": "4c6e542eaa39bc245239b6f70fcdce6a",
".git/objects/cf/a14fae17b09520a9f9fa9ca5b7924c7cea4f2d": "3530d7dd2668af7e66a1b0080f982016",
".git/objects/d0/2e870e24d92c4085523426901740476e26f96e": "3ab0ca31e134e1394b1f2a02a0cf90cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9368019fd615bc14a5282eb5f1604b6ee7842d": "94ab8462ffe3d752084d18d98fa2d0af",
".git/objects/db/266436af0a2b574782d5e1ec6d48eb07945e64": "b7aa9c1848afc1d197992ec672f2b433",
".git/objects/de/04d3f2fbfd65d4d564e36425148e257b7e4626": "a60fdb9abfcc83502262218b4f98b195",
".git/objects/e1/5303a259f0b705ad0ae4e8af512db44a7d3bb3": "c3e0e20361ebbe5dc5f8007227f31208",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/6e5157a68f3ad599ef5c901dd6d1f142a869cb": "977f7180b917b8448ac431b365fd632a",
".git/refs/heads/dev": "a84757777a9607fd3da973e95be401b8",
".git/refs/remotes/origin/dev": "a84757777a9607fd3da973e95be401b8",
"assets/AssetManifest.json": "23224de9fa30d7956416e738d5812e6a",
"assets/assets/appstore.png": "0d830f202ae8fdc9b1e1a39b195cbe53",
"assets/assets/aurizon.png": "1a5083e9c1c7a2c86dd92a480f6d1df7",
"assets/assets/australiangov.png": "f9cdb1ea99038e18fb245f63d96b0b6f",
"assets/assets/bobpete.png": "742e4c38afd38b93ea0cf4aacacb59f3",
"assets/assets/burniebrae.png": "56d90ac10ff70f0b490ec84d020cd078",
"assets/assets/ergon.png": "a190468e515ae750f6088acbed3eb181",
"assets/assets/footerLogo.png": "6bdc25e7e491ccb25d6e8e0248dd3666",
"assets/assets/googleplaystore.png": "efe3b4ed6d3c1de1e7e8f0c820e1f0d1",
"assets/assets/iso_standard.png": "e40b7aff2d7b9aa888b45142a19ca209",
"assets/assets/mtbuller.png": "25b7315a481d77f6bdd469807eef6f04",
"assets/assets/office.jpg": "c4d4d14a67ce7232af4949c2d6f57ae2",
"assets/assets/orcfavicon.png": "8a725a2a530c04b717d5157a33dd7ca9",
"assets/assets/ORCODA%2520LOGO%2520BLACK.png": "9df9173cb175a5af966f694fdc513f40",
"assets/assets/ORCODA%2520LOGO%2520WHITE.png": "49ec9a0624c8dc38e15b8f1880ea6c93",
"assets/assets/orcodaBlack.png": "9df9173cb175a5af966f694fdc513f40",
"assets/assets/orcodaWhite.png": "49ec9a0624c8dc38e15b8f1880ea6c93",
"assets/assets/savills.png": "c95080f17517cb1cde88e0692c68bbe7",
"assets/assets/SGS.png": "00b0785c15e64c1a96b95aab5f1245ad",
"assets/assets/sigmahealthcare.png": "ee8d91ee8614b76bdb3944ba02bddbd0",
"assets/assets/sullivan.png": "1c2807024d6b675899b56ac228fd03f1",
"assets/assets/T2.png": "ad0c856b527e9cffad5817de30943048",
"assets/assets/T4.png": "a87ff4f5b4d5e1e27da4f2327c2ae109",
"assets/assets/Thiess_logo.png": "d0f92d017a5db967eab5c8be56dbfdd3",
"assets/assets/transitcare.png": "e437be741d1304f72073cc1b9f67d111",
"assets/assets/VISION.png": "576461e51e92933685cf5e4a2869bea3",
"assets/FontManifest.json": "792f6999c1911845392ff13251c0e5ba",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "31e580d231e22ea05db2b316b8711b2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "5d8db2cbe2ba8d73a248648507a0ff3d",
"icons/android-chrome-512x512.png": "19669259cf68e86786c9f881675ab773",
"icons/apple-touch-icon.png": "0c7ff8f5226b8a1773bb40acb1c9411b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ebf6be332872a94f0177c93991d93c58",
"/": "ebf6be332872a94f0177c93991d93c58",
"logos.png": "5d8db2cbe2ba8d73a248648507a0ff3d",
"main.dart.js": "460f354e8bbec4475728098d4c331e8f",
"manifest.json": "223e8544e2270d2b8f1119af77fb1a75",
"version.json": "c46d175987018dcda4b071c332d2712f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
