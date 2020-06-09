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

var randombgs=["./images/bg/bg1.jpg", "./images/bg/bg2.jpg", "./images/bg/bg3.jpg", "./images/bg/bg4.jpg", "./images/bg/bg5.jpg", "./images/bg/bg6.jpg", "./images/bg/bg7.jpg", "./images/bg/bg8.jpg", "./images/bg/bg9.jpg", "./images/bg/bg10.jpg", "./images/bg/bg11.jpg", "./images/bg/bg12.jpg", "./images/bg/bg13.jpg", "./images/bg/bg14.jpg", "./images/bg/bg15.jpg", "./images/bg/bg16.jpg", "./images/bg/bg17.jpg", "./images/bg/bg18.jpg", "./images/bg/bg19.jpg"]
var randnum = Math.floor(Math.random()*randombgs.length);
document.getElementById("image").style.backgroundImage = 'url("'+randombgs[randnum]+'")';

document.getElementById("email").classList.add("hideme");
document.getElementById("second_section").classList.add("hideme");
document.getElementById("about_page").classList.add("hideme");

// document.getElementById("about_text").classList.add("hideme");
// document.getElementById("coin_text").classList.add("hideme");
document.getElementById("vl2").classList.add("hideme");

document.getElementById("middle").classList.add("hideme");
document.getElementById("another_div").classList.add("hideme");

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

var progress = 0;
window.addEventListener("scroll", handleWheel);
function handleWheel(e) {
  progress = window.pageYOffset || document.documentElement.scrollTop;

  op_index = Math.round((progress/1000)*100);

  if ((!scroll) && (!animated_in) && (!animated_out) && (!first)){
    scroll = !scroll;
    anim_in('.first');
    document.getElementById("zero").classList.add('disolve_quick');
    document.getElementById("vl").classList.add('disolve_quick');
    document.getElementById("button").classList.add('disolve_quick');
    document.getElementById("button").removeAttribute("onclick");
  }

  if ((scroll) && (animated_in) && (!animated_out) && (!first)){
    scroll = !scroll;
    anim_out('.first');
    first = true;
    anim_in('.second');
  }

  //////////////////////////////

  if ((!scroll) && (!animated_in) && (animated_out) && first && !second){
    scroll = !scroll;
    anim_out('.second');
    second = true;
    anim_in('.third');
  }

  ////////////////////////////////////

  if ((scroll) && (animated_in) && (!animated_out) && (!third) && second){
    scroll = !scroll;
    anim_out('.third');
    third = true;
    anim_in('.forth');
  }

  ////////////////////////////////////


  if ((!scroll) && (!animated_in) && (animated_out) && (!forth) && third){
    scroll = !scroll;
    anim_out('.forth');
    forth = true;
    anim_in('.fifth');
  }

  /////////////////////////////////


  if ((scroll) && (animated_in) && (!animated_out) && (!fifth) && forth){
    scroll = !scroll;
    anim_out('.fifth');
    fifth = true;
    anim_in('.sixth');
  }

  /////////////////////////////////


  if ((!scroll) && (!animated_in) && (animated_out) && (!sixth) && fifth){
    scroll = !scroll;
    anim_out('.sixth');
    document.getElementById("video_stars").classList.add("cheekyfade");
    sixth = true;
    document.getElementById('form').classList.add('involve_delay');
    cursorFocus(wish);
    wisher = true;
    seventh = true;
  }

  ////////////////////////////////


  if (op_index > 1500){
    window.scrollTo(0,0);
  }

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
  if (seventh && form){
    document.getElementById('seventh').classList.add('involve');
    form = false;
  }
  
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
  document.getElementById("video_stars").classList.remove("cheekyfade");
  document.getElementById("video_stars").classList.add("involve");
  document.getElementById('form').submit();
  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  document.getElementById("first_section").classList.add("hideme");
  window.scrollTo(0,0);
  document.getElementById("button").setAttribute("onclick", "button_clicked()");
  document.getElementById('button').classList.remove('disolve_quick');
  document.getElementById("button").style.opacity = 0;
  // document.getElementById('wish_galaxy').classList.remove('hideme');
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
    if ((seventh) && (!galaxy) && (!form)){
      cointoss();
    }
});

