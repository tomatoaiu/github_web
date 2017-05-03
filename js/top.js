$(window).on('load resize', function(){
  var h = $(window).height();
  var w = $(window).width();
  var w1 = (w / 4) - 90;
  var distance = 1.85;
  $("#links #circle1").css("left", w1 + "px");
  $("#links #circle4").css("right", w1 + "px");

  var cir_left = $("#links #circle1").position();
  var cir_right = $("#links #circle4").position();
  var cir2 = (cir_right.left + cir_left.left + 180) / 3;

  $("#links #circle2").css("right", w1 + cir2 + "px");
  $("#links #circle3").css("left", w1 + cir2 + "px");

  $("#links .circle_tops").css("top", (h / 4) - 100 +"px");

  $("#links #circle5").css("left", w1 +"px");
  $("#links #circle6").css("right", w1 + cir2 + "px");
  $("#links #circle7").css("left", w1 + cir2 + "px");
  $("#links #circle8").css("right", w1 + "px");

  $("#links .circle_bottoms").css("bottom", (h / 4) - 100 +"px");
});
