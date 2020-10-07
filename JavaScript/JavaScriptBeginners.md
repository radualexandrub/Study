## Credits / Notes taken from:
- [3h26m Learn JavaScript - Full Course for Beginners from freeCodeCamp/Beau Carnes](https://youtu.be/PkZNo7MFNFg)
- [w3schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)

## Contents:




## Where can I run JavaScript code?
1. Download a code editor (Sublime, VSCode, Brackets, Atom, Notepad++, WebStorm, [etc](https://www.freecodecamp.org/news/how-to-choose-a-javascript-code-editor/)), create file `index.html`, open it in browser (Chrome), and press `CTRL+SHIFT+J` to open the console:
```HTML
<!-- index.html -->
<script>
    console.log("hello, world");
</script>
```
2. Download and install [Node.js](https://nodejs.org/en/download/), install+open Sublime Text, go to `Tools->Build System->New build system`, paste this [this](https://pawelgrzybek.com/javascript-console-in-sublime-text/) and save it as `nodejs.sublime-build`:
```
{
  "cmd": ["C:/Program Files/nodejs/node.exe", "$file"],
  "selector": "source.js"
}
```
Select `Tools->Build System->nodejs` and now you can run your `.js` file inside SublimeText by pressing `CTRL+B`

3. Use [Codepen.io](https://codepen,io), `Create->Pen->JS Windows`.

4. Use [Scrimba.com](https://scrimba.com/), Create account, Log in, press `+` button, select `javascript template` and `playground`.

5. Use [Stackblitz](https://stackblitz.com/), Create account, Log in, Create new project in JavaScript.


## Variable names that starts with `$` or `_`
JavaScript treats `$` and `_` as if they were letters of the alphabet, so identifiers containing `$` are valid variable names.<br/>
Now multiple libraries are providing their own version of the $() function, so many now provide the option to turn off that definition in order to avoid clashes. Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library. In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery `$("p")`; means "select all p elements".
<br/><br/>
Of course, you don't need to use a library to be able to use $(). All you need to substitute $() for document.getElementById() is to add a definition of the $() function to your code as follows:
```js
function $(x) {return document.getElementById(x);}
```
<br/>
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names. Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables (objects or methods). This is a quick and easy way to immediately identify a private class member, and it is so widely used, that almost every programmer will recognize it.
<br/><br/>
Note that again, as with $, the use of _ is merely a convention and is not enforced by JavaScript itself.


## Declaring variables with `var`, `let`, `const`
ES2015 introduced two important new JavaScript keywords: let and const, before that only `var` was availale to use.
- `var` can be used globally in the entire document/entire enclosing function.
- `let` is defined within it's scope (or to the immediate enclosing block denoted by `{ }` / or `let` is `block-scoped`):
```js
console.log(a); // shows undefined, if `a` wasn't declared next lines, it will show ReferenceError: a is not defined
{
  var a = 321;
  let b = 123;
  console.log(b); // shows 123
};
console.log(a); // shows 321
console.log(b); // ReferenceError: a is not defined
```
More info and debates about `let` vs `var` [here](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)

- `const` "variables" behave like let variables (block-scoped), except they cannot be reassigned (cannot change their value later)
```js
const x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
```


## JS Data Types
[JavaScript has dynamic types](https://www.w3schools.com/js/js_datatypes.asp). This means that the same variable can be used to hold different data types.
```js
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
```

1. `Strings`
```js
var str1 = "It's a string";   // Using double quotes
var str2 = 'Hello "Anne"';   // Using single quotes
let phrase = `can embed another ${str1} using $`;
```
Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
<br/>
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.
```js
let name = "John";
alert( `Hello, ${name}!` ); // Hello, John!
alert( `the result is ${1 + 2}` ); // the result is 3
```

2. `Numbers` (There's only one data type for numbers: float)
```js
var x1 = 34.00;     // float with decimals
var x2 = 34;        // float without decimals
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
```

3. [`BigInt` in JavaScript](https://javascript.info/types), the “number” type cannot represent integer values larger than `2^53-1` (that’s `9007199254740991`), or less than `-2^53-1` for negatives.
```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

4. `Booleans`: `true` or `false` (not capitalized)
```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;
```

5. `null` value. [More info here](https://javascript.info/types)

6. `undefined` value [More info here](https://javascript.info/types)

7. `Arrays` and Arrays methods
JavaScript arrays are written with square brackets. Array items are separated by commas.
```js
var cars = ["Saab", "Volvo", 23];
var myNestedArray = [["universe", 42], ["everything", 7.2]]
```

8. `symbol`
The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

9. `JavaScript Objects`
JavaScript objects are written with curly braces `{}`. Object properties are written as name:value pairs, separated by commas.
```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
```

10. `typeoff` operator [More info here](https://javascript.info/types)
You can use the JavaScript typeof operator to find the type of a JavaScript variable.
It supports two forms of syntax: As an operator: `typeof x`. As a function: `typeof(x)`. In other words, it works with parentheses or without them. The result is the same.
```js
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"

typeof {name:'John', age:34} // "object"
typeof Math // "object"  (1)
typeof null // "object"  (2) 
// Unfortunately, in JavaScript, the data type of null is an object

typeof alert // "function"  (3)
typeof function myFunc(){}   // "function"

typeof typeof 123 // "string"
typeof NaN // "number"
typeof [1,2,3] // "object"
// In JavaScript, arrays are technically objects; just with special behaviours and abilities
```

- `JavaScript Classes` (introduced in ES2015 (ES6))<br/>
```js
typeof class Foo {} // "function"
```
[Before Classes, to make an inheritable object, we would have to use a function](https://bitsofco.de/javascript-typeof/)
```js
function Dog() { }
Dog.prototype.bark = function() {
    alert("woof!");
}
const snoopy = new Dog();
snoopy.bark() // alert("woof!")
```
With Classes, we can create the same object this way
```js
class Dog {
    bark() {
        alert("woof!");
    }
}
const snoopy = new Dog();
snoopy.bark() // alert("woof!")
```

## JS Operators `+` `-` `*` `**` `/` `%` `++` `--` and Comparisons
- `+` Addition
```js
x = 10 + 5;// x = 10
x = 5 + '5'; // x = 55
x = '5' + 6 + 7; // x = 567
x = 5 + 6 + '7'; // x = 117
x = 5 + '6' + 7; // x = 567 
```
- `-` Substraction
```js
x = 10 - 5; // x = 5
x = 5 - '5'; // x = 0
x = '5' - 6 - 7; // x = -8
x = 5 - 6 - '7'; // x = -8
x = 5 - '6' - 7; // x = -8 
x = 5 - '6' - '7'; // x = -17 ..Nice 
```
- `*` Multiplication
```js
x = 5 * 10; // x = 50
x = '5' * 5; // x = 25 lol ok... expected `55555` but ok..
x = 5 * '10'; // x = 50
2 * [1, 2]; // NaN
2 * ['7']; // 14 ..Nice

2.0 * 2.5; // 5
```
- `**` Exponentiation (introduced in ES2016)
```js
5 ** 2; // 25
5 ** 3; // 125
5 ** '3'; // 125
'5' ** 3; // 125 I'm doing this just to be sure...
2 ** [4]; // 16
```
- `/` Division
```js
8 / 2; // 4
8 / 3; // 2.6666666666666665
10 / '2' // 5
10 / '3' // 3.3333333333333335
4.4 / 2 // 2.2
4.4 / 2.0 // 2.2
```
- `%` Modulus (Division Remainder)
```js
12 % 3 // 0
'10' % 3 // 1
```
- `++`/`--` Increment / Decrement

| JavaScript | Assignment | [Operators](https://www.w3schools.com/js/js_operators.asp)  |
|------------|------------|------------|
| Operator   | Example    | Same As    |
| =          | x = y      | x = y      |
| +=         | x += y     | x = x + y  |
| -=         | x -= y     | x = x - y  |
| \*=         | x \*= y     | x = x \* y  |
| /=         | x /= y     | x = x / y  |
| %=         | x %= y     | x = x % y  |
| \*\*=        | x \*\*= y    | x = x \*\* y |

- [JavaScript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)

| Operator | Description                       |
|----------|-----------------------------------|
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |

- [JavaScript Logical Operators](https://www.w3schools.com/js/js_operators.asp)

| Operator | Description |
|----------|-------------|
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |




## Strings and Strings methods

- Escape characters in strings:

| CODE     | OUTPUT                        |
|----------|-------------------------------|
| \' or \" | escape single or double quote |
| \\\\       | escape backslash              |
| \n       | newline                       |
| \r       | carriage return               |
| \t       | tab (horizontal tabulator lel)|
| \v       | tab (vertical tabulator)|
| \b       | backspace                     |
| \f       | form feed                     |

```js
// Strings Can be Objects
// strings can also be defined as objects with the keyword new:
var x = "John";
var y1 = new String("John");
var y2 = new String("John");
// typeof x will return string
// typeof y1 will return object

// However, don't create strings as objects. It slows down execution speed.
// The new keyword complicates the code and can produce some unexpected results:
// (y1 === y2) is false because x and y are different objects
```

1. String `length`
```js
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length); // 26
console.log('aaa'.length); // 3
```

2. `indexOf()` method returns the index of (position of) the first occurrence of a specified text in a string

3. `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string
```js
"Please locate where 'locate' occurs!".indexOf("locate"); // 7
"Please locate where 'locate' occurs!".lastIndexOf("locate"); // 21

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
"Please locate where 'locate' occurs!".lastIndexOf("NotInString"); // -1

// Both methods accept a second parameter as the starting position for the search:
"Please locate where 'locate' occurs!".indexOf("locate", 15); // 21
```

4. `search()` method searches a string for a specified value and returns the position of the match
```js
console.log("Please locate where 'locate' occurs!".search("locate")); // 7 
// search() seems to be the same as indexOf()
```
- However, The two methods are NOT equal
    - `search()` method cannot take a second start position argument, but can take regular expressions
    - `indexOf()` method cannot take powerful search values (regular expressions)

5. Extracting String Parts: `slice(start, end`), `substring(start, end)`, `substr(start, length)`
- `slice() `extracts a part of a string and returns the extracted part in a new string.
```js
var str = "0123456789012345678";
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // 'Banana'
// In Python, we would use str[7:13]

// If a parameter is negative, the position is counted from the end of the string
str.slice(-12, -6); // 'Banana'

// If you omit the second parameter, the method will slice out the rest of the string
str.slice(7); // 'Banana, Kiwi'
// In Python, we would use str[7:]

// Counting from the end:
str.slice(-12); // 'Banana, Kiwi'
str.slice(-4); // 'Kiwi'
```

- `substring()` is similar to slice(), but cannot accept negative indexes
```js
var str = "Apple, Banana, Kiwi";
str.substring(0, 5); // 'Apple'
str.substring(12, 7); // 'Banan' .. interesting
```

- `substr()` is similar to slice(), but the second parameter specifies the **length** of the extracted part
```js
var str = "0123456789012345678";
var str = "Apple, Banana, Kiwi";
str.substr(7, 6); // 'Banana'
str.substr(15, 4); // 'Kiwi'

// If you omit the second parameter, substr() will slice out the rest of the string

// If the first parameter is negative, the position counts from the end of the string.
str.substr(-4); // Kiwi
```

6. `replace()` method replaces a specified value with another value in a string. By default, the replace() method replaces only the first match
```js
let str = "Hi Adam. Adam?";
str.replace("Adam", "Louis"); // "Hi Louis. Adam?"
```
`replace()` method is case sensitive, but you can use a **regular expression** with an /i flag (insensitive). Regular expressions are written without quotes!
```js
str = "visit Google!";
var n = str.replace(/GOOGLE/i, "W3Schools");
```
To replace all matches, use a regular expression with a /g flag (global match):
```js
let str = "Hi Adam. Adam?";
str.replace(/Adam/g, "Louis"); // "Hi Louis. Louis?"
```
More on regular expressions [here](https://www.w3schools.com/js/js_regexp.asp), but it's not the time yet, so don't click it.

7. `toUpperCase()`, `toLowerCase()`
```js
"HELLO CAN YOU HEAR ME?".toLowerCase() // 'hello can you hear me?'
"no?".toUpperCase() // 'NO?'
```

8. `concat()` joins two *or more* strings
```js
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); // 'Hello World'
var text4 = text1.concat(" ", text2, ' ', "I guess"); // "Hello World I guess"

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!"); // will do the same
```
All string methods return a new string. They don't modify the original string.<br/>
Formally said: **Strings are immutable**: Strings cannot be changed, only replaced.

9. `trim()` method removes whitespace from **both sides** of a string
```js
var str = "       Hello World!        ";
console.log(str.trim()); // Hello World!

// The trim() method is not supported in Internet Explorer 8 (2009) or lower
```

10. Extracting String Characters: `charAt()`, `charCodeAt()` or `[ ]` *(Property access)*
- `charAt()` returns the character at a specified index (position) in a string
- `charCodeAt()` returns the unicode of the character at a specified index in a string
- `[ ]` property access on strings is available from ECMASCript 5 (2009)
```js
var str = "HELLO WORLD";
str.charAt(0); // 'H'
str.charCodeAt(0); // returns 72
str[0]; // 'H'
str[str.length - 1]; // last letter 'D'

// If no character is found, [ ] returns undefined, while charAt() returns an empty string
// It is read only. str[0] = "A" gives no error (but does not work!).. strings are immutable
// [ ] does not work in Internet Explorer 7 or earlier (2006)
// If you want to work with a string as an array, you can convert it to an array (like in Python)
```

11. `split()` Convert a String to an Array
```js
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas [ 'a', 'b', 'c', 'd', 'e' ]
"a b c d".split(" ");    // Split on spaces [ 'a', 'b', 'c', 'd' ]

var txt = "abcdef";
txt.split('b'); // [ 'a', 'cdef' ]

// If the separator is "", the returned array will be an array of single characters
txt.split(''); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// If the separator is omitted, the returned array will contain the whole string in index [0].
txt.split(); // [ 'abcdef' ]
```

- More on strings:
    - [w3schools Javascript strings](https://www.w3schools.com/js/js_string_methods.asp)
    - [w3schools complete string reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)
    - [All strings methods listed from developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Numbers: Decimal, Hexadecimal, Octal, Binary, Infinity and Number Methods `toFixed`/`toPrecision`
JavaScript interprets numeric constants as:
- **decimal (base 10)** (with no prefix)
- **hexadecimal (base 16)** if they are preceded by 0x (`0xFF`)
- **octal (base 8)** if they are preceded by 0 (`020`)
- **binary (base 2)** if prefixed by 0b or 0B (`0b1001`)

- `toString()` method to output numbers from base 2 up to base 36:
```js
// toString() method can be used only with a DEFINED variable!!!
// 54.toString() will give SyntaxError: Invalid or unexpected token

// Convert DEC -> BIN
var x = 17; x.toString(2) // '10001'
// Convert DEC -> HEX
var x = 17; x.toString(16) // '11'
// Convert DEC -> OCT
var x = 17; x.toString(8) // '21'

// Convert BIN -> DEC
var y = 0b110; y.toString(10) // '6'
// Convert BIN -> HEX
var y = 0b1110; y.toString(16) // 'e' (why lowercase tho)

// Convert HEX -> DEC
var z = 0xF; z.toString(10) // '15'
// Convert HEX -> BIN
var z = 0xF; z.toString(2) // '1111'
```

- `Infinity` (or `-Infinity`) is the value JavaScript will return if you calculate a number outside the largest possible number.
```js
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

// Division by 0 (zero) also generates Infinity:
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

// Infinity is a number:
typeof Infinity;     // returns "number"... Weirdly enough...
```

Oook, `infinity`, best desigh choice ever you'd say. But [how do you actually catch division by zero then?](https://stackoverflow.com/questions/8072323/best-way-to-prevent-handle-divide-by-0-in-javascript)
```js
// check with an if statement
if (n === 0 || isNaN(n)) {
    vax result = number / n;
}

// or check with isFinite(), if return false, then handle it appropriately

// or...
function notZero(n) {
  n = +n;  // Coerce to number.
  if (!n) {  // Matches +0, -0, NaN
    throw new Error('Invalid dividend ' + n);
  }
  return n;
}
var result = numerator / notZero(denominator)
```

- Numbers can also be objects:
```js
var x = 123;
var y = new Number(123);
// typeof x returns number
// typeof y returns object

// However, do not create Number objects. It slows down execution speed
```

- `toFixed()` returns the rounded number with a specified number of decimals
```js
var x = 9.656;
console.log(x.toFixed(0)); // returns 10
console.log(x.toFixed(2)); // returns 9.66
console.log(x.toFixed(3)); // returns 9.656
console.log(x.toFixed(6)); // returns 9.656000
```

- `toPrecision()` returns the rounded number with a specified number of how many decimals to round
```js
var x = 9.656;
x.toPrecision();        // 9.656
x.toPrecision(2);       // 9.7
x.toPrecision(3);       // 9.66
x.toPrecision(6);       // 9.65600
```

- Number properties: `MAX_VALUE`, `MAX_VALUE`, `POSITIVE_INFINITY`, `NEGATIVE_INFINITY`, `NaN`
    - `MAX_VALUE`: Returns the largest number possible in JavaScript
    - `MIN_VALUE`: Returns the smallest number possible in JavaScript
    - `POSITIVE_INFINITY`: Represents infinity (returned on overflow)
    - `NEGATIVE_INFINITY`: Represents negative infinity (returned on overflow)
    - `NaN`: Represents a "Not-a-Number" value
```js
var x = Number.MAX_VALUE; // 1.7976931348623157e+308
var x = Number.MIN_VALUE; // 5e-324
var x = Number.POSITIVE_INFINITY; // Infinity

// Number Properties Cannot be Used on Variables
var x = 6; var y = x.MAX_VALUE;    // y becomes undefined
```

### Arrays and Array methods: `shift`/`unshift`, `push`/`pop`, `splice`/`slice`, `sort`
```js
cars.length; // 3
cars[length - 1]; // 23 last element of array

console.log(myNestedArray[0]); // [ 'universe', 42 ]
console.log(myNestedArray[0][1]); // 42

myNestedArray[0] = "not anymore"; // [ 'not anymore', [ 'everything', 7.2 ] ]



var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();          // Removes the first element "Banana" from fruits
console.log(fruits)      // ["Orange", "Apple", "Mango"]

fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits as first element
console.log(fruits)      // [ 'Lemon', 'Orange', 'Apple', 'Mango' ]


fruits.pop();         // Removes the last element ("Mango") from fruits
// Also, you can store the value of popped element: "Mango"
// var x = fruits.pop();

fruits.push("Kiwi");  // Adds a new element ("Kiwi") to end of fruits ['Orange', 'Kiwi']
// Also: The push() method returns the new array length, interesting feature.
// var x = fruits.push("Kiwi"); 

delete fruits[0];     // Changes the first element in fruits to undefined

fruits.splice(2, 0, "Lemon", "Kiwi");
// first parameter (2) defines the position where new elements should be added (spliced in).
// second parameter (0) defines how many elements should be removed.
// rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
fruits.splice(0, 1);        // Removes the first element of fruits



var cars_fruits = cars.concat(fruits); // Concatenates (joins) two arrays
var arr1_arr2_arr3 = arr1.concat(arr2, arr3, "Peter");   // Concatenates arr1 with arr2 and arr3 and "Peter"


var fruits = ["Banana", "Orange", "Lemon", "Apple"];
var citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
fruits_str = fruits.toString(); // 'Banana,Orange,Lemon,Apple', doesn't change fruits array
```

- `sort()` and `reverse()`
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts array alphabetically
fruits.reverse();     // Then reverse the order of the elements
```
JS strikes again: By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.<br/>
You can fix this by providing a compare function:
```js
var numArray = [140000, 104, 99];
numArray.sort(function(a, b) { return a - b; }); // ascending

// Or, with ES6, you can use arrow functins - more on those later
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort
```
Sort an array in random order:
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
```
Find the max/min number in an Array wusing `Math.max()`:
```js
Math.max.apply(null, numArray);
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)
```


### JavaScript functions
```js
function myFunctionName(p1, p2) {
  return p1 * p2;
}
let result = myFunctionName(2, 5); // 10
```

```js
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(80);
// Accessing a function without () will return the function object instead of the function result.
// function toCelsius(f) { return (5/9) * (f-32); }
```


### Arrays and Array iteration methods: `forEach`, `map`, `filter`, `reduce`, `every`, `some`, `indexOf`, `find`, `findIndex`
1. `Array.forEach()` method calls a function (a callback function) once for each element
```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
console.log(txt) // 45<br>4<br>9<br>16<br>25<br>

// or using js arrow function
numbers.forEach((value) => {txt += value + "<br>";});


// In Python we would use list comprehension and join
txt = "".join([str(_)+"<br>" for _ in x])
```
Note that the function takes 3 arguments, some can be optional but must respect the same name:
- The item `value`
- The item `index`
- The `array` itself

2. `Array.map()` method creates a new array by performing a function on each array element
- The map() method does not execute the function for array elements without values.
- The map() method does not change the original array.
```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index) {
  return value * 2;
}
console.log(numbers2) // [ 90, 8, 18, 32, 50 ]

// or using js arrow function
var numbers2 = numbers1.map((value) => {return 2 * value});


// In Python we would use list comprehension:
numbers2 = [2 * _ for _ in numbers1]
// or map and lambda function
numbers2 = list(map(lambda _: 2 * _, numbers1))
```

3. `Array.filter()` method creates a new array with array elements that passes a test
```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18) // [ 45, 25 ]

// or using js arrow function
var over18 = numbers.filter((value) => {return value > 18;});


// In Python we could use list comprehension:
over18 = [_ for _ in numbers if _ > 18]
```

4. `Array.reduce()` method runs a function on each array element to produce (reduce it to) a single value
- `reduce()` method works from left-to-right in the array. 
- `reduceRight()` does exactly the same but works from right-to-left in the array.
- Note that the function takes 4 arguments with the same exact names, even `total`:
    - The `total` (the initial value / previously returned value)
    - The item `value`
    - The item `index`
    - The `array` itself
```js
var numbers = [45, 4, 9, 16, 25];
var nrSum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(nrSum); // 99

// or using js arrow function
var nrSum = numbers.reduce((total, value) => {return total + value});


// In Python, we can use sum(Array)
nrSum = sum(numbers) 
```
Soo, if we want to add only the numbers that are >18?
```js
var numbers = [45, 4, 9, 16, 25];
var sumOver18 = numbers.filter((value) => {return value > 18;})
                        .reduce((total, value) => {return total + value}); // 70
// or
var sumOver18 = numbers.filter(e => e > 18)
                        .reduce((total, value) => {return total + value});

// or in Python using list comprehension and sum()
sumOver18 = sum([_ for _ in numbers if _ > 18])
```
What if we want sum of even numbers?
```js
var numbers = [45, 4, 9, 16, 25];
var sumEven = numbers.filter(e => !(e % 2))
                        .reduce((total, value) => {return total + value}); // 20

// and Python?
sumEven = sum([_ for _ in numbers if _ % 2 == 0])
```

5. `Array.every()` method check if all array values pass a test
```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every((value, index, array) => {return value > 18});
console.log(allOver18) // false


// In Python we would use all() and list comprehension
allOver18 = all([_ > 18 for _ in numbers]) // False
// all() returns True if every element in the list is True
// [_ > 18 for _ in numbers] returns [True, False, False, False, True]
```

6. `Array.some()` method check if some array values pass a test
