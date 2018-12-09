// link to the model
const Cities = require('./models/cities.js');
// link to the view which displays data
const ListView = require('./views/list_view');
// link to the view where the user chooses a city
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  // listening for a city selection being made
  const selectElement = document.querySelector('form#city_options_form');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  // making a cities list element
  const citiesListElement = document.querySelector('ul#cities-list');
  const citiesListView = new ListView('cities', citiesListElement);
  citiesListView.bindEvents();

  const apiUrl = 'http://localhost:3000/api';

  const cities = new Cities('cities', `${apiUrl}/cities`);
  cities.bindEvents();
  cities.getData();

});
