$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header_menu_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});