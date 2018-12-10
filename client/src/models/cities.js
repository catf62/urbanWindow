const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  this.citiesData = [];
}

Cities.prototype.getCityNames = function () {
  const cityNames = this.citiesData.map(city => city.name);
  return cityNames;
};

// const Cities = function (city_options, url) {
//   this.city_options = city_options;
//   this.url = url;
//   this.request = new RequestHelper(this.url);
// };
//
Cities.prototype.bindEvents = function () {
  PubSub.subscribe(`SelectView:change`, (evt) => {
    const cityIndex = evt.detail;
    this.postData(cityIndex);
    console.log(cityIndex);
  });
};

Cities.prototype.getData = function () {
  const request = new RequestHelper('http://localhost:3000/api/cities');
  request.get()
    .then((cities) => {
      // store the data in a variable
      this.citiesData = cities;
      // publish all of the data for the cities
      PubSub.publish('Cities:cities-ready', this.citiesData);
      // get an array of just the names
      const cityNames = this.getCityNames();
      // publish another event sending out just the list of the names
      PubSub.publish("Cities:city-names-ready", cityNames);
    })
    .catch(console.error);
};

Cities.prototype.postData = function (cityIndex) {
  const selectedCity = this.filterAllCitiesByName(cityIndex);
  console.log(this);
  console.log(cityIndex);
  PubSub.publish('Cities:cities-ready', selectedCity);
};

Cities.prototype.filterAllCitiesByName = function (cityIndex) {
  const selectedCity = this.citiesData[cityIndex];
  return [selectedCity];
};

module.exports = Cities;
