const getIndex = function (str) {

  console.log(str);

  const categoryArray = ['Housing', 'Cost of Living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom', 'Safety', 'Healthcare', 'Education', 'Environmental Quality', 'Economy', 'Taxation', 'Internet Access', 'Leisure & Culture', 'Tolerance', 'Outdoors']

  const category = str.toLowerCase()
      .split('-')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');

  return categoryArray.findIndex((iteration) => {
    return iteration === category;
  })
}

module.exports = getIndex;
