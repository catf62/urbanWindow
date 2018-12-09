const PubSub = require('../helpers/pub_sub.js');

const ListView = function (city_options, listElement) {
  this.city_options = city_options;
  this.listElement = listElement;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe(`SelectView:submit-${city_options}`, (evt) => {
    this.render(evt.detail);
  });
};

ListView.prototype.render = function (cityData) {
  this.clearList();
  cityData.forEach((item, index) => {
    const listItem = this.createListItem(item);
    this.listElement.appendChild(listItem);
  });
};

ListView.prototype.clearList = function () {
  this.listElement.innerHTML = '';
};

ListView.prototype.createListItem = function (item) {
  const listItem = document.createElement('li');
  const textContent = `${item.city_name}, ${item.image_url}, ${item.categories}`;
  listItem.textContent = textContent;
  return listItem;
};

module.exports = ListView;
