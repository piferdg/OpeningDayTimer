let countDownDate = new Date("Mar 28, 2019 00:00:00").getTime();

let interval = setInterval(function() {

  let today = new Date()
  document.getElementById('today').innerHTML = "Today's Date: " + today.toDateString()

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Baseball is officially here!";
  }
}, 1000);