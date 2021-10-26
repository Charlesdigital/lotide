const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
};

//check if each element in the array are the same array1[i] === array2[i]
function eqArrays(array1, array2) {
    if(array1.length !== array2.length) {
        return false
    }
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
          return false
      }
    }
    return true;