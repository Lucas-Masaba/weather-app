import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'
import sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

const address = process.argv[2]

if(!address) {
  console.log('Please enter adress')
} else {
  geocode(address, (error, geocodeData) => { 
    if(error) {
      console.log(error)
    }
    
    forecast(`${geocodeData.latitude},${geocodeData.longitude}`, (error, forecastData) => {
      if(error) {
        console.log(error)
      }
      console.log(geocodeData.location)
      console.log(forecastData)
    })
  
  })
  
}


