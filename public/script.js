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

document.getElementById("about_text").classList.add("hideme");
document.getElementById("coin_text").classList.add("hideme");
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

    about = true;
    coin = true;
    galaxy_text = true;
    reveal_about();
    reveal_coin();
    reveal_galaxy_text();

    document.getElementById("middle").classList.remove("hideme");

    document.getElementById("wish_galaxy").classList.add("disolve_quick");

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
    document.getElementById("coin_text").classList.add("hideme");
    document.getElementById("about_text").classList.add("hideme");
    document.getElementById("middle").classList.add("hideme");
    document.getElementById("image").classList.remove('hideme');

    document.getElementById("cursor").style.background = "radial-gradient(circle at 3% 3%, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)";

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

function reveal_about() {
  about = !about;
  if (about){
    coin = false;
    galaxy_text = false;
    document.getElementById("about_text").classList.remove("hideme");
    document.getElementById("coin_text").classList.add("hideme");
    document.getElementById("middle").style.justifyContent = "initial";
    document.getElementById("galaxy_text").classList.add("hideme");
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
    galaxy_text = false;
    document.getElementById("middle").style.justifyContent = "initial";
    document.getElementById("about_text").classList.add("hideme");
    document.getElementById("coin_text").classList.remove("hideme");
    document.getElementById("galaxy_text").classList.add("hideme");
  }
  if (!coin){
    document.getElementById("middle").style.justifyContent = "center";
    document.getElementById("coin_text").classList.add("hideme");
  }
}


