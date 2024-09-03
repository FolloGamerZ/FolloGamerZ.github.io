const CACHE_NAME = `follogamerz-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/browse.html',
      '/details.html',
      '/profile.html',
      '/streams.html',
      '/assets/css/styles.css',
      'assets/images/avatar-01.jpg',
      'assets/images/avatar-02.jpg',
      'assets/images/avatar-03.jpg',
      'assets/images/avatar-04.jpg',
      'assets/images/popular-01.jpg',
      'assets/images/popular-02.jpg',
      'assets/images/popular-03.jpg',
      'assets/images/popular-04.jpg',
      'assets/images/popular-05.jpg',
      'assets/images/popular-06.jpg',
      'assets/images/popular-07.jpg',
      'assets/images/popular-08.jpg',
      'assets/images/clip-01.jpg',
      'assets/images/clip-02.jpg',
      'assets/images/clip-03.jpg',
      'assets/images/clip-04.jpg',
      'assets/images/banner-bg.jpg',
      'assets/images/details-01.jpg',
      'assets/images/details-02.jpg',
      'assets/images/details-03.jpg',
      'assets/images/feature-left.jpg',
      'assets/images/feature-right.jpg',
      'assets/images/featured-01.jpg',
      'assets/images/featured-02.jpg',
      'assets/images/featured-03.jpg',
      'assets/images/game-01.jpg',
      'assets/images/game-02.jpg',
      'assets/images/game-03.jpg',
      'assets/images/logo.png',
      'assets/images/profile-header.jpg',
      'assets/images/profile.jpg',
      'assets/images/service-01.jpg',
      'assets/images/service-02.jpg',
      'assets/images/service-03.jpg',
      'assets/images/stream-01.jpg',
      'assets/images/stream-02.jpg',
      'assets/images/stream-03.jpg',
      'assets/images/stream-04.jpg',
      'assets/images/stream-05.jpg',
      'assets/images/stream-06.jpg',
      'assets/images/stream-07.jpg',
      'assets/images/stream-08.jpg',
      'assets/js/custom.js',
      'assets/js/isotope.js',
      'assets/js/isotope.min.js',
      'assets/js/owl-carousel.js',
      'assets/js/popup.js',
      'assets/js/tabs.js',
      'assets/webfonts/fa-brands-400.ttf',
      'assets/webfonts/fa-brands-400.woff2',
      'assets/webfonts/fa-regular-400.woff2',
      'assets/webfonts/fa-solid-900.ttf',
      'assets/webfonts/fa-solid-900.woff2',
      'assets/webfonts/fa-v4compatibility.ttf',
      'assets/webfonts/fa-v4compatibility.woff2',
      'files/balloon/index.html'
      'files/color/index.html'
      'files/gorillas/index.html'
      'files/gorillas/dark-mode/index.html'
      'files/gorillas/fullscreen/index.html'
      'files/grotto/index.html'
      'files/matrix/index.html'
      'files/parallax/index.html'
      'files/platform/index.html'
      'files/platform/index2.html'
      'files/runner/index.html'
      'files/shooter/index.html'
      'files/snake/index.html'
      'files/stick/index.html'
      'files/todolist/index.html'
      'files/typing/index.html'
      'files/balloon/style.css'
      'files/color/css/main.css'
      'files/gorillas/index.css'
      'files/gorillas/dark-mode/index.css'
      'files/gorillas/fullscreen/index.css'
      'files/grotto/main.css'
      'files/matrix/css/main.css'
      'files/parallax/css/main.css'
      'files/runner/css/style.css'
      'files/shooter/index.css'
      'files/snake/css/main.css'
      'files/todolist/style.css'
      'files/typing/css/style.css'
      'files/balloon/script.js'
      'files/color/js/color-picker.js'
      'files/color/js/gradient-color.js'
      'files/color/js/main.js'
      'files/color/js/material-color.js'
      'files/color/js/social-color.js'
      'files/gorillas/index.js'
      'files/gorillas/dark-mode/index.js'
      'files/gorillas/fullscreen/index.js'
      'files/grotto/main.js'
      'files/grotto/main.min.js'
      'files/grotto/main2.min.js'
      'files/grotto/tiles_property.js'
      'files/matrix/js/script.js'
      'files/parallax/js/main.js'
      'files/platform/map.json'
      'files/runner/js/main.js'
      'files/shooter/index.js'
      'files/snake/js/main.js'
      'files/stick/script.js'
      'files/todolist/main.js'
      'files/typing/js/app.js'
      'files/typing/js/game.js'
      'files/color/json/color-panel.json'
      'files/color/json/gradient-color.json'
      'files/color/json/material-color.json'
      'files/color/json/social-color.json'
      'files/grotto/assets/json/tilemap.json'
      'files/grotto/assets/json/tilemap1.json'
      'files/platform/map.json'
      'files/color/svg/svg1.svg'
      'files/color/svg/svg2.svg'
      'files/color/svg/svg3.svg'
      'files/color/svg/svg4.svg'
      'files/typing/img/game.svg'
      'files/typing/img/history.svg'
      'files/typing/img/logo.svg'
      'files/typing/img/test.svg'
      'files/typing/img/timer.svg'
      'files/grotto/assets/img/background.png'
      'files/grotto/assets/img/enemies.png'
      'files/grotto/assets/img/infinity.png'
      'files/grotto/assets/img/items.png'
      'files/grotto/assets/img/lives.png'
      'files/grotto/assets/img/player.png'
      'files/grotto/assets/img/winBg.jpg'
      'files/grotto/assets/img/homeBg/01.png'
      'files/grotto/assets/img/homeBg/02.png'
      'files/grotto/assets/img/homeBg/03.png'
      'files/parallax/img/clouds1.png'
      'files/parallax/img/clouds2.png'
      'files/parallax/img/clouds3.png'
      'files/parallax/img/clouds4.png'
      'files/parallax/img/rocks1.png'
      'files/parallax/img/rocks2.png'
      'files/parallax/img/sky.png'
      'files/platform/img/1630459028394.png'
      'files/platform/img/backgroundColorGrass.png'
      'files/platform/img/bg.jpg'
      'files/platform/img/collision.jpg'
      'files/platform/img/player.png'
      'files/platform/img/tile sheet.png'
      'files/platform/img/tileset.png'
      'files/platform/img/tileset2.png'
      'files/platform/img/tileset3.png'
      'files/runner/img/cloud.png'
      'files/runner/img/enemy.png'
      'files/runner/img/player.png'
      'files/runner/img/restart.png'
      'files/runner/img/sprite1.png'
      'files/runner/img/sun.png'
      'files/todolist/img/background.jpg'
      'files/typing/img/background.jpg'
      'files/typing/img/illustration.png'
      'files/typing/img/wave.png'
      'files/grotto/assets/fonts/PressStart2P-Regular.ttf'
      'files/grotto/assets/sound/backgroundMusic.mp3'
      'files/grotto/assets/sound/homeBgMusic.mp3'
      'files/grotto/assets/sound/jump.wav'
      'files/runner/audio/gameover.mp3'
      'files/runner/audio/jump.mp3'
      'files/runner/audio/score.mp3'
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});