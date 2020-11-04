# JavaScript Functional Programming

## Credits/Notes taken from:

- [JavaScript functional programming course - from freeCodeCamp (with slight modifications on _examples_)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/)

## Contents

- [JavaScript Functional Programming](#javascript-functional-programming)
  - [Credits/Notes taken from:](#creditsnotes-taken-from)
  - [Contents](#contents)
  - [Small Introduction](#small-introduction)
  - [Functional Programming Terminology](#functional-programming-terminology)
  - [Hazards of Using Imperative Programming (opposite of Functional Programming)](#hazards-of-using-imperative-programming-opposite-of-functional-programming)
  - [Use the `map()` Method to Extract Data from an Array](#use-the-map-method-to-extract-data-from-an-array)
  - [Use the `filter()` Method to Extract Data from an Array](#use-the-filter-method-to-extract-data-from-an-array)
  - [Use the `reduce()` Method to Analyze Data of an Array](#use-the-reduce-method-to-analyze-data-of-an-array)
  - [Use `sort()` Method without changing the Original Array](#use-sort-method-without-changing-the-original-array)
  - [Summary: Array methods that doesn't modify the original array](#summary-array-methods-that-doesnt-modify-the-original-array)
    - [`slice()`](#slice)
    - [`concat()`: `originalArr.concat(attachedArr)`](#concat-originalarrconcatattachedarr)
    - [`map()`, `filter()` and `reduce()`](#map-filter-and-reduce)
    - [`split()`, `join()`](#split-join)
    - [`every()` and `some()`](#every-and-some)
  - [Introduction to Currying and Partial Application](#introduction-to-currying-and-partial-application)

## Small Introduction

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: `INPUT -> PROCESS -> OUTPUT`.

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2. **Pure functions - the same input always gives the same output**
3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

The functional programming software development approach breaks a program into small, testable parts. Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs.

## Functional Programming Terminology

- **_Callbacks_** = functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter()`, the callback function tells JavaScript the criteria for how to filter an array.

```js
var over18 = [45, 4, 9, 16, 25].filter((value) => {
  return value > 18;
});
```

- **_First class functions_** = Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value. In JavaScript, all functions are first class functions.

- **_Higher order functions_** = functions that take a function as an argument, or return a function as a return value.

- **_lambda functions_** = functions that are passed in to another function or returned from another function.

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

  for (let cups = 1; cups <= numOfCups; cups += 1) {
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
var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];

var appleIndex = 2;
var fruitsBeforeApple = fruits.splice(0, appleIndex);

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Mango', 'Kiwi']

var fruitsAfterApple = fruits.splice(appleIndex + 1);

console.log(fruitsAfterApple); // WRONG: [] instead of ["Mango", "Kiwi"]
console.log(fruits); // [ 'Apple', 'Mango', 'Kiwi' ]
```

Note: `splice()` first parameter defines the index, while the second parameter defines how many elements should be removed from that index (including the element on that index). If the second parameter is not mentioned, the method will remove all the elements after speciefied index (including the element on that index):

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
var appleIndex = 2;
var fruitsAfterApple = fruits.splice(appleIndex + 1);

console.log(fruitsAfterApple); // [ 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple' ]
```

<br/>

One way to solve the earlier problem is to call `var fruitsAfterApple = fruits.splice(1)` without specifying the old position of Apple element. However, our list of fruits will still be modified:

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];

var appleIndex = 2;
var fruitsBeforeApple = fruits.splice(0, appleIndex);

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Mango', 'Kiwi']

var fruitsAfterApple = fruits.splice(1);

console.log(fruitsAfterApple); // CORRECT: [ 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Apple' ]
```

HOWEVER, a better solution would be to use `slice()` instead of `splice()`. `slice()` DOES NOT modify the original array, it just returns a new array of elements which is a subset of the original array (without causing any side affects).

```js
var fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];

var appleIndex = 2;
var fruitsBeforeApple = fruits.slice(0, appleIndex);

console.log(fruitsBeforeApple); // ['Banana', 'Orange']
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

var fruitsAfterApple = fruits.slice(appleIndex + 1);

console.log(fruitsAfterApple); // [ 'Mango', 'Kiwi' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
```

<br/>

**_One of the core principles of functional programming is to not change original arrays/objects/etc..._** Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.<br/>
In functional programming, changing or altering things is called **_mutation_**, and the outcome is called **_a side effect_**. A function, ideally, should be a **_pure function_**, meaning that it does not cause any side effects.

<br/>

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

```js
function incrementer(num) {
  return num + 1;
}
```

A more complex example: where we don't want to alter/modify our array used as a parameter:

```js
/* WRONG SOLUTION - HERE WE DO ALTER OUR GLOBAL VARIABLE fruitsList */
var fruitsList = ['Orange', 'Apple', 'Mango', 'Kiwi'];

function add(localFruits, fruitName) {
  localFruits.push(fruitName);
  return localFruits;
}

var newFruitsList = add(fruitsList, 'Pineapple');

console.log(fruitsList); // ['Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple'] - Original List is modified
console.log(newFruitsList); // ['Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple']
```

```js
/* GOOD SOLUTION - we make a copy of the array */
var fruitsList = ['Orange', 'Apple', 'Mango', 'Kiwi'];

function add(localFruits, fruitName) {
  let newLocalFruits = [...localFruits];
  newLocalFruits.push(fruitName);
  return newLocalFruits;
}

var newFruitsList = add(fruitsList, 'Pineapple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(newFruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pineapple' ]
```

```js
/* GOOD, MORE ELEGANT SOLUTION */
var fruitsList = ['Orange', 'Apple', 'Mango', 'Kiwi'];

function add(localFruits, fruitName) {
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
var fruitsList = ['Orange', 'Apple', 'Mango', 'Kiwi'];

function add(fruitsList, fruitName) {
  let newfruitsList = [...fruitsList];
  newfruitsList.push(fruitName);
  return newfruitsList;
}

function remove(fruitsList, fruitName) {
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
var fruitsList = ['Orange', 'Apple', 'Mango', 'Kiwi'];

function add(fruitsList, fruitName) {
  return [...fruitsList, fruitName];
}

function remove(fruitsList, fruitName) {
  return fruitsList.filter((fruit) => fruit !== fruitName);
}

var newfruitsList = add(fruitsList, 'Banana');
var newerfruitsList = remove(fruitsList, 'Orange');
var newestfruitsList = remove(add(fruitsList, 'Pineapple'), 'Apple');

console.log(fruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(newfruitsList); // [ 'Orange', 'Apple', 'Mango', 'Kiwi', 'Banana' ]
console.log(newerfruitsList); // [ 'Apple', 'Mango', 'Kiwi' ]
console.log(newestfruitsList); // [ 'Orange', 'Mango', 'Kiwi', 'Pineapple' ]
```

## Use the `map()` Method to Extract Data from an Array

The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 },
];

const names = users.map((user) => user.name);
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
for (let i = 0; i < watchList.length; i++) {
  ratings.push({
    title: watchList[i]['Title'],
    rating: watchList[i]['imdbRating'],
  });
}

/* We can use map() */
const ratings = watchList.map((item) => ({
  title: item['Title'],
  rating: item['imdbRating'],
}));

/* or even map() with parameter destructuring */
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({
  title,
  rating,
}));
```

<br/>

**_`Array.prototype.map()`, or simply `map()`, is a pure function_**, and its output depends solely on its inputs. Plus, it takes another function as its argument.

**Note**: The differences between `forEach` and `map` are:

- `Array.prototype.forEach()` — executes a provided function once for each array element and doesn’t actually return anything (undefined). `forEach` does mutate/modifies each element of the array called upon.
- `Array.prototype.map()` — creates a new array with the results of calling a provided function on every element in the calling array, without modifying the original array.

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});
console.log(arr); // [2, 4, 6, 8, 10]
```

```js
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map((num) => {
  return num * 2;
});
console.log(arr); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Use the `filter()` Method to Extract Data from an Array

`filter()` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`. In other words, it filters the array, based on the function passed to it, without modifying the original array.

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 },
];

const usersUnder30 = users.filter((user) => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

On a more complex example: Retrieve a list of objects with only `title` and `rating` keys, where `imdbRating` from the original array of objects is greater than or equal to 8.0. We will use `filter()`, **then** `map()`.

```js
// The global variable
var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Director: 'Christopher Nolan',
    imdbRating: '8.8',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Director: 'James Cameron',
    imdbRating: '7.9',
  },
];

var filteredList;
filteredList = watchList
  .filter((item) => item['imdbRating'] >= 8.0)
  .map((item) => ({
    title: item['Title'],
    rating: item['imdbRating'],
  }));
console.log(filteredList); // [ { title: 'Inception', rating: '8.8' } ]
```

## Use the `reduce()` Method to Analyze Data of an Array

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the `reduce` method. it's possible to show that both `filter` and `map` can be derived as special applications of `reduce`.<br/><br/>
The `reduce` method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a **callback function** that is called on each iteration.<br/><br/>

Example: Get the average IMDB Rating of the movies directed by _Christopher Nolan_. Recall from prior challenges how to `filter` data and `map` over it to pull what you need.

```js
function getRating(watchList) {
  let filteredRatings = watchList
    .filter((item) => item['Director'] == 'Christopher Nolan')
    .map((item) => Number(item['imdbRating']));
  // console.log(filteredRatings);
  var averageRating = filteredRatings.reduce((total, value) => total + value);
  averageRating /= filteredRatings.length;

  // console.log(averageRating);
  return averageRating;
}
```

Or, another solution:

```js
function getRating(watchList) {
  var count = 0;
  var averageRating =
    watchList.reduce((sum, movie) => {
      if (movie.Director == 'Christopher Nolan') {
        count += 1;
        return sum + parseFloat(movie.imdbRating);
      }
      return sum;
    }, 0) / count;
  return averageRating;
}
```

## Use `sort()` Method without changing the Original Array

Simple example:

```js
// Solution 1
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let copyArr = [...arr];
  return copyArr.sort((a, b) => {
    return a - b;
  });
}
nonMutatingSort(globalArray);
```

```js
// Solution 2
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => {
    return a - b;
  });
}
nonMutatingSort(globalArray); // [ 2, 3, 5, 6, 9 ]
console.log(globalArray); // [ 5, 6, 3, 2, 9 ]
```

## Summary: Array methods that doesn't modify the original array

### `slice()`

```javascript
cities = ['Chicago', 'Delhi', 'London', 'Berlin'];
newCities = cities.slice(0, 3);

console.log(cities); // [ 'Chicago', 'Delhi', 'London', 'Berlin' ]
console.log(newCities); // [ 'Chicago', 'Delhi', 'London' ]
```

We can use `slice()` method instead of `splice()` as we saw earlier.

### `concat()`: `originalArr.concat(attachedArr)`

```js
var first = [1, 2, 3];
var second = [4, 5];
var combined = first.concat(second);

console.log(first); // [ 1, 2, 3 ]
console.log(combined); // [ 1, 2, 3, 4, 5 ]
```

We can use `concat()` method to add new elements to the end of an array (instead of using `push`), if we don't want to alter the original array: `newArr = myArr.concat(newItem);` instead of `myArr.push(newItem);`

### `map()`, `filter()` and `reduce()`

These were presented earlier.

### `split()`, `join()`

`split()` method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

```js
var str = 'Hello World';
var bySpace = str.split(' '); // ["Hello", "World"]

var otherString = 'How9are7you2today';
var byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"]
```

The `join` method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

```js
var arr = ['Hello', 'World'];
var str = arr.join(' '); // "Hello World"
```

Another example:

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
sentensify('May-the-force-be-with-you'); // "May the force be with you"
sentensify('The.force.is.strong.with.this.one'); // "The force is strong with this one"
sentensify('There,has,been,an,awakening'); // "There has been an awakening"
```

Another example:<br/>Return the hyphenated version for an URL. Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce").

```js
function urlSlug(title) {
  return title
    .split(/\W/) // [ '', 'Winter', 'Is', '', 'Coming' ]
    .filter((val) => val) // [ 'Winter', 'Is', 'Coming' ]
    .map((val) => val.toLowerCase()) // [ 'winter', 'is', 'coming' ]
    .join('-'); // winter-is-coming
}
console.log(urlSlug(' Winter Is  Coming')); // winter-is-coming
console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone')); // a-mind-needs-books-like-a-sword-needs-a-whetstone
```

### `every()` and `some()`

The `every` method works with arrays to check if every element passes a particular test. It returns a Boolean value - `true` if **all values** meet the criteria, `false` if not.

```js
function checkPositive(arr) {
  return arr.every((val) => val >= 0);
}
checkPositive([1, 2, 3, -4, 5]); // false
checkPositive([1, 2, 3, 4, 5]); // true
```

The `some` method works with arrays to check if any element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.

```js
[1, 2, 3, -4, 5].some((val) => val >= 0); // true
[-1, -2, -3, -4, -5].some((val) => val >= 0); // false
```

## Introduction to Currying and Partial Application

NOTE: Sounds silly, but should not be confused with indexing: `ar = [1, [2, 4], 'a']; ar[1][1]; // returns 4`

- **_arity_** of a function = the number of arguments it requires
- **_currying_** a function = means to convert a function of N arity into N functions of arity 1

[In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application)

Example:

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function (y) {
    return x + y;
  };
}
//Alternative using ES6
const curried2 = (x) => (y) => x + y;

curried(1)(2); // Returns 3
curried(1); // Returns [Function]
curried(1)(5)(2); // Returns TypeError: curried(...)(...) is not a function
```
