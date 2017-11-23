//Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Initialize express
const app = express();

//Specify the port
const PORT = process.env.PORT || 3000;

//Handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Importing routes for get/post friends
require('./app/routing/apiRoutes')(app);
//Importing routes for home and survey
require('./app/routing/htmlroutes')(app);

//Listen on PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
