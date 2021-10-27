//do a for in loop of the objects
//use key and . notation to get the value and then run it through the callback

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
};

function findKey(movieRatings, callback) {
  for (const movie in movieRatings) {
    // console.log(rating[stars])
    if (callback(movieRatings[movie])) {
      return movie;
    }
  }
}

const movieRatings = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
console.log(findKey(movieRatings, (x) => x.stars === 2));