function reveal_galaxy_text() {
  galaxy_text = !galaxy_text;
  if (galaxy_text){
    coin = false;
    about = false;
    document.getElementById("galaxy_text").classList.remove("hideme");
    document.getElementById("coin_text").classList.add("hideme");
    document.getElementById("about_text").classList.add("hideme");
    document.getElementById("middle").style.justifyContent = "initial";
  }
  if (!galaxy_text){
    document.getElementById("middle").style.justifyContent = "center";
    document.getElementById("galaxy_text").classList.add("hideme");
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

  document.getElementById("zero").classList.add("hideme");
  document.getElementById("vl").classList.add("hideme");
  tossed = true;
  bool = true;
  window.scrollTo(0,document.body.scrollHeight);
}


// /////////////////////////////////////////////////////////////////////////////////

// var colour="gold"; // "random" can be replaced with any valid colour ie: "red"...
// var sparkles=20;// increase of decrease for number of sparkles falling

// var x=ox=400;
// var y=oy=300;
// var swide=800;
// var shigh=600;
// var sleft=sdown=0;
// var tiny=new Array();
// var star=new Array();
// var starv=new Array();
// var starx=new Array();
// var stary=new Array();
// var tinyx=new Array();
// var tinyy=new Array();
// var tinyv=new Array();

// colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')

// n = 10;
// y = 0;
// x = 0;
// n6=(document.getElementById&&!document.all);
// ns=(document.layers);
// ie=(document.all);
// d=(ns||ie)?'document.':'document.getElementById("';
// a=(ns||n6)?'':'all.';
// n6r=(n6)?'")':'';
// s=(ns)?'':'.style';

// // if (ns){
// //   for (i = 0; i < n; i++)
// //     document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');
// // }

// if (ie)
//   document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');

// // if (ie||n6){
// //   for (i = 0; i < n; i++)
// //     document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');
// // }

// if (ie)
//   document.write('</div></div>');
// (ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;

// function Mouse(evnt){

//   y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;
//   x = (ns||n6)?evnt.pageX+1:event.x+1;
// }

// (ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

// // function animate(){

// //   o=(ns||n6)?window.pageYOffset:0;

// //   if (ie)con.style.top=document.body.scrollTop + 'px';

// //   // for (i = 0; i < n; i++){

// //   //   var temp1 = eval(d+a+"dots"+i+n6r+s);

// //   //   randcolours = colours[Math.floor(Math.random()*colours.length)];

// //   //   (ns)?temp1.bgColor = randcolours:temp1.background = randcolours; 

// //   //   if (i < n-1){

// //   //     var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);
// //   //     temp1.top = parseInt(temp2.top) + 'px';
// //   //     temp1.left = parseInt(temp2.left) + 'px';

// //   //   } 
// //   //   else{

// //   //     temp1.top = y+o + 'px';
// //   //     temp1.left = x + 'px';
// //   //   }
// //   // }

// //   setTimeout("animate()",10);
// // }

// // animate();

// window.onload=function() { if (document.getElementById) {
//   var i, rats, rlef, rdow;
//   for (var i=0; i<sparkles; i++) {
//     var rats=createDiv(3, 3);
//     rats.style.visibility="hidden";
//     rats.style.zIndex="999";
//     document.body.appendChild(tiny[i]=rats);
//     starv[i]=0;
//     tinyv[i]=0;
//     var rats=createDiv(5, 5);
//     rats.style.backgroundColor="transparent";
//     rats.style.visibility="hidden";
//     rats.style.zIndex="999";
//     var rlef=createDiv(1, 5);
//     var rdow=createDiv(5, 1);
//     rats.appendChild(rlef);
//     rats.appendChild(rdow);
//     rlef.style.top="2px";
//     rlef.style.left="0px";
//     rdow.style.top="0px";
//     rdow.style.left="2px";
//     document.body.appendChild(star[i]=rats);
//   }
//   set_width();
//   sparkle();
// }}

// function sparkle() {
//   var c;
//   if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
//     ox=x;
//     oy=y;
//     for (c=0; c<sparkles; c++) if (!starv[c]) {
//       star[c].style.left=(starx[c]=x)+"px";
//       star[c].style.top=(stary[c]=y+1)+"px";
//       star[c].style.clip="rect(0px, 5px, 5px, 0px)";
//       star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
//       star[c].style.visibility="visible";
//       starv[c]=50;
//       break;
//     }
//   }
//   for (c=0; c<sparkles; c++) {
//     if (starv[c]) update_star(c);
//     if (tinyv[c]) update_tiny(c);
//   }
//   setTimeout("sparkle()", 40);
// }

// function update_star(i) {
//   if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
//   if (starv[i]) {
//     stary[i]+=1+Math.random()*3;
//     starx[i]+=(i%5-2)/5;
//     if (stary[i]<shigh+sdown) {
//       star[i].style.top=stary[i]+"px";
//       star[i].style.left=starx[i]+"px";
//     }
//     else {
//       star[i].style.visibility="hidden";
//       starv[i]=0;
//       return;
//     }
//   }
//   else {
//     tinyv[i]=50;
//     tiny[i].style.top=(tinyy[i]=stary[i])+"px";
//     tiny[i].style.left=(tinyx[i]=starx[i])+"px";
//     tiny[i].style.width="2px";
//     tiny[i].style.height="2px";
//     tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
//     star[i].style.visibility="hidden";
//     tiny[i].style.visibility="visible"
//   }
// }

// function update_tiny(i) {
//   if (--tinyv[i]==25) {
//     tiny[i].style.width="1px";
//     tiny[i].style.height="1px";
//   }
//   if (tinyv[i]) {
//     tinyy[i]+=1+Math.random()*3;
//     tinyx[i]+=(i%5-2)/5;
//     if (tinyy[i]<shigh+sdown) {
//       tiny[i].style.top=tinyy[i]+"px";
//       tiny[i].style.left=tinyx[i]+"px";
//     }
//     else {
//       tiny[i].style.visibility="hidden";
//       tinyv[i]=0;
//       return;
//     }
//   }
//   else tiny[i].style.visibility="hidden";
// }

// document.onmousemove=mouse;
// function mouse(e) {
//   if (e) {
//     y=e.pageY;
//     x=e.pageX;
//   }
//   else {
//     set_scroll();
//     y=event.y+sdown;
//     x=event.x+sleft;
//   }
// }

// window.onscroll=set_scroll;
// function set_scroll() {
//   if (typeof(self.pageYOffset)=='number') {
//     sdown=self.pageYOffset;
//     sleft=self.pageXOffset;
//   }
//   else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
//     sdown=document.body.scrollTop;
//     sleft=document.body.scrollLeft;
//   }
//   else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
//     sleft=document.documentElement.scrollLeft;
//     sdown=document.documentElement.scrollTop;
//   }
//   else {
//     sdown=0;
//     sleft=0;
//   }
// }

// window.onresize=set_width;
// function set_width() {
//   var sw_min=999999;
//   var sh_min=999999;
//   if (document.documentElement && document.documentElement.clientWidth) {
//     if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
//     if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
//   }
//   if (typeof(self.innerWidth)=='number' && self.innerWidth) {
//     if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
//     if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
//   }
//   if (document.body.clientWidth) {
//     if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
//     if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
//   }
//   if (sw_min==999999 || sh_min==999999) {
//     sw_min=800;
//     sh_min=600;
//   }
//   swide=sw_min;
//   shigh=sh_min;
// }

// function createDiv(height, width) {
//   var div=document.createElement("div");
//   div.style.position="absolute";
//   div.style.height=height+"px";
//   div.style.width=width+"px";
//   div.style.overflow="hidden";
//   return (div);
// }

// function newColour() {
//   var c=new Array();
//   c[0]=255;
//   c[1]=Math.floor(Math.random()*256);
//   c[2]=Math.floor(Math.random()*(256-c[1]/2));
//   c.sort(function(){return (0.5 - Math.random());});
//   return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
// }

