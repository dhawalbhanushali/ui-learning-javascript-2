function Company() {
  this.name = 'Avalara';
  this.location = 'Pune';

  // what will happen if I return something here?
}

Company.prototype.getDescription = function () {
  return this.name + ' - ' + this.location;
}

var avalara = new Company();
console.log(avalara.getDescription());

var infosys = new Company();
console.log(infosys.getDescription());
