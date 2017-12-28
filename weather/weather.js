const request = require('request');


var getWeather = (lat,log, callback) => {
    request({
        url: 'https://api.darksky.net/forecast/'+apiKey+'/'+lat+','+log+'?units=si',
        json:true
    },(error,response,body) => {
        if(error){
            callback('Unable to connect Forecast.io server')
        }else if(response.statusCode===400){
            callback('Unable to fetch weather')
        }else if(!error && response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather!');
        }
    });

}

module.exports.getWeather = getWeather;