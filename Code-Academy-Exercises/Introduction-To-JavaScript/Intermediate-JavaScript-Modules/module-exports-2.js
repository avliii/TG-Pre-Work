const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//2-missionControl.js
//const Airplane = require('./2-airplane.js');
//console.log(Airplane.displayAirplane());

/* I exported an object that included data and functions */
