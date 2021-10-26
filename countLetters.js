//convert the string into an array, you can use for of short handle and it will loop through the string
//then use a for of loop to iterate through each element
//create an  empty object and push it there through key value left side . or [] notation = value
function countLetters(string) {
  //take in a string and then give a count of each letters
  // want to do a check that the string has only letters - not needed not asked

  let storeLetters = {};
  for (const letter of string) {
    if (!storeLetters[letter]) {
      storeLetters[letter] = 1;
    } else {
      storeLetters[letter] += 1;
    }
    //first check(or just add the new letter) will create an inital push to storeLetters
    // then after check if there's already a key in storeLetter and increment
  }
  return storeLetters;
}

console.log(countLetters("chicken"));
