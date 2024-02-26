$(document).ready(function() {
    
    $('.gnb').mouseenter(function() {

        $('.depth2').stop().slideDown();

    });

    $('.gnb').mouseleave(function() {

        $('.depth2').stop().slideUp();

    });

});