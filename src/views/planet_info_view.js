const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function (container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  })
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent= `The ${planet.name}, has an orbit of ${planet.orbit}. Each day is equal to ${planet.day} Earth days. It has a surface area of ${planet.surfaceArea}, a volume of ${planet.volume}. Gravity of ${planet.gravity}N. It has ${planet.moons}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
}

module.exports = PlanetInfoView;
