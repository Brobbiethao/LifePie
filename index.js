const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const controller = require('./data_controller.js')

const config = require('./config')
const app = express()

app.use( cors() )
app.use( bodyParser.json() )
app.use( session(config.session) )
app.use( express.static(__dirname + "/public") )

massive( config.postgres).then(dbInstance => {
  app.set('db', dbInstance)
})
/*
getAllfamily
getAllqol
getAlluserdata
getAllself
*/





app.listen(3000, function() {
  console.log("I hear it!")
})
