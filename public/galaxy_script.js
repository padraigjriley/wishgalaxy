//var io = require('socket.io-client')
let wish = document.getElementById('wish')

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
vid_space.src="./videos/video_space.mp4"

document.getElementById('video_container').appendChild(vid_space)


var socket = io('https://wishwell-iwish.herokuapp.com/');
socket.emit('make wish', "");
socket.on('make wish', function(response){
  response.map(function(data, index){
    var div = document.getElementById('wish'+(index+1));
    div.innerHTML = "";
    div.innerHTML += (data.wish).toUpperCase();
  })
});


// function twinkle_wait(wishes){
//   wishes.classList.remove('twinkle_in')
//   wishes.classList.add('twinkle_out')
// }

for (w=0; w<all_wishes.length; w++){
      all_wishes[w].classList.remove("twinkle")
    }

setInterval(function(){
      twink_wish = all_wishes[Math.floor(Math.random() * all_wishes.length)];
      twink_wish.classList.add('twinkle')
      var g = twink_wish;
      g.addEventListener("webkitAnimationEnd", WishEndFunction);
      g.addEventListener("animationend", WishEndFunction);
    }, 7000);


function WishEndFunction() {
  twink_wish.classList.remove("twinkle")
}

