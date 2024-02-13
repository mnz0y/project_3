// 메뉴

// 메뉴슬라이드

    let nav = $('#menu .nav li');
    let contents = $('#contents > div');
    nav.click(function(){
        let offset = $('#contents > div').eq($(this).index()).offset().top;
        console.log(offset);
        $('html, body').animate({scrollTop:offset},400);
    });
    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        for(i=0; i<nav.length;i++){
            if(wScroll>=contents.eq(i).offset().top){
                nav.removeClass('active');
                nav.eq(i).addClass('active');
            }
        }
    });

// 어바웃
$(function(){
    let idx=0;
    function slide(){
        idx++;
    if(idx>$('.slide li').length-1){
        idx=0;
    }
    $('.slide li').eq(idx).fadeIn('slow');
    $('.slide li').eq(idx-1).fadeOut();
};
setInterval(slide,4000);
});

// 아티스트
$(function(){
    $('.artistImg').children().hover(function(){
        $(this).css('animation-play-state','paused');
    }, function(){
        $(this).css('animation-play-state','running');
    });
});