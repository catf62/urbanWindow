const PubSub = require('../helpers/pub_sub.js');
const CityDetailView = require('./city_detail_view');

const ListView = function (container) {
  this.container = container;
};

// const ListView = function (city_options, listElement) {
//   this.city_options = city_options;
//   this.listElement = listElement;
// };

ListView.prototype.bindEvents = function () {
  PubSub.subscribe("Cities:cities-ready", (evt) => {
    this.clearList();
    this.renderCityDetailView(evt.detail);
  });
};

ListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

ListView.prototype.renderCityDetailView = function (cities) {
  cities.forEach((city) => {
    const cityItem = this.createCityListItem(city);
    this.container.appendChild(cityItem);
  });
};

ListView.prototype.createCityListItem = function (city) {
  const cityDetailView = new CityDetailView();
  const cityDetail = cityDetailView.createCityDetail(city);
  return cityDetail;
};

module.exports = ListView;
