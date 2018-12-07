const RequestHelper = require('../helpers/request_helpers.js')

const Seeds = function () {
  this.cities = [];
  this.cityNames = [];
  this.cityNamesUrl = 'https://api.teleport.org/api/urban_areas';
};




Seeds.prototype.getData = function () {
  const cityNameRequest = new RequestHelper(this.cityNamesUrl);
  cityNameRequest.get()
  .then((citiesResponse) => {
    this.extractCityNames(citiesResponse);
    return citiesResponse['_links']['ua:item'];
  })
  .then((cities) => {

  this.getPicture(cities)
  })
.catch(console.error);
};

Seeds.prototype.extractCityNames = function (response) {
  const citiesArray = response['_links']['ua:item'];
  citiesArray.forEach((city) => {
    this.cityNames.push(city['name']);
    let cityObject = {'name': city['name']}
    this.cities.push(cityObject)
  });

}

Seeds.prototype.getPicture = function (cities) {

  cities.forEach((city) => {

    const pictureRequest = new RequestHelper(city['href'] + `images`)
    console.log(city['href'] + `images`);
    let cityPictureURL;
    pictureRequest.get()
    .then((pictureObject) => {
      this.extractPicture(pictureObject)
    })
    .catch(console.error);
  });
};

Seeds.prototype.extractPicture = function (pictureObject) {
  const pictureUrl = pictureObject['photos'][0]['image']['web'];
  cityPictureURL = pictureUrl;
};

module.exports = Seeds;
