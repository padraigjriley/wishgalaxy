$(function () {
  $("body").mousemove(function (e) {
    $("#cursor").show().css({
      "left": e.clientX,
      "top": e.clientY - $('body').scrollTop()
    });
    $(".cursor").show().css({
    	"background": "radial-gradient(circle at "+(e.clientX/$( document ).width()*100)+"% "+ ((e.clientY-$('body').scrollTop())/$(window).height()*100)+"%, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
    })
  });
});