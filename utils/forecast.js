import request from "postman-request";

const forecast = (coordinates, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=7055d2cad18bafa3942776d3ad9f4128&query=' + encodeURI(coordinates)

  request({url: url, json: true}, (error, response, body) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback("Unable to find forecast. This is earth, not mars", undefined)
    } else {
      callback('Undefined', {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike
      })
      console.log(`It is currently ${body.current.temperature} degrees  but it feels like ${body.current.feelslike} degrees`)    }
  })

}

export { forecast }