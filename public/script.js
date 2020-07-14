var socket = io();

socket.on('make wish', function(response){
  console.log("new update")
  response.map(function(data, index){
    var y = Math.ceil(Math.random() * 16);
    var div = document.getElementById('wish'+(index+1));
    div.innerHTML += (data.wish).toUpperCase();
  })
});

var tossed = false;
var op_index = 0;
var bool = true;
var sub = false;

let wish = document.getElementById('wish')


var first = false;
var second = false;
var third = false;
var forth = false;
var fifth = false;
var sixth = false;
var seventh = false;

var galaxy = false;
var about = false;
var coin = false;
var galaxy_text = false;

var opac = false;

var wisher = false;

var scroll = false;

var animated_in = false;
var animated_out = false;

var form = true;

var ready=false;

var cur = false;

let wish1 = document.getElementById("wish1")
let wish2 = document.getElementById("wish2")
let wish3 = document.getElementById("wish3")
let wish4 = document.getElementById("wish4")
let wish5 = document.getElementById("wish5")
let wish6 = document.getElementById("wish6")
let wish7 = document.getElementById("wish7")
let wish8 = document.getElementById("wish8")
let wish9 = document.getElementById("wish9")
let wish10 = document.getElementById("wish10")
let wish11 = document.getElementById("wish11")
let wish12 = document.getElementById("wish12")
let wish13 = document.getElementById("wish13")
let wish14 = document.getElementById("wish14")
let wish15 = document.getElementById("wish15")
let wish16 = document.getElementById("wish16")
let wish17 = document.getElementById("wish17")

all_wishes = [wish1, wish2, wish3, wish4, wish5, wish6, wish7, wish8, wish9, wish10, wish11, wish12, wish13, wish14, wish15, wish16, wish17]


var randombgs=["./images/bg/bg1.jpg", "./images/bg/bg2.jpg", "./images/bg/bg3.jpg", "./images/bg/bg4.jpg", "./images/bg/bg5.jpg", "./images/bg/bg6.jpg", "./images/bg/bg7.jpg", "./images/bg/bg8.jpg", "./images/bg/bg9.jpg", "./images/bg/bg10.jpg", "./images/bg/bg11.jpg", "./images/bg/bg12.jpg", "./images/bg/bg13.jpg", "./images/bg/bg14.jpg", "./images/bg/bg15.jpg", "./images/bg/bg16.jpg", "./images/bg/bg17.jpg", "./images/bg/bg18.jpg", "./images/bg/bg19.jpg"]
var randnum = Math.floor(Math.random()*randombgs.length);
document.getElementById("image").style.backgroundImage = 'url("'+randombgs[randnum]+'")';

document.getElementById("email").classList.add("hideme");
// document.getElementById("second_section").classList.add("hideme");
document.getElementById("about_page").classList.add("hideme");

document.getElementById("vl2").classList.add("hideme");
document.getElementById("vl").classList.add("hideme");

document.getElementById("middle").classList.add("hideme");
document.getElementById("another_div").classList.add("hideme");

document.getElementById('goldball').style.content = "url('./images/coinage.png')"

window.scrollTo(0,0);

var go=true;

window.onbeforeunload = function () {
  window.scrollTo(0,0);
}

textwrap('.first');
textwrap('.second');
textwrap('.third');
textwrap('.forth');
textwrap('.fifth');
// textwrap('.fifth2');
textwrap('.sixth');

var second2=false;

