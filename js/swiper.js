const swiper = new Swiper(".swiper", {
    autoplay: { // スライド自動再生
      delay: 3000,
    },
    speed: 1000,
    pagination: true,
    loop: true,
    waitForTransition: true,
    disableOnInteraction: false,
    crossFade : true,
    effect:'fade',
    navigation: {
      nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
      prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
    },
    pagination: {
      el: '.swiper-pagination', // ページネーション要素のクラス
      clickable: true, // クリックによるスライド切り替えを有効にする
      type: 'bullets' // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
    },
});