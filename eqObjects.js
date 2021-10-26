//comparing object vs object
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

//1. store the object key as a variable and loop through them
//2. check is the object is the same length else return false

const eqObjects = function (object1, object2) {
  //check if the length is the same
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // console.log(Object.keys(object1)) gets the key of ab in an array so you can do a for of ['a','b']

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    // console.log("key",key)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log("arrays")
      // console.log("eqArray", eqArrays(object1[key],object2[key]))
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // return breaks the loop and takes you out of the condition, so you !not: to break the loop, go through everything to check if everything is the same
      return false; //return break and takes you out of the condition, so you ! to break the loop and go through everything to check if everythi
    }
  }
  return true; // return is after the loop statemenet
};
//keys are not the same length
