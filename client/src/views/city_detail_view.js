const Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);

const CityDetailView = function () {};

CityDetailView.prototype.createCityDetail = function (city) {
  const cityDetail = document.createElement('div');
  cityDetail.classList.add('city-detail');

  const cityName = document.createElement('h3');
  cityName.textContent = city.name;
  cityDetail.appendChild(cityName);

  const citySummary = document.createElement('div');
  citySummary.innerHTML = city.summary;
  cityDetail.appendChild(citySummary);

  const categoryHeader = document.createElement('h4');
  categoryHeader.textContent = 'Quality of Life';
  cityDetail.appendChild(categoryHeader);

  const categoriesList = document.createElement('ul');

  this.renderCityDetailListItems(city.categories, categoriesList);

  cityDetail.appendChild(categoriesList);

  graphDetail = this.createGraphDetail(city.categories);
  cityDetail.appendChild(graphDetail);

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

CityDetailView.prototype.createGraphDetail= function (categories_array) {
  const categoryScores = categories_array.map(category => category.score_out_of_10);
  const element = document.createElement('div');
  element.classList.add('graph-box');
  this.highChartsGraph(element, categoryScores);
  return element;

};

CityDetailView.prototype.highChartsGraph = function (element, stats) {
  console.log(stats);
  Highcharts.chart(element, {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Quality of Living Stats'
    },
    subtitle: {
      text: 'Source: <a href="https://developers.teleport.org/api/">Teleport Public APIs</a>'
    },
    xAxis: {
      categories: [
        'Housing',
        'Cost of Living',
        'Startups',
        'Venture Capital',
        'Travel Connectivity',
        'Commute',
        'Business Freedom',
        'Safety',
        'Healthcare',
        'Education',
        'Environmental Quality',
        'Economy',
        'Taxation',
        'Internet Access',
        'Leisure & Culture',
        'Tolerance',
        'Outdoors'
      ],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'City Score Out of 10',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      data: [
        stats[0],
        stats[1],
        stats[2],
        stats[3],
        stats[4],
        stats[5],
        stats[6],
        stats[7],
        stats[8],
        stats[9],
        stats[10],
        stats[11],
        stats[12],
        stats[13],
        stats[14],
        stats[15],
        stats[16]
       ]
    }]
  });
};



module.exports = CityDetailView;
