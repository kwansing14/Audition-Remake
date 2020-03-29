// function startTimer(){
//         var minutes,
//             seconds;

//         var startTime = new Date;

//         setInterval(function(){

//             var currentTime = new Date;
//             seconds = currentTime.getSeconds() - startTime.getSeconds();

//             if(seconds < 0){
//                 seconds += 60;
//             }else if(seconds === 0){
//                 minutes = currentTime.getMinutes() - startTime.getMinutes();
//             }

//             //console.log(minutes + ':' + seconds);

//         }, 100);
// }
// startTimer();

// var int = 0;

// var startTime = Date.now();

// var interval = setInterval(function() {
//     var elapsedTime = Date.now() - startTime;
//     var int = (elapsedTime / 1000).toFixed(3);
//     document.getElementById("timer").innerHTML = int;
//     console.log(int);

// }, 1000);

// var startTimer = function () {
//     setTimeout(function(){
//         int++;
//         document.getElementById("timer").innerHTML = int;
//     }, 1000 );
// }

// startTimer ();
var t1=0;
var t2=0;
var timer = function () {
        var x = document.getElementById("track");
        var time = Math.floor(x.currentTime);
        var t1 = Math.floor(x.currentTime);
        if ((t2-t1)==1) {
            beat++;
            console.log(beat)
        }
        var t2 = Math.floor(x.currentTime);
    }
}