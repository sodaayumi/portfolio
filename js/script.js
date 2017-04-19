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

//メインビジュアルのスライドする動き
var count = $("#slide li").length;
var current = 1;
var next = 2;

timer = setInterval(slideTimer, 3000);

//function slideTimer(){
//    $("#slide li:nth-child(+" + current + ")").fadeOut(800);
//    $("#slide li:nth-child(+" + next + ")").fadeIn(800);
//
//    current = next;
//    next = ++next;
//
//    if(next > count){
//        next = 1;
//    }
//} 