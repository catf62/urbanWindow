const CityDetailView = function () {};

CityDetailView.prototype.createCityDetail = function (city) {
  const cityDetail = document.createElement('div');
  cityDetail.classList.add('city-detail');

  const cityName = document.createElement('h3');
  cityName.textContent = city.city_name;
  cityDetail.appendChild(cityName);

  const citySummary = document.createElement('p');
  citySummary.textContent = city.city_summary;
  cityDetail.appendChild(citySummary);

  const categoryHeader = document.createElement('h4');
  categoryHeader.textContent = 'Quality of Life';
  cityDetail.appendChild(categoryHeader);

  const categoriesList = document.createElement('ul');

  this.renderCityDetailListItems(city.categories, categoriesList);

  cityDetail.appendChild(categoriesList);
  return cityDetail;
};

CityDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;

};

CityDetailView.prototype.renderCityDetailListItems = function (categories_array, categoriesList) {
  categories_array.forEach((category) => {
    const categoryName = category.name;
    const categoryScore = category.score_out_of_10;
    const elementDetail = this.createDetailListItem(categoryName, categoryScore);
    categoriesList.appendChild(elementDetail);
  });

};

module.exports = CityDetailView;
