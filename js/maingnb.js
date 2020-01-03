// gnb
$(function(){
  // 마우스 오버시 메뉴 열림
  $('#main_gnb').mouseover(function(){
    // class추가되면 보임
    $('.depth2').addClass('show');
    $('#ex').addClass('show');
  });

  // 마우스가 나가면 메뉴 닫힘
  $('#main_gnb').mouseout(function(){
    $('.depth2').removeClass('show');
    $('#ex').removeClass('show');
  });

  $('.bxslider').bxSlider({

  });
});

// bxslider
$(function(){
  $('.bxslider').bxSlider({
    auto: true
  });
});