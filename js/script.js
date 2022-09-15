$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header_menu_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true, 
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerView: 1,
/*
    effect: 'fade' ,
    fadeEffect: {
        crossFade: true
    },

dreakpoints:{
    1500:{
        slidesPerView: 1}
    },
*/

});      