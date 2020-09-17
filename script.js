var numOne = Math.floor(Math.random()*6) + 1;
var numTwo = Math.floor(Math.random()*6)  + 1;
var numThree = Math.floor(Math.random()*6)  + 1;

var animal = "Unknown";
var food = "Unknown";
var enviroment = "Unknown";

//console.log(numOne);
//console.log(numTwo);
//console.log(numThree);

//Animal selector

if (numOne === 1) {
  var animal = "Zebra";
}

else if (numOne === 2) {
  var animal = "Snake";
}

else if (numOne === 3) {
  var animal = "Polar Bear";
}

else if (numOne === 4) {
  var animal = "Dog";
}

else if (numOne === 5) {
  var animal = "Cat";
}

else if (numOne === 6) {
  var animal = "Turtle";
}

//Food Selector

if (numTwo === 1) {
  var food = "cake";
}

else if (numTwo === 2) {
  var food = "wings";
}

else if (numTwo === 3) {
  var food = "cheese";
}

else if (numTwo === 4) {
  var food = "corn";
}

else if (numTwo === 5) {
  var food = "apples";
}

else if (numTwo === 6) {
  var food = "carrots";
}

//Enviroment selector

if (numThree === 1) {
  var enviroment = "desert";
}

else if (numThree === 2) {
  var enviroment = "jungle";
}

else if (numThree === 3) {
  var enviroment = "ocean";
}

else if (numThree === 4) {
  var enviroment = "forest";
}

else if (numThree === 5) {
  var enviroment = "savanah";
}

else if (numThree === 6) {
  var enviroment = "arctic";
}

//Print to document

document.querySelector(".madlib").innerHTML = `${animal}s love to eat ${food} from the ${enviroment}.`