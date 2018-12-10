const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

const cities = [
  { city_name: "Aarhus",
    image_url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/aarhus_web-1462c370b8.jpg",
    city_summary: "hurgle blurgle Aarhus is pure awesome, best city yes",
    categories: [
      {
        color: "#f3c32c",
        name: "Housing",
        score_out_of_10: "6.1315"
      },
      {
        color: "#f3d630",
        name: "Cost of Living",
        score_out_of_10: "4.015"
      },
      {
        color: "#f4eb33",
        name: "Startups",
        score_out_of_10: "2.827"
      }
    ]},
  { city_name: "Adelaide",
    image_url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/adelaide_web-e462ed5b74.jpg",
    city_summary: "hurgle blurgle Adelaide is pure awesome, best city yes",
    categories: [
      {
        color: "#f3c32c",
        name: "Housing",
        score_out_of_10: "6.3095"
      },
      {
        color: "#f3d630",
        name: "Cost of Living",
        score_out_of_10: "4.692"
      },
      {
        color: "#f4eb33",
        name: "Startups",
        score_out_of_10: "3.1365"
      }
    ] },
  { city_name: "Albuquerque",
    image_url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque_web-3079b54e59.jpg",
    city_summary: "hurgle blurgle Albuquerque is pure awesome, best city yes",
    categories: [
      {
        color: "#f3c32c",
        name: "Housing",
        score_out_of_10: "7.262"
      },
      {
        color: "#f3d630",
        name: "Cost of Living",
        score_out_of_10: "6.059"
      },
      {
        color: "#f4eb33",
        name: "Startups",
        score_out_of_10: "3.772"
      }
    ] },
  { city_name: "Almaty",
    image_url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/almaty_web-acac42d539.jpg",
    city_summary: "hurgle blurgle Almaty is pure awesome, best city yes",
    categories: [
      {
        color: "#f3c32c",
        name: "Housing",
        score_out_of_10: "9.282"
      },
      {
        color: "#f3d630",
        name: "Cost of Living",
        score_out_of_10: "9.333"
      },
      {
        color: "#f4eb33",
        name: "Startups",
        score_out_of_10: "2.4585"
      }
    ] }
];

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});

app.get('/api/cities', (req, res) => { // NEW
  res.json(cities);
});
