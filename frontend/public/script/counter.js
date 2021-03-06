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

    if(t.total >=0 && counter==0){
    var templateParams = {
        email: 'abhishekt2024@gmail.com',
        user: 'Carlo',
        to_name: 'James',
        from_name: 'Predicautionar',
        message: 'No activity by user has been made in past 24 hr'
    };
    
    const serviceID = 'service_tvqz9jt';
    const templateID = 'template_rocssba';

    emailjs.send(serviceID,templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }
    else if(t.total == 12*3600){
      var templateParams = {
        email: 'abhishekt2024@gmail.com',
        user: 'Carlo',
        to_name: 'Carlo',
        from_name: 'Predicautionar',
        message: 'Remainder! kindly login to your account.Only 12 hours left :)'
      }
      const serviceID = 'service_tvqz9jt';
      const templateID = 'template_rocssba';
      emailjs.send(serviceID,templateID, templateParams)
      .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
       console.log('FAILED...', error);
      });
    }
    else if(t.total == 14*3600){
      var templateParams = {
        email: 'abhishekt2024@gmail.com',
        user: 'Carlo',
        to_name: 'Carlo',
        from_name: 'Predicautionar',
        message: 'Time for medicine :)'
    }
    const serviceID = 'service_tvqz9jt';
    const templateID = 'template_rocssba';
    emailjs.send(serviceID,templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }
    else if(t.total == 9*3600){
      var templateParams = {
        email: 'abhishekt2024@gmail.com',
        user: 'Carlo',
        to_name: 'Carlo',
        from_name: 'Predicautionar',
        message: 'Time for medicine :)'
    }
    const serviceID = 'service_tvqz9jt';
    const templateID = 'template_rocssba';

    emailjs.send(serviceID,templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
    else if(t.total == 20*3600){
      var templateParams = {
        email: 'abhishekt2024@gmail.com',
        user: 'Carlo',
        to_name: 'Carlo',
        from_name: 'Predicautionar',
        message: 'Time for medicine :)'
    }
    const serviceID = 'service_tvqz9jt';
    const templateID = 'template_rocssba';

    emailjs.send(serviceID,templateID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
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