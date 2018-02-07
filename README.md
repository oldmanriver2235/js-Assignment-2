# ChooseRandom Assignment

In this assignment, students are tasked with writing a function, ```chooseRandom```, which takes an array and a number
and returns a new array containing the given number of random elements selected from the given array. The array should default to an empty array and the number should default to a random number between 1 and the size of the given array. If the given number of elements is less than or equal to zero or greater than the number of elements in the array, then an array of a random size between 1 and the given arrays length should be returned. If an array of size 0 or 1 is passed into the function, then ```chooseRandom``` should simply return the given array.


Students should
use the MDN documentation and the information from their lesson about functional programming and, specifically, transducers to create this function. Lastly,
students must export their ```createRandom``` function from the lib.js file in order to run the included test cases.

## Goal

---

Expose students to functional programming fundamentals by having them use transducers which were introduced in ES6 and
immutably transform arrays. Unfortunately, because ```chooseRandom``` should do exactly what it says, it will not be
referentially transparent and therefore is not a pure function.

## Tasks

- [ ] Implement chooseRandom function
- [ ] Should take 2 parameters, An array and a number
- [ ] The array should default to an empty array
- [ ] The number should have a default value between 1 and the given array length
- [ ] If an array of size 0 or 1 is given, then just return that array
- [ ] Should always return an array
- [ ] Should not mutate the array passed in
- [ ] Should return a random array if possible (size > 1)
- [ ] Should return an array of the passed in length
- [ ] Run command ```npm test``` and ensure all tests pass successfully
