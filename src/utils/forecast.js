const request = require('request')

const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?sccess_key=bc0c379dd98fb6b1dc6d19d1e4931360&query='+latitude + ',' + longitude + '&units=f' 

     request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast