const Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts);

const CityDetailView = function () {};

CityDetailView.prototype.createCityDetail = function (city) {
  const cityDetail = document.createElement('div');
  cityDetail.classList.add('city-detail');

  const cityName = document.createElement('h1');
  cityName.textContent = city.name;
  cityDetail.appendChild(cityName);

  const citySummary = document.createElement('div');
  citySummary.innerHTML = city.summary;
  cityDetail.appendChild(citySummary);

  // const categoryHeader = document.createElement('h4');
  // categoryHeader.textContent = 'Quality of Life';
  // cityDetail.appendChild(categoryHeader);

  // const categoriesList = document.createElement('ul');
  //
  // this.renderCityDetailListItems(city.categories, categoriesList);
  //
  // cityDetail.appendChild(categoriesList);

  // console.log(city);
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
      type: 'bar',
      height: 360,
      width: 590,
      spacing: 20,
      borderRadius: 10
    },
    title: {
      text: 'Quality of Living Stats'
    },
    // subtitle: {
    //   text: 'Source: <a href="https://developers.teleport.org/api/">Teleport Public APIs</a>'
    // },
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
      max: 10,
      tickInterval: 1,
      title: {
        text: 'City Score Out of 10',
        align: 'middle'
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
        {y:stats[0], color:'#5833FF'},
        {y:stats[1], color:'#4933FF'},
        {y:stats[2], color:'#3933FF'},
        {y:stats[3], color:'#334BFF'},
        {y:stats[4], color:'#336AFF'},
        {y:stats[5], color:'#3385FF'},
        {y:stats[6], color:'#339DFF'},
        {y:stats[7], color:'#33B8FF'},
        {y:stats[8], color:'#33D3FF'},
        {y:stats[9], color:'#2cd8e8'},
        {y:stats[10], color:'#2be5df'},
        {y:stats[11], color:'#2de5d3'},
        {y:stats[12], color:'#2ee8c2'},
        {y:stats[13], color:'#2de2a3'},
        {y:stats[14], color:'#2be59b'},
        {y:stats[15], color:'#2de58b'},
        {y:stats[16], color:'#2ee875'}
        // {y:stats[0], color:'#5833FF'},
        // {y:stats[1], color:'#4933FF'},
        // {y:stats[2], color:'#3933FF'},
        // {y:stats[3], color:'#334BFF'},
        // {y:stats[4], color:'#336AFF'},
        // {y:stats[5], color:'#3385FF'},
        // {y:stats[6], color:'#339DFF'},
        // {y:stats[7], color:'#92cfe5'},
        // {y:stats[8], color:'#92cae5'},
        // {y:stats[9], color:'#92c1e5'},
        // {y:stats[10], color:'#92b8e5'},
        // {y:stats[11], color:'#92a1e5'},
        // {y:stats[12], color:'#929de5'},
        // {y:stats[13], color:'#33FFB8'},
        // {y:stats[14], color:'#33FFAC'},
        // {y:stats[15], color:'#33FF9D'},
        // {y:stats[16], color:'#33FF82'}
       ]
    }]
  });
};



module.exports = CityDetailView;
