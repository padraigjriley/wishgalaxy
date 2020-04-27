window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var progress = 0;
window.addEventListener("scroll", handleWheel);
function handleWheel(e) {
  progress = window.pageYOffset || document.documentElement.scrollTop;

  op_index = Math.round((progress/1000)*100);
  console.log(op_index);

  document.getElementById("zero").style.opacity = (1 - (op_index)/20);
  
  document.getElementById("vl").style.opacity = (1 - (op_index)/20);
      
  document.getElementById("seventh").style.opacity = ((op_index-1130)/100);
  document.getElementById("form").style.opacity = ((op_index-1130)/100);     
      
  document.getElementById("video_stars").style.opacity = Math.min(((op_index-1130)/800), 0.1);  
}

var cursorFocus = function(elm) {
  var x = window.scrollX, y = window.scrollY;
  elm.focus();
  window.scrollTo(x, y);
}

cursorFocus(wish);

var textarea = document.getElementById("wish");
var limit = 400; //height limit

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
};

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
  mirror: true
});