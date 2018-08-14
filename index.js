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
  return drivers.slice("Arnold");
}

// var newLength = fruits.push('Orange');


