if (window.matchMedia('(max-width: 375px)').matches) {
    //スマホ処理
    $(".openbtn").click(function () {
      $(this).toggleClass('active');
  });

    // ハンバーガーメニュー
} else {
    //PC処理

    // Serviceの文章のところ
    // スクロールした時にふわっと表示する
    $(window).scroll(function () {
        const scrollAnimationElm = document.querySelectorAll('.scroll_up');
        let scrollAnimationFunc = function () {
          for (let i = 0; i < scrollAnimationElm.length; i++) {
            let triggerMargin = 100;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
              scrollAnimationElm[i].classList.add('on');
            }
          }
        }
        window.addEventListener('load', scrollAnimationFunc);
        window.addEventListener('scroll', scrollAnimationFunc);
      });
    // スクロールトップ
    const scrollTop = document.getElementById("scroll-top");
    scrollTop.addEventListener("click", () => {
      window.scrollTo ({
        top: 0,
        behavior: "smooth"
      });
    });
}