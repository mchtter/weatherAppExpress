const express = require('express')
const cors = require('cors')

const axios = require('axios')

const app = express()
app.use(cors())
const port = 3001

let url = 'https://api.openweathermap.org/data/2.5/'
let cityParameter = 'weather?q='
let openweathermapAPI = '&appid=4cfc628c01194e9fe1d92654ba42fac6'


// app.get('/', (req, res) => {
//   let cityName = req.query.city;
//   axios.get(url + cityParameter + cityName + openweathermapAPI).then((response) => {
//         res.send(response.config)
//   })
// })

app.get('/city', (req, res) => {
  let cityName = req.query.city;

  axios.get(url + cityParameter + cityName + openweathermapAPI).then((response) => {

    try {
      res.send(response.data)
    } catch (error) {
      res.send("Invalid Argument")
    }
    
  })

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})