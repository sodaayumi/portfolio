//トグルメニューの動き
$(function(){
    $("#gnav-btn").click(function(){
        $(".gnav-ul").stop().slideToggle(600) ;
        return false;
    });
});

//TOPへ戻るの動き
$("#top-modoru").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

//ナビゲーションをクリックしたときに対応した場所へスクロール
$("#gnav a").click(function () {
    $(this).attr("href");
    var target = $($(this).attr("href")).offset().top;
    target = target - 10;
    $("html,body").animate({
        scrollTop: target
    }, 1000);
    return false;
});

//ナビゲーションを上に固定
//var $gnav = $("#gnav").offset().top;
//    alert($gnav;)
//$(window).scroll(function () {
//    var $scroll = $(window).scrollTop();
//    if ($scroll > $gnav) {
//        $("#gnav").css({
//            "position": "fixed",
//            "top": "0"
//        });
//    } else {
//        $("#gnav").css({
//            "position": "absolute",
//            "bottom": "0",
//            "top": "auto"
//        });
//        $("#gnav").css("position", "absolute");
//    }
//});