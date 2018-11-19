var india = {
  currency: 'Rupee',
  languages: ['Hindi', 'Marathi', 'English'],
  type: 'Democrary',

  summary: function() {
    return 'This country has a currency as ' + this.currency + ', languages as ' + this.languages.join(', ') + ' and it runs through ' + this.type;
  }
}

var knowCountry = function (name) {
  console.log('Summary of ' + name + ': ' + this.summary());
}


var indianCountry = knowCountry.bind(india, 'India');
indianCountry();


knowCountry.call(india, 'India');

knowCountry.apply(india, ['India']);
