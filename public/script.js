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

var ready=false;

var randombgs=["./images/bg/bg1.jpg", "./images/bg/bg2.jpg", "./images/bg/bg3.jpg", "./images/bg/bg4.jpg", "./images/bg/bg5.jpg", "./images/bg/bg6.jpg", "./images/bg/bg7.jpg", "./images/bg/bg8.jpg", "./images/bg/bg9.jpg", "./images/bg/bg10.jpg", "./images/bg/bg11.jpg", "./images/bg/bg12.jpg", "./images/bg/bg13.jpg", "./images/bg/bg14.jpg", "./images/bg/bg15.jpg", "./images/bg/bg16.jpg", "./images/bg/bg17.jpg", "./images/bg/bg18.jpg", "./images/bg/bg19.jpg"]
var randnum = Math.floor(Math.random()*randombgs.length);
document.getElementById("image").style.backgroundImage = 'url("'+randombgs[randnum]+'")';

document.getElementById("email").classList.add("hideme");
document.getElementById("second_section").classList.add("hideme");
document.getElementById("about_page").classList.add("hideme");

document.getElementById("vl2").classList.add("hideme");
document.getElementById("vl").classList.add("hideme");

document.getElementById("middle").classList.add("hideme");
document.getElementById("another_div").classList.add("hideme");

window.scrollTo(0,0);

window.onbeforeunload = function () {
  window.scrollTo(0,0);
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

  if ((ready) && (!scroll) && (!animated_in) && (!animated_out) && (!first)){
    scroll = !scroll;
    anim_in('.first');
    document.getElementById("zero").classList.add('disolve_quick');
    document.getElementById("vl").classList.add('disolve_quick');
    document.getElementById("button").classList.add('disolve_quick');
    document.getElementById("button").removeAttribute("onclick");
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
  }

  /////////////////////////////////


  if ((ready) && (scroll) && (animated_in) && (!animated_out) && (!fifth) && forth){
    scroll = !scroll;
    anim_out('.fifth');
    fifth = true;
    anim_in('.sixth');
  }

  /////////////////////////////////


  if ((ready) && (!scroll) && (!animated_in) && (animated_out) && (!sixth) && fifth){
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
    window.scrollTo(0, 0);
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
  zoomOutMobile();
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
  window.scrollTo(0, 0);
  document.getElementById("button").setAttribute("onclick", "button_clicked()");
  document.getElementById('button').classList.remove('disolve_quick');
  document.getElementById("button").style.opacity = 0;
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


document.addEventListener("click",function(e){
   if ((!galaxy) && (!tossed) && (bool) && (!isMobile)){
      cursorFocus(wish);
    }
});

document.addEventListener("click",function(e){
   if ((!galaxy) && (!tossed) && (bool) && (isMobile) && (wisher)){
      cursorFocus(wish);
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
    document.getElementById("button").classList.remove("button2");
    document.getElementById("button").classList.add("button");
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


  zoomOutMobile()
  document.getElementById("zero").classList.add("involve_quick");
  document.getElementById("vl").classList.remove("hideme");
  document.getElementById("vl").classList.add("involve_quick");
  document.getElementById("button").classList.add("involve_quick");
  document.getElementById("cursor").classList.add("involve_quick");
  var y = document.getElementById("button");
  y.addEventListener("webkitAnimationEnd", buttonEndFunction);
  y.addEventListener("animationend", buttonEndFunction);


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
  galaxy_text2.style.maxHeight = null;
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