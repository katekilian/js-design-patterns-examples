'use strict';

var Calculator = function (numberOne, numberTwo) {
  this.numberOne = numberOne;
  this.numberTwo = numberTwo;
}

Calculator.prototype.add = function() {

};

Object.defineProperties(Calculator.prototype, {
  "model": {
    get: function() {
      return this.year;
    },
    set: function(year) {
      return this.year = year;
    }
  }
});

var calculator = new Calculator(2,3);

calculator.model = 2010;
console.log(calculator.year);
console.log(calculator.model);
