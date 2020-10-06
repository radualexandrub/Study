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
var str1 = "It's oke";   // Using double quotes
var str2 = 'Hello "Anne"';   // Using single quotes
let phrase = `can embed another ${str1}`;
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

7. `Arrays` 
JavaScript arrays are written with square brackets. Array items are separated by commas.
```js
var cars = ["Saab", "Volvo", "BMW"];
```

8. `symbol`
The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

9. `JavaScript Objects`
avaScript objects are written with curly braces `{}`. Object properties are written as name:value pairs, separated by commas.
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

## JS Operators
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
console.log("Please locate where 'locate' occurs!".search("locate")); // 7 is the same as indexOf()
```
- However, The two methods are NOT equal
	- `search()` method cannot take a second start position argument, but can take regex
	- `indexOf()` method cannot take powerful search values (regular expressions)

5. Extracting String Parts: `slice(start, end`), `substring(start, end)`, `substr(start, length)`
- 
- 
- 

6. `replace()` method replaces a specified value with another value in a string

7. `toUpperCase()`, `toLowerCase()`

8. `concat()`

9. `trim()`

10. Extracting String Characters: `charAt()`, `charCodeAt()`

11. `split()` Convert a String to an Array


- More on strings:
	- [w3schools Javascript strings](https://www.w3schools.com/js/js_string_methods.asp)
	- [w3schools complete string reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)
	- [All strings methods listed from developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)