const urlToString = function (str) {

  const category = str.toLowerCase()
  .split('-')
  .map(function(word) {
    return word[0].toUpperCase() + word.substr(1);
  })
  .join(' ');

  return category;
}

module.exports = urlToString;
