const request = require('request')
const chalk = require('chalk')

require('dotenv').config()

const { API_KEY, MAP_BOX_API_KEY } = process.env

const url = `https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233?units=us`

request({ url, json: true }, (err, res) => {
  const {
    timezone,
    currently: { temperature, precipProbability },
    daily: {
      data: [{ summary }]
    }
  } = res.body
  
  console.log(
    chalk.green.inverse(
      `\n${summary} It is currently ${temperature} degrees in ${timezone.split('/')[1].replace('_',' ')}. There is a ${precipProbability}% chance of rain.\n`
    )
  )
})

let mapBoxUrl =
  `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${MAP_BOX_API_KEY}&limit=1`

request({ url: mapBoxUrl, json: true }, (err, res) => {
  const [ { center: [long, lat] } ] = res.body.features
  console.log(chalk.green('longitude', long, '\nlatitude', lat))
})
