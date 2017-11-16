//Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Initialize express
const app = express();

// Specify the port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importing routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlroutes')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
