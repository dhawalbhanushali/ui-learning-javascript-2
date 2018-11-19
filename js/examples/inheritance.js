var company = {
  name: 'Avalara',
  location: 'Pune',
  getDescription (val) {
    return this.name + ' - ' + this.location + ' ' + val;
  }
}

var avalara = Object.create(company);
// console.log(avalara.getDescription('Doodle'));

// var infy = Object.create(company);
// console.log(infy.getDescription('Google'));

avalara.headCount = function(count) {
  return count;
}

var bestCompany = Object.create(avalara);
console.log(bestCompany);
