// 메뉴슬라이드


let nav = $("#menu .nav li");
   let contents = $("#contents > div");

    nav.click(function () {
      let target = $(this);
      let index = target.index();
      let section = contents.eq(index);
      let offset = section.offset().top;

      $("html, body").animate({ scrollTop: offset }, 400);
    });

    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();

      for (i = 0; i < nav.length; i++) {
        if (wScroll >= contents.eq(i).offset().top-10) {
          nav.find('a').removeClass("active");
          nav.find('a').eq(i).addClass("active");
        }
      };

    });

// 스크롤

$(function(){
  $(window).scroll(function(){
    let ws = $(this).scrollTop();
    
    let news = $('.textBox').offset().top;
    if(0<ws<news-700){
      $('.textBox').css('transform','translateX(0px)').css('opacity','1');
      $('.aboutText p:first').css('transform','translateX(-500px)').css('opacity','0');
      $('.aboutText p:nth-child(2)').css('transform','translateX(500px)').css('opacity','0');
    }
    
    if(ws> news){
      if(window.matchMedia('(max-width:849px)').matches){
        $('.textBox').css('transform','translateX(0px)').css('opacity','1');
      }else{
        $('.textBox').css('transform','translateX(-500px)').css('opacity','0');
      }      
      $('.aboutText p:first').css('transform','translateX(0px)').css('opacity','1');
      $('.aboutText p:nth-child(2)').css('transform','translateX(0px)').css('opacity','1');
      $('.aboutText p:nth-child(4)').css('transform','translateY(-150px)').css('opacity','0');
      $('.aboutText p:nth-child(5)').css('transform','translateY(-150px)').css('opacity','0');
      $('.aboutText2 dt').css('transform','translateY(150px)').css('opacity','0');
      $('.aboutText2 dd').css('transform','translateY(150px)').css('opacity','0');
    }

    let aboutText = $('.aboutText p:nth-child(4)').offset().top;
   
    if(ws > aboutText-700){
      $('.aboutText p:first').css('transform','translateX(-500px)').css('opacity','0');
      $('.aboutText p:nth-child(2)').css('transform','translateX(500px)').css('opacity','0');
      $('.aboutText p:nth-child(4)').css('transform','translateY(0px)').css('opacity','1');
      $('.aboutText p:nth-child(5)').css('transform','translateY(0px)').css('opacity','1');
      $('.aboutText2 dt').css('transform','translateY(0px)').css('opacity','1');
      $('.aboutText2 dd').css('transform','translateY(0px)').css('opacity','1');
      $('.artistList1').css('transform','translate(500px, -100px)').css('opacity','0');
      $('.artistList3').css('transform','translate(-500px, -100px)').css('opacity','0');

    }
    let artist = $('.artistImg').offset().top;
    let content1 = $('.contentBox:eq(0), .contentBox:eq(1), .contentBox:eq(2)');
    let content2 = $('.contentBox:eq(3), .contentBox:eq(4), .contentBox:eq(5)');
    if( ws > artist-700 ){
      $('.aboutText p:nth-child(4)').css('transform','translateY(-150px)').css('opacity','0');
      $('.aboutText p:nth-child(5)').css('transform','translateY(-150px)').css('opacity','0');
      $('.aboutText2 dt').css('transform','translateY(150px)').css('opacity','0');
      $('.aboutText2 dd').css('transform','translateY(150px)').css('opacity','0');
      $('.artistList1').css('transform','translate(0px, 0px)').css('opacity','1');
      $('.artistList3').css('transform','translate(0px, 0px)').css('opacity','1');
      content1.css('transform','translateY(150px)').css('opacity','0');
      content2.css('transform','translateY(150px)').css('opacity','0');
    }

    let content = $('.contentBox').offset().top;
    if(ws > content-700){
      $('.artistList1').css('transform','translate(500px,-100px)').css('opacity','0');
      $('.artistList3').css('transform','translate(-500px,-100px)').css('opacity','0');
      content1.css('transform','translateY(0px)').css('opacity','1');
      content2.css('transform','translateY(0px)').css('opacity','1');

    }
  
  });
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

// 컨텐츠
$(function(){
  $('.contentBox:eq(2)').hover(function(){
    $(this).find('img').attr('src','img/content3-1.jpg');
  },
  function(){
    $(this).find('img').attr('src','img/content3.png');
  });
  $('.contentBox:eq(3)').hover(function(){
    $(this).find('img').attr('src','img/content4-1.jpg');
  },
  function(){
    $(this).find('img').attr('src','img/content4.png');
  });
  $('.contentBox:eq(4)').hover(function(){
    $(this).find('img').attr('src','img/content5-1.jpg');
  },
  function(){
    $(this).find('img').attr('src','img/content5.png');
  });
  $('.contentBox:eq(5)').hover(function(){
    $(this).find('img').attr('src','img/content6-1.jpg');
  },
  function(){
    $(this).find('img').attr('src','img/content6.jpg');
  });
});


// 미디어쿼리
function detectMediaSize(){
  if(window.matchMedia('(max-width:849px)').matches){
    $('.textBox').css('transform','translateX(0px)').css('opacity','1');
  }
}
window.addEventListener('resize', detectMediaSize, false);
detectMediaSize();