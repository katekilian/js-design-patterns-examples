
var Singleton = require('./example');

var singleA = new Singleton();
var singleB = new Singleton();


var singletonA = singleA.getInstance();
var singletonB = singleB.getInstance();

console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber());
