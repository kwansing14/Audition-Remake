

//store all arrows images first
var up = "img/arrow/up-blue.png";
var down = "img/arrow/down-blue.png";
var left = "img/arrow/left-blue.png";
var right = "img/arrow/right-blue.png";


var upyellow = "img/arrow/up-yellow.png";
var downyellow = "img/arrow/down-yellow.png";
var leftyellow = "img/arrow/left-yellow.png";
var rightyellow = "img/arrow/right-yellow.png";


var upred = "img/arrow/up-red.png";
var downred = "img/arrow/down-red.png";
var leftred = "img/arrow/left-red.png";
var rightred = "img/arrow/right-red.png";
var beat=0;

var level;
var arrow;
var counter = 0;
var randomArrow;
var indexArray = [];
var imgArray = [];
var score;
var hit;
var correctKey = 0;
var timer;
var music = document.getElementById("myAudio");

var zhongjian = document.querySelector("#zhongjian");
     var img = document.createElement('img')
     img.setAttribute("id","pgc")
     zhongjian.appendChild(img);

//------------------------------a timer that actually works and accurate UwU

//BPM calculator -->>>>
//https://toolstud.io/music/bpm.php?bpm=99&bpm_unit=4%2F4

var startTime;
var x=0;
var y=0;

var startTimer = function () {
    var interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        timer = (elapsedTime / 1000).toFixed(2);
        document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);

        x = timer - ((1.21) * (y));

        if (x>1.21) {
            y++;
            console.log("fire: "+y);
            checkBeats ();
            if(y%2==0)
                {myMove(); }
        }
    }, (100));
}

//--------------------------------beats & events
var checkBeats = function (){
    var zhongjian = document.querySelector("#zhongjian");
    if (y == 1){
        zhongjian.firstChild.setAttribute("src","img/UI/3.png")
        zhongjian.firstChild.width = "50";
    }
    if (y == 2){
        zhongjian.firstChild.setAttribute("src","img/UI/2.png")
        zhongjian.firstChild.width = "50";
    }
    if (y == 3){
        zhongjian.firstChild.setAttribute("src","img/UI/1.png")
        zhongjian.firstChild.width = "30";
    }
    if (y%4 == 0){
        zhongjian.firstChild.setAttribute("src","")
        var delA = document.getElementById("displayArrow");
        delA.setAttribute("class","");
        generateArrow();
    } else if (y%4 == 1) {
        setTimeout(
            function(){ hit = "Great!";
            console.log("Great!")
        }, 1212-100);
        setTimeout(
            function(){ hit = "Perfect!";
            console.log("Perfect!")
        }, 1212-50);
        setTimeout(
            function(){ hit = "Great!";
            console.log("Great!")
        }, 1212+50);
        setTimeout(
            function(){ hit = "Cool!";
            console.log("Cool!")
        }, 1212+100);
    } else if (y%4 == 2) {

            setTimeout(function(){
            delArrow();
        }, 500);
    }
}

//------------------------------audio function
function playAudio() {

}
function pauseAudio() {
  music.pause();
}

function timeFunction() {
    music.play();
    music.volume=0.5;
    setTimeout(function(){
        startTime = Date.now();
        startTimer()
    }, 4220);
}

//----------------------generate random arrow & push indexArray in sequence
var generateArrow = function () {
    for(var i=0; i<7 ; i++) {
        number = Math.round(Math.random() * 4);

        if ( number == 1 || number == 0) {
            randomArrow = up;
            indexArray.push("38");
        } else if ( number == 2) {
            randomArrow = down;
            indexArray.push("40");
        } else if ( number == 3) {
            randomArrow = left;
            indexArray.push("37");
        } else if ( number == 4) {
            randomArrow = right;
            indexArray.push("39");
        }
        var arrow = document.querySelector("#displayArrow")
        var img = document.createElement('img');
        img.setAttribute("src",randomArrow);
        img.setAttribute("class","arrow")
        arrow.appendChild(img);
    }
    //------------------------------------- store value after generating
    imgArray = document.querySelector('#displayArrow').children;
}

//----------------------------------------moving element
function myMove() {
  var elem = document.getElementById("animate123");
  var pos = 0;
  var id = setInterval(frame, 11);
  function frame() {
    if (pos == 222) {
        clearInterval();
    } else {
      pos++;
      elem.style.right = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

//-----------------------------------------direction input check
var play = function () {

  if(event.keyCode == 37) {
    console.log("left!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",leftyellow);
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
    counter++;
  }
  if(event.keyCode == 38) {
    console.log("up!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",upyellow);
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
    counter++;
  }
  if(event.keyCode == 39) {
    console.log("right!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",rightyellow);
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
    counter++;
  }
  if(event.keyCode == 40) {
    console.log("down!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",downyellow);
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
    counter++;
  }
}
//----------------------------------------hide the arows
var delArrow = function () {
    var delA = document.getElementById("displayArrow");
    delA.setAttribute("class","hide");
    imgArray = document.querySelector('#displayArrow').children;

    for(var i=0 ; i<7 ; i++) {
        imgArray[0].remove();
    }

    counter = 0;
    indexArray = [];

}
//--------------------------------------wrong input appears red
var wrong = function () {
    switch(indexArray[counter]) {
        case "37":
            imgArray[counter].setAttribute("src",leftred);
            break;
        case "38":
            imgArray[counter].setAttribute("src",upred);
            break;
        case "39":
            imgArray[counter].setAttribute("src",rightred);
            break;
        case "40":
            imgArray[counter].setAttribute("src",downred);
            break;
        default:
        console.log("no found")
    }
}
var displayMid = function () {

    var zhongjian = document.querySelector("#zhongjian");

    if(hit == "Cool!") {
        zhongjian.firstChild.setAttribute("src","img/UI/cool.png")
        zhongjian.firstChild.width = "400";
    }else if(hit == "Great!"){
        zhongjian.firstChild.setAttribute("src","img/UI/great.png")
        zhongjian.firstChild.width = "450";
    }else if(hit == "Perfect!") {
        zhongjian.firstChild.setAttribute("src","img/UI/perfect.png")
        zhongjian.firstChild.width = "500";
    }
}
//--------------------------------------main function when input
var logKey = function (e) {

    if(beat != 1 || beat != beat!= 5){
        //--------------------------------spacebar
        if(event.keyCode == 86) {
            console.log("spacebar!!");
            console.log("U pressed: "+hit);
            delArrow();
             if (correctKey == 7) {
                console.log("7 keys")
                var idscore = document.querySelector("#score");
                idscore.innerText = hit;
                displayMid ();

            } else {
                var idscore = document.querySelector("#score");
                idscore.innerText = "missed!";
                var zhongjian = document.querySelector("#zhongjian");
                zhongjian.firstChild.setAttribute("src","img/UI/missed.png")
                zhongjian.firstChild.width = "400";
            }
            correctKey = 0;
        }
        //---------------------------------updownleftright
        play();
    }
}

document.addEventListener('keydown', logKey);