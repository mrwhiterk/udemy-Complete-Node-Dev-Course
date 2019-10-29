const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>')
});

app.get('/help', (req, res) => {
  res.json([1,2])
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
});

app.get('/weather', (req, res) => {
  res.send({ forecast: 'hot', location: 'bmore'})
});

app.listen(3000, () => {
  console.log('server: 3000')
})
