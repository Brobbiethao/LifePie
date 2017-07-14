require('dotenv').config(); // This is for Heroku

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const dataController = require('./data_controller.js');
// const connectionString = "postgres://brobbiethao@localhost:5432/Life";

// const config = require('./config');
const app = express();


////////////////////           Server Begin      ////////////////////

massive(process.env.DATABSE_URL)
.then(function(dbInstance) {
  app.set('db', dbInstance)
});

/* aws.config.update({
  -----If I was using aws-----
  accesskey
  secretregion
  sig
}) */

// app.use( session(config.session) );
// masterRoutes(app)
app.use( bodyParser.json() );
app.use( '/', express.static(__dirname + "/public") );


//-----------------------------------------------------------------//
//-----------------        End Point Begin        -----------------//
//                              //Get//                            //
app.get("/api/allUsers", dataController.getAllUsers);
app.get("/api/user/:profilename", dataController.getUser);
app.get("/api/life", dataController.getLife);
app.get("api/getProfile", dataController.getMe)


//                              //POST//                           //
app.post("/api/createUser", dataController.createUser);
app.post('api/createLife', dataController.createLife);

//-----------------         End Point End         -----------------//
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
////////////////////            Server End        ///////////////////

app.listen(3000, function() {
  console.log("I hear it!")
})
