'use strict';

class House {
  constructor() {
    this.propertySize = 3;
    this.sqFt = 1200;
    this.furnished = false;
  }
}

const extraWing = (house) => {
  house.sqFt = house.sqFt + 500;
}

const extraFloor = (house) => {
  house.sqFt = house.sqFt + 900;
}

const furnished = (house) => {
  house.furnished = true;
}

const addition = (house) => {
  house.addition = true;
}

const home = new House();

extraWing(home);
extraFloor(home);
// expect 2600
furnished(home);
addition(home);

console.log('This is the modified home',home);


// function namedFunction
// vs
// var namedFunciton = function() {}
