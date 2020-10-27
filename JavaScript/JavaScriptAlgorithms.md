## Contents
- JavaScript Random Algorithms
  - [Reverse a string](#algorithmReverseString)
  - [Factorialize a number!](#algoFactorializeNumber)
  - [Return the length of the longest word in a sentence](#algoReturnLengthLongestWord)
  - [Check if a string ends with the given target substring](#algoCheckStringatEnd)
  - [Title Case a Sentence](#algoTitleCaseSentence)
  - [Array Slice and Concat: Copy each element of the first array into the second array, in order, inserting elements at index n of the second array](#algoArraySliceAndConcat)






## JavaScript Random Algorithms

## <a name="algorithmReverseString"></a>[Reverse a string](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)

1. Reverse a String With Built-In Functions

```js
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
```

2. Reverse a String With a Decrementing For Loop

```js
function reverseString(str) {
    var newString = "";
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
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
```


## <a name="algoFactorializeNumber"></a>Factorialize a Number

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



## <a name="algoReturnLengthLongestWord"></a>Return the length of the longest word in a sentence:

1. Spliting with `split()` the sentence into an array of words and finding the maximum length using a `for` loop

```js
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
```

2. Using the `split()` and `sort()` Method (Not optimal)

```js
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
```

3. Using the `split()` and `reduce()` Method

```js
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
```

## <a name="algoCheckStringatEnd"></a>Check if a string (first argument, `str`) ends with the given target substring (second argument, `target`)

```js
function confirmEnding(str, target) {
  return (str.slice(-target.length) === target);
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Congratulation", "on") // true
confirmEnding("He has to give me a new name", "name") // true
confirmEnding("Open sesame", "sage") // false
```

We can also solve with `.endsWith()`.



## <a name="algoTitleCaseSentence"></a>Title Case a Sentence
Return the provided string with the first letter of each word capitalized.<br/><br/>

My solution:

```js
function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  let arr = []
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
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");
```

Another solution: Title Case a Sentence With the `map()` and the `replace()` Methods

```js
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");
```


## <a name="algoArraySliceAndConcat"></a>Array Slice and Concat: Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.

- `frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`
- `frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`
- `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` should return `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`

```js
function frankenSplice(arr1, arr2, n) {
  return (arr2.slice(0, n).concat(arr1, arr2.slice(n, arr2.length)));
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); // [ 4, 1, 2, 3, 5, 6 ]
```

## <a name="algoRemoveAllFalsy"></a>Remove all falsy values from an Array (Remove elements from array that doesn't respect condition)

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

bouncer([7, "ate", "", false, 9]);
```

2. Solve with `filter()` and `Boolean`:

```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
```




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

mutation(["hello", "hey"]); // false
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
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
```




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

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
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
