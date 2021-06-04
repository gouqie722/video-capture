var express = require('express')
var utils = require('./util.js')
var app = new express()

app.use(express.static('./static/'))

app.get('/capture', utils.capture)

app.listen(3007, () => {
  console.log('server is running')
})