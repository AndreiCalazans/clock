// cssClock.surge.sh

function clock() {
  var time = new Date();

  //transform the seconds to deg--
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  var secondsDeg = (seconds / 60 * 360) -90;
  var minutesDeg = (minutes/60 *360) - 90;
  var hourDeg = (hour / 12 * 360) -90;
  hour = (hour < 10 )? "0" + hour : hour;
  minutes = (minutes < 10 )? "0" + minutes : minutes;
  seconds = (seconds < 10 )? "0" + seconds : seconds;

  document.getElementById("time").innerHTML = hour +" : "+minutes+" : "+seconds;
  document.querySelector(".second-hand").style.transform = "rotate("+ secondsDeg +"deg)";
  document.querySelector(".minute-hand").style.transform = "rotate("+ minutesDeg +"deg)";
  document.querySelector(".hour-hand").style.transform = "rotate("+ hourDeg +"deg)";

}
setInterval(clock,1000);
