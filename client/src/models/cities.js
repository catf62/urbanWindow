const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Cities = function (city_options, url) {
  this.city_options = city_options;
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Cities.prototype.bindEvents = function () {
  PubSub.subscribe(`SelectView:selected_city-${this.city_options}`, (evt) => {
    this.postData(evt.detail);
  });
};

Cities.prototype.getData = function () {
  this.request.get()
    .then((consumables) => {
      PubSub.publish(`Cities:${this.category}-data-loaded`, consumables);
    })
    .catch(console.error);
};

Cities.prototype.postData = function (formData) {
  this.request.post(formData)
    .then((consumables) => {
      PubSub.publish(`Cities:${this.category}-data-loaded`, consumables);
    });
};

module.exports = Cities;
