const assertEqual = require("./assertEqual");

function head(data) {
  if (data.length === 0) {
    return undefined;
  }
  return data[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
