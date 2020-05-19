var tossed = false;
var op_index = 0;
var bool = true;
var sub = false;

var first = false;
var second = false;
var third = false;
var forth = false;
var fifth = false;
var sixth = false;

var galaxy = false;
var about = false;
var coin = false;

var opac = false;

var wisher = false;

document.getElementById("email").classList.add("hideme");
document.getElementById("second_section").classList.add("hideme");
document.getElementById("about_page").classList.add("hideme");

document.getElementById("about_text").classList.add("hideme");
document.getElementById("coin_text").classList.add("hideme");
document.getElementById("vl2").classList.add("hideme");

document.getElementById("middle").classList.add("hideme");
document.getElementById("another").classList.add("hideme");

window.scrollTo(0, 0);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

textwrap('.first');
textwrap('.second');
textwrap('.third');
textwrap('.forth');
textwrap('.fifth');
textwrap('.sixth');

document.addEventListener('aos:in:aos_first', ({ detail }) => {
  first = !first;
  if (first){
    anim_in('.first');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.remove('hideme');
  }
  if (!first){
    anim_out('.first');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.remove('hideme');
  }
});

document.addEventListener('aos:in:aos_second', ({ detail }) => {
  second = !second;
  if (second){
    anim_in('.second');
    document.getElementById('second').classList.remove('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
  if (!second){
    anim_out('.second');
    document.getElementById('second').classList.remove('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
});

document.addEventListener('aos:in:aos_third', ({ detail }) => {
  third = !third;
  if (third){
    anim_in('.third');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('third').classList.remove('hideme');
  }
  if (!third){
    anim_out('.third');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.remove('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
});

document.addEventListener('aos:in:aos_forth', ({ detail }) => {
  forth = !forth;
  if (forth){
    anim_in('.forth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.remove('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
  if (!forth){
    anim_out('.forth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.remove('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
});

document.addEventListener('aos:in:aos_fifth', ({ detail }) => {
  fifth = !fifth;
  if (fifth){
    anim_in('.fifth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.remove('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
  if (!fifth){
    anim_out('.fifth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.remove('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }
});

document.addEventListener('aos:in:aos_sixth', ({ detail }) => {
  sixth = !sixth;
  if (sixth){
    anim_in('.sixth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.remove('hideme');
    document.getElementById('first').classList.add('hideme');
  }
  if (!sixth){
    anim_out('.sixth');
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.remove('hideme');
    document.getElementById('first').classList.add('hideme');
  }
});

var progress = 0;
window.addEventListener("scroll", handleWheel);
function handleWheel(e) {
  progress = window.pageYOffset || document.documentElement.scrollTop;

  op_index = Math.round((progress/1000)*100);

  document.getElementById("zero").style.opacity = (1 - (op_index)/20);
  
  document.getElementById("vl").style.opacity = (1 - (op_index)/20);

  if (progress < 300) {
      document.getElementById('second').classList.add('hideme');
      document.getElementById('third').classList.add('hideme');
      document.getElementById('forth').classList.add('hideme');
      document.getElementById('fifth').classList.add('hideme');
      document.getElementById('sixth').classList.add('hideme');
      document.getElementById('first').classList.add('hideme');
      document.getElementById("button").setAttribute("onclick", "button_clicked()");
    }

  if ((progress > 300) && (bool) && (!tossed)){
      document.getElementById("button").removeAttribute("onclick");
    }

  if ((bool) && (!tossed)) {
      document.getElementById("button").style.opacity = (1 - (op_index)/20);
    }
  
  if (!tossed) {    
    document.getElementById("seventh").style.opacity = ((op_index-1800)/100);
    document.getElementById("form").style.opacity = ((op_index-1800)/100);     
  }

  if (op_index > 1800){
    document.getElementById('second').classList.add('hideme');
    document.getElementById('third').classList.add('hideme');
    document.getElementById('forth').classList.add('hideme');
    document.getElementById('fifth').classList.add('hideme');
    document.getElementById('sixth').classList.add('hideme');
    document.getElementById('first').classList.add('hideme');
  }

  // if ((tossed) && (op_index<400) && !galaxy) {
  //   document.getElementById('nineth').style.opacity = ((op_index-300)/100);
  //   document.getElementById("video_space2").style.opacity = ((op_index-100)/1000);
  //   document.getElementById('eighth').style.opacity = (1-(op_index-100)/100);
  // }

  // if ((tossed) && !galaxy && opac){
  //   document.getElementById('wish_galaxy').style.opacity = ((op_index-100)/100);
  //   document.getElementById("video_space2").style.opacity = ((op_index)/1000);
  //   document.getElementById('eighth').style.opacity = (1-(op_index)/100);
  //   document.getElementById('nineth').style.opacity = (1-(op_index)/100);
  // }

  if (op_index > 1700){
    wisher = true;
  }
  else {
    wisher = false;
  }

  document.getElementById("video_stars").style.opacity = Math.min(((op_index-1600)/800), 0.1);
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

function cointoss() {
  tossed = true;
  document.getElementById("wrapper").classList.add("hideme");
  document.getElementById("cursor").classList.remove("deflate");
  document.getElementById("cursor").classList.remove("involve_quicker");
  document.getElementById("wish").classList.add("disolve");
  document.getElementById("label").classList.add("disolve");
  document.getElementById("seventh").classList.add("disolve");
  document.getElementById("cursor").classList.add("shrink");
  document.getElementById("video_stars").classList.remove("disolve_quick");
  document.getElementById("video_stars").classList.add("involve");
  document.getElementById('form').submit();
  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  document.getElementById("first_section").classList.add("hideme");
  window.scrollTo(0,0);
  document.getElementById('button').classList.add('hideme');
  document.getElementById('wish_galaxy').classList.remove('hideme');
  document.getElementById('second_section').classList.remove('hideme');

  document.getElementById("eighth").classList.add("heavens");
  document.getElementById("nineth").classList.add("heavens2");

  document.getElementById('button').classList.remove('hideme');
  document.getElementById('button').classList.add('heavens');

  var x = document.getElementById("cursor");
  x.addEventListener("webkitAnimationEnd", CursorEndFunction);
  x.addEventListener("animationend", CursorEndFunction);

  var g = document.getElementById("nineth");
  g.addEventListener("webkitAnimationEnd", HeavensEndFunction);
  g.addEventListener("animationend", HeavensEndFunction);
}

document.addEventListener("click",function(e){
    if ((op_index > 1130) && (!galaxy)){
      cointoss();
    }
    if (bool){
      cursorFocus(wish);
    }
});

document.addEventListener("mousedown",function(e){
   if ((op_index < 1130) && (!tossed) && (bool)){
      document.getElementById("cursor").classList.remove("involve_quicker")
      document.getElementById("cursor").classList.remove("deflate");
      document.getElementById("cursor").classList.add("expand");
    }
});

document.addEventListener("mouseup",function(e){
   if ((op_index < 1130) && (!tossed) && (bool)){
      document.getElementById("cursor").classList.remove("expand");
      document.getElementById("cursor").classList.add("deflate");
    }
});

function CursorEndFunction() {
  document.getElementById("cursor").classList.remove("cursor");
  document.getElementById("cursor").classList.remove("shrink");
  document.getElementById("cursor").classList.add("pointer");
  document.getElementById("cursor").classList.add("grow");
  document.getElementById("image").classList.add('hideme');
}

function HeavensEndFunction() {
  document.getElementById("eighth").classList.remove("heavens");
  document.getElementById("nineth").classList.remove("heavens2");
  document.getElementById("eighth").classList.add("disolve");
  document.getElementById("nineth").classList.add("disolve");
  var h = document.getElementById("nineth");
  h.addEventListener("webkitAnimationEnd", GalaxyFunction);
  h.addEventListener("animationend", GalaxyFunction);
}

function GalaxyFunction() {
  document.getElementById("wish_galaxy").classList.add("involve");
  document.getElementById("video_space2").classList.add("involve");
  galaxy = true;
}

function button_clicked(){
  bool = !bool;

  // Entered About Page
  if (!bool){

    document.getElementById("wrapper").classList.add("hideme");

    document.getElementById("container").classList.add('hideme');
    document.getElementById("first_section").classList.add('hideme');
    document.getElementById("container").classList.add('hideme');
    document.getElementById("image").classList.add('hideme');

    document.getElementById("button").classList.remove("button");
    document.getElementById("button").classList.add("button2");

    document.getElementById("about_page").classList.remove("hideme");
    document.getElementById("about_page").classList.add("involve_quick");
    document.getElementById("about_page").classList.add("about")

    document.getElementById("middle").classList.remove("hideme");

    document.getElementById("wish_galaxy").classList.add("hideme");

    if (!tossed) {
      document.getElementById("first_section").classList.remove("involve_quick");
      document.getElementById("first_section").classList.add("disolve_quick");

      document.getElementById("zero").classList.remove("involve_quick");
      document.getElementById("zero").classList.add("disolve_quick");

      document.getElementById("vl").classList.remove("involve_quick");
      document.getElementById("vl").classList.add("disolve_quick");

      document.getElementById("cursor").classList.remove("cursor");
      document.getElementById("cursor").classList.add("circle");
      document.getElementById("cursor").classList.remove("involve_quicker");

    }

    if (tossed) {
      document.getElementById("second_section").classList.remove("heavens");
      document.getElementById("second_section").classList.remove("involve_quick");
      document.getElementById("eighth").classList.remove("heavens");
      document.getElementById("nineth").classList.remove("involve_quick");
      document.getElementById("nineth").classList.remove("heavens2");
      document.getElementById("eighth").classList.remove("involve_quick");
      document.getElementById("second_section").classList.add("hideme");
      document.getElementById("another").classList.remove("hideme");
      document.getElementById("vl2").classList.remove("hideme");
    }
  } 
  
  //Exit About page
  if (bool){

    document.getElementById("wrapper").classList.remove("hideme");
    document.getElementById("button").classList.remove("button2");
    document.getElementById("button").classList.add("button");

    document.getElementById("about_page").classList.remove("involve_quick");
    document.getElementById("about_page").classList.add("hideme");
    document.getElementById("about_page").classList.remove("about")

    document.getElementById("coin_text").classList.add("hideme");
    document.getElementById("about_text").classList.add("hideme");
    document.getElementById("middle").classList.add("hideme");

    document.getElementById("image").classList.remove('hideme');

    if (!tossed) {

      document.getElementById("container").classList.remove('hideme');
      document.getElementById("first_section").classList.remove('hideme');
      document.getElementById("container").classList.remove('hideme');
      document.getElementById("image").classList.remove('hideme');

      document.getElementById("first_section").classList.add("involve_quick");
      document.getElementById("first_section").classList.remove("disolve_quick");

      document.getElementById("zero").classList.add("involve_quick");
      document.getElementById("zero").classList.remove("disolve_quick");

      document.getElementById("vl").classList.add("involve_quick");
      document.getElementById("vl").classList.remove("disolve_quick");

      document.getElementById("cursor").classList.remove("circle");
      document.getElementById("cursor").classList.add("cursor");
      document.getElementById("cursor").classList.add("involve_quicker");

      window.scrollTo(0,0);
    }

    if (tossed) {
      document.getElementById("container").classList.remove('hideme');
      document.getElementById("button").classList.remove('heavens');
      document.getElementById("vl2").classList.add("hideme");
      document.getElementById("another").classList.add("hideme");
      document.getElementById("button").style.opacity = 1;
      document.getElementById("wish_galaxy").classList.remove("hideme");
    }


  }
}

function toggle_subscribe() {
  sub = !sub;
  if (!sub){
    document.getElementById("email").classList.add("hideme");
  }
  if (sub){
    document.getElementById("email").classList.remove("hideme");
    cursorFocus(subscribe)
  }
}

function reveal_about() {
  about = !about;
  if (about){
    coin = false;
    document.getElementById("about_text").classList.remove("hideme");
    document.getElementById("coin_text").classList.add("hideme");
    document.getElementById("middle").style.justifyContent = "initial";
  }
  if (!about){
    document.getElementById("middle").style.justifyContent = "center";
    document.getElementById("about_text").classList.add("hideme");
  }
}

function reveal_coin() {
  coin = !coin;
  if (coin){
    about = false;
    document.getElementById("middle").style.justifyContent = "initial";
    document.getElementById("about_text").classList.add("hideme");
    document.getElementById("coin_text").classList.remove("hideme");
  }
  if (!coin){
    document.getElementById("middle").style.justifyContent = "center";
    document.getElementById("coin_text").classList.add("hideme");
  }

}

function submitted() {
  document.getElementById('subscribe').classList.add('hideme');
  document.getElementById('submitter').classList.add('hideme');
  document.getElementById('submitted').innerHTML = "<br><br>THANK YOU";
  document.getElementById('submitted').classList.remove('sub');
}

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-back',
  mirror: true,
  anchorPlacement: 'top-bottom'
});

var timeout;

document.onmousemove = resetTimer;
window.addEventListener("scroll", resetTimer);

function resetTimer() {
  clearTimeout(timeout);
  document.getElementById('rem').classList.add("disolve_quick");
  document.getElementById('rem').classList.remove("involve_quick");
  document.getElementById('rem').innerHTML = "";
  timeout = setTimeout(function(){
    if ((bool) && (!tossed) && (!wisher)){
      document.getElementById('rem').classList.remove("disolve_quick");
      document.getElementById('rem').classList.add("involve_quick");
    }
  }, 5*1000);
}

function textwrap(cont){
  var textWrapper = document.querySelector(cont);
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}

function anim_in(cont){
  anime.timeline({loop: false})
      .add({
        targets: cont + ' .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2400,
        delay: (el, i) => 300 + 30 * i,
        opacity: [0,1,0,1],
        easing: "easeInOutQuad",
        duration: 1400,
        delay: (el, i) => 50 * (i+1)
      });    
}

function anim_out(cont){
  anime.timeline({loop: false})
    .add({
      targets: cont + ' .letter',
      translateY: [0,-100],
      translateZ: 0,
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 750,
      delay: (el, i) => 300 + 30 * i
    });
}

function showit() {
  document.getElementById("zero").classList.add("involve_quick");
  document.getElementById("vl").classList.add("involve_quick");
  document.getElementById("button").classList.add("involve_quick");
  document.getElementById("cursor").classList.add("involve_quick")
  var y = document.getElementById("button");
  y.addEventListener("webkitAnimationEnd", buttonEndFunction);
  y.addEventListener("animationend", buttonEndFunction);
}

function buttonEndFunction() {
  document.getElementById("button").classList.remove("involve_quick");
  document.getElementById("zero").classList.remove("involve_quick");
  document.getElementById("vl").classList.remove("involve_quick");
  document.getElementById("cursor").classList.remove("involve_quick");
  document.getElementById("cursor").style.opacity = "1";
  document.getElementById("zero").style.opacity = "1";
  document.getElementById("vl").style.opacity = "1";
  document.getElementById("button").style.opacity = "1";
}

function reveal_galaxy(){
  galaxy = true;
  document.getElementById("wrapper").classList.add("hideme");
  document.getElementById("button").setAttribute("onclick", "button_clicked()");
  document.getElementById("button").classList.remove("button2");
  document.getElementById("button").classList.add("button");
  document.getElementById("container").classList.remove("hideme");
  document.getElementById("button").classList.remove("hideme");
  document.getElementById("wish_galaxy").classList.remove("hideme");
  document.getElementById("wish_galaxy").classList.add("involve_quick");
  document.getElementById("about_page").classList.add("disolve");
  document.getElementById("about_page").classList.remove("about")
  document.getElementById("about_page").classList.remove("involve_quick");
  document.getElementById("eighth").classList.add("hideme");
  document.getElementById("nineth").classList.add("hideme");
  document.getElementById("image").classList.add("hideme");
  document.getElementById("video_space2").style.opacity = 1;
  document.getElementById("about_page").classList.add("hideme");
  tossed = true;
  bool = true;
  window.scrollTo(0,document.body.scrollHeight);
}

