$(window).scroll(function(){
    var headblock = $('.head-block'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) headblock.addClass('fixed');
    else headblock.removeClass('fixed');
  });