var fs = require("fs");
var olivertwist = "../resources/oliver-twist.txt";
var firstNames = "../resources/first-names.txt";

(function main() {
  // reads oliver twist file
  fs.readFile(olivertwist, "utf8", function (err, bookData) {
    if (err) throw err;

    // reads first-names.txt
    fs.readFile(firstNames, "utf8", function (err, firstNamedata) {
      if (err) throw err;

      // uses data from txt to split into spaces
      var firstNameWordArray = splitByWords(firstNamedata);

      var bookArray = splitByWords(bookData);

      // creates new array of firstwords from book
      let foundNamesArray = bookArray.filter((el) =>
        firstNameWordArray.includes(el)
      );

      // make a new object
      var count = {};
      foundNamesArray.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
      });

      var sortedNamesArray = sortByCount(count);

      // writes the sorted names
      fs.writeFileSync(
        "../resources/sorted-names.json",
        JSON.stringify(sortedNamesArray)
      );
      console.log("File saved!");
    });
  });
})();

/**
 * Takes the text file and split it by spaces
 *
 * @param {string} text - A string param
 * @return {Array} An array
 *
 */
function splitByWords(text) {
  return text.split(/\s+/);
}

/**
 * sort by count in descending order
 *
 * @param {string} wordsMap - A string param
 * @return {Array} An array of objects
 *
 */
function sortByCount(wordsMap) {
  let wordsArray = [];
  wordsArray = Object.keys(wordsMap).map(function (key) {
    return {
      name: key,
      total: wordsMap[key],
    };
  });

  wordsArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return wordsArray;
}
