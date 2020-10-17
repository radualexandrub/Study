## Credits / Notes taken from:
- [3h26m Learn JavaScript - Full Course for Beginners from freeCodeCamp/Beau Carnes](https://youtu.be/PkZNo7MFNFg)
- [w3schools JavaScript Tutorial](https://www.w3schools.com/js/default.asp)

## Contents:
- [Where can I run JavaScript code?](#WhereCanRun)
- [Declaring variables with `var`, `let`, `const`](#declaringvariables)
- [Variable names that starts with `$` or `_`](#variablenamesthatstarts)
- [JS Data Types](#JSDataTypes)
- [JS Operators `+` `-` `*` `**` `/` `%` `++` `--` and Comparisons](#JSOperators)
- [Strings, Strings methods and Template Literals](#StringsStringsMethodsTemplateLiterals)
  - [`length`](#stringlength), [`indexOf`](#stringindexof), [`search`](#stringsearch), [`slice/substring/substr`](#stringSliceSubstringSubstr), [`replace`](#stringReplace), [`toUpper/Lower`](#stringToUpperCaseToLower)
  - [`concat`](#stringConcat), [`trim`](#stringTrim), [`split`](#stringSplit)
  - [`template literals`](#stringTemplateLiterals)

- [Numbers: Decimal, Hexadecimal, Octal, Binary, Infinity and Number Methods `toFixed`/`toPrecision`](#NumbersDecimalHexadecimalEtc)
- [JavaScript `if else`, `switch`, `for`, `for in`, `for of` loop, `while`, `do/while` loop, `break`](#JavaScriptIfElseSwitchFor)
  - [`if else`](#JSIfElse), [`switch`](#JSSwitch)
  - [`for`](#JSforloop), [`for...in`](#Jsforin), [`for...of`](#Jsforof)
  - [`while`](#JSwhileloop), [`break` and `continue`](#JsBreakandContinue)
- [Arrays and Array methods: `shift`/`unshift`, `push`/`pop`, `splice`/`slice`, `includes`](#ArraysandArryasMethods)
  - [Array `sort()`](#ArraySort)
- [JavaScript Functions](#JsFunctionsHoistingandReturn)
  - [Returning values and Function Hoisting](#JsFunctionsHoistingandReturn)
  - [`Arrow functions`](#JsArrowFunctions)
  - [`this` operator](#JsThisOperator)
  - [Making a simple counter function with a button](#JsMakeaSimpleCounter)
  - [JavaScript function closures](#JsfunctionClosures)
- [The `Rest` operator (`...`) and `Spread` (`...`) operator](#RestOperatorandSpreadOperator)
- [Arrays and Array iteration methods](#ArraysAndArrayIteration)
  - [`forEach`](#ArrayforEach), [`map`](#Arraymap), [`filter`](#ArrayFilter), [`reduce`](#ArrayReduce), [`every`](#ArrayEvery), [`some`](#ArraySome), [`indexOf`](#ArrayIndexOf), [`find`](#ArrayFind), [`findIndex`](#ArrayFindIndex)

- [Using Destructuring Assignment to Assign Variables from Objects](#UsingDestructurinAssignment)
- [Create Concise Object Literal Declarations using Simple Fields](#ConciseObjectLiteralDeclarations)
- [Write Concise Declarative Functions](#ConciseDeclarativeFunctions)
- [JavaScript Generator Function* (`yield`)](#JsGeneratorFunctions)
- [JavaScript Classes](#JavaScriptClasses)
  - [Using class Syntax to Define a Constructor Function](#UsingClassSyntaxtoDef)
  - [Using getters and setters to Control Access to an Object](#UsingGettersSetters)
  - [JavaScript Class Inheritance](#JSClassInheritance)
  - [Class Hoisting](#JSClassHoisting)


## <a name="WhereCanRun">Where can I run JavaScript code?</a>
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


## <a name="declaringvariables">Declaring variables with `var`, `let`, `const`</a>
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

## <a name="variablenamesthatstarts">Variable names that starts with `$` or `_`</a>
JavaScript treats `$` and `_` as if they were letters of the alphabet, so identifiers containing `$` are valid variable names.<br/>
Now multiple libraries are providing their own version of the $() function, so many now provide the option to turn off that definition in order to avoid clashes. Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library. In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery `$("p")`; means "select all p elements".
<br/><br/>
Of course, you don't need to use a library to be able to use $(). All you need to substitute $() for document.getElementById() is to add a definition of the $() function to your code as follows:
```js
function $(x) {return document.getElementById(x);}
$("demo").innerHTML = "My First JavaScript";

// instead of
// document.getElementById("demo").innerHTML = "My First JavaScript";
```
And the HTML part:
```HTML
<body>
    <p id="demo"></p>
</body>
```

Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names. Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables (objects or methods). This is a quick and easy way to immediately identify a private class member, and it is so widely used, that almost every programmer will recognize it.
<br/><br/>
Note that again, as with $, the use of _ is merely a convention and is not enforced by JavaScript itself.

## <a name="JSDataTypes">JS Data Types</a>
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
var personObj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

// Check if object has a specific property
personObj.hasOwnProperty("age"); // true
personObj.hasOwnProperty("address"); // false
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

## <a name="JSOperators">JS Operators `+` `-` `*` `**` `/` `%` `++` `--` and Comparisons</a>
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




## <a name="StringsStringsMethodsTemplateLiterals">Strings, Strings methods and Template Literals</a>

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

1. <a name="stringlength"></a>String `length`

```js
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length); // 26
console.log('aaa'.length); // 3
```

2. <a name="stringindexof"></a>`indexOf()` method returns the index of (position of) the first occurrence of a specified text in a string

3. `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string

```js
"Please locate where 'locate' occurs!".indexOf("locate"); // 7
"Please locate where 'locate' occurs!".lastIndexOf("locate"); // 21

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
"Please locate where 'locate' occurs!".lastIndexOf("NotInString"); // -1

// Both methods accept a second parameter as the starting position for the search:
"Please locate where 'locate' occurs!".indexOf("locate", 15); // 21
```

4. <a name="stringsearch"></a>`search()` method searches a string for a specified value and returns the position of the match

```js
console.log("Please locate where 'locate' occurs!".search("locate")); // 7 
// search() seems to be the same as indexOf()
```
- However, The two methods are NOT equal
    - `search()` method cannot take a second start position argument, but can take regular expressions
    - `indexOf()` method cannot take powerful search values (regular expressions)

5. <a name="stringSliceSubstringSubstr"></a>Extracting String Parts: `slice(start, end`), `substring(start, end)`, `substr(start, length)`
- `slice()` extracts a part of a string and returns the extracted part in a new string.

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

6. <a name="stringReplace"></a>`replace()` method replaces a specified value with another value in a string. By default, the replace() method replaces only the first match

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

7. <a name="stringToUpperCaseToLower"></a>`toUpperCase()`, `toLowerCase()`

```js
"HELLO CAN YOU HEAR ME?".toLowerCase() // 'hello can you hear me?'
"no?".toUpperCase() // 'NO?'
```

8. <a name="stringConcat"></a>`concat()` joins two *or more* strings

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

9. <a name="stringTrim"></a>`trim()` method removes whitespace from **both sides** of a string

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

11. <a name="stringSplit"></a>`split()` Convert a String to an Array

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

- <a name="stringTemplateLiterals"></a>**Create Strings using Template Literals**:

```js
const person = {
  name: "Ben",
  age: 37
};
const greeting = `Hello, ${person.name}!
Your age is ${person.age}.`; // Note the use of backticks

// With backticks, we can put variables right in the string using $
// We can also make multi-line strings without using / as separator
// Also. you don't have to escape any quotation marks ' ', " "
```

One more example using Template Literals vs. not using them:

```js
const count = 3
const user = 'Benny Doe'
const span = 2

function pluralize(text, count) {
    if (count === 1) {
        return text
    }
    return text + 's'
}

// WITHOUT Template Literals:
const result = count + ' ' + pluralize('blog post', count)  
                     + ' were written by ' + name
                     + ' in a span of ' + span 
                     + ' ' + pluralize('week', span) + '.';

// WITH Template Literals:
const result = `${count} ${pluralize('blog post', count)} were written by ${name} in a span of ${span} ${pluralize('week', span)}.`
```

Another example using Template Literals:

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
/*
  ['<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>']
*/
```

- More on strings:
    - [w3schools Javascript strings](https://www.w3schools.com/js/js_string_methods.asp)
    - [w3schools complete string reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)
    - [All strings methods listed from developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## <a name="NumbersDecimalHexadecimalEtc">Numbers: Decimal, Hexadecimal, Octal, Binary, Infinity and Number Methods `toFixed`/`toPrecision`</a>
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

We can also convert using `parseInt()`:

```js
// Another method to convert BIN -> DEC using parseInt()
var x = parseInt("11", 2); // x = 3
var x = parseInt("110", 2); // x = 6

// HEX -> DEC
console.log(parseInt("f", 16));// x =  15
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

- `toPrecision()` returns the rounded number with a specified length of the number

```js
var x = 9.656;
x.toPrecision();        // 9.656
x.toPrecision(2);       // 9.7
x.toPrecision(3);       // 9.66
x.toPrecision(6);       // 9.65600
```
[In short](https://stackoverflow.com/questions/3337849/difference-between-tofixed-and-toprecision): `toFixed(n)` provides `n` length after the decimal point; `toPrecision(x)` provides `x` total length of number.

```js
Math.PI.toFixed(2); // "3.14"
Math.PI.toPrecision(2); // "3.1"

// Furthermore, toPrecision will yield scientific notation if there are more integer digits in the number than the specified precision.
(Math.PI * 10).toPrecision(2); // "31"
(Math.PI * 100).toPrecision(2); // "3.1e+2"
```

- **Floats**: All numbers in JavaScript are stored as 64-bits **Floating point numbers** (Floats)<br/>
All programming languages, including JavaScript, have difficulties with precise floating point values:

```js
var x = 0.1;
var y = 0.2;
var z = x + y // the result in z will not be 0.3 but 0.30000000000000004
```
To solve this we use:

```js
var z = (x * 10 + y * 10) / 10; // z will be 0.3

// or if we know what result to expect:
var z = (x + y).toFixed(1); 
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



## <a name="JavaScriptIfElseSwitchFor">JavaScript `if else`, `switch`, `for`, `for in`, `for of` loop, `while`, `do/while` loop, `break`</a>
#### <a name="JSIfElse">[`if else`](https://www.w3schools.com/js/js_if_else.asp)</a>

```js
if (condition1) {
  //  code
} else if (condition2) {
  //  code
} else {
  //  code
}
```
Inline `if` (or Ternary Operator):

```js
a ? b : c // is rougly the same as if (a) { b; } else { c; }
// and
(a && b) || c // is rougly the same as a ? b : c

// Eg
var c = (a < b) ? "a is less than b"  : "a is not less than b";
// condition ? codeblock_if_condition_is_met : codeblock_if_condition_is_not_met;

// for more statements: if elseif else
var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))
// same as
  a === "a" ? do something
: a === "b" ? do something
: do something

// another eg.
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
```

#### <a name="JSSwitch">[`switch`](https://www.w3schools.com/js/js_switch.asp)</a>

```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

```html
<body>
<p id="demo"></p>

<script>
var x = 0; // will show Off
var x = '0'; // will show No value found

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
```

#### <a name="JSforloop">[`for` loops](https://www.w3schools.com/js/js_loop_for.asp)</a>
- `for` - loops through a block of code a number of times
- `for/in` - loops through the properties of an object
- `for/of` - loops through the values of an iterable object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

#### `for` loop

```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

// <p id="demo"></p>
var text = "";
for (let i = 0; i < 8; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
```
- `statement1` from `for(statement 1; statement 2; statement 3){}`, is used to initialize variables. It's optional if variables are declared and defined earlier.

```js
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var len, text;
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
```

```js
// Looping over an array
var myArr = [9, 10, 11, 12];
var mySum = 0;

for (let i = 0; i < myArr.length; i++) {
  mySum += 0 myArr[i];
}
```

- `statement2` is used to evaluate the condition of the initial variable. It's also optional, you can omit it in order to create an infinite loop, where you must provide a `break` inside.

- `statement3` increments/decrements the value of the initial variable (`i--`, `i += 5`). It could also be optional/omitted if you increment the values inside the loop.

#### <a name="Jsforin">`for...in` loops through the properties of an object</a>

```js
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt; // John Doe 25
```
```js
var txt = "";
var persons = [
    {fname:"Jane", lname:"Doe", age:23},
    {fname:"John", lname:"Doe", age:27},
    {fname:"Albert", lname:"Doa", age:24}
]; 
var x;
for (x in persons) {
  txt += persons[x].fname + " " + persons[x].lname + " " + persons[x].age + "<br>";
}
document.getElementById("demo").innerHTML = txt; // Jane Doe 23 John Doe 27 Albert Doa 24
```

#### <a name="Jsforof">`for...of` loops through the values of an iterable objects</a>

```js
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >"); // BMW Volvo Mini
}

// using for x IN cars
for (x in cars) {
  document.write(x + "<br >"); // 0 1 2
}

// looping over a String
var txt = 'JavaScript';

for (let x of txt) {
  document.write(x + "<br >");
}
```

#### <a name="JSwhileloop">`while` loop</a>

```js
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
// If you forget to increase the variable used in the condition, the loop will never end. 
// This will crash your browser.. yep I can confirm, chrome tab freezes.

var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
```

#### `do while` loop

```js
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```
A `while` loop is much the same as a `for` loop, with statement 1 and statement 3 omitted:

```js
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
  text += cars[i] + "<br>";
  i++;
}
// same as
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}
```

#### <a name="JsBreakandContinue">[The `break` and `continue` statement](https://www.w3schools.com/js/js_break.asp)</a>
The `break` statement can also be used to jump out of a loop and continues executing the code after the loop (if any).

```js
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
```
The `continue` statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```js
for (i = 0; i < 6; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
// This example skips the value of 3: will show 0 1 2 4 5
```






## <a name="ArraysandArryasMethods">Arrays and Array methods: `shift`/`unshift`, `push`/`pop`, `splice`/`slice`, `includes`:</a>

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

```js
const values = [2, 3, 4];
values.includes(1); // false
values.includes(2); // true
```

## <a name="ArraySort">Array `sort()`</a>
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

- [Sort arrays of objects by property](https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value). More [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
var objs = [ 
    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
    { first_nom: 'Pig',    last_nom: 'Bodine'   },
];

function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort(compare);
```
Another example:

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'The', value: -12 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```
Or inline:

```js
objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0)); 
```
Or you can use inline arrow functions and `localCompare` (ES6/ES2015):

```js
objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));

// prior to 
objs.sort(function(a, b) {
    return a.last_nom.localeCompare(b.last_nom)
});
```






## <a name="JsFunctionsHoistingandReturn">JavaScript Functions, Returning values and Function Hoisting</a>

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

- [Return multiple values using Arrays](https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript)

```js
function getValues() {
    return [getFirstValue(), getSecondValue()];
}
var values = getValues(); var first = values[0]; var second = values[1];
// or Access them with (ECMAScript 6)
var [first, second] = getValues();


// OR you can return an object with "labels"
function getValues() {
    return {
        first: getFirstValue(),
        second: getSecondValue(),
    };
}
var values = getValues(); var first = values.first; var second = values.second;
// or Access them with (ECMAScript 6)
var {first, second} = getValues();
```

```js
// Other way of looking at it:
var [x, y] = [1, 2];
x; // 1
y; // 2

// or
[x, y] = (function(){ return [3, 4]; })();
x; // 3
y; // 4

// or
let {x, y} = (function(){ return {y: 3, z: 500, x: 40} })();
x; // 40
y; // 3
```

- `Function Hoisting` = JavaScript's default behavior of moving declarations to the top of the current scope. Because of this, JavaScript functions can be called before they are declared:

```js
// JavaScript Hoisting
myFunction(5);

function myFunction(y) {
  return y * y;
}
```



## <a name="JsArrowFunctions">`Arrow functions`</a>
Arrow functions allows a short syntax for writing function expressions. You don't need the `function` keyword, the `return` keyword or the curly brackets.

```js
function hello() {
    return "Hello World"
}

var hello = function() {     // this is also called anonymous function 
  return "Hello World!"; // (function without a name that is asigned to var hello)
}                        // which can be written as an arrow function

// With arrow function
var hello = () => {
  return "Hello World!";
}

// With arrow function that returns only a single value by default and without parameters
var hello = () => "Hello World!";

// Arrow function with parameters
var hello = (val, val2) => "Hello " + val + val2;
var hello = e => "Hello " + e; // usually people use 'e' instead of 'val'
```
- More examples:

```js
// ES5
var x = function(x, y = 5) { // You can make y = 5 as default
  return x * y;
}

// ES6
const x = (x, y) => x * y;

// call it
x(5, 5)
```
- Arrow functions do not have their own this. They are not well suited for defining **object methods**.
- Arrow functions are not hoisted. They must be defined **before** they are used.
- Using `const` is safer than using `var`, because a function expression is always constant value.
- You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them
```js
const x = (x, y) => { return x * y };
```


## <a name="JsThisOperator">`this` operator</a>
- [With arrow functions there are no binding of `this`](https://www.w3schools.com/js/js_arrow_function.asp). In regular functions, the `this` keyword represents the object that called the function, which could be the window, the document or a button.<br/>
With arrow functions the `this` keyword always represents the object that defined the arrow function.

```js
/* Both examples call a method twice:
first when the page loads, and once again when user clicks a button */

/* EXAMPLE WITH REGULAR FUNCTION */
// With a regular function this represents THE OBJECT THAT CALLS the function:
hello = function() { document.getElementById("demo").innerHTML += this; }

window.addEventListener("load", hello); // The window object calls the function
document.getElementById("btn").addEventListener("click", hello); // A button object calls the function

// => on first page reload will show [object Window]
// => after pressing button will show [object HTMLButtonElement]
```

```js
/* EXAMPLE WITH ARROW FUNCTION */
// With an arrow function this represents the owner of the function:
hello = () => { document.getElementById("demo").innerHTML += this; }

window.addEventListener("load", hello); // The window object calls the function
document.getElementById("btn").addEventListener("click", hello); // A button object calls the function

// => on first page reload will show [object Window]
// => after pressing button will show [object Window]
// The owner is the Global object, so this refers to the Global object
// That's because in a browser window the Global object is [object Window]
```
More on `this` [here](https://www.w3schools.com/js/js_this.asp)

```js
// this in a method within an object
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName()) // John Doe
```

```js
// Or, more specific:
var person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
document.getElementById("demo").innerHTML = person.myFunction(); // [object Object]
console.log(person.myFunction()); // will show all the definiton with properties and methods of object person
```

```HTML
<!-- In HTML event handlers, this refers to the HTML element that received the event: -->
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
```
- [About the JavaScript `call()` method](https://www.w3schools.com/js/js_function_call.asp)
- [About the JavaScript `apply()` method](https://www.w3schools.com/js/js_function_apply.asp)




## <a name="JsMakeaSimpleCounter">Making a simple counter function with a button</a>

```HTML
<!DOCTYPE html>
<html>
<body>

<p>The counter is: <span id="demo"></span></p>
<button id="btnAdd">Count</button>

<script>
var counter = 0; // global variable, can be used (and changed) by all scripts in the page

function addCnt() {
    counter += 1;
    document.getElementById("demo").innerHTML = counter;
}
document.getElementById("btnAdd").addEventListener("click", addCnt);
</script>

</body>
</html>
<!-- However, there is a problem with the solution above: Any code on the page can change the counter, without calling add(). -->
```


## <a name="JsfunctionClosures">[JavaScript function closures](https://www.w3schools.com/js/js_function_closures.asp)</a>
Another example on function closures [here](https://dev.to/proiacm/closures-in-javascript-3289) or [here](https://stackoverflow.com/questions/18655275/javascript-closures-function-parameters/29709010).

```HTML
<!DOCTYPE html>
<html>
<body>

<p id="demo">0</p>
<button type="button" onclick="myFunction()">Count</button>

<script>
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
</script>

</body>
</html>
```
The variable `add` is assigned the return value of a self-invoking function. <br/>
**The self-invoking function only runs once**. It sets the counter to zero (0), and returns a function expression. <br/>
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope. <br/>
This is called a JavaScript closure. It makes it possible for a function to have "private" variables. <br/>
The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

```html
<!-- Add parameter to functions closures -->
<!DOCTYPE html>
<html>
<body>

<button type="button" onclick="myFunctionInc()">Increment</button>
<button type="button" onclick="myFunctionDec()">Decrement</button>
<p id="demo">0</p>

<script>
var add = (function () {
  var counter = 0;
  return function (param) {
    if (param === 'add') {
      counter += 1; 
    } else {
      counter -= 1;
    }
    return counter;
  }
})();

function myFunctionInc(){
  document.getElementById("demo").innerHTML = add('add');
}
function myFunctionDec(){
  document.getElementById("demo").innerHTML = add('sub');
}
</script>

</body>
</html>
```



## <a name="RestOperatorandSpreadOperator">The `Rest` operator (`...`) on Function Parameters and `Spread` (`...`) operator to Evaluate Arrays In-Place</a>
#### The Rest operator allow a function to take a variable number of arguments

```js
/* This function takes 3 parameters and returns their sum */
const sum = (function() {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b);
  };
})();
console.log(sum(1, 2, 3)); // 6
```

```js
/* This function takes any number of parameters using Rest operator and returns their sum */
const sum = (function() {
  return function sum(...args) {
    // The Rest operator (...) wil convert the argumets into an array called args
    return args.reduce((a, b) => a + b);
  };
})();
console.log(sum(1, 2, 3, 4)); // 10
```

#### The Spread operator expands an already existing array (spreads out an array into its individual elements)
By default, copying an array uses pass-by-reference values.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
let arr2 = arr1;
arr1[0] = 'potato';
console.log(arr2); // [ 'potato', 'FEB', 'MAR', 'APR' ]
console.log(arr1); // [ 'potato', 'FEB', 'MAR', 'APR' ]
```
Using the Spread operator, we will "copy" the array using pass-by-value:

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
let arr2 = [...arr1];
arr1[0] = 'potato';
console.log(arr2); // [ 'JAN', 'FEB', 'MAR', 'APR' ]
console.log(arr1); // [ 'potato', 'FEB', 'MAR', 'APR' ]
```

In Python we would use the `Unpack` `*` operator:

```python
# In Python we use the * operator
# Example 1 (pass-by-reference)
a = [1, 2, 3]
b = a
b[0] = 'changed'
print(a) # ['changed', 2, 3]
print(b) # ['changed', 2, 3]

# Example 2 (pass-by-value)
a = [1, 2, 3]
b = [*a]
b[0] = 'changed'
print(a) # [1, 2, 3]
print(b) # ['changed', 2, 3]
```

- We can also use the `Spread` operator to remove first two (or more) items from an Array:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [ , , ...arr] = numbers;
console.log(arr); // [3, 4, 5, 6, 7]
```


## <a name="ArraysAndArrayIteration">[Arrays and Array iteration methods](https://www.w3schools.com/js/js_array_iteration.asp): `forEach`, `map`, `filter`, `reduce`, `every`, `some`, `indexOf`, `find`, `findIndex`</a>
1. <a name="ArrayforEach"></a>`Array.forEach()` method calls a function (a callback function) once for each element

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

2. <a name="Arraymap"></a>`Array.map()` method creates a new array by performing a function on each array element
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

Another example of using `map` to convert strings numbers to numbers:

```js
['1', '7', '11'].map(n => parseInt(n)) // [1, 7, 11]

// WRONG Method of doing it:
['1', '7', '11'].map(parseInt) // [1, NaN, 3]
```

3. <a name="ArrayFilter"></a>`Array.filter()` method creates a new array with array elements that passes a test

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

```js
// Compute the square root of integers only (not floats)
var numbers = [4, 5.6, -9.8, 3.14, 12, 6, 8.34, -2];
var squareNumbers = numbers.filter(val => Number.isInteger(val)).map(x => x ** 2);
console.log(squareNumbers); // [ 16, 144, 36, 4 ]
```

4. <a name="ArrayReduce"></a>`Array.reduce()` method runs a function on each array element to produce (reduce it to) a single value
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

5. <a name="ArrayEvery"></a>`Array.every()` method check if all array values pass a test

```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every((value, index, array) => {return value > 18});
console.log(allOver18) // false


// In Python we would use all() and list comprehension
allOver18 = all([_ > 18 for _ in numbers]) // False
// all() returns True if every element in the list is True
// [_ > 18 for _ in numbers] returns [True, False, False, False, True]
```

6. <a name="ArraySome"></a>`Array.some()` method check if some array values pass a test

```js
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some((value) => {return value > 18}); // true


// In Python we would use any() and list comprehension
someOver18 = any([_ > 18 for _ in numbers]) // True
```

7. <a name="ArrayIndexOf"></a>`Array.indexOf(item[, start])` method searches an array for an element value and returns its position
- `Array.lastIndexOf(item[, start])` returns the position of the last occurrence of the specified element.
- *start* is optional: where to start the search; negative values will start at the given position counting from the end, and search to the end.

```js
var fruits = ["Kiwi", "Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple"); // 1

// in Python we would use index
fruits.index('Apple') // 1
```

8. <a name="ArrayFind"></a>`Array.find()` returns the value of the first array element that passes a test function

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction); // 25
function myFunction(value, index, array) {
  return value > 18;
}

// or with js arrow function
var first = numbers.find(e => e > 18); // 25
```

9. <a name="ArrayFindIndex"></a>`Array.findIndex()` method returns the index of the first array element that passes a test function

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction); // 3 (index)

function myFunction(value, index, array) {
  return value > 18;
}
```







## <a name="UsingDestructurinAssignment">Using Destructuring Assignment to Assign Variables from Objects</a>
- We can assign values to variables taken from an object in two ways:

```js
var voxel = {x: 3.6, y: 7.4, z:6.54};
// Method 1 [old way]:
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = vozel.z; // x = 6.54

// Method 2 [new way]:
const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54
```

- We can also use Destructuring Assignment with Nested Objects

```js
const localForecast = {
  today: {min: 17, max: 25},
  tomorrow: {min: 15, max: 21}
};

const {tomorrow: { max: maxOfTomorrow}} = localForecast; 
console.log(maxOfTomorrow) // 21
```
[Why don't we use object property access instead?](https://stackoverflow.com/questions/48137047/destructuring-assignment-vs-object-property-access-in-es6): because when destructuring the object you can list several variables to assign whilst `=` assignment is 1-to-1 where right part is being assigned to the left.
```js
const maxOfTomorrow = localForecast.today.max;
console.log(maxOfTomorrow) // 21
```

- Use Destructuring to swap variables:

```js
var a = 3, b = 7;
[b, a] = [a, b]; // a = 7, b = 3
```

- Use Destructuring to remove/store first two elements from an array:

```js
const source = [1,2,3,4,5];

const [, , ...arr] = source; // arr = [3,4,5]
const [a, b, ...arr] = source; // a = 1, b = 2, arr = [3,4,5]
```

- Use Destructuring Assignment to pass to a function's parameters only some of the properties of an object:<br/>
This is commonly used with **API calls**, when we are getting information from an AJAX/API request that have a lot of information that we need, and we can use destructuring to get only what we need to work with.

```js
/* Instead of passing the whole object like this: */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// const half = (function() {
//   return function half(stats) {
//     return (stats.max + stats.min) / 2.0;
//   };
// })();

const half = (stats) => (stats.max + stats.min) / 2.0; // 28.015

console.log(stats);
console.log(half(stats));
```

```js
/* We can pass only the parameters we need */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// const half = (function() {
//   return function half( {min, max} ) {
//     return (max + min) / 2.0;
//   };
// })();

const half = ({max, min}) => (max + min) / 2.0; // 28.015
```


## <a name="ConciseObjectLiteralDeclarations">Create Concise Object Literal Declarations using Simple Fields</a>

```js
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
console.log(createPerson("Anna", "27", "female")); // { name: 'Anna', age: '27', gender: 'female' }
```
If we create objects where the keys are the exact same name as the variables (arrow function's parameters), we can rewrite our function as:

```js
const createPerson = (name, age, gender) => ( {name, age, gender} );
```

## <a name="ConciseDeclarativeFunctions">Write Concise Declarative Functions</a>
The long way of puting a function into an object:

```js
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(6);
console.log(bicycle.gear); // 6
```
The simpler method:

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
```



## <a name="JsGeneratorFunctions">JavaScript [Generator Function* (`yield`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)</a>
The yield keyword is used to pause and resume a generator function  (`function*`). Syntax: `[retrievedValue] = yield [expression]`

```js
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value); // expected output: 0
console.log(iterator.next().value); // expected output: 1
```

```js
/* Another example */
function* countAppleSales () {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
};

let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }
```





## <a name="JavaScriptClasses"></a>JavaScript Classes

> JavaScript is object-oriented, but is not a *class-based* object-oriented language like Java, C++, C#. Class-based OOP languages are a subset of the larger family of OOP languages which also include prototype-based languages like JavaScript. JavaScript is both an object-oriented as well as a functional programming language.

Class Syntax:

```js
class ClassName {
  constructor(parameters) { ... }
  get getter() { ... }
  set setter(parameter) { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

### <a name="UsingClassSyntaxtoDef"></a>[Using class Syntax to Define a Constructor Function](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-class-syntax-to-define-a-constructor-function)

It should be noted that the `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.<br/>

In ES5, we usually define a constructor function and use the `new` keyword to instantiate an object:

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The `class` syntax simply replaces the constructor function creation:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus); // SpaceShuttle { targetPlanet: 'Jupiter' }
```

^^ The `class` keyword declares a function, to which a **constructor** is added. This constructor is invoked when `new` is called to create a new object.<br/>

One more example:

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // will display 'carrot'
```

[Mooore examples](https://www.w3schools.com/js/js_class_intro.asp):

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
```

### <a name="UsingGettersSetters"></a>[Using getters and setters to Control Access to an Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object)

You can obtain values from an object (**get**) and **set** the value of a property within an object.
- Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
- Setter functions are meant to modify/update (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```js
/* Example 1 */
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
```

**Note**: It is *convention* to write the name of a private variable with an underscore (`_`). However, that doesn't make a variable private.

```js
/* Example 2 */
class Thermostat {
    constructor(fahrenheit_temp) {
        this._temp = fahrenheit_temp;
    }
    get temperature() {
        return 5/9 * (this._temp - 32);
    }
    set temperature(new_temp) {
        this._temp = new_temp;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```


### <a name="JSClassInheritance"></a>[JavaScript Class Inheritance](https://www.w3schools.com/js/js_class_inheritance.asp)

To create a class inheritance, use the `extends` keyword. A class created with a class inheritance inherits all the methods from another class:

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show(); // I have a Ford, it is a Mustang
```

^^ The `super()` method refers to the parent class. By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

> Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

### <a name="JSClassHoisting"></a>[Class Hoisting](https://www.w3schools.com/js/js_class_inheritance.asp)

Unlike functions, and other JavaScript declarations, class declarations are not hoisted. That means that you must declare a class before you can use it:

```js
// !! You cannot use the class yet. !!
// mycar = new Car("Ford")
// This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
mycar = new Car("Ford")
```




















## Find me on Social
***My portfolio:*** [radubulai.com](https://radualexandrub.github.io/)<br>
***My blog:*** [CodingTranquillity](https://codingtranquillity.herokuapp.com/)

<a href="https://github.com/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/radu-alexandru-bulai/" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="radu-alexandru-bulai" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://dev.to/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.hackerrank.com/RaduAlexandruB" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.flickr.com/photos/radualexandru" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/flickr.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.mixcloud.com/radu-alexandru7" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/mixcloud.svg" alt="RaduAlexandru" height="28" width="28" /></a>&nbsp;&nbsp;
