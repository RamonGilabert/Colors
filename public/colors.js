document.addEventListener("DOMContentLoaded", function() {

  function presentColor() {
    var countLabel = document.getElementById("time-label");
    var colorLabel = document.getElementById("color-label");
    var string = transformDate();
    var finalColor = "#" + string.replace(/:/g, '');

    countLabel.textContent = string;
    colorLabel.textContent = finalColor;
    document.body.style.backgroundColor = finalColor;
  }

  function transformDate() {
    var today = new Date();
    var hour = transformNumber(today.getHours());
    var minutes = transformNumber(today.getMinutes());
    var seconds = transformNumber(today.getSeconds());
    var string = hour + ":" + minutes + ":" + seconds

    return string
  }

  function transformNumber(number){
    return number > 9 ? "" + number : "0" + number;
  }

  presentColor();
  var firstInterval = window.setInterval(presentColor, 1000);
});