function mobileAnim(){

  if (bool && !galaxy){
    go=false;
    document.getElementById('form').classList.add('hideme');
    anime.timeline({loop: false})
    .add({
          targets: '.first' + ' .letter',
          //offset: 2000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),
          complete: function() {
            document.getElementById('form').blur()
          }
        })

      .add({
          targets: '.first' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),
          complete: function() {
            document.getElementById('form').blur()
          }

        })
      .add({
          targets: '.second' + ' .letter',
          offset: 4000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),


        })
      .add({
          targets: '.second' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.third' + ' .letter',
          offset: 8000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.third' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.forth' + ' .letter',
          offset: 12000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.forth' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.fifth' + ' .letter',
          offset: 16000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.fifth' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.sixth' + ' .letter',
          offset: 21000,
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 300 + 30 * i,
          opacity: [0,1,0,1],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),

        })
      .add({
          targets: '.sixth' + ' .letter',
          translateY: [0,-100],
          translateZ: 0,
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 750,
          delay: (el, i) => 300 + 30 * i,
          opacity: [1,0],
          easing: "easeInOutQuad",
          duration: 2000,
          delay: (el, i) => 50 * (i+1),
          complete: function() {
            document.getElementById('form').classList.remove('hideme');
            document.getElementById("video_stars").classList.add("cheekyfade");
            sixth = true;
            document.getElementById('form').classList.add('involve');
            wisher = true;
            seventh = true;
            cursorFocus(wish);
          }
        })
    cursorFocus(wish);
  }

}

var progress = 0;
window.addEventListener("scroll", handleWheel);
function handleWheel(e) {
  progress = window.pageYOffset || document.documentElement.scrollTop;

  op_index = Math.round((progress/1000)*100);

  if(isMobile && go && bool &&!galaxy){
    document.getElementById("zero").classList.add('disolve_quick');
    document.getElementById("vl").classList.add('disolve_quick');
    document.getElementById("button1").classList.add('disolve_quick');
    document.getElementById("button1").removeAttribute("onclick");
    mobileAnim()
  }

  if(!isMobile){

  if ((ready) && (!scroll) && (!animated_in) && (!animated_out) && (!first)){
    scroll = !scroll;
    anim_in('.first');
    document.getElementById("zero").classList.add('disolve_quick');
    document.getElementById("vl").classList.add('disolve_quick');
    document.getElementById("button1").classList.add('disolve_quick');
    document.getElementById("button1").removeAttribute("onclick");
  }

  if ((ready) && (scroll) && (animated_in) && (!animated_out) && (!first)){
    scroll = !scroll;
    anim_out('.first');
    first = true;
    anim_in('.second');
  }

  //////////////////////////////

  if ((ready) && (!scroll) && (!animated_in) && (animated_out) && first && !second){
    scroll = !scroll;
    anim_out('.second');
    second = true;
    anim_in('.third');
  }

  ////////////////////////////////////

  if ((ready) && (scroll) && (animated_in) && (!animated_out) && (!third) && second){
    scroll = !scroll;
    anim_out('.third');
    third = true;
    anim_in('.forth');
  }

  ////////////////////////////////////


  if ((ready) && (!scroll) && (!animated_in) && (animated_out) && (!forth) && third){
    scroll = !scroll;
    anim_out('.forth');
    forth = true;
    anim_in('.fifth');
    // anim_in('.fifth2');
  }

  /////////////////////////////////


  if ((ready) && (scroll) && (animated_in) && (!animated_out) && (!fifth) && forth){
    scroll = !scroll;
    anim_out('.fifth');
    // anim_out('.fifth2');
    fifth = true;
    anim_in('.sixth');
    //console.log("scroll: "+scroll+" animated_in: "+animated_in+ " animated_out: "+animated_out)
  }

  /////////////////////////////////


  if ((ready) && (!scroll) && (!animated_in) && (animated_out) && (!sixth) && fifth){
    scroll = !scroll;
    anim_out('.sixth');
    document.getElementById("video_stars").classList.add("cheekyfade");
    sixth = true;
    document.getElementById('form').classList.add('involve_delay');
    cursorFocus(document.getElementById("wishtext"));
    wisher = true;
    seventh = true;
  }
}

  ////////////////////////////////


  if (op_index > 1500){
    window.scrollTo(0, 0);
  }

}

var cursorFocus = function(elm) {
  var x = window.scrollX, y = window.scrollY;
  elm.focus();
  window.scrollTo(x, y);
}

if (!isMobile){
  cursorFocus(document.getElementById("wishtext"));
}

