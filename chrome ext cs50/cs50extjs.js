const myStart = document.querySelector("#myBtn1");
const myReset = document.getElementById("myBtn2");
const myPause = document.getElementById("myBtn3");
const myResume = document.getElementById("myBtn4");

myStart.addEventListener("click", function() {
 var getNum = document.getElementById("myInpt").value;
  var myTime = getNum;
  console.log(myTime)
  var timer = setInterval (() =>{
    document.querySelector('#myVal').innerHTML = myTime;
    myTime--;
    console.log(myTime)
    if (myTime < -1) {
   document.querySelector('#myVal').innerHTML = "done";
   myAudio = new Audio("cs50audio.mp3");
  myAudio.play();
   clearInterval(timer)
  }
  }, 1000) 

  myPause.addEventListener("click", function() {
    document.getElementById("myBtn3").innerHTML = "pause"
    clearInterval(timer)
    })
    myResume.addEventListener("click", function() {
    timer = setInterval (() =>{
      document.querySelector('#myVal').innerHTML = myTime;
      myTime--;
      if (myTime < -1) {
        document.querySelector('#myVal').innerHTML = "done";
        myAudio = new Audio("cs50audio.mp3");
audio.play();
        clearInterval(timer)
       }
    }, 1000)
})
myReset.addEventListener("click", function() {
    resetBtn = clearInterval(timer)
    document.querySelector('#myVal').innerHTML = " ";
    myAudio.pause();
  })
})
