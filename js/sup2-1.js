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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $('.hamburger').on('click', function () {
    $('.topnav').addClass('open');
  });
  
  $( '.menu a' ).on("click", function(){
    $('.topnav').removeClass('open');
  });