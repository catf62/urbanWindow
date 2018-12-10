const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Cities:city-names-ready', (evt) => this.populateSelect(evt.detail));

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
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

// SelectView.prototype.bindEvents = function () {
//   this.selectElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const data = this.createData(evt.target);
//     const city_options = evt.target.city_options.value;
//     PubSub.publish(`SelectView:submit-cities`, data);
//     evt.target.reset();
//   });
// };
//
// SelectView.prototype.createData = function (form) {
//   console.log(form.city_options.value);
//   return {
//     name: form.city_options.value
//   };
// };

module.exports = SelectView;
