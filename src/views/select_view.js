const PubSub = require('../helpers/pub_sub.js');

const SelectPlanet = function(){
};

SelectPlanet.prototype.bindEvents = function () {
  const planet = document.querySelector('planets-menu');
  planet.addEventListener('click', (evt) =>{
    const planetId = evt.target.id;
    PubSub.publish('InputView:planet-inputted', planetId);
  });
};


module.exports = SelectView;
