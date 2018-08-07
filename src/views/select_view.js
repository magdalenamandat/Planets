const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(menu){
  this.menu = menu;
};

SelectView.prototype.bindEvents = function () {
  this.menu.addEventListener('click', (evt) =>{
    const planetId = evt.target.id;
    PubSub.publish('SelectView:selected-planet-ready', planetId);
  });
};


module.exports = SelectView;
