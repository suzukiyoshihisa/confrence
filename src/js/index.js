const $ = require('jquery');

// jQuery_check
$('#jquery').text('jquery_is_ready!');

// スムーススクロール
$(function () {
  $('a[href^="#"').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    if (href !== "#main_visual") { // カルーセルのidと競合するため
      const target = $((href === "#" || href === "") ? 'html' : href);
      const position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    }
  })
});
