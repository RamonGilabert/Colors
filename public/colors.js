document.addEventListener("DOMContentLoaded", function() {

  function presentColor() {
    // Change background color of the body and the text of the label.
    var countLabel = document.getElementById("time-label");
    countLabel.textContent = transformDate();
  }

  function transformDate() {
    var today = new Date();
    var hour = parseInt(today.getHours());
    var minutes = parseInt(today.getMinutes());
    var seconds = parseInt(today.getSeconds());
    var string = hour + ":" + minutes + ":" + seconds

    return string
  }

  var firstInterval = window.setInterval(presentColor, 1000);
});
