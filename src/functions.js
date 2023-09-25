// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y; // returns x divided by y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2; // returns the average
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (x - y < 0.001) return true; //saying if x is close enough return true
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  //
  // return firstName + " " + lastName;
  // return [firstName, lastName].join(" ");
  return `${firstName} ${lastName}`; //printing last and first name togeth
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`; //same as the last printing the first and last one
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  // create an array of censorVowels
  // Loop over the string and if the character matches a vowel, then replace it with a *
  const split = string.split("");
  const vowels = ["a", "e", "i", "o", "u"]; // setting an array of vowels
  for (let i = 0; i < split.length; i += 1) {
    //going thru the whole function
    if (vowels.includes(split[i])) {
      //saying if vowels is incluted split index
      split[i] = "*"; //  saying of the split things are equal to *
    }
  }
  return split.join(""); //joined them together

  //used a weird google answer for this one im sure i could have optimized it but i couldnt fiqure it out
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  // const split = string.split("");
  // for (let i = 0; i < split.length; i += 1) {
  //   if (i % 2 === 1) split[i] = split[i].toUpperCase();
  // }
  // return split.join("");
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
const leetSpeakMap = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "5",
  t: "7",
};

function leetspeak(string) {
  // const split = string.split(""); // split the string input into an array
  // const charactersToSwap = Object.keys(leetSpeakMap); // get the keys from `leetSpeakMap` as an array, IE: ['a', 'e', 'i', 'o', 's', 't']
  // for (let i = 0; i < split.length; i += 1) {
  //   // loop over split string array
  //   if (charactersToSwap.includes(split[i])) {
  //     // check if the current character in the split string array is included in the leetSpeakMap keys array (charactersToSwap)
  //     split[i] = leetSpeakMap[split[i]]; // If theres a match, then assign that character to its equivilant mapped "leet speak" character from `leetSpeakMap`
  //   }
  // }
  // return split.join(""); // Return the array as a string after joining it back into string form
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
