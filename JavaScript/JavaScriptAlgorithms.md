# JavaScript Algorithms. Contents:

- [JavaScript Algorithms. Contents:](#javascript-algorithms-contents)
- [freeCodeCamp Basic Algorithm Scripting](#freecodecamp-basic-algorithm-scripting)
  - [Reverse a string](#reverse-a-string)
  - [Factorialize a Number](#factorialize-a-number)
  - [Return the length of the longest word in a sentence:](#return-the-length-of-the-longest-word-in-a-sentence)
  - [Check if a string (first argument, `str`) ends with the given target substring (second argument, `target`)](#check-if-a-string-first-argument-str-ends-with-the-given-target-substring-second-argument-target)
  - [Title Case a Sentence](#title-case-a-sentence)
  - [Array Slice and Concat: Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.](#array-slice-and-concat-copy-each-element-of-the-first-array-into-the-second-array-in-order-begin-inserting-elements-at-index-n-of-the-second-array)
  - [Remove all falsy values from an Array (Remove elements from array that doesn't respect condition)](#remove-all-falsy-values-from-an-array-remove-elements-from-array-that-doesnt-respect-condition)
  - [Check if string1 contains all the letters from string2](#check-if-string1-contains-all-the-letters-from-string2)
  - [Chonky Monkey: Split an array into groups of a specific length an return it as two-dimensional array](#chonky-monkey-split-an-array-into-groups-of-a-specific-length-an-return-it-as-two-dimensional-array)
- [freeCodeCamp Intermediate Algorithm Scripting](#freecodecamp-intermediate-algorithm-scripting)
  - [Sum All Numbers in a Range](#sum-all-numbers-in-a-range)
  - [Difference Two Arrays Symmetrically](#difference-two-arrays-symmetrically)
  - [Seek and Destroy: Remove all elements from the first argument (an Array) that have the same values as the next arguments](#seek-and-destroy-remove-all-elements-from-the-first-argument-an-array-that-have-the-same-values-as-the-next-arguments)
  - [Pig Latin: Alternate English Words](#pig-latin-alternate-english-words)
  - [Search and Replace word in string but keep the Lower/Upper case:](#search-and-replace-word-in-string-but-keep-the-lowerupper-case)
  - [DNA Pairing: Lots of if else or... switch case... or an object!](#dna-pairing-lots-of-if-else-or-switch-case-or-an-object)
  - [Missing letters from alphabetical string](#missing-letters-from-alphabetical-string)
  - [Sets/Unions: Concatenate lists and remove duplicates](#setsunions-concatenate-lists-and-remove-duplicates)
  - [Convert HTML Entities: Replace in a string](#convert-html-entities-replace-in-a-string)
  - [Sum All Odd Fibonacci Numbers](#sum-all-odd-fibonacci-numbers)
  - [Sum All Primes](#sum-all-primes)
  - [Binary Agents: Return English sentence from the passed binary string](#binary-agents-return-english-sentence-from-the-passed-binary-string)
  - [Everything Be True: Check if list of objects contains property that is not null](#everything-be-true-check-if-list-of-objects-contains-property-that-is-not-null)
  - [Arguments Optional](#arguments-optional)
  - [Make a Person Class with setters and getters (without properties)](#make-a-person-class-with-setters-and-getters-without-properties)

# freeCodeCamp Basic Algorithm Scripting

## [Reverse a string](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)

1. Reverse a String With Built-In Functions

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');
```

2. Reverse a String With a Decrementing For Loop

```js
function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString('hello');
```

3. Reverse a String With Recursion

```js
function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
```

## Factorialize a Number

1. Using a `for` loop

```js
function factorialize(num) {
  let p = 1;
  for (let i = 1; i <= num; i++) {
    p *= i;
  }
  return p;
}
factorialize(5); // 5! = 1 * 2 * 3 * 4 * 5 = 120
```

2. Using recursion
   ...

## Return the length of the longest word in a sentence:

1. Spliting with `split()` the sentence into an array of words and finding the maximum length using a `for` loop

```js
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
```

2. Using the `split()` and `sort()` Method (Not optimal)

```js
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}
```

3. Using the `split()` and `reduce()` Method

```js
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longestWord.length;
}
```

## Check if a string (first argument, `str`) ends with the given target substring (second argument, `target`)

```js
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding('Bastian', 'n'); // true
confirmEnding('Congratulation', 'on'); // true
confirmEnding('He has to give me a new name', 'name'); // true
confirmEnding('Open sesame', 'sage'); // false
```

We can also solve with `.endsWith()`.

## Title Case a Sentence

Return the provided string with the first letter of each word capitalized.<br/><br/>

My solution:

```js
function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    // console.log(words[i][0].toUpperCase() + words[i].slice(1))
    if (words[i]) {
      arr.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
```

[Another solution: Title Case a Sentence With the `map()` Method](https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/)

```js
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
titleCase("I'm a little tea pot");
```

Another solution: Title Case a Sentence With the `map()` and the `replace()` Methods

```js
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
}
titleCase("I'm a little tea pot");
```

## Array Slice and Concat: Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.

- `frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`
- `frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`
- `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` should return `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`

```js
function frankenSplice(arr1, arr2, n) {
  return arr2.slice(0, n).concat(arr1, arr2.slice(n, arr2.length));
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [ 4, 1, 2, 3, 5, 6 ]
```

## Remove all falsy values from an Array (Remove elements from array that doesn't respect condition)

- `bouncer([7, "ate", "", false, 9])` should return `[7, "ate", 9]`
- `bouncer([false, null, 0, NaN, undefined, ""])` should return `[]`
- `bouncer([null, NaN, 1, 2, undefined])` should return `[1, 2]`

1. Solve with `for` loop:

```js
function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, 'ate', '', false, 9]);
```

2. Solve with `filter()` and `Boolean`:

```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

<br/>

## Check if string1 contains all the letters from string2

- `["hello", "Hello"]` returns `true` because all of the letters in the second string are present in the first, ignoring case
- `["Alien", "line"]` returns `true` because all of the letters in "line" are present in "Alien"
- `["hello", "hey"]` returns `false` because the string "hello" does not contain a "y"
- `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` returns `true`
- `mutation(["Mary", "Aarmy"])` returns `true`
- `mutation(["Noel", "Ole"])` returns `true`

My solution:

```js
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase().split('');
  return arr2.every((value) => arr[0].includes(value));
}

mutation(['hello', 'hey']); // false
```

- **Procedural Programming** solution: Using `indexOf()`, we loop through our test characters and if any of them is not found we `return false`, if they are all found we `return true`.

```js
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
```

- **Declarative Programming** solution: Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.`Every `will basically give you letter by letter to compare, which we do by using `indexOf` on the first string. `indexOf` will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once `every` will be false.

```js
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
```

<br/>

## Chonky Monkey: Split an array into groups of a specific length an return it as two-dimensional array

My solution using `for` with a `step` increment and `slice()`:

```js
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]]
```

[Other solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005):

```js
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
```

- Our **for loop** loops until `a` is equal to or more than the length of the array in our test.
- Inside our loop, we push to `temp` using `temp.push(arr[a]);` if the remainder of `a / size` is not equal to `size - 1`.
- Otherwise, we push to `temp`, push `temp` to the result variable and reset `temp` to an empty array.
- Next, if `temp` isn’t an empty array, we push it to `result`.
- Finally, we return the value of `result`.

<br/>

# [freeCodeCamp Intermediate Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/)

## Sum All Numbers in a Range

As input, we pass an array of two numbers. [Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range).

Erhmm, my not-so-proud solution (Monday, November 02, 2020):

```js
function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]); // 1 + 2 + 3 + 4 = 10
sumAll([5, 10]); // 45
```

There are [a lot of methods to create a `range` function like in Python](https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp), but I think they're overcomplicated...

Other solutions:

1. [freeCodeCamp](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083) solution using `Math.max()` and `Math.min()`:

```js
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}
```

2. freeCodeCamp solution using _The Arithmetic Progression Summing formula for calculating the sum of a continuous range:<br/>`(startNum + endNum) * numCount / 2`._

```js
const sumAll = (arr) => {
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression Summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
```

3. freeCodeCamp solution using a spread `...arr` operator:

```js
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
```

In **_Python_** we'll just use:

```python
# Python
sumAll = lambda arr: sum(range(min(arr), max(arr) + 1))
sumAll([5, 10]) # 45
```

<br/>

## Difference Two Arrays Symmetrically

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, [return the symmetric difference of the two arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays).

- `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return `["piglet", 4]`.
- `[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return `[4]`
- `[1, "calf", 3, "piglet"], [7, "filly"]` should return `[1, "calf", 3, "piglet", 7, "filly"]`
- `["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return `[]`

My not-so-proud (ugly) first solution:

```js
function diffArray(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr.push(arr2[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return arr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [ 4 ]
console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])); // [ 4, 'piglet' ]
```

My second (idea) solution (much better):

```js
function diffArray(arr1, arr2) {
  return arr1
    .filter((elem) => !arr2.includes(elem))
    .concat(arr2.filter((elem) => !arr1.includes(elem)));
}
```

Nice, this is the [freeCodeCamp's _declarative_ solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-diff-two-arrays/16008):

```js
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}
```

Another freeCodeCamp _declarative_ solution, using a function in a function and `indexOf()`:

```js
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}
```

In **_Python_**, we can use `union` and `difference` on `set` data types

```python
# Python
arr1 = set([1, "calf", 3, "piglet"])
arr2 = set([1, "calf", 3, 4])

arrUnion = arr1.union(arr2) # {1, 3, 4, 'calf', 'piglet'}
arrUnion.difference(arr1).union(arrUnion.difference(arr2)) # {4, 'piglet'}
```

Or:

```python
# Python
def diffArray(arr1, arr2):
    return [_ for _ in arr1 if _ not in arr2] + [_ for _ in arr2 if _ not in arr1]

print(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) # [4]
print(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])) # ['piglet', 4]

```

<br/>

## Seek and Destroy: Remove all elements from the first argument (an Array) that have the same values as the next arguments

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. [Remove all elements from the initial array that are of the same value as these arguments](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy). Note: You have to use the arguments object.

- `destroyer([1, 2, 3, 1, 2, 3], 2, 3)` should return `[1, 1]`
- `destroyer([3, 5, 1, 2, 2], 2, 3, 5)` should return `[1]`
- `destroyer(["tree", "hamburger", 53], "tree", 53)` should return `["hamburger"]`

<br/>

> [Examples of using the `arguments` object in a function:](https://www.w3schools.com/js/js_function_parameters.asp)

```js
/* Example 1: Sum of the all input values */
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

/* Example 2: Find max element of the all input values */
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

<br/>

**_My first (and really nice) solution:_**

```js
function destroyer() {
  // console.log(arguments); // { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }
  let [arr, ...arrRemovals] = arguments;
  return arr.filter((elem) => !arrRemovals.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [ 1, 1 ]
```

_[freeCodeCamp's almost the same solution but without using `arguments` object](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-seek-and-destroy/16046):_

```js
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !args.includes(val);
  });
}
```

_Or freeCodeCamp's one-liner solution:_

```js
const destroyer = (arr, ...valsToRemove) =>
  arr.filter((elem) => !valsToRemove.includes(elem));
```

<br/>

What if we solved this in **_Python_**?

```python
# Python
def destroyer(*args):
  # print(args) # ([1, 2, 3, 1, 2, 3], 2, 3)
  arr, *arrRemoval = args
  return [_ for _ in arr if _ not in arrRemoval]
```

Or **_Python_** _one-liner_?

```python
# Python
destroyer = lambda arr, *arrRemoval: [_ for _ in arr if _ not in arrRemoval]

print(destroyer([1, 2, 3, 1, 2, 3], 2, 3))  # [ 1, 1 ]
print(destroyer(["tree", "hamburger", 53], "tree", 53)) # ['hamburger']
```

<br/>

## Pig Latin: Alternate English Words

[Pig Latin is a way of altering English Words. The rules are as follows](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin):

1. If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
2. If a word begins with a vowel, just add "way" at the end.

- `translatePigLatin("california")` should return "aliforniacay".
- `translatePigLatin("paragraphs")` should return "aragraphspay".
- `translatePigLatin("glove")` should return "oveglay".
- `translatePigLatin("algorithm")` should return "algorithmway".
- `translatePigLatin("eight")` should return "eightway".

My OK (I guess) solution (Thursday, November 05, 2020):

```js
function translatePigLatin(str) {
  let findConson = /^([^aeiou]+)/gi;
  let match = str.match(findConson) ? str.match(findConson)[0] : '';
  if (match) return str.replace(match, '').concat(match).concat('ay');
  else return str.replace(match, '').concat(match).concat('way');
}
console.log(translatePigLatin('glove')); // oveglay
console.log(translatePigLatin('eight')); // eightway
console.log(translatePigLatin('schwartz')); // artzschway
```

[freeCodeCamp's equivalent solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039):

```js
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay')
    : str.concat('way');
}
/* start at beginning and get longest match of everything not a vowel (consonants)
if regex pattern found, it saves the match; else, it returns null
if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
if regex pattern not found (starts with vowels), it just adds “way” to the ending */
```

Aaand [freeCodeCamp's second solution, interesting:](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-pig-latin/16039)

```js
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + 'way';

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + 'ay';
}
```

<br/>

## Search and Replace word in string but keep the Lower/Upper case:

[Perform a search and replace on the sentence](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace). First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).

My solution:

```js
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase())
    after = after[0].toUpperCase().concat(after.slice(1));
  else after = after[0].toLowerCase().concat(after.slice(1));
  return str.replace(before, after);
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')); // He is Sitting on the couch
console.log(myReplace('I think we should look up there', 'up', 'Down')); // I think we should look down there
```

<br/>

## DNA Pairing: Lots of if else or... switch case... or an object!

[The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)

[Base pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

- `pairElement("GCG")` returns `[['G', 'C'], ['C', 'G'], ['G', 'C']]`
- `pairElement("ATCGA")` returns `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.
- `pairElement("TTGAG")` returns `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.
- `pairElement("CTCTA")` returns `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

My ugly solution (Thursday, November 05, 2020):

```js
function pairElement(str) {
  let dna = str.split('');
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') dna[i] = ['A', 'T'];
    else if (dna[i] === 'T') dna[i] = ['T', 'A'];
    else if (dna[i] === 'G') dna[i] = ['G', 'C'];
    else if (dna[i] === 'C') dna[i] = ['C', 'G'];
  }
  return dna;
}

console.log(pairElement('GCG')); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
```

[freeCodeCamp's better **maintainable** code using switch case:](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-dna-pairing/16009)

```js
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair
  var paired = [];

  // Function to check with strand to pair
  var search = function (char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
```

Or, even better by using an Object (damn I should use this next time): [_Lookup tables can improve performance drastically. However, this is offset by the time it takes to create the lookup table in the first place._](https://stackoverflow.com/questions/4783674/lookup-table-vs-if-else)

```js
function pairElement(str) {
  const dnaLookUp = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  let dna = str.split('');
  return dna.map((val) => [val, dnaLookUp[val]]);
}
```

_Python_ solution using dictionaries as lookup table:

```python
# Python
def pairElement(str):
    dnaLookUp = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    }
    # dna = str.split() # doesn't work like in JS, returns ['GCG']
    # dna = str.split('') # returns ValueError: empty separator
    return [[val, dnaLookUp[val]] for val in str]

print(pairElement("GCG")) # [['G', 'C'], ['C', 'G'], ['G', 'C']]
```

<br/>

## Missing letters from alphabetical string

[Find the missing letter in the passed letter range and return it](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters). If all letters are present in the range, return undefined.

- `fearNotLetter("abce")` should return "d".
- `fearNotLetter("abcdefghjklmno")` should return "i".
- `fearNotLetter("stvwx")` should return "u".
- `fearNotLetter("bcdf")` should return "e".
- `fearNotLetter("abcdefghijklmnopqrstuvwxyz")` should return undefined.

My clumsy solution...(Thursday, November 05, 2020):

```js
function fearNotLetter(str) {
  let ascii = [];
  for (let i = 0; i < str.length; i++) {
    ascii.push(str[i].charCodeAt());
  }
  // console.log(ascii); // [ 97, 98, 99, 101 ]
  for (let i = 0; i < ascii.length - 1; i++) {
    if (ascii[i] + 1 !== ascii[i + 1]) return String.fromCharCode(ascii[i] + 1);
  }
}

console.log(fearNotLetter('abce')); // d
```

[freeCodeCamp's interesting solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-missing-letters/16023):

```js
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
```

Another interesting solution from freeCodeCamp:

- Loop over the string
- Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
- Return the missing character ( +1 from where the gap was detected)

```js
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
```

<br/>

## Sets/Unions: Concatenate lists and remove duplicates

[Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union). The unique numbers should be sorted by their original order.

- `uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` should return `[1, 3, 2, 5, 4]`
- `uniteUnique([1, 2, 3], [5, 2, 1])` should return `[1, 2, 3, 5]`
- `uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` should return `[1, 2, 3, 5, 4, 6, 7, 8]`

My solution using `arguments` and ES6 [`Set` object](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array):

```js
function uniteUnique() {
  let arr = [];
  for (let sublist of arguments) {
    arr = arr.concat(sublist);
  }
  return [...new Set(arr)];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]
```

My 2nd solution without using [`Set` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```js
function uniteUnique() {
  let arr = [];
  let union = [];
  for (let sublist of arguments) {
    arr = [...arr, ...sublist];
  }
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in union)) union.push(arr[i]);
  }
  return union;
}
```

I think [freeCodeCamp's solutions are a little overcomplicated though](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sorted-union/16077). Except this one:

```js
function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays);
  return [...new Set(flatArray)];
}
```

Or this one, using `flat()` built-in Array method:

```js
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())];
```

Aaand another solution using `filter()`, [but is not efficient for large arrays](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array):

```js
function uniteUnique(...arr) {
  return arr.flat().filter((item, pos, self) => self.indexOf(item) == pos);
}

// But it can be effiecient if we use hash tables
// But again, it gets overcomplicated... the best solution is using new Set()
function uniteUnique(...arr) {
  let seen = {};
  return arr
    .flat()
    .filter((item) =>
      seen.hasOwnProperty(item) ? false : (seen[item] = true)
    );
}
```

<br/>

Let's see a **_Python_** solution using `set` and [`list comprehension` to flatten an array of arrays](https://stackoverflow.com/questions/952914/how-to-make-a-flat-list-out-of-list-of-lists):

```python
# Python
def uniteUnique(*arr):
    arr_flat = [item for sublist in arr for item in sublist]
    return list(set(arr_flat))

print(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) # [1, 2, 3, 4, 5]
```

Or if we don't care about readability (don't do this even if it looks cool):

```python
uniteUnique = lambda *arr: list(
    set([item for sublist in arr for item in sublist]))
```

<br/>

## Convert HTML Entities: Replace in a string

[Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities). List of HTML Entities [here](https://www.w3schools.com/html/html_entities.asp).

- `convertHTML("Dolce & Gabbana")` should return `"Dolce & Gabbana"`
- `convertHTML("Hamburgers < Pizza < Tacos")` should return `"Hamburgers < Pizza < Tacos"`
- `convertHTML("Sixty > twelve")` should return `"Sixty &gt; twelve"`
- `convertHTML('Stuff in "quotation marks"')` should return `"Stuff in "quotation marks""`
- `convertHTML("Schindler's List")` should return `"Schindler's List"`
- `convertHTML("<>")` should return `"<>"`
- `convertHTML("abc")` should return `"abc"`

My solution using a **_lookUp table_**, `hasOwnProperty()` and `replace()`:

```js
function convertHTML(str) {
  const lookUp = {
    '>': '&gt;',
    '<': '&lt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
  };
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += lookUp.hasOwnProperty(str[i]) ? lookUp[str[i]] : str[i];
  }
  return newStr;
}

console.log(convertHTML('Dolce & Gabbana')); // Dolce &amp; Gabbana
console.log(convertHTML('<>')); // &lt;&gt;
```

Oook, [freeCodeCamp's solution using a LookUp table and regex is pretty neat](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007):

```js
function convertHTML(str) {.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
```

Or, without using regex (pretty close to my solution, using `map` instead of a `for loop`):

```js
function convertHTML(str) {
  let lookUp = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return str
    .split('')
    .map((val) => lookUp[val] || val)
    .join('');
}
```

<br/>

**_Python_** solution:

```python
# Python
def convertHTML(str):
    lookUp = {
        '>': '&gt;',
        '<': '&lt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
    }
    return "".join([lookUp[val] if val in lookUp else val for val in str])

    # # Almost same as:
    # newStr = ""
    # for val in str:
    #     newStr += lookUp[val] if val in lookUp else val
    # return newStr


print(convertHTML("Dolce & Gabbana")) # Dolce &amp; Gabbana
print(convertHTML("<>")) # &lt;&gt;
```

<br/>

## Sum All Odd Fibonacci Numbers

[Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers)

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

- `sumFibs(1000)` should return 1785.
- `sumFibs(4)` should return 5.
- `sumFibs(4000000)` should return 4613732.
- `sumFibs(75024)` should return 60696.
- `sumFibs(75025)` should return 135721.

> Okay, let's see how a simple Fibonacci function (first n elements) could be implemented (not related to this problem):

```js
// JavaScript
const fibonacci = (n) => {
  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
};
fibonacci(6); // [ 1, 1, 2, 3, 5, 8 ]
fibonacci(14); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
```

```python
# Python
def fibonacci(n):
    arr = [1, 1]
    for i in range(2, n)
      arr.append(arr[i - 2] + arr[i - 1])
    return arr

print(fibonacci(14)) # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
```

```python
# Python (another method)
def fibonacci(n):
    arr = [0, 1]
    a = 0
    b = 1
    for i in range(2, n):
        c = a + b
        a, b = b, c
        arr.append(b)
    return arr

print(fibonacci(6)) # [0, 1, 1, 2, 3, 5]
print(fibonacci(9)) # [0, 1, 1, 2, 3, 5, 8, 13, 21]
print(fibonacci(14)) # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

# or
def fibonacci(n):
    a = 0
    b = 1
    yield a
    yield b
    for i in range(2, n):
        c = a + b
        a, b = b, c
        yield b

print(list(fibonacci(6)))  # [0, 1, 1, 2, 3, 5]
print(list(fibonacci(9)))  # [0, 1, 1, 2, 3, 5, 8, 13, 21]
print(list(fibonacci(14))) # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
```

<br/>

Now, this is my first solution (kind of ashamed yes..):

```js
function sumFibs(num) {
  let arr = [1, 1];
  let sum = 2;
  let newVal = 0;
  for (let i = 2; i <= 99999; i++) {
    newVal = arr[i - 2] + arr[i - 1];
    if (newVal % 2 == 1 && newVal <= num) {
      sum += newVal;
    } else if (newVal > num) {
      break;
    }
    arr.push(newVal);
  }
  return sum;
}
console.log(sumFibs(10)); // 10
```

Finally, my second solution:

```js
function sumFibs(num) {
  let prev = 1;
  let next = 1;
  let sum = 2;
  let newVal = 0;
  while (newVal <= num) {
    newVal = prev + next;
    if (newVal % 2 == 1 && newVal <= num) {
      sum += newVal;
    }
    prev = next;
    next = newVal;
  }
  return sum;
}
```

[freeCodeCamp's solutions.](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-odd-fibonacci-numbers/16084)

<br/>

## Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4. [Write `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes).

Simple functions to check if a number is prime or not (not related to this problem):

```python
# Python
def isPrime(n):
    return n > 1 and all(n % i != 0 for i in range(2, n))

# or (Complexity decreases: O(n) to O(sqrt(n)) if we loop until square root of the number - inclusive)
import math
def isPrime(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return n > 1
```

```js
// JavaScript
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return n > 1;
};
```

<br/>

Sooo there's my solution (Sunday, November 08, 2020):

```js
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return n > 1;
};

const sumPrimes = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
};
console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
```

[freeCodeCamp's overcomplicated solutions.](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-primes/16085)

<br/>

## Binary Agents: Return English sentence from the passed binary string

[Return an English translated sentence of the passed binary string](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents). The binary string will be space separated.

- `binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")` should return "I love FreeCodeCamp!"

My solution:

- split string into array of binary characters
- convert binary -> decimal (`parseInt(binary, 2`) as string (`.toString()`) (ASCII)
- get character from ASCI (`String.fromCharCode()`)

```js
function binaryAgent(str) {
  let arr = str.split(' ');
  arr = arr.map(val => String.fromCharCode((parseInt(val, 2).toString())))
  return arr.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010
                        01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000
                        01100110 01110101 01101110 00100001 00111111")); // Aren't bonfires fun!?
```

<br/>

## Everything Be True: Check if list of objects contains property that is not null

[Check if the predicate (second argument) is truthy on all elements of a collection (first argument)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true). In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`. In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.

My first solution:

```js
function truthCheck(collection, pre) {
  return collection.every((obj) => {
    if (obj.hasOwnProperty(pre)) {
      return obj[pre];
    } else {
      return false;
    }
  });
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
); // true
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
); // false (object 2 doesn't have property)
truthCheck(
  [
    { name: 'Pete', onBoat: true },
    { name: 'Repeat', onBoat: true },
    { name: 'FastForward', onBoat: null },
  ],
  'onBoat'
); // false (object 3 has null value)
truthCheck([{ single: '' }, { single: 'double' }], 'single'); // false
```

[Another solution:](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-everything-be-true/16011)

```js
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}
```

<br/>

## Arguments Optional

[Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional) For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function. Calling this returned function with a single argument will then return the sum: `var sumTwoAnd = addTogether(2);` `sumTwoAnd(3)` returns `5`. If either argument isn't a valid number, return undefined.

- `addTogether(2, 3)` should return 5.
- `addTogether(5)(7)` should return 12.
- `addTogether("string")` should return undefined.
- `addTogether(2, "3")` should return undefined.
- `addTogether(2)([3])` should return undefined.

My solution:

```js
function addTogether() {
  if (arguments.length > 1) {
    if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number')
      return arguments[0] + arguments[1];
    else return undefined;
  } else if (typeof arguments[0] === 'number') {
    return (arg2) => {
      if (typeof arg2 === 'number') return arguments[0] + arg2;
      else return undefined;
    };
  }
}
console.log(addTogether(2, 3)); // 5
console.log(addTogether(6)(7)); // 13
```

[Other solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-arguments-optional/14271)

<br/>

## Make a Person Class with setters and getters (without properties)

[Fill in the object constructor with the getter and setter methods for FullName, LastName, FirstName](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person).

```js
var Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = () => {
    return fullName;
  };
  this.getFirstName = () => {
    return fullName.split(' ')[0];
  };
  this.getLastName = () => {
    return fullName.split(' ')[1];
  };
  this.setFullName = (newFullName) => {
    fullName = newFullName;
  };
  this.setFirstName = (newFirstName) => {
    fullName = newFirstName + ' ' + fullName.split(' ')[1];
  };
  this.setLastName = (newLastName) => {
    fullName = fullName.split(' ')[0] + ' ' + newLastName;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName()); // Bob Ross
console.log(bob.getFirstName()); // Bob
console.log(bob.getLastName()); // Ross
bob.setFullName('Tony Stark');
console.log(bob.getFullName()); // Tony Stark
bob.setFirstName('Jean');
console.log(bob.getFullName()); // Jean Stark
bob.setLastName('Rousseau');
console.log(bob.getFullName()); // Jean Rousseau
```

<br/>

## Palindrome Checker

[A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. ](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

Return `true` if the given string is a palindrome. Otherwise, return `false`. You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

My solution:

```js
function palindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return str == str.split('').reverse().join('');
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("five|_/|four")); // false
```

<br/>

## Roman Numeral Converter

[Convert the given number into a roman numeral](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter). All [roman numerals](http://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

Solution:

```js
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  var romanized = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }

  return romanized;
};

console.log(convertToRoman(36)); // XXXVI
```

**Note**: We can't use a Look Up table (object/dictionary) because the order of the keys matter:

```js
// This will not work !!
const lookUp = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

for (let key in lookUp) {
    console.log(typeof key); // 'String'
    console.log(key); // '1' '4' '5' '8' '10' '40' ... instead of '1000' '900' '500' ...
    while (Number(key) <= num) {
        romanized += lookUp[key];
        num -= Number(key);
    }
    // ^^ THIS SOLUTION WON'T WORK
}
```

<br/>

## Caesars Cipher Decode

[One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. 

My solution using `str.charCodeAt()` and `String.fromCharCode()`:

```js
function rot13(str) {
  let offset = 13;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      if (str[i].charCodeAt() + offset <= 90) {
        newStr += String.fromCharCode((str[i].charCodeAt() + offset));
      } else {
        let remainder = (str[i].charCodeAt() + offset) % 90;
        newStr += String.fromCharCode((64 + remainder));
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!

// console.log('A'.charCodeAt()); // 65
// console.log('Z'.charCodeAt()); // 90
```

[Other solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-caesars-cipher/16003), like:

```js
function rot13(str) {
  return (
    str
      .split("")
      .map.call(str, function(char) {
        var x = char.charCodeAt(0);
        if (x < 65 || x > 90) { // Checks if character lies between A-Z
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}
```

Another solution using the alphabet:

```js
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
```

<br/>

## Cash Register

[Final Problem of freeCodeCamp's JavaScript Algorithms](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register): Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

<br/>

My solution after 1 hour (Tuesday, November 10, 2020):

```js
function checkCashRegister(price, cash, cid) {
  let cashDiff = cash - price;
  const lookUp = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  }
  
  let cid_funds = cid.reduce((accum, val) => accum + val[1], 0);
  if (cashDiff === cid_funds) {
    return {status: "CLOSED", change: cid};
  }
  else if (cid_funds < price)
    return {status: "INSUFFICIENT_FUNDS", change: []};
  else {
    cid.reverse();
    let change = [];

    for (let i = 0; i < cid.length; i++) {
      let change_cash = 0;
      if (cid[i][1] > 0 && lookUp[cid[i][0]] <= cashDiff) {
        while (cid[i][1] > 0 && lookUp[cid[i][0]] <= cashDiff) {
          cid[i][1] -= lookUp[cid[i][0]];
          cashDiff -= lookUp[cid[i][0]];
          cashDiff = Math.round(cashDiff * 100) / 100;
          change_cash += lookUp[cid[i][0]];
          // console.log(change_cash);
          // console.log(cashDiff);
        }
        change.push([cid[i][0], change_cash])
        // console.log(change);
      }
    }
    return {status: "OPEN", change: change};
  }
}

console.log(checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])); // {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])); // {status: "INSUFFICIENT_FUNDS", change: []}

console.log(checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])); // {status: "CLOSED", change: cid};
```

[More on floating point number](https://forum.freecodecamp.org/t/having-rounding-issues/308834)

[Other solutions and hints](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-cash-register/16012)

<br/>

# HackeRank

## Array Methods

### Reverse words in a sentence and swap all cases of letters

- `rUns dOg"` => `"DoG RuNS""`
- `"aWESOME is cODING"` => `"Coding IS Awesome"`

**My Solution 1:** (Monday, February 01, 2021)

```js
function reverseWords(sentence) {
  let output = "";
  for (let char of sentence.split(" ").reverse().join(' ')) {
    char = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    output += char;
  }
  return output;
}

console.log(reverseWords("aWESOME is cODING")); // Coding IS Awesome
console.log(reverseWords("rUns dOg")); // DoG RuNS
```

**My almost failed Solution 2:**

```js
function reverseWords(sentence) {
  reversed = sentence.split(" ").reverse().join(' ');
  return [...reversed].forEach(
    (char) => 'aaa';
}

console.log(reverseWords("aWESOME is cODING")); // undefined
console.log(reverseWords("rUns dOg")); // undefined
/* NOTE that forEach method only accepts arrays so it needs conversion
 NOTE that forEach method always returns undefined
 forEach method mutates every element in an array, but because we called it
 upon [...reversed], reversed will not be modified 
 Also we can't mutate elements in forEach by asigning/returning to char (the value)*/

// However, we can solve these problems like this:
function reverseWords(sentence) {
  reversed = sentence.split(" ").reverse().join(' ');
  reversed = [...reversed];
  reversed.forEach((char, idx) => 
    reversed[idx] = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
  return reversed.join('');
}

console.log(reverseWords("aWESOME is cODING")); // Coding IS Awesome
console.log(reverseWords("rUns dOg")); // DoG RuNS
// NOTE that we need to asign values to reversed[idx] (not to char) to mutate the array's elements
```

**My Solution 3:**

```js
function reverseWords(sentence) {
  reversed = sentence.split(" ").reverse().join(' ');
  return [...reversed]
    .map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
    .join('');
}

console.log(reverseWords("aWESOME is cODING")); // Coding IS Awesome
console.log(reverseWords("rUns dOg")); // DoG RuNS
```

<br/>

### Cut the sticks (min of array, substract from array, filter)

https://www.hackerrank.com/challenges/cut-the-sticks/problem

You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

**Example** for `arr = [1,2,3]`

The shortest stick length is `1`, so cut that length from the longer two and discard the pieces of length `1`. Now the lengths are `arr = [1,2]`. Again, the shortest stick is of length `1`, so cut that amount from the longer stick and discard those pieces. There is only one stick left, `arr = [1]`, so discard that stick. The number of sticks at each iteration are `answer = [3,2,1]`.

- Sample Input 0:

```
STDIN           Function
-----           --------
6               arr[] size n = 6
5 4 4 2 2 8     arr = [5, 4, 4, 2, 2, 8]

Sample Output 0:
6
4
2
1

Explanation 0:
sticks-length        length-of-cut   sticks-cut
5 4 4 2 2 8             2               6
3 2 2 _ _ 6             2               4
1 _ _ _ _ 4             1               2
_ _ _ _ _ 3             3               1
_ _ _ _ _ _           DONE            DONE
```

- Sample Input 1:

```
8
1 2 3 4 3 3 2 1

Sample Output 1:
8
6
4
1

Explanation 1:
sticks-length         length-of-cut   sticks-cut
1 2 3 4 3 3 2 1         1               8
_ 1 2 3 2 2 1 _         1               6
_ _ 1 2 1 1 _ _         1               4
_ _ _ 1 _ _ _ _         1               1
_ _ _ _ _ _ _ _       DONE            DONE
```

**My solution:** (Tuesday, February 02, 2021)

```js
'use strict';
function cutTheSticks(arr) {
  let lenghts = [arr.length];
  while (arr.length) {
    let minStick = Math.min(...arr);
    arr.forEach((value, idx) => arr[idx] = value - minStick);
    arr = arr.filter(value => value !== 0);
    if (arr.length !== 0)
      lenghts.push(arr.length);
  }
  return lenghts;
}
```

<br/>

