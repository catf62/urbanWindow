const CityDetailView = function () {};

CityDetailView.prototype.createCityDetail = function (city) {
  const cityDetail = document.createElement('div');
  cityDetail.classList.add('city-detail');

  const cityName = document.createElement('h3');
  cityName.textContent = city.city_name;
  cityDetail.appendChild(cityName);

  const detailsList = document.createElement('ul');
  const imageUrl = this.createDetailListItem('Image-url', city.image_url);
  detailsList.appendChild(imageUrl);

  const categories = this.createDetailListItem('Categories', city.categories);
  detailsList.appendChild(categories);

  cityDetail.appendChild(detailsList);
  return cityDetail;
};

CityDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
  
};

module.exports = CityDetailView;
