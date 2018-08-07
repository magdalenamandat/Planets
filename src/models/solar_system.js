const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:selected-planet-ready', (evt) => {
    const selectedIndex = evt.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail = function (planetName) {
  let selectedPlanet;
  // loop through all the planets, then find the one with the matching name
  for (const planet of this.planets){
    if (planet.name === planetName){
      selectedPlanet = planet;
    }
  }

  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;
