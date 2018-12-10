const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function () {
  this.citiesData = [];
}

Cities.prototype.getCityNames = function () {
  const cityNames = this.citiesData.map(city => city.city_name);
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
    console.log(evt.detail);
    this.postData(evt.detail);
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

// Cities.prototype.postData = function (selectedCityIndex) {
//   this.request.post(selectedCityIndex)
//     .then((cities) => {
//       PubSub.publish(`Cities:Data Loaded`, cities);
//     });
// };

module.exports = Cities;
