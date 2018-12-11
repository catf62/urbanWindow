const PubSub = require('../helpers/pub_sub.js');
const CityDetailView = require('./city_detail_view');

const GraphView = function (container) {
  this.container = container;
};

GraphView.prototype.bindEvents = function () {
  PubSub.subscribe("Cities:cities-ready", (evt) => {
    this.renderGraphView();
  });
};

GraphView.prototype.renderGraphView = function (container) {
  const graphDetail = document.createElement('div');
  citySummary.textContent = 'things and stuff';
};
