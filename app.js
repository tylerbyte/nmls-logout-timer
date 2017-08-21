let submitButton =  document.getElementById("submitButton")

submitButton.addEventListener("click", function (){
  countdown ();
  });

  function countdown() {
    let now = new Date()
    let inputYear = document.getElementById("inputYear").value;
    let inputMonth = +document.getElementById("inputMonth").value - 1;
    let inputDay = document.getElementById("inputDay").value;
    console.log(inputYear, inputMonth, inputDay);
    var customDate = new Date(inputYear, inputMonth, inputDay);
    console.log(customDate);

      var currentTime = now.getTime();
      var eventTime = customDate.getTime();
      var remTime = eventTime - currentTime;
      console.log(remTime);
      var s = Math.floor(remTime / 1000);
      var m = Math.floor(s / 60);
      var h = Math.floor(m / 60);
      var d = Math.floor(h / 24);
      h %= 24;
      m %= 60;
      s %= 60;

    console.log(d, h, m, s);
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);

}
