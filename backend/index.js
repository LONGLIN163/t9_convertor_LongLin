const express = require('express')
const app = express()
const port = 3001

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Method', 'post')
    res.header('Access-Control-Allow-Headers', '*')
    res.send()
})

var mainCtrl=require("./api/mainCtrl");

app.post('/convert',mainCtrl.doConvert);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`running on: http://localhost:${port}`)
})