var textarea = document.getElementById("wishtext");
var limit = 400; //height limit

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
  if (seventh && form){
    document.getElementById('seventh').classList.add('involve');
    form = false;
  }

};

function cointoss() {
  // zoomOutMobile();

  tossed = true;
  document.getElementById("wrapper").classList.add("hideme");
  document.getElementById("cursor").classList.remove("deflate");
  document.getElementById("cursor").classList.remove("involve_quicker");
  document.getElementById("wishtext").classList.add("disolve");
  document.getElementById("label").classList.add("disolve");
  document.getElementById("seventh").classList.add("disolve");
  document.getElementById("cursor").classList.add("shrink");
  document.getElementById("video_stars").classList.remove("disolve_quick");
  document.getElementById("video_stars").classList.remove("cheekyfade");
  document.getElementById("video_stars").classList.add("involve");
  //document.getElementById('form').submit();
  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  document.getElementById("first_section").classList.add("hideme");
  window.scrollTo(0, 0);
  document.getElementById("button1").setAttribute("onclick", "button_clicked()");
  document.getElementById("button1").style.opacity = 0;
  document.getElementById('second_section').classList.remove('hideme');

  document.getElementById("eighth").classList.add("heavens");
  document.getElementById("nineth").classList.add("heavens2");
  //document.getElementById('button').classList.remove('disolve_quick');

  //document.getElementById('button').classList.remove('hideme');
  //document.getElementById('button').classList.add('heavens');

  var x = document.getElementById("cursor");
  x.addEventListener("webkitAnimationEnd", CursorEndFunction);
  x.addEventListener("animationend", CursorEndFunction);

  var g = document.getElementById("nineth");
  g.addEventListener("webkitAnimationEnd", HeavensEndFunction);
  g.addEventListener("animationend", HeavensEndFunction);
}

document.addEventListener("click",function(e){
    if ((seventh) && (!galaxy) && document.getElementById('wishtext').value.length>3 && !tossed){
      //console.log(document.getElementById('wishtext').value);
      socket.emit('make wish', document.getElementById('wishtext').value);
      cointoss();
    }
});


document.addEventListener("click",function(e){
   if ((!galaxy) && (!tossed) && (bool) && (!isMobile)){
      cursorFocus(document.getElementById("wishtext"));
    }
});

document.addEventListener("click",function(e){
   if ((!galaxy) && (!tossed) && (bool) && (wisher)){
      cursorFocus(document.getElementById("wishtext"));
    }
});

function CursorEndFunction() {
  document.getElementById("image").classList.add('hideme');
  document.getElementById("cursor").classList.remove("cursor");
  document.getElementById("cursor").classList.remove("shrink");
  document.getElementById("goldball").classList.add("hideme");
  document.getElementById("cursor").classList.add("pointer");
  document.getElementById("cursor").classList.add("grow");
  document.getElementById("cursor").style.background = "white"
}

function HeavensEndFunction() {
  document.getElementById("image").classList.add("hideme");
  document.getElementById("eighth").classList.remove("heavens");
  document.getElementById("nineth").classList.remove("heavens2");
  document.getElementById("eighth").classList.add("disolve");
  document.getElementById("nineth").classList.add("disolve");
  var h = document.getElementById("nineth");
  h.addEventListener("webkitAnimationEnd", GalaxyFunction);
  h.addEventListener("animationend", GalaxyFunction);
}

function twinkle_wait(wishes){
  wishes.classList.remove('twinkle_in')
  wishes.classList.add('twinkle_out')
}

function GalaxyFunction() {
  document.getElementById("wish_galaxy").classList.remove("hideme");
  document.getElementById("wish_galaxy").classList.add("involve");
  document.getElementById("video_space2").classList.add("involve");
  document.getElementById('button1').classList.remove('disolve_quick');

  document.getElementById('button1').classList.remove('hideme');
  document.getElementById('button1').classList.add('heavens');
  galaxy = true;
  if (isMobile){
    setInterval(function(){
      twink_wish = all_wishes[Math.floor(Math.random() * all_wishes.length)];
      twink_wish.classList.add('twinkle')
      // twink_wish.addEventListener("webkitAnimationEnd", twinkle_wait(twink_wish));
      // twink_wish.addEventListener("animationend", twinkle_wait(twink_wish));
    }, 1500);
  }
}

