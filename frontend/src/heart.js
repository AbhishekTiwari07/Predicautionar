var request = require('request');

const risk = (data,callback)=>{
    var obj = JSON.parse(data);
    var options = {
        'method': 'POST',
        'url': 'http://0.0.0.0:5000/predict',
        'headers': {
        },
        formData: obj
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        callback(undefined, response.body);
      });

}
module.exports = risk