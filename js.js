function clock() {
  var time = new Date();

  //transform the seconds to deg--
  var secondsDeg = (time.getSeconds() / 60 * 360) -90;
  var minutesDeg = (time.getMinutes()/60 *360) - 90;
  var hour = (time.getHours() / 12 * 360) -90;


  document.querySelector(".second-hand").style.transform = "rotate("+ secondsDeg +"deg)";
  document.querySelector(".minute-hand").style.transform = "rotate("+ minutesDeg +"deg)";
  document.querySelector(".hour-hand").style.transform = "rotate("+ hour +"deg)";

}
setInterval(clock,1000);