function button_clicked(){
  bool = !bool;

  // Entered About Page
  if (!bool){

    document.getElementById("wrapper").classList.add("hideme");

    document.getElementById("container").classList.add('hideme');
    document.getElementById("first_section").classList.add('hideme');

    document.getElementById("button1").classList.remove("button");
    document.getElementById("button1").classList.add("button2");

    document.getElementById("about_page").classList.remove("hideme");
    document.getElementById("about_page").classList.add("involve_quick");
    document.getElementById("about_page").classList.add("about");
    document.getElementById("cursor").style.background = "white"
    document.getElementById("goldball").classList.add("hideme");

    about = true;
    coin = true;
    galaxy_text = true;

    document.getElementById("middle").classList.remove("hideme");

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
      document.getElementById("another_div").classList.remove("hideme");
      document.getElementById("vl2").classList.remove("hideme");
    }
  }

  //Exit About page
  if (bool){

    document.getElementById("wrapper").classList.remove("hideme");
    document.getElementById("button1").classList.remove("button2");
    document.getElementById("button1").classList.add("button");
    document.getElementById("about_page").classList.remove("involve_quick");
    document.getElementById("middle").classList.add("hideme");
    document.getElementById("image").classList.remove('hideme');

    document.getElementById("cursor").style.background = "radial-gradient(circle at 3% 3%, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)";
    document.getElementById("goldball").classList.remove("hideme");

    about_text.style.maxHeight = null;
    coin_text.style.maxHeight = null;
    galaxy_text2.style.maxHeight = null;

    if (!tossed) {

      document.getElementById("container").classList.remove('hideme');
      document.getElementById("first_section").classList.remove('hideme');
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
      document.getElementById("button1").classList.remove('heavens');
      document.getElementById("vl2").classList.add("hideme");
      document.getElementById("another_div").classList.add("hideme");
      document.getElementById("button1").style.opacity = 1;
      document.getElementById("wish_galaxy").classList.remove("hideme");
    }

    if (galaxy) {
      reveal_galaxy();
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

function submitted() {
  document.getElementById('subscribe').classList.add('hideme');
  document.getElementById('submitter').classList.add('hideme');
  document.getElementById('submitted').innerHTML = "<br><br>THANK YOU";
  document.getElementById('submitted').classList.remove('sub');
}

var timeout;

document.onmousemove = resetTimer;
window.addEventListener("scroll", resetTimer);

function resetTimer() {

  cur = true;
  show('cursor', true);
  clearTimeout(timeout);
  document.getElementById('rem').classList.add("disolve_quick");
  document.getElementById('rem').classList.remove("involve_quick");
  document.getElementById('rem').innerHTML = "";
  timeout = setTimeout(function(){
    if ((bool) && (!tossed) && (!wisher) && (!isMobile)){
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
        offset: 2000,
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2400,
        delay: (el, i) => 300 + 30 * i,
        opacity: [0,1,0,1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 50 * (i+1),
        complete: function() {
          animated_in = !animated_in;
        }
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
      delay: (el, i) => 300 + 30 * i,
      opacity: [1,0],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 50 * (i+1),
      complete: function() {
          animated_out = !animated_out;
        }
    });
}


  // zoomOutMobile()
  document.getElementById("zero").classList.add("involve_quick");
  document.getElementById("vl").classList.remove("hideme");
  document.getElementById("vl").classList.add("involve_quick");
  document.getElementById("button1").classList.add("involve_quick");
  document.getElementById("cursor").classList.add("involve_quick");
  var y = document.getElementById("button1");
  y.addEventListener("webkitAnimationEnd", buttonEndFunction);
  y.addEventListener("animationend", buttonEndFunction);


function buttonEndFunction() {
  document.getElementById("button1").classList.remove("involve_quick");
  document.getElementById("zero").classList.remove("involve_quick");
  document.getElementById("vl").classList.remove("involve_quick");
  document.getElementById("cursor").classList.remove("involve_quick");
  document.getElementById("cursor").style.opacity = "1";
  document.getElementById("zero").style.opacity = "1";
  document.getElementById("vl").style.opacity = "1";
  document.getElementById("button1").style.opacity = "1";
}


function reveal_galaxy(){
  galaxy = true;
  socket.emit('make wish', '-');
  document.getElementById("wrapper").classList.add("hideme");
  document.getElementById("button1").setAttribute("onclick", "button_clicked()");
  document.getElementById("button1").classList.add("button");
  document.getElementById("button1").classList.remove("button2");
  document.getElementById("container").classList.remove("hideme");
  document.getElementById("button1").classList.remove("hideme");
  document.getElementById("button1").classList.remove("disolve_quick");
  document.getElementById("button1").classList.add("involve_quick");
  document.getElementById("button1").style.opacity="1"
  document.getElementById("wish_galaxy").classList.remove("hideme");
  document.getElementById("wish_galaxy").classList.remove("disolve_quick");
  document.getElementById("wish_galaxy").classList.add("involve");

  document.getElementById("about_page").classList.remove("involve_quick");
  document.getElementById("eighth").classList.add("hideme");
  document.getElementById("nineth").classList.add("hideme");
  document.getElementById("image").classList.add("hideme");
  document.getElementById("video_space2").classList.add("involve_quick");
  document.getElementById("video_stars").classList.add("hideme");
  document.getElementById("cursor").style.background = "white";
  document.getElementById("goldball").classList.add("hideme");
  galaxy_text2.style.maxHeight = null;
  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  tossed = true;
  bool = true;
  window.scrollTo(0,document.body.scrollHeight);

  if (isMobile){
    setInterval(function(){
      twink_wish = all_wishes[Math.floor(Math.random() * all_wishes.length)];
      twink_wish.classList.add('twinkle')
      // twink_wish.addEventListener("webkitAnimationEnd", twinkle_wait(twink_wish));
      // twink_wish.addEventListener("animationend", twinkle_wait(twink_wish));
    }, 1500);
  }

}

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('image', true);
    show('loading', false);
    // show('cursor', true);
    ready=true;
});

var about_text = document.getElementById("about_text");
var coin_text = document.getElementById("coin_text");
var galaxy_text2 = document.getElementById("galaxy_text");

var coll = document.getElementsByClassName("collapsible");
var i;


var about_heading = document.getElementById("about_heading");
var coin_heading = document.getElementById("coin_heading");
var galaxy_heading = document.getElementById("galaxy_heading");

about_heading.addEventListener("click", function() {
  if (about_text.style.maxHeight){
      about_text.style.maxHeight = null;
    } else {
      about_text.style.maxHeight = about_text.scrollHeight + "px";
      coin_text.style.maxHeight = null;
      galaxy_text2.style.maxHeight = null;
    }
});

coin_heading.addEventListener("click", function() {
  if (coin_text.style.maxHeight){
      coin_text.style.maxHeight = null;

    } else {
      coin_text.style.maxHeight = coin_text.scrollHeight + "px";
      about_text.style.maxHeight = null;
      galaxy_text2.style.maxHeight = null;
    }
});

galaxy_heading.addEventListener("click", function() {
  if (galaxy_text2.style.maxHeight){
      galaxy_text2.style.maxHeight = null;
    } else {
      galaxy_text2.style.maxHeight = galaxy_text2.scrollHeight + "px";
      about_text.style.maxHeight = null;
      coin_text.style.maxHeight = null;
    }
});

if (isMobile && !wisher){
  document.getElementById('form').blur();
}

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if ( viewport ) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1200";
  }
}

