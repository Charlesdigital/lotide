const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  }
};
