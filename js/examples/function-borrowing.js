var india = {
  currency: 'Rupee',
  languages: ['Hindi', 'Marathi', 'English'],
  type: 'Democrary',

  summary: function() {
    return 'This country has a currency as ' + this.currency + ', languages as ' + this.languages.join(', ') + ' and it runs through ' + this.type;
  }
}

var america = {
  currency: 'American Dollar',
  languages: ['English'],
  type: 'Democrary'
}

var knowCountry = function (name) {
  console.log('Summary of ' + name + ': ' + this.summary());
}

// ADITYA
// america.summary = india.summary;
// america.summary();
// console.log(america.summary());

// SRIKANT
console.log(india.summary.call(america, 'The America'));
