const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  this.selectElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = this.createData(evt.target);
    const city_options = evt.target.city_options.value;
    PubSub.publish(`SelectView:submit-${city_options}`, data);
    evt.target.reset();
  });
};

SelectView.prototype.createData = function (form) {
  return {
    name: form.city_options.value
  };
};

module.exports = SelectView;
