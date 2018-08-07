const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element= element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:all-planets-ready', (evt) => {
    const allPlanets = evt.detail;
    this.populate(allPlanets);
  });

  this.element.addEventListener('change', (evt) =>{
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function (planetsData) {
  planetsData.forEach((planet, index) =>{
    const option = document.createElement('option');
    option.textContent = planet.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
