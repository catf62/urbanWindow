const Highcharts = require('highcharts');
// console.log('highcharts bananas');
// // Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

// const HighchartsGraph = function(){
//
// }

// Create the chart
const HighchartsGraph = function (container) {
  const chart = new Highcharts.Chart({
// HighchartsGraph.prototype.renderTestgraph = function (container) {
  // Highcharts.chart({
      chart: {
          type: 'bar',
          renderTo: container
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
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
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31]
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40]
      }]
  });

};

module.exports = Highcharts;
