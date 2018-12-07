const RequestHelper = require('../helpers/request_helpers.js')

const Seeds = function () {
  this.cities = [];
  this.cityNames = [];
  this.cityNamesUrl = 'https://api.teleport.org/api/urban_areas';
};




Seeds.prototype.getData = function () {
  const cityNameRequest = new RequestHelper(this.cityNamesUrl);
  cityNameRequest.get()
  .then((response) => {
    this.extractCityNames(response);
  })
  .then((response) => {
  this.getPicture()
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

Seeds.prototype.getPicture = function () {
  console.log('dog');
  console.log(this.cityNames)
  this.cityNames.forEach((cityName) => {
    const cleanName = cityName.toLowerCase().replace(' ', '-');
    const pictureRequest = new RequestHelper(this.cityNamesUrl + `/slug:${cleanName}/images`)

    pictureRequest.get()
    .then((response) => {
      console.log(response);
      this.extractPicture(response)
    })
    .catch(console.error);
  });
};

Seeds.prototype.extractPicture = function (response) {
  const pictureUrl = response['photos'][0]['image']['web'];
  console.log('dog');

};

module.exports = Seeds;
