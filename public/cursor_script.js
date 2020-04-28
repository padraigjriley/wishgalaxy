$(function () {
  $("body").mousemove(function (e) {
    $("#cursor").show().css({
      "left": e.clientX,
      "top": e.clientY - $('body').scrollTop()
    });
  });
});