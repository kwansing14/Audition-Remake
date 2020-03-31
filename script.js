

//store all arrows images first
var up = "img/Arrow/up-blue.png";
var down = "img/Arrow/down-blue.png";
var left = "img/Arrow/left-blue.png";
var right = "img/Arrow/right-blue.png";


var upyellow = "img/Arrow/up-yellow.png";
var downyellow = "img/Arrow/down-yellow.png";
var leftyellow = "img/arrow/left-yellow.png";
var rightyellow = "img/arrow/right-yellow.png";


var upred = "img/Arrow/up-red.png";
var downred = "img/Arrow/down-red.png";
var leftred = "img/Arrow/left-red.png";
var rightred = "img/Arrow/right-red.png";
var beat=0;

var level;
var arrow;
var counter = 0;
var randomArrow;
var indexArray = [];
var imgArray = [];
var score=0;
var scoreTotal = 0;
var hit;
var combo=0;
var comboTotal=0;
var keys=7;
var correctKey = 0;
var timer;
var spacebarcheck;
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
        document.getElementById("combo").innerHTML = "Combo: "+comboTotal;
        level = keys-6;
        document.getElementById("level").innerHTML = "Level: "+level;

        x = timer - ((1.21) * (y));

        if (timer > 102.5) {
            console.log("stop!!!!!")
            music.pause()
            clearInterval(interval);
            delArrow();
            var del = document.querySelector("#pgc")
            del.remove();
            var zj = document.querySelector("#zhongjian")
            var zjtext = document.createElement("div");
            zjtext.classList.add("class","scoreBoard")
            zjtext.innerHTML = "Your score is: "
                            +scoreTotal+
                            "\nCongratulations!";
            zj.appendChild(zjtext)
        }else if (x>1.21) {
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
    } else if (y == 2){
        zhongjian.firstChild.setAttribute("src","img/UI/2.png")
        zhongjian.firstChild.width = "50";
    } else if (y == 3){
        zhongjian.firstChild.setAttribute("src","img/UI/1.png")
        zhongjian.firstChild.width = "30";
    } else if (y%4 == 0 && y!=84){
        zhongjian.firstChild.setAttribute("src","")
        var delA = document.getElementById("displayArrow");
        delA.setAttribute("class","");
        spacebarcheck = 0;
        generateArrow();
    } else if (y%4 == 1) {
        setTimeout(
            function(){ hit = "Great!";
            console.log("Great!")
            //score = 300;
        }, 1212-100);
        setTimeout(
            function(){ hit = "Perfect!";
            console.log("Perfect!")
            //score = 500;
        }, 1212-50);
        setTimeout(
            function(){ hit = "Great!";
            console.log("Great!")
            //score = 300;
        }, 1212+50);
        setTimeout(
            function(){ hit = "Cool!";
            console.log("Cool!")
            //score = 100;
        }, 1212+100);
    } else if (y%4 == 2) {

        setTimeout(function(){
            if(spacebarcheck == 0){
                var zhongjian = document.querySelector("#zhongjian");
                zhongjian.firstChild.setAttribute("src","img/UI/missed.png")
                zhongjian.firstChild.width = "400";
                comboTotal=0;
                correctKey=0;
                keys = 7;
                delArrow();
            }
        }, 500);
    }
}


//------------------------------button start audio and timer
function timeFunction() {
    var playButton = document.querySelector("#play")
    playButton.setAttribute("class","hide")

    music.play();
    music.volume=0.5;
    setTimeout(function(){
        startTime = Date.now();
        startTimer()
    }, 4220);
}

//----------------------generate random arrow & push indexArray in sequence
var generateArrow = function () {
    for(var i=0; i<keys ; i++) {
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
        counter++;
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
  }
  if(event.keyCode == 38) {
    console.log("up!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",upyellow);
        counter++;
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
  }
  if(event.keyCode == 39) {
    console.log("right!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",rightyellow);
        counter++;
        console.log("correct!")
        correctKey += 1;
    } else {
        console.log("wrong!")
        wrong();
    }
  }
  if(event.keyCode == 40) {
    console.log("down!!")
    if(event.keyCode == indexArray[counter]) {
        imgArray[counter].setAttribute("src",downyellow);
        counter++;
        console.log("correct!")
        correctKey += 1;
    } else {

        console.log("wrong!")
        wrong();
    }
  }
}
//----------------------------------------hide the arows
var delArrow = function () {
    var delA = document.getElementById("displayArrow");
    delA.setAttribute("class","hide");
    imgArray = document.querySelector('#displayArrow').children;

    for(var i=0 ; i<keys ; i++) {
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
            counter++;
            break;
        case "38":
            imgArray[counter].setAttribute("src",upred);
            counter++;
            break;
        case "39":
            imgArray[counter].setAttribute("src",rightred);
            counter++;
            break;
        case "40":
            imgArray[counter].setAttribute("src",downred);
            counter++;
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
        score = 100;
        comboTotal = 0;
    }else if(hit == "Great!"){
        zhongjian.firstChild.setAttribute("src","img/UI/great.png")
        zhongjian.firstChild.width = "450";
        score = 300;
        comboTotal += 1;
    }else if(hit == "Perfect!") {
        zhongjian.firstChild.setAttribute("src","img/UI/perfect.png")
        zhongjian.firstChild.width = "500";
        score = 500;
        comboTotal += 1;
    }
}
//--------------------------------------main function when input
var logKey = function (e) {
    //--------------------------------spacebar
    if(event.keyCode == 32) {
        console.log("spacebar!!");
        console.log("U pressed: "+hit);
        spacebarcheck = 1;
        delArrow();
         if (correctKey == keys) {
            displayMid ();
            var idscore = document.querySelector("#score");
            scoreTotal += score;
            idscore.innerText = ("Score: "+scoreTotal);
        } else {
            var idscore = document.querySelector("#score");
            var zhongjian = document.querySelector("#zhongjian");
            zhongjian.firstChild.setAttribute("src","img/UI/missed.png")
            zhongjian.firstChild.width = "400";
            comboTotal = 0;
        }
        correctKey = 0;

        if (comboTotal >= 3) {
            if (keys<10) {
                keys++;
            }
        } else {
            keys = 7;
        }
    }
    //---------------------------------updownleftright
    play();
}


document.addEventListener('keydown', logKey);