const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const TeleportAutocomplete = require('../teleport-autocomplete.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  // const autocompleteContainer = document.querySelector('.autocomplete');

  TeleportAutocomplete
  .init('.my-input')
  .on('change', function(value) {
    const selectedCityName = value.name;
    console.log(selectedCityName);
    PubSub.publish('SelectView:change', selectedCityName);
  });

  //
  // PubSub.subscribe('Cities:city-names-ready', (evt) =>
  //  this.populateSelect(evt.detail));
  //
  // this.selectElement.addEventListener('change', (evt) => {
  //   const selectedIndex = evt.target.value;
  //   // PubSub.publish('SelectView:change', selectedIndex);
  //   console.log(selectedIndex);
  // });
};

SelectView.prototype.populateSelect = function (cityNames) {
  cityNames.forEach((cityName, index) => {
    const option = this.createCityOption(cityName, index);
    this.selectElement.appendChild(option);
  });
};

SelectView.prototype.createCityOption = function (cityName, index) {
  const option = document.createElement('option');
  option.textContent = cityName;
  option.value = index;
  return option;
};



module.exports = SelectView;
