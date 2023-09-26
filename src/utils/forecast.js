const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query='+ encodeURIComponent(latitude)+', '+encodeURIComponent(longitude)+'&units=m';
    
    request({ url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather server', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined);
        }else{
        callback(undefined, {
            temperature: body.current.temperature + '℃',
            wind_speed: body.current.wind_speed + ' km/h',
            location: body.location.name,
            humidity: body.current.wind_speed + '%'
        }); 
        }; 
    });
};

module.exports = forecast;