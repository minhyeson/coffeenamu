// main.js

// 2단계 메뉴
$(function(){
    $('.depth1 > li').hover(
        function(){
            $('.depth2').stop().fadeIn(200);
        },
        function(){
            $('.depth2').stop().fadeOut(200);
        }
    );
})