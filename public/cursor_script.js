$(function () {
  $("#image").mousemove(function (e) {
    $("#cursor").show().css({
      "left": e.clientX - 60,
      "top": e.clientY - 60 - $('body').scrollTop()
    });
  });
});