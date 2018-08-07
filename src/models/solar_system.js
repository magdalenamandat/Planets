const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:click', (evt) => {
    const selectedIndex = evt.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;
