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
