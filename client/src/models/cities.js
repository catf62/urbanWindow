const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  this.citiesData = [];
}

Cities.prototype.getCityNames = function () {
  const cityNames = this.citiesData.map(city => city.name);
  return cityNames;
};

Cities.prototype.bindEvents = function () {
  PubSub.subscribe(`SelectView:change`, (evt) => {
    const cityName = evt.detail;
    this.postData(cityName);
  });
};

Cities.prototype.getData = function () {
  const request = new RequestHelper('http://localhost:3000/api/cities');
  request.get()
    .then((cities) => {
      // store the data in a variable
      this.citiesData = cities;


      // get an array of just the names
      const cityNames = this.getCityNames();
      // publish another event sending out just the list of the names
      PubSub.publish("Cities:city-names-ready", cityNames);
    })
    .catch(console.error);
};

Cities.prototype.postData = function (cityName) {
  const selectedCity = this.findCityByName(cityName);
  PubSub.publish('Cities:cities-ready', selectedCity);
};

Cities.prototype.findCityByName = function (cityName) {
  const selectedCity = this.citiesData.filter((city) => {
    return city.name === cityName
  });
  return selectedCity;
};

module.exports = Cities;
