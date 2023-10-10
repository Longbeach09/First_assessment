// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let bigNum = [];

  for (let number of numbers) {
    //aying let the numbers in the numbers array
    if (number > 10) bigNum.push(number); //continuing line 8  its saying if the number us bigger 10 push the number into a
    //vairiable called bigNum
  }

  return bigNum;
}

// console.log(greaterThanTen([1, 2, 3, 11, 12, 13]))

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let wordsWithB = []; //defining a array calling it workdsWithB

  for (let word of words) {
    //same as the last one its laying let the words in the words array
    if (word.toLowerCase().startsWith("b")) wordsWithB.push(word); //saying lowerCase the word and if it starts with b push it into the array
  }

  return wordsWithB;
}
// console.log(bWords(["banana", "orange", "apple", "Bonobo"]));

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  // Utilizing "spread" syntax
  return [...originalArray, ...additionalItems]; //this i googled and it kinda made sense but hopfully we can go over it

  // return originalArray.concat(additionalItems);

  // for(let i = 0; i < additionalItems.length; i++){
  //   originalArray.push(additionalItems[i])
  // }

  // additionalItems.forEach(item => originalArray.push(item))

  // return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const temp = []; //same as very im naming a array called temp
  for (let i = 0; i < items.length; i += 1) {
    //this is going thru the look untill it reaches the end
    if (items[i].length === length) temp.push(items[i]); //this says if the items[i's]length is = to the length push it to the array
  }
  return temp; //returning the array
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const temp = []; // setting a array and naming it temp
  for (let i = 0; i < items.length; i += 1) {
    //same thing going trough untill it reaches the end
    if (i % 2 === 0) temp.push(items[i]); //this is saying every other letter push into a array(had to google the "i % 2")
  }
  return temp; // return the
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const temp = []; // naming a array temp
  for (let i = 0; i < words.length; i += 1) {
    //same thing going thru the whole function
    if (words[i].startsWith(letter)) temp.push(i); // sayinf if the index of words starts with the letter push it to the array
  }
  return temp; // returning the array
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  // Clone the items array to a new array
  const sortedItems = [...items];

  // Sort the array in descending order
  for (let i = 0; i < sortedItems.length; i++) {
    for (let j = i + 1; j < sortedItems.length; j++) {
      if (sortedItems[i] < sortedItems[j]) {
        const temp = sortedItems[i];
        sortedItems[i] = sortedItems[j];
        sortedItems[j] = temp;
      }
    }
  }

  //   // Return n number of smallest items from the sorted array
  return sortedItems.slice(sortedItems.length - n);
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let i = 0; i < items.length; i += 1) {
    // going thru the whole thing like every other one
    if (items[i] === value) return i; // sayinf of the items index is equal to the value return index
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const temp = []; //setting a array called temp
  for (let i = start; i <= stop; i += 1) {
    // sayin the loop starts at the star and stops at the end preety simple
    temp.push(i); //pushes it to the array
  }
  return temp;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
