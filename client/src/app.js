// link to the model
const Cities = require('./models/cities.js');
// link to the view which displays data
const ListView = require('./views/list_view');
// link to the view where the user chooses a city
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  // listening for a city selection being made
  const selectElement = document.querySelector('select#city-options');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  // making a cities list element
  const listContainer = document.querySelector('#cities-list');
  const citiesListView = new ListView(listContainer);
  citiesListView.bindEvents();

  // const apiUrl = 'http://localhost:3000/api';
  //
  // const cities = new Cities('cities', `${apiUrl}/cities`);
  const cities = new Cities;
  cities.bindEvents();
  cities.getData();
});
