//Packages
const path = require('path');

//Routing
module.exports = function(app){
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
  app.get("/:address", function(req, res) {
    //Declare address
    let address = req.params.address;

    switch (address) {
      case 'survey':
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        break;
      default:
        res.sendFile(path.join(__dirname, '../public/home.html'));
        break;
    }
  });

};
