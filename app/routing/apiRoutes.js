//Packages
const path = require('path');

const data = require('../data/friends');



//Routing
module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //res.json(path.join(__dirname, '../data/friends.js'));
    data.push(req.body);
  });
};
