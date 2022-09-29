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
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerView: 1,
});


    
new Swiper('.image-slider2',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    centeredSlides: true,
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    autoHeight: true,
    mousewheel: {
        sensitivity: 1,
    },
    breakpoints: {
        401: {
        slidesPerView: 1,
        initialSlide: 0,
        },
        1024:{
            slidesPerView: 3,
            initialSlide: 1,
        },
    },
});