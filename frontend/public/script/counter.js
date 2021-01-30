var counter =0;
function getTimeRemaining(endtime) {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  const total = hour*3600+min*60+sec;
  const seconds = sec;
  const minutes = min;
  const hours = hour;
  
  return {
    total,
    hours,
    minutes,
    seconds
  };
}

function reset(){
  counter++;
  console.log(counter)
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total >= 23*3600+60*60 && counter == 0){
      // function sendEmail() { 
      //   Email.send({ 
      //     Host: "smtp.gmail.com", 
      //     Username: "sender@email_address.com", 
      //     Password: "Enter your password", 
      //     To: 'receiver@email_address.com', 
      //     From: "sender@email_address.com", 
      //     Subject: "Sending Email using javascript", 
      //     Body: "Well that was easy!!", 
      //   }) 
      //     .then(function (message) { 
      //       alert("mail sent successfully") 
      //     }); 
      // }
    }
    
    if (t.total <= 0) {
      clearInterval(timeinterval);
      counter=0;
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) +  24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);