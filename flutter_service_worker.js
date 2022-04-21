'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "13b1e45f371083470b326f22d76853a5",
"assets/assets/animatedImages/arrow_right.json": "327edae8ac56a75df8e259cecc7aca4a",
"assets/assets/animatedImages/bonus_refferal_animation.json": "afd9e8e8dff7dbfe4bb62ea63bb3b603",
"assets/assets/animatedImages/boy__mobile_animation.json": "d6c10b22af97f42d61b783c2f78d2410",
"assets/assets/animatedImages/bulb.json": "233317298ba0d024ce8b5d681ae56063",
"assets/assets/animatedImages/crown_logo.json": "cd121f086d0875651a4824e979aa0ad5",
"assets/assets/animatedImages/feedback.json": "2252ef2bc778ce2c57772c9d13d2b067",
"assets/assets/animatedImages/fire_icon_for_streak.json": "a5516327f20d844f6ef7ebe7732ac253",
"assets/assets/animatedImages/generalMotivation.json": "e967d44fe5ee6e70c744108c985e9e59",
"assets/assets/animatedImages/generalMotivation2.json": "67600264c0361138b90667b53fd0a870",
"assets/assets/animatedImages/gold_coins.json": "eb5b178ae045cf134eb008e24e4a11e1",
"assets/assets/animatedImages/maintenance.json": "2abd39760e0d5a47df024b4f07f4a70d",
"assets/assets/animatedImages/module_completed_img.json": "864da95950aaf08ff134eece83769f5b",
"assets/assets/animatedImages/rightAndMotivation.json": "21d079422a125c5e72637e8d66599ef3",
"assets/assets/animatedImages/wrongAnsAnimation.json": "e681b8f0a4afe3c2aed15001ff1ada56",
"assets/assets/images/achievement.png": "78f5017175aace07a4931032f6f269b7",
"assets/assets/images/achivement.webp": "cc6b8c4bddc3d2987851c9c8655f3c17",
"assets/assets/images/avatar1.webp": "a7125988245b1a23aaa105f6eb7b121e",
"assets/assets/images/avatar2.webp": "ae9014695c83ae9f1a6d732f1e157fee",
"assets/assets/images/benchmark_icon.webp": "bfa7325e720b86080f8c063741560ad7",
"assets/assets/images/certificate.webp": "5099b1ab73011aac94ea9c42665f2201",
"assets/assets/images/coins.png": "c7555da72c5d21f5bce0cb737ae80a24",
"assets/assets/images/coins.webp": "086fbc246f5b51f5d189e512ed2c6b43",
"assets/assets/images/coming_soon.webp": "05eba3015badb260ead964ca5a523e4b",
"assets/assets/images/correct_ans.webp": "5c3458d1aa5a4a28863737db6e201263",
"assets/assets/images/crown-primary.png": "38976c7408cf3e55c6f2d19bae8e8aac",
"assets/assets/images/crown_coin.png": "674a3a15ac8bb0d4e2ecae2cc74d7244",
"assets/assets/images/crown_icon_s.png": "694f2cd250fdbff8963e3ee56cf1c395",
"assets/assets/images/designedBy_logos.webp": "3cc8e7acb15412bff1c14f26547232de",
"assets/assets/images/edit.webp": "eb1b77a916efd44f94d0d77e42c228d5",
"assets/assets/images/flame.png": "7e60b77e909005cdb95a8347710d0d80",
"assets/assets/images/gift_voucher.webp": "acd95b659bd45b710065d761e7654cf4",
"assets/assets/images/info.png": "7777fe41f19f1f4ddd225592025bf91b",
"assets/assets/images/info_old.webp": "33ea1e27da7343e8e9359dc9200b2cda",
"assets/assets/images/lastWeekWinner.webp": "f48cffae8af61b70337bed91b7a86858",
"assets/assets/images/leaderboard.webp": "69bb39003059d2ce72e6d12e735a8834",
"assets/assets/images/leader_board_FTU.webp": "6e1e955f35bfd18694c383d86fe153fe",
"assets/assets/images/level_icon.webp": "bdb49b27b26d1159bce901b6213292a0",
"assets/assets/images/level_icons.webp": "8f4f26a8d0171ddd37cf508c5de08474",
"assets/assets/images/loading.gif": "528208a47bdc0f288d9e0387fed97bc4",
"assets/assets/images/login_page_img.webp": "51e93ae4b12ed24a3e9efa1e28a3f380",
"assets/assets/images/moduleCompleteImage.webp": "7801b5c81580d26580e88d00b847463f",
"assets/assets/images/module_complete_img.webp": "222cb2fcdb18e4638d20a6386f304d68",
"assets/assets/images/module_complete_indicator.webp": "3235ff144fc1a0a65c3f5d0741f2b980",
"assets/assets/images/module_icon.png": "f36a556f453f7bc71e82f6d0fa69e96d",
"assets/assets/images/offline_cloud.png": "a6bcc6ef510bc0a62e9c03f1a5895fb6",
"assets/assets/images/operations_supply_chain.png": "ce300e6cd68745aaeee3796bddda0ae7",
"assets/assets/images/people.png": "7e61031c2fe3a2b5795147209778b330",
"assets/assets/images/phone_design.png": "d36c28bee645e5550f07ce2d8967c188",
"assets/assets/images/play_store.png": "ee22de40e0d4c4a8e9ce9b7efcb9c725",
"assets/assets/images/profile_crown.png": "a3fcc18124eb2f9431cdd36c53a3b364",
"assets/assets/images/quiz_app_icon.webp": "ed5d606fd1607c196a644084cb85c723",
"assets/assets/images/quiz_app_logo.webp": "f6236efba393c515eb290c1ebb028d97",
"assets/assets/images/referal_coin.webp": "1ed4d18fe84ffcc648fd07d8a933d0bb",
"assets/assets/images/refere_friend.webp": "e067252b0faf1e0698d92492272c20bf",
"assets/assets/images/refer_card_background.webp": "a87454e04ed86a95fe4c16f350efaad7",
"assets/assets/images/reward_success.webp": "97ddc06e7b94c7879f6cee2be02abeda",
"assets/assets/images/reward_top_left_coin_design.png": "c4a1f428862b166b3a0f9a8a39e32b1f",
"assets/assets/images/sad_face_emoji.webp": "fbfb3e00010f0b39a650d3383dba9323",
"assets/assets/images/speaker.webp": "522daecdede7358ed5ba6dfee83b1bc6",
"assets/assets/images/splash-bg.webp": "4fcae60c771af0bcfdf79b838a28032e",
"assets/assets/images/splash_screen_image.webp": "0e001c9ebe6fdbbdb06c4a71a7f6685e",
"assets/assets/images/star.webp": "983e76f541d4b1c0821caf1ecdf37570",
"assets/assets/images/start_quiz_popup_icon.webp": "14f27787db8fb09c494166e7e1422b03",
"assets/assets/images/topic_complete_tick.png": "ee7dda669974664a58e2d4f78570c971",
"assets/assets/images/topic_template.png": "c6c3c0111a0c06f309feeeacda50624b",
"assets/assets/images/trans_grey_img.webp": "5c3f0962b1afc1c4afc0691b4075dcd0",
"assets/assets/images/trophy-reward.webp": "54a2227d3270e34d6cae30319df38a86",
"assets/assets/images/update_app.webp": "8a03f5e254165b71bc215e3e296050d8",
"assets/assets/images/users.webp": "4fbe2d35332c33f6bfaf64d5287b5ccd",
"assets/assets/images/user_registered.png": "cff873b2c1bbfff2ce031cb1f844d336",
"assets/assets/images/wrong_ans.webp": "bc6ab38e3b3c5982b8d3716c4098aa82",
"assets/assets/rive/girl-sitting-reading.riv": "37ab165d2a28c39b4e2e5e6abb31ea05",
"assets/assets/rive/girl_boy_say_hi.riv": "71a9c561d514bcd8f798383ef1a0ef5c",
"assets/assets/rive/meditation.riv": "ccc82f683304f299641997db2784981d",
"assets/FontManifest.json": "d4320d2790397f23d4404adbbe7f0344",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/MyriadPro-Regular.otf": "4dc5956a31b5832b356867433bb4e516",
"assets/NOTICES": "c81249ae0732de4e2fd694db2bf2103e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/pod_player/assets/forward_left.json": "f198394de9533a75cbd3bbfb223756ff",
"assets/packages/pod_player/assets/forward_right.json": "421233151632a84b7b935b4cdc9a967a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "044253ce51a6c6771ce459a6e5b50f77",
"icons/android-icon-144x144.png": "14730de7876042758c280d188da5b047",
"icons/android-icon-192x192.png": "497cb08ef6a4f1fb499f11c92963751a",
"icons/android-icon-36x36.png": "9d826b75a9ec937713dd144acd4c4eaa",
"icons/android-icon-48x48.png": "2c8cb9327af35641c5c7b00e00fcdf2f",
"icons/android-icon-72x72.png": "09428d03a6dd66bab02a748959a96a3e",
"icons/android-icon-96x96.png": "eb47747c6fc1ee888f86e8eee76e1fcf",
"icons/apple-icon-114x114.png": "c82fd7325217b9e6e93e41fe5c2fc403",
"icons/apple-icon-120x120.png": "898d85d085d4173f76f28676b9c594b7",
"icons/apple-icon-144x144.png": "14730de7876042758c280d188da5b047",
"icons/apple-icon-152x152.png": "ac553b13e2214e743c36f6637620943e",
"icons/apple-icon-180x180.png": "85e36cd7154e5e5c07808250358b4fa6",
"icons/apple-icon-57x57.png": "6ba3f6af17d6052c1aa7c2d7bb21eb3f",
"icons/apple-icon-60x60.png": "a318c02a65718cd66e4ed3ab5320ba5f",
"icons/apple-icon-72x72.png": "09428d03a6dd66bab02a748959a96a3e",
"icons/apple-icon-76x76.png": "d3f1c0a7c9d6583ceb1fbb9b25afae69",
"icons/apple-icon-precomposed.png": "da13d86bc7c185e8ae4f5c290992db75",
"icons/apple-icon.png": "da13d86bc7c185e8ae4f5c290992db75",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "aade0d0afa7964f0c88c58767025362c",
"icons/favicon-32x32.png": "03cc7fb0ec4ad0c31bbbc7490e03d2cd",
"icons/favicon-96x96.png": "eb47747c6fc1ee888f86e8eee76e1fcf",
"icons/favicon.ico": "044253ce51a6c6771ce459a6e5b50f77",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "14730de7876042758c280d188da5b047",
"icons/ms-icon-150x150.png": "6e1dd98b34f2411b41538256a2f0fad7",
"icons/ms-icon-310x310.png": "51d286f3fc6d50aa1d26bc7e4c8c267e",
"icons/ms-icon-70x70.png": "9027a25476842a5e5530032ab9a9c052",
"index.html": "3d8700a3814bb6572ac2c94208d31a6d",
"/": "3d8700a3814bb6572ac2c94208d31a6d",
"main.dart.js": "1e94718aab8bef2bb2d1027ecbc6bdcf",
"manifest.json": "4b72886c58388a266f5683cfd0ef303e",
"version.json": "1578265322ad376249476234d29c9e7c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
