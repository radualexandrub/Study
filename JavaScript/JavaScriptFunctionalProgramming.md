# JavaScript Functional Programming

## Credits/Notes taken from:
- [JavaScript functional programming course - from freeCodeCamp (with slight modifications on _examples_)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/)


## Small Introduction

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: `INPUT -> PROCESS -> OUTPUT`.

Functional programming is about:
1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2. **Pure functions - the same input always gives the same output**
3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

The functional programming software development approach breaks a program into small, testable parts. Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs.


## Functional Programming Terminology

- ***Callbacks*** = functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter()`, the callback function tells JavaScript the criteria for how to filter an array.

```js
var over18 = [45, 4, 9, 16, 25].filter((value) => {return value > 18;});
```

- ***First class functions*** = Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value. In JavaScript, all functions are first class functions.

- ***Higher order functions*** = functions that take a function as an argument, or return a function as a return value.

- ***lambda functions*** = functions that are passed in to another function or returned from another function.

Here's a simple example:

```js
// Functions that returns a string representing a cup of green tea, black tea
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

/* We need to prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables,respectively. */
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC, // [ 'greenTea',  'greenTea', ... ]
  tea4BlackTeamFCC // [ 'blackTea',  'blackTea', ... ]
);
```


## Hazards of Using Imperative Programming (opposite of Functional Programming)

An imperative style in programming is one that gives the computer a set of statements to perform a task. In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

For example, array method `splice()` can be very hazardous because it modifies the array on which is called (and it also returns the removed items from the array):

```js
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

var appleIndex = 2
var fruitsBeforeApple = fruits.splice(0, appleIndex)

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Mango', 'Kiwi']

var fruitsAfterApple = fruits.splice(appleIndex + 1)

console.log(fruitsAfterApple); // WRONG: [] instead of ["Mango", "Kiwi"]
console.log(fruits); // [ 'Apple', 'Mango', 'Kiwi' ]
```

Note: `splice()` first parameter defines the index, while the second parameter defines how many elements should be removed from that index (including the element on that index). If the second parameter is not mentioned, the method will remove all the elements after speciefied index (including the element on that index):

```js
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
var appleIndex = 2
var fruitsAfterApple = fruits.splice(appleIndex + 1)

console.log(fruitsAfterApple); // [ 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]
```

<br/>

One way to solve the earlier problem is to call `var fruitsAfterApple = fruits.splice(1)` without specifying the old position of Apple element. However, our list of fruits will still be modified:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

var appleIndex = 2
var fruitsBeforeApple = fruits.splice(0, appleIndex)

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Mango', 'Kiwi']

var fruitsAfterApple = fruits.splice(1)

console.log(fruitsAfterApple); // CORRECT: [ 'Mango', 'Kiwi' ] 
console.log(fruits); // [ 'Apple' ]
```

HOWEVER, a better solution would be to use `slice()` instead of `splice()`. `slice()` DOES NOT modify the original array, it just returns a new array of elements which is a subset of the original array (without causing any side affects).

```js
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

var appleIndex = 2
var fruitsBeforeApple = fruits.slice(0, appleIndex)

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

var fruitsAfterApple = fruits.slice(appleIndex + 1)

console.log(fruitsAfterApple); // [ 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
```

<br/>

***One of the core principles of functional programming is to not change original arrays/objects/etc...*** Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.<br/>
In functional programming, changing or altering things is called ***mutation***, and the outcome is called ***a side effect***. A function, ideally, should be a ***pure function***, meaning that it does not cause any side effects.

<br/>

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

```js
function incrementer (num) { return num + 1; }
```

A more complex example: where we don't want to alter/modify our array used as a parameter:

```js
/* WRONG SOLUTION - HERE WE DO ALTER OUR GLOBAL VARIABLE fruitsList */
var fruitsList = ["Orange", "Apple", "Mango", "Kiwi"];

function add (localFruits, fruitName) {
  localFruits.push(fruitName);
  return localFruits;
}

var newFruitsList = add(fruitsList, 'Pineapple');

console.log(fruitsList); // ['Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple'] - Original List is modified
console.log(newFruitsList); // ['Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple']
```

