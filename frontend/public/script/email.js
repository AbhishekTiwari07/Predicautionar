var templateParams = {
    user: 'Carlo',
    to_name: 'James',
    from_name: 'Pred',
    message: 'User failed to login'
};

const serviceID = 'service_dck355a';
const templateID = 'template_pzxagpf';

emailjs.send(SERVICE_ID,TEMPLATE_ID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });