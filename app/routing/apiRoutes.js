//Packages
const path = require('path');

const data = require('../data/friends');



//Routing
module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    let match = null;
    let comparison = null;

    for(var i = 0; i < data.length; i++){
      console.log(data[i]);

      let tempMatch = 0;
      let scores = data[i].scores;

      console.log(scores);

      for(var j = 0; j < scores.length; j++){
        tempMatch += Math.abs( parseFloat(scores[j]) - req.body.scores[j]);
      }
      if(comparison === null){
        comparison = tempMatch;
        match = data[i];
      }else if (tempMatch < comparison){
        comparison = tempMatch;
        match = data[i];
      }
    }
    data.push(req.body);
    res.json(match);
  });
};
