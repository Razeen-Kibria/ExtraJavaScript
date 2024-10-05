//--------------task-01-----------------
/*
function animalCalculator(depth) {
  var animal = 0;
  if (depth <= 10) {
    animal = depth * 50;
  } else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
  } else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 200;
    animal = firstPart + secondPart + thirdPart;
  }
  return animal;
}
var totalAnimals = animalCalculator(22);
console.log(totalAnimals);


//----------------------Task-02-----------Functions---------------------

function explain_CallBack(fullName, age, task) {
  console.log("Hello", fullName);
  console.log("your age:", age);
  task();
}

function handWash() {
  console.log("Wash your hand properly ");
}

function takeShower() {
  console.log("Plz take a shower because you are beautiful!");
}

explain_CallBack("Razeen kibria", 23, handWash);
explain_CallBack("Sayma sultana", 19, takeShower);
*/

//----------------------Task-03---------Argument--Functions---------------------

//---------Always Remembers argument can't push or pop in function method------------------

function addNumber(num1, num2) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    var num = arguments[i];
    sum = sum + num;
  }
  return sum;
}
var result = addNumber(20, 30, 40, 50);
console.log(result);
