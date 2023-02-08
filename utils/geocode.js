import request from 'postman-request'

const geocode = (address, callback) => {
  const url = 'http://api.positionstack.com/v1/forward?access_key=012a64c5ebbffd27e6617698af002eb9&&query=' + encodeURIComponent(address)
  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback("Unable to find location. This is earth, not mars", undefined)
    } else {
      callback('Undefined', {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name
      })
      console.log(`Location: ${body.data[0].name} Latitude: ${body.data[0].latitude} Longitude: ${body.data[0].longitude}`)
      // console.log(body)
    }
  
  })
}

export { geocode }