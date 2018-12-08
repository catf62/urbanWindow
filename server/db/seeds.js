const RequestHelper = require('../helpers/request_helpers.js')

const Seeds = function () {
  this.cities = [];
  this.cityNames = [];
  this.cityUrl = 'https://api.teleport.org/api/urban_areas';
};

Seeds.prototype.getData = function () {
  const cityNameRequest = new RequestHelper(this.cityUrl);  // get request for cities
  cityNameRequest.get()
  .then((citiesResponse) => {
    this.extractCityNames(citiesResponse); // save names to this.cityNames and creates a city object in this.cities
    return citiesResponse['_links']['ua:item']; // return array of cities - names and link
  })
  .then((cities) => {
    this.getPicture(cities);
    return cities // save picture url to the city in this.cities
  })
  .then((cities) => {
    this.getScores(cities);
  })
  .catch(console.error);
};


// CITY NAMES

Seeds.prototype.extractCityNames = function (response) {
  const citiesArray = response['_links']['ua:item'];
  citiesArray.forEach((city) => {
    this.cityNames.push(city['name']);
    let cityObject = {'name': city['name']}
    this.cities.push(cityObject)
  });
}

// CITY PICTURES

Seeds.prototype.getPicture = function (cities) {
// cities is an array of city name and url
  cities.forEach((city) => {
    let cityPictureURL;
    const pictureRequest = new RequestHelper(city['href'] + `images`) // get request of the city image url
    pictureRequest.get()
    .then((pictureObject) => {
      cityPictureURL = this.extractPicture(pictureObject);
      // find the city in this.cities and add cityPictureURL
      this.addPictureURL(city, cityPictureURL);
      // find the index of the objects with the city name
      // add a new key value pair to the object
    })
    .catch(console.error);
  });
};

Seeds.prototype.extractPicture = function (pictureObject) {
  const pictureUrl = pictureObject['photos'][0]['image']['web'];
  return pictureUrl;
};

Seeds.prototype.addPictureURL = function (searchCity, cityPictureURL) {
  const index = this.cities.findIndex((cityInCities) => {
    return cityInCities['name'] === searchCity['name']
  })
  const selectedCity = this.cities[index];
  selectedCity.pictureUrl = cityPictureURL;
};

// CITY SCORES

Seeds.prototype.getScores = function (cities) {
    cities.forEach((city) => {
      let cityScoreRequest = new RequestHelper(city['href'] + 'scores')
      cityScoreRequest.get()
      .then((scoreObject) => {
        return this.addScore(city, scoreObject['categories']);
      })
      .then((response) => {
        console.log(this.cities);
      })
    .catch(console.error);
    })
}

Seeds.prototype.addScore = function (searchCity, scores) {
  const index = this.cities.findIndex((cityInCities) => {
    return cityInCities['name'] === searchCity['name']
  })
  const selectedCity = this.cities[index];
  selectedCity.score = scores;
};


module.exports = Seeds;
