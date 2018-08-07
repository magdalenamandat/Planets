const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const planetsData = require('./data/planets.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const planetInfoSection = document.querySelector('.planet-details');
  const planetInfoDisplay = new PlanetInfoView(planetInfoSection);
  planetInfoDisplay.bindEvents();

  const planetMenu = document.querySelector('.planets-menu')
  const selectPlanet = new SelectView(planetMenu);
  selectPlanet.bindEvents();

  const planetDataSource = new SolarSystem(planetsData);
  planetDataSource.bindEvents();


});
