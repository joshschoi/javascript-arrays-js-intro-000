var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newarray = array;
  return newarray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  var newarray = array;
  return newarray.push(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(-1);
}