var vid_stars = document.createElement("video")

vid_stars.type="video/mp4"
vid_stars.id="video_stars"
vid_stars.classList.add("video_stars")
vid_stars.autoplay="true"
vid_stars.muted = "true"
vid_stars.playsinline= "true"
vid_stars.loop="true"
vid_stars.setAttribute('webkit-playsinline', 'true');
vid_stars.setAttribute('playsinline', 'true');
vid_stars.setAttribute('defaultMuted', 'true');

var vid_space = document.createElement("video")

vid_space.type="video/mp4"

vid_space.id="video_space2"
vid_space.classList.add("video_space2")
vid_space.autoplay="true"
vid_space.muted = "true"
vid_space.playsinline= "true"
vid_space.loop="true"
vid_space.setAttribute('webkit-playsinline', 'true');
vid_space.setAttribute('playsinline', 'true');
vid_space.setAttribute('defaultMuted', 'true');

document.getElementById('video_container').appendChild(vid_stars)
document.getElementById('video_container').appendChild(vid_space)

//
if (isMobile){
  // let about_text = document.getElementById('about_text')
  // let coin_text = document.getElementById('coin_text')
  let galaxy_text22 = document.getElementById('galaxy_text')
  let lside = document.getElementById('left_side')
  let rside = document.getElementById('right_side')
  // let about_heading = document.getElementById('about_heading')
  // let coin_heading = document.getElementById('about_heading')
  // let galaxy_heading = document.getElementById('about_heading')

  let wish_in = document.getElementsByClassName('wish_inner')
  let wish_out = document.getElementsByClassName('wish_outer')
  let wish_mid = document.getElementsByClassName('wish_mid')
  let first_section = document.getElementById('first_section')
  let second_section = document.getElementById('second_section')
  let zero = document.getElementById('zero')

  let firsttext=document.getElementById('first')
  let secondtext=document.getElementById('second')
  let thirdtext=document.getElementById('third')
  let forthtext=document.getElementById('forth')
  let fifthtext=document.getElementById('fifth')
  let sixthtext=document.getElementById('sixth')
  // let fifth2 = document.getElementById('fifth')

  // fifth.innerHTML = "MAYBE YOU DIDN'T GET<br>THE CHANCE"
  zero.style.fontSize = "6vw"
  first_section.style.fontSize = "5.5vw"
  second_section.style.fontSize = "5.5vw"
  about_text.style.fontSize = "1.9vw"
  coin_text.style.fontSize = "1.9vw"
  galaxy_text22.style.fontSize = "1.9vw"
  about_heading.style.fontSize = "4.8vw"
  coin_heading.style.fontSize = "4.8vw"
  galaxy_heading.style.fontSize = "4.8vw"
  lside.style.fontSize = "2vw"
  rside.style.fontSize = "2vw"
  first_section.style.whiteSpace = "pre"

  for (i=0;i<wish_in.length;i++){
    wish_in[i].style.fontSize = "1.6vw"
  }

  for (i=0;i<wish_mid.length;i++){
    wish_mid[i].style.fontSize = "2vw"
  }

  for (i=0;i<wish_out.length;i++){
    wish_out[i].style.fontSize = "2.4vw"
  }

  vid_space.src="./videos/video_space_mobile.mp4"
  vid_stars.src="./videos/video_stars_mobile.mp4"

  first_section.style.maxWidth = "20vw"

  first_section.style.marginLeft = "5%"
  // first_section.style.marginRight = "auto"
  
  
  first_section.style.textAlign = "center"
  // first_section.style.align = "center"
  // first_section.style.alignItems = "center"

  firsttext.style.textAlign = "center"
  // firsttext.style.align = "center"
  firsttext.style.alignItems = "center"



  first_section.style.fontWeight = "900"
  second_section.style.fontWeight = "900"
  zero.style.fontWeight = "900"
  // document.getElementById('fifth').style.width = "70%"
  // document.getElementById('second').style.width = "59%"
  // document.getElementById('forth').style.width = "70%"



}else{
  vid_space.src="./videos/video_space.mp4"
  vid_stars.src="./videos/video_stars.mp4"
}

if (!cur){
  cursor.display="none"
}