```js
/* GOOD SOLUTION - we make a copy of the array */
var fruitsList = ["Orange", "Apple", "Mango", "Kiwi"];

function add (localFruits, fruitName) {
  let newLocalFruits = [...localFruits]
  newLocalFruits.push(fruitName);
  return newLocalFruits;
}

var newFruitsList = add(fruitsList, 'Pineapple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(newFruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple' ]
```

```js
/* GOOD, MORE ELEGANT SOLUTION */
var fruitsList = ["Orange", "Apple", "Mango", "Kiwi"];

function add (localFruits, fruitName) {
  return [...localFruits, fruitName];
}

var newFruitsList = add(fruitsList, 'Pineapple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(newFruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple' ]
```

<br/>

Let's look at a more complex example:

```js
// Another Example - SOLUTION 01
var fruitsList = ["Orange", "Apple", "Mango", "Kiwi"];

function add (fruitsList, fruitName) {
  let newfruitsList = [...fruitsList];
  newfruitsList.push(fruitName);
  return newfruitsList;
}

function remove (fruitsList, fruitName) {
  let newfruitsList = [...fruitsList];
  let fruit_index = fruitsList.indexOf(fruitName);
  if (fruit_index >= 0) {
    newfruitsList.splice(fruit_index, 1);
    return newfruitsList;
  }
}

var newfruitsList = add(fruitsList, 'Banana');
var newerfruitsList = remove(fruitsList, 'Orange');
var newestfruitsList = remove(add(fruitsList, 'Pineapple'), 'Apple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(newfruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Banana' ]
console.log(newerfruitsList); // [ 'Apple', 'Mango', 'Kiwi' ]
console.log(newestfruitsList); // [ 'Orange', 'Mango', 'Kiwi', 'Pineapple' ]
```

```js
// Another Example - SOLUTION 02
var fruitsList = ["Orange", "Apple", "Mango", "Kiwi"];

function add (fruitsList, fruitName) {
  return [...fruitsList, fruitName];
}

function remove (fruitsList, fruitName) {
  return fruitsList.filter(fruit => fruit !== fruitName);
}

var newfruitsList = add(fruitsList, 'Banana');
var newerfruitsList = remove(fruitsList, 'Orange');
var newestfruitsList = remove(add(fruitsList, 'Pineapple'), 'Apple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(newfruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Banana' ]
console.log(newerfruitsList); // [ 'Apple', 'Mango', 'Kiwi' ]
console.log(newestfruitsList); // [ 'Orange', 'Mango', 'Kiwi', 'Pineapple' ]
```



## Use the `map` Method to Extract Data from an Array

The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```
```js
// Usually, map() is used to replace a for loop
var names = [];
for (let i = 0; i < users.length; i++) { 
  names.push(users[i].name);
}
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```

Or, on a more complex example:

```js
/* Instead of using a for loop to store multiple objects with fewer properties into an array
   coming from another array of objects... */
var ratings = [];
for(let i = 0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}

/* We can use map() */
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

/* or even map() with parameter destructuring */
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({
  title,
  rating,
}));
```

<br/>

***`Array.prototype.map()`, or simply `map()`, is a pure function***, and its output depends solely on its inputs. Plus, it takes another function as its argument.

**Note**: The differences between `forEach` and `map` are:
- `Array.prototype.forEach()` — executes a provided function once for each array element and doesn’t actually return anything (undefined). `forEach` does mutate/modifies each element of the array called upon.
- `Array.prototype.map()` — creates a new array with the results of calling a provided function on every element in the calling array, without modifying the original array.

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
console.log(arr); // [2, 4, 6, 8, 10]
```
```js
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(num => {
    return num * 2;
});
console.log(arr); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Use the `filter` Method to Extract Data from an Array

`filter()` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`. In other words, it filters the array, based on the function passed to it, without modifying the original array.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

On a more complex example: Retrieve a list of objects with only `title` and `rating` keys, where `imdbRating` from the original array of objects is greater than or equal to 8.0. We will use `filter()`, **then** `map()`.

```js
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Director": "Christopher Nolan",
    "imdbRating": "8.8",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Director": "James Cameron",
    "imdbRating": "7.9",
  }
]

var filteredList;
filteredList = watchList
  .filter(item => item['imdbRating'] >= 8.0)
  .map(item => ({
    title: item['Title'],
    rating: item['imdbRating']
  }));
console.log(filteredList); // [ { title: 'Inception', rating: '8.8' } ]
```
