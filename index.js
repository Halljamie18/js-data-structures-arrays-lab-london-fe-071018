// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver () {
  drivers.push("Ralph");
}

function destructivelyPrependDriver () {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver() {
  return drivers.concat("Broom");
}

function prependDriver() {
  return drivers.slice(0, 2);
}

function removeLastDriver() {
  return drivers.slice(0, 2);
}

function removeLastDriver() {
  return drivers.slice(0, 2);
}

// var newLength = fruits.push('Orange');


