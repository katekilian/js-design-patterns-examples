'use strict';

var Coffee = function(options) {
  this.size = options.size || "small";
  this.temperature = options.temperature || "hot";
  this.sweetened = options.sweetened || false;
  this.quantity = options.quantity || 1;
};

var Tea = function(options) {
  this.teaType = options.teaType || "black tea";
  this.sweetened = options.sweetened || true;
  this.sweetenerType = options.sweetenerType || "honey";
  this.quantity = options.quantity || 2;
};

var DrinkFactory = function() {};

DrinkFactory.prototype.drinkType = Coffee;

DrinkFactory.prototype.createDrink = function(options) {
  switch(options.drinkType) {
    case "Coffee":
      this.drinkType = Coffee;
      break;
    case "Tea":
      this.drinkType = Tea;
      break;
  };  

  return new this.drinkType(options);
};

// -------------------

var coffeeFactory = new DrinkFactory();

var nonDefaultsCoffee = coffeeFactory.createDrink({
  drinkType: "Coffee",
  size: "medium", 
  temperature: "lukewarm", 
  sweetened: true
});

console.log(nonDefaultsCoffee);
console.log(nonDefaultsCoffee instanceof Coffee);

var defaultsCoffee = coffeeFactory.createDrink({});

console.log(defaultsCoffee);
console.log(defaultsCoffee instanceof Coffee);

var TeaFactory = function() {};

TeaFactory.prototype = new DrinkFactory();
TeaFactory.prototype.drinkType = Tea;

var teaFactory = new TeaFactory();
var defaultsTea = teaFactory.createDrink({});

console.log(defaultsTea);
console.log(defaultsTea instanceof Tea);

