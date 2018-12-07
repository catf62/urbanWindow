const RequestHelper = require('../helpers/request_helpers.js')

const Seeds = function () {
  this.cities = [];
  this.cityNames = [];
  this.cityNamesUrl = 'https://api.teleport.org/api/urban_areas';
};


Seeds.prototype.getData = function () {
  this.getCityNames();

};

Seeds.prototype.getCityNames = function () {
  const cityNameRequest = new RequestHelper(this.cityNamesUrl);
  cityNameRequest.get()
  .then((response) => {
    this.extractCityNames(response);
  })
.catch(console.error);
};

Seeds.prototype.extractCityNames = function (response) {
  const citiesArray = response['_links']['ua:item'];
  citiesArray.forEach((city) => {
    this.cityNames.push(city['name']);

  });
  console.log(this.cityNames);
}

module.exports = Seeds;