// document.addEventListener("mousedown",function(e){
//    if ((!tossed) && (bool) && (!galaxy)){
//       document.getElementById("cursor").classList.remove("involve_quicker")
//       document.getElementById("cursor").classList.remove("deflate");
//       document.getElementById("cursor").classList.add("expand");
//     }
// });

document.addEventListener("mouseup",function(e){
   if ((!galaxy) && (!tossed) && (bool)){
      cursorFocus(wish);
    }
});

function CursorEndFunction() {
  document.getElementById("cursor").classList.remove("cursor");
  document.getElementById("cursor").classList.remove("shrink");
  document.getElementById("goldball").classList.add("hideme");
  document.getElementById("cursor").classList.add("pointer");
  document.getElementById("cursor").classList.add("grow");
  document.getElementById("image").classList.add('hideme');
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

function GalaxyFunction() {
  document.getElementById("wish_galaxy").classList.remove("hideme");
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

    document.getElementById("button").classList.remove("button");
    document.getElementById("button").classList.add("button2");

    document.getElementById("about_page").classList.remove("hideme");
    document.getElementById("about_page").classList.add("involve_quick");
    document.getElementById("about_page").classList.add("about");
    document.getElementById("cursor").style.background = "white"
    document.getElementById("goldball").classList.add("hideme");

    about = true;
    coin = true;
    galaxy_text = true;
    // reveal_about();
    // reveal_coin();
    // reveal_galaxy_text();

    document.getElementById("middle").classList.remove("hideme");

    //document.getElementById("wish_galaxy").classList.add("disolve_quick");

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
    document.getElementById("button").classList.remove("button2");
    document.getElementById("button").classList.add("button");
    document.getElementById("about_page").classList.remove("involve_quick");
    // document.getElementById("coin_text").classList.add("hideme");
    // document.getElementById("about_text").classList.add("hideme");
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
      document.getElementById("another_div").classList.add("hideme");
      document.getElementById("button").style.opacity = 1;
      document.getElementById("wish_galaxy").classList.remove("hideme");
    }

    if (galaxy) {
      reveal_galaxy();
      // document.getElementById("about_page").classList.add("disolve_quick");
      // document.getElementById("wish_galaxy").classList.add("involve_quick");
      // document.getElementById("video_space2").classList.add("involve_quick");
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

// function reveal_about() {
//   about = !about;
//   if (about){
//     coin = false;
//     galaxy_text = false;
//     document.getElementById("about_text").classList.remove("hideme");
//     document.getElementById("coin_text").classList.add("hideme");
//     document.getElementById("middle").style.justifyContent = "initial";
//     document.getElementById("galaxy_text").classList.add("hideme");
//   }
//   if (!about){
//     document.getElementById("middle").style.justifyContent = "center";
//     document.getElementById("about_text").classList.add("hideme");
//   }
// }

// function reveal_coin() {
//   coin = !coin;
//   if (coin){
//     about = false;
//     galaxy_text = false;
//     document.getElementById("middle").style.justifyContent = "initial";
//     document.getElementById("about_text").classList.add("hideme");
//     document.getElementById("coin_text").classList.remove("hideme");
//     document.getElementById("galaxy_text").classList.add("hideme");
//   }
//   if (!coin){
//     document.getElementById("middle").style.justifyContent = "center";
//     document.getElementById("coin_text").classList.add("hideme");
//   }
// }


// function reveal_galaxy_text() {
//   galaxy_text = !galaxy_text;
//   if (galaxy_text){
//     coin = false;
//     about = false;
//     document.getElementById("galaxy_text").classList.remove("hideme");
//     document.getElementById("coin_text").classList.add("hideme");
//     document.getElementById("about_text").classList.add("hideme");
//     document.getElementById("middle").style.justifyContent = "initial";
//   }
//   if (!galaxy_text){
//     document.getElementById("middle").style.justifyContent = "center";
//     document.getElementById("galaxy_text").classList.add("hideme");
//   }
// }

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

  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  tossed = true;
  bool = true;
  window.scrollTo(0,document.body.scrollHeight);
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


// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

