# PHP Tutorial

Credits / Notes taken from:

- [6h30m PHP For Absolute Beginners | 6.5 Hour Course - Traversy Media (dec-2020)](https://youtu.be/2eebptXfEvw)
- [4h30m PHP Programming Language Tutorial - freeCodeCamp (jun-2018)](https://www.youtube.com/watch?v=OK_JCtrrv-c&ab_channel=freeCodeCamp.org)
- [PHP Tutorial - w3schools](https://www.w3schools.com/php/)
- https://www.php.net/manual/en/index.php

## PHP Introduction

- PHP is an acronym for "PHP: Hypertext Preprocessor"
- PHP is a widely-used, open source scripting language
- PHP is a server-side language. PHP scripts/code are executed on the server, and the result is returned to the browser as plain HTML
- `.php` files can contain text, HTML, CSS, JavaScript, and PHP code
- PHP is an interpreted language

[What can PHP do?](https://www.w3schools.com/php/php_intro.asp)

- PHP can generate dynamic page content
- PHP can create, open, read, write, delete, and close files on the server
- PHP can collect form data
- PHP can send and receive cookies
- PHP can add, delete, modify data in your database
- PHP can be used to control user-access
- PHP can encrypt data
- **PHP is used for**
  - Simple or Complex websites
  - CRM Portals (Customer relationship management)
  - E-commerce systems
  - REST APIs
  - Image/video/audio processing
- **PHP CMSs (Content management systems)**
  - Wordpress - Most popular CMS
  - Drupal - CMS + E-commerce
  - Magento - E-commerce
  - Prestashop - E-commerce
  - Opencart - E-commerce
- **PHP Frameworks**
  - [Laravel](https://laravel.com/)
  - [Symfony](https://symfony.com/)
  - [CodeIgniter](https://www.codeigniter.com/)
  - [Yii2](https://www.yiiframework.com/)
  - [CakePHP](https://cakephp.org/)

With PHP you are not limited to output HTML. You can output images, PDF files, and even Flash movies. You can also output any text, such as XHTML and XML.

What's new in PHP 7? (released December 2015)

- PHP 7 is much faster than the previous popular stable release (PHP 5.6 - released Aug 2014)
- PHP 7 has improved Error Handling
- PHP 7 supports stricter Type Declarations for function arguments
- PHP 7 supports new operators (like the spaceship operator: `<=>`)

Note: PHP 8 was released on November 2020.

## PHP Installation using XAMPP

In order to run PHP, we need run an Web Apache Server that processes `.php` files and sends the output to the browser.<br/>For this, we can install [XAMPP](https://www.apachefriends.org/ro/index.html) distribution (X-Cross Platform, Apache, MariaDB/MySQL, PHP, Perl).

![](./PhpTutorial/00.jpg)

- To check if Apache server is running, open your browser and type http://localhost/dashboard/

- To check if MySQL is running, open http://localhost/phpmyadmin/

Add `C:\xampp\php` to `Environment Variables (Windows)` &rarr; `path`.

- Restart PC. Run in CMD Prompt `php -v`

If we want the Apache and MySQL to **autostart** at Windows Startup, we need to open XAMPP Control Panel as Administrator, click on red **X** to install Apache and MySQL as Window's Services &rarr; click on `Config` &rarr; check on `Autostart modules: Apache, MySQL`.

---

https://bitnami.com/stack/xampp#wordpress

---

**All the `php` files can be accessed from localhost from the `C:\xampp\htdocs` path.** The Apache Server can open all the `php` files located within than folder. For projects with multiple `php` files, the path will be `C:\xampp\htdocs\myProject`.

---

For the **text editor**, we can choose:

- [Visual Studio Code - free](https://code.visualstudio.com/)
- [Atom - free](https://atom.io/)
- [Jetbrain PhpStorm - 30-day trial, then €199.00 per year](https://www.jetbrains.com/phpstorm/)

Useful **VSCode extensions** for PHP:

- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
- [PHP Getters & Setters ?](https://marketplace.visualstudio.com/items?itemName=phproberto.vscode-php-getters-setters)

[Other extensions from blog article on codewall.co.uk](https://www.codewall.co.uk/best-visual-studio-code-php-extensions/)

---

**Now, we can start Apache and MySQL server from XAMPP Control Panel, navigate with Windows Explorer to `C:\xampp\htdocs\phptutorialsetup`, open our CMD Prompt in that location and type `code .` . <br/>(`phptutorialsetup` is obtained from [this github repo](https://github.com/thecodeholic/php-crash-course-2020/tree/master) from [PHP Tutorial - Traversy Media](https://youtu.be/2eebptXfEvw))**

**Now, we need to navigate to our `http://localhost/phptutorialsetup/` address in Chrome Browser.** 

![](./PhpTutorial/01.jpg)

---

<br/>

## PHP Syntax

[A PHP script starts with `<?php` and ends with `?>`:](https://www.w3schools.com/php/php_syntax.asp)

```php
<?php
// PHP code goes here
?>
```

The default file extension for PHP files is "`.php`". (unlike `Python Django`, PHP will **not** work within `.html` files !!!)

A PHP file normally contains HTML tags, and some PHP scripting code.

```php
<!DOCTYPE html>
<html>
<body>
<h1>My first PHP page</h1>
<?php
  echo "<h2>Hello World!</h2><br>";
  ECHO "Hello World!<br>";
  EcHo "Hello World!<br>";

  // This is a single-line comment
  # This is also a single-line comment

  /*
  This is a multiple-lines comment block
  that spans over multiple lines
  */

  // You can also use comments to leave out parts of a code line
  $x = 5 /* + 15 */ + 5;
  echo $x;
?>
</body>
</html>
```

In PHP, keywords (e.g. `if`, `else`, `while`, `echo`, etc.), classes, functions, and user-defined functions are **not** case-sensitive. :open_mouth:

**However; all variable names are case-sensitive!** :ok_hand:

```php
<?php
/*
only the first statement will display 
the value of the $color variable! 
This is because $color, $COLOR, and $coLOR
are treated as three different variables:
*/ 
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>
```

## PHP Variables

In PHP, a variable starts with the `$` sign, followed by the name of the variable. In PHP (as it's dynamically written language) variables don't have types.

```php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
echo $x + $y;
echo "<hr/>";
$name = "Radu";
echo "$txt my name is $name";
```

![](./PhpTutorial/02.jpg)

Rules for PHP variables:

- A variable starts with the `$` sign, followed by the name of the variable
- A variable name must start with a letter or the underscore character
- A variable name cannot start with a number
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive (`$age` and `$AGE` are two different variables)

In PHP 7, type declarations were added. This gives an option to specify the data type expected when declaring a function, and by enabling the strict requirement, it will throw a "Fatal Error" on a type mismatch.

## PHP Variables Scope

https://www.w3schools.com/php/php_variables_scope.asp

PHP has three different variable scopes:

- local
- global
- static

A variable declared **outside** a function has a **GLOBAL SCOPE** and can only be accessed outside a function:

```php
<?php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
?>
```

A variable declared **within** a function has a **LOCAL SCOPE** and can only be accessed within that function:

```php
<?php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
```

### PHP The global Keyword

The `global` keyword is used to access a global variable from within a function.

```php
<?php
$x = 5;
$y = 10;
function myTest() {
  global $x, $y;
  $y = $x + $y;
}
myTest();
echo $y; // outputs 15

/* Note, you can't declare global variables like this:
global $x = 5; // it will give a Parse error...
global $y = 10;
function myTest() {
  $y = $x + $y;
}
myTest();
*/

/* Note, if you don't declare the varibles as global outside function
$x = 5;
$y = 10;
global $x, $y;
function myTest() {
  $y = $x + $y; // it will give Undefined variable: x, y
}
myTest();
*/
?>
```

PHP also stores all global variables in an array called `$GLOBALS[*index*]`. The *`index`* holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

```php
<?php
$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
}

myTest();
echo $y; // outputs 15
?>
```

<br/>

### PHP The static keyword

Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job. To do this, use the `static` keyword when you first declare the variable:

```php
<?php
function myTest2() {
  static $x = 0;
  echo $x."<br>";
  $x++;
}

myTest2(); // 1
myTest2(); // 2
myTest2(); // 3

/* each time the function is called,
that variable will still have the information
it contained from the last time the function was called. */
?>
```



## PHP Debug / Print to Console function

(Thu, February 04, 2021) Okay, maybe it's just me... but I've noted that, I don't have any console in PHP ...

- for Python (Django), I have my development server up and running in the CMD Prompt.
- for JavaScript, we have the console within our Browser.

However, instead of using `echo`, `var_dump()`, `get_type()`, `print_r()` functions and render directly in HTML code... I came across this *[function](https://www.php.net/manual/en/debugger.php)*

```php
function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

// Usage:
$myvar = array("Banana", "Apple", "Orange");
console_log( $myvar );
```

Now we can use `console_log();` to print to Browser's console, just like in JavaScript (`console.log();`)... except, we are actually using JavaScript ofc. :laughing:

![](./PhpTutorial/00log.jpg)

# PHP Data types and operators

## PHP Data types, var_dump(), check functions

The PHP `var_dump()` function returns the data type and value (basically prints out all the information of a variable).

The [`print_r()`](https://www.php.net/manual/en/function.print-r.php) prints human-readable information about a variable

The PHP function `gettype($name)` function returns only the data type.

PHP supports the following data types:

- **String**

```php
$txt = "Hello world!"; // 12 characters
var_dump($txt); // string(12)
echo gettype($txt); // string

// We can concatenate strings using . (dot)
echo $txt . " How are you?" . "<br/>"; // Hello world! How are you?
// or
echo "$txt How are you?<br/>"; // Hello world! How are you?
```

- **Integer**

```php
$x = 52;
var_dump($x); // int(52)
echo gettype($x); // integer
```

- **Float (floating point numbers - also called double)**

```php
$x = 10.365;
var_dump($x); // float(10.365)
echo gettype($x); // double
```

- **Boolean**

```php
$x = true;
$y = false;
var_dump(x); // bool(true)
echo gettype($x); // boolean
echo $x; // 1
echo $y; // 

// Whenever booleans are converted into strings:
// true is converted into "1"
// false is converted into empty string "" (which will not show anything in html)
```

- **Array**

```php
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
// array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(6) "Toyota" }

$nested_array = array(array("red", "green"), "blue");
// array(2) { [0]=> array(2) { [0]=> string(3) "red" [1]=> string(5) "green" } [1]=> string(4) "blue" }
```

- **NULL**

```php
// If a variable is created without a value, it is automatically assigned a value of NULL.
// Variables can also be emptied by setting the value to NULL:
$x = "Hello world!";
$x = null;
var_dump($x); // NULL
echo gettype($x); // NULL
echo $x; //

// null is converted into an empty string "" as well
```

- **Object**

```php
/* with __construct() function,
PHP will automatically call this function when you create an object from a class.
*/
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
    // or 
    // return "My car is a $this->color $this->model!";
  }
}

$myCar = new Car("black", "Volvo");
echo $myCar -> message(); // My car is a black Volvo!
echo "<br>";
$myCar = new Car("red", "Toyota");
echo $myCar -> message(); // My car is a red Toyota!

var_dump($myCar); // object(Car)#2 (2) { ["color"]=> string(3) "red" ["model"]=> string(6) "Toyota" }
echo gettype($x); // object
```

- **Resource**

The special resource type is not an actual data type. It is the storing of a reference to functions and resources external to PHP. A common example of using the resource data type is a database call.

<br/>

**Variable checking functions**

```php
var_dump("Hello"); // string(5) "Hello"
echo gettype("Hello"); // string

is_string($name); // false
is_int($age); // true
is_double($height); // true
is_bool($isMale); // true

/* However these functions will not print anything in HTML
... and you cannot use echo is_double($var)... because if
it's false, it will not print anything in HTML...
So, the safest way to check is with: */

var_dump(is_string($name)); // bool(false)
var_dump(is_int($age)); // bool(true)
var_dump(is_double($height)); // bool(true)
var_dump(is_bool($isMale)); // bool(true)
```

<br/>

**Check if variable is declared/defined**

```php
$name = "Alex";
isset($name); // true
isset($address); // false
```

## PHP Constants

**To declare CONSTANT variables (const) in PHP, we use `define` (just like in C/C++):**

```php
define(name, value, case_insensitive);
```

- *name*: Specifies the name of the constant
- *value*: Specifies the value of the constant
- *case-insensitive*: Specifies whether the constant name should be case-insensitive. Default is false

Example:

```php
define('PI', 3.14);

// to use/print a constant, we don't use $ anymore
echo PI; // 3.1415

// predefined constants in PHP
echo PHP_INT_MAX.'<br>'; // 9223372036854775807
echo PHP_FLOAT_MAX.'<br>'; // 1.7976931348623E+308
```

Example:

```php
<?php
define("GREETING", "Welcome aboard, Captain!", true);
echo greeting; // Welcome aboard, Captain!
?>
```

<br/>

**PHP Constant Arrays**

In PHP7, you can create an Array constant using the `define()` function.

```php
<?php
define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);
echo cars[0]; // Alfa Romeo
?>
```

<br/>

**NOTE:** ***Constants are automatically global and can be used across the entire script.***

<br/>



## PHP Operators

https://www.w3schools.com/php/php_operators.asp

**PHP Arithmetic Operators**

| Operator | Name           | Example  | Result                                  |
| :------- | :------------- | :------- | :-------------------------------------- |
| +        | Addition       | `$x + $y`  | Sum of $x and $y                        |
| -        | Subtraction    | `$x - $y`  | Difference of $x and $y                 |
| *        | Multiplication | `$x * $y`  | Product of $x and $y                    |
| /        | Division       | `$x / $y`  | Quotient of $x and $y                   |
| %        | Modulus        | `$x % $y`  | Remainder of $x divided by $y           |
| **       | Exponentiation | `$x ** $y` | Result of raising $x to the $y'th power |

**PHP Comparison Operators**

| Operator | Name                     | Example   | Result                                                       |
| -------- | ------------------------ | --------- | ------------------------------------------------------------ |
| ==       | Equal                    | `$x == $y`  | Returns true if $x is equal to $y                            |
| ===      | Identical                | `$x === $y` | Returns true if $x is equal to $y,<br/>and they are of the same type |
| !=       | Not equal                | `$x != $y`  | Returns true if $x is not equal to $y                        |
| <>       | Not equal                | `$x <> $y`  | Returns true if $x is not equal to $y                        |
| !==      | Not identical            | `$x !== $y` | Returns true if $x is not equal to $y,<br/>or they are not of the same type |
| >        | Greater than             | `$x > $y`   | Returns true if $x is greater than $y                        |
| <        | Less than                | `$x < $y`   | Returns true if $x is less than $y                           |
| >=       | Greater than or equal to | `$x >= $y`  | Returns true if $x is greater than or equal to $y            |
| <=       | Less than or equal to    | `$x <= $y`  | Returns true if $x is less than or equal to $y               |
| <=>      | Spaceship                | `$x <=> $y` | Returns an integer less than, equal to,<br/>or greater than zero, depending on if $x is less<br/> than, equal to, or greater than $y.<br/>Introduced in PHP 7. |

**PHP Logical Operators**

| Operator | Name | Example    | Result                                        |
| -------- | ---- | ---------- | --------------------------------------------- |
| `and`    | And  | `$x and $y`  | True if both `$x and $y` are true             |
| `or`     | Or   | `$x or $y`   | True if either `$x or $y` is true             |
| `xor`    | Xor  | `$x xor $y`  | True if either `$x or $y` is true,<br/>but not both |
| `&&`     | And  | `$x && $y`   | True if both `$x and $y` are true             |
| `\|\|` | Or   | `$x \|\| $y` | True if either `$x or $y` is true             |
| `!`      | Not  | `!$x`        | True if $x is not true                        |

**PHP Increment / Decrement Operators**

| Operator	| Name  |	Description |
|---------------|-----------|---------------|
| `++$x` | Pre-increment  | Increments $x by one, then returns $x |
| `$x++` | Post-increment | Returns $x, then increments $x by one |
| `--$x` | Pre-decrement  | Decrements $x by one, then returns $x |
| `$x--` | Post-decrement | Returns $x, then decrements $x by one |


**PHP String Operators**

| Operator | Name                     | Example          | Result                           |
| -------- | ------------------------ | ---------------- | -------------------------------- |
| .        | Concatenation            | `$txt1 . $txt2`  | Concatenation of $txt1 and $txt2 |
| .=       | Concatenation assignment | `$txt1 .= $txt2` | Appends $txt2 to $txt1           |

**PHP Array Operators**

| Operator | Name         | Example   | Result                                                       |
| -------- | ------------ | --------- | ------------------------------------------------------------ |
| +        | Union        | `$x + $y`   | Union of $x and $y                                           |
| ==       | Equality     | `$x == $y`  | Returns true if $x and $y<br/>have the same key/value pairs |
| ===      | Identity     | `$x === $y` | Returns true if $x and $y <br/>have the same key/value pairs <br/>in the same order and of the same types |
| !=       | Inequality   | `$x != $y`| Returns true if $x is not equal to $y                        |
| <>       | Inequality   | `$x <> $y`  | Returns true if $x is not equal to $y                        |
| !==      | Non-identity | `$x !== $y` | Returns true if $x is not identical to $y                    |



**PHP Conditional Assignment Operators**

| Operator | Name            | Example                      | Result                                                       |
| -------- | --------------- | ---------------------------- | ------------------------------------------------------------ |
| ?:       | Ternary         | `$x = expr1 ? expr2 : expr3` | Returns the value of $x. The value of $x is expr2 if expr1 = TRUE. The value of $x is expr3 if expr1 = FALSE |
| ??       | Null coalescing | `$x = expr1 ?? expr2`        | Returns the value of $x. The value of $x is expr1 if expr1 exists, and is not NULL. If expr1 does not exist, or is NULL, the value of $x is expr2. Introduced in PHP 7 |



<br/>

## PHP Numbers

https://www.w3schools.com/php/php_numbers.asp

```php
echo 0.2 + 0.1; // 0.3

/* Note that the result with echo is trimmed and we don't see a floating point number */
// But
var_dump(.1 + .2); // float(0.30000000000000004441)
var_dump(.2 + .1 === 0.3); // bool(false)

# Python
print(0.2 + 0.3) # 0.30000000000000004
// JavaScript (Node.js)
console.log(0.2 + 0.3); // 0.30000000000000004
```

**PHP Integers and floats/doubles**

```php
<?php
$x = 10.365;
var_dump(is_float($x)); // bool(true)

$x = 10
var_dump(is_int($x)); // bool(true)
?>
```

**PHP Infinity**

A numeric value that is larger than PHP_FLOAT_MAX is considered infinite.

PHP has the following functions to check if a numeric value is finite or infinite:

- [is_finite()](https://www.w3schools.com/php/func_math_is_finite.asp)
- [is_infinite()](https://www.w3schools.com/php/func_math_is_infinite.asp)

```php
echo PHP_FLOAT_MAX.'<br>'; // 1.7976931348623E+308

$x = 1.9e411;
var_dump($x); // float(INF)

var_dump(is_infinite($x)); // bool(true)
var_dump(is_finite($x)); // bool(false)

var_dump(is_finite(43)); // true
```

<br/>

**PHP NaN (Not a Number)** 

NaN is used for impossible mathematical operations. PHP has the following functions to check if a value is not a number:

- [is_nan()](https://www.w3schools.com/php/func_math_is_nan.asp)

```php
// Invalid calculation will return a NaN value
$x = acos(8);
var_dump($x); // float(NAN)
```

<br/>

**PHP Numerical Strings**

The PHP `is_numeric()` function can be used to find whether a variable is numeric. The function returns true if the variable is a number or a numeric string, false otherwise.

```php
$x = 5985;
var_dump(is_numeric($x)); // bool(true)

$x = "5985";
var_dump(is_numeric($x)); // bool(true)

$x = "59.85" + 100;
var_dump(is_numeric($x)); // bool(true)

$x = "Hello";
var_dump(is_numeric($x)); // bool(false)
```

### PHP Casting Strings and Floats to Integers

```php
// Cast float to int 
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast; // 23465
  
echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast; // 23465

// Cast string to float
$float_cast = (float)$x;
```

Other ways of casting using functions:

```php
$strNumber = '12.23';
$number = intval($strNumber);
var_dump($number); // int(12)

echo "<br/>";

var_dump(floatval("12.23")); // float(12.23)
```

### PHP Number formatting

`number_format($number, $decimals = 0, $dec_point = '.', $thousands_sep = ',')`

```php
$number = 123456789.12345;
echo number_format($number, 2, '.', " "); // 123 456 789.12
echo number_format($number, 2, '.', ","); // 123,456,789.12
```



<br/>

### PHP Math

https://www.w3schools.com/php/php_math.asp

**PHP `pi()` function**

```php
echo(pi()); // returns 3.1415926535898
```

**PHP min() and max() Functions**

```php
echo(min(0, 150, 30, 20, -8, -200));  // returns -200
echo(max(0, 150, 30, 20, -8, -200));  // returns 150
```

**PHP abs() (absolute value) Function**

```php
echo(abs(-6.7));  // returns 6.7
```

**PHP sqrt() Function**

```php
echo(sqrt(64));  // returns 8
```

**PHP round() Function**

```php
echo(round(0.60));  // returns 1
echo(round(0.49));  // returns 0
```

**PHP floor and ceil**

```php
echo(floor(0.60)); // 0
echo(ceil(0.49)); // 1
```



**Random Numbers**

```php
echo(rand()); // 1381167960
echo(rand(10, 100)); // 97
```

**[All PHP Math Functions](https://www.w3schools.com/php/php_ref_math.asp)**

| Function                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abs()](https://www.w3schools.com/php/func_math_abs.asp)     | Returns the absolute (positive) value of a number            |
| [acos()](https://www.w3schools.com/php/func_math_acos.asp)   | Returns the arc cosine of a number                           |
| [acosh()](https://www.w3schools.com/php/func_math_acosh.asp) | Returns the inverse hyperbolic cosine of a number            |
| [asin()](https://www.w3schools.com/php/func_math_asin.asp)   | Returns the arc sine of a number                             |
| [asinh()](https://www.w3schools.com/php/func_math_asinh.asp) | Returns the inverse hyperbolic sine of a number              |
| [atan()](https://www.w3schools.com/php/func_math_atan.asp)   | Returns the arc tangent of a number in radians               |
| [atan2()](https://www.w3schools.com/php/func_math_atan2.asp) | Returns the arc tangent of two variables x and y             |
| [atanh()](https://www.w3schools.com/php/func_math_atanh.asp) | Returns the inverse hyperbolic tangent of a number           |
| [base_convert()](https://www.w3schools.com/php/func_math_base_convert.asp) | Converts a number from one number base to another            |
| [bindec()](https://www.w3schools.com/php/func_math_bindec.asp) | Converts a binary number to a decimal number                 |
| [ceil()](https://www.w3schools.com/php/func_math_ceil.asp)   | Rounds a number up to the nearest integer                    |
| [cos()](https://www.w3schools.com/php/func_math_cos.asp)     | Returns the cosine of a number                               |
| [cosh()](https://www.w3schools.com/php/func_math_cosh.asp)   | Returns the hyperbolic cosine of a number                    |
| [decbin()](https://www.w3schools.com/php/func_math_decbin.asp) | Converts a decimal number to a binary number                 |
| [dechex()](https://www.w3schools.com/php/func_math_dechex.asp) | Converts a decimal number to a hexadecimal number            |
| [decoct()](https://www.w3schools.com/php/func_math_decoct.asp) | Converts a decimal number to an octal number                 |
| [deg2rad()](https://www.w3schools.com/php/func_math_deg2rad.asp) | Converts a degree value to a radian value                    |
| [exp()](https://www.w3schools.com/php/func_math_exp.asp)     | Calculates the exponent of e                                 |
| [expm1()](https://www.w3schools.com/php/func_math_expm1.asp) | Returns exp(x) - 1                                           |
| [floor()](https://www.w3schools.com/php/func_math_floor.asp) | Rounds a number down to the nearest integer                  |
| [fmod()](https://www.w3schools.com/php/func_math_fmod.asp)   | Returns the remainder of x/y                                 |
| [getrandmax()](https://www.w3schools.com/php/func_math_getrandmax.asp) | Returns the largest possible value returned by rand()        |
| [hexdec()](https://www.w3schools.com/php/func_math_hexdec.asp) | Converts a hexadecimal number to a decimal number            |
| [hypot()](https://www.w3schools.com/php/func_math_hypot.asp) | Calculates the hypotenuse of a right-angle triangle          |
| [intdiv()](https://www.w3schools.com/php/func_math_intdiv.asp) | Performs integer division                                    |
| [is_finite()](https://www.w3schools.com/php/func_math_is_finite.asp) | Checks whether a value is finite or not                      |
| [is_infinite()](https://www.w3schools.com/php/func_math_is_infinite.asp) | Checks whether a value is infinite or not                    |
| [is_nan()](https://www.w3schools.com/php/func_math_is_nan.asp) | Checks whether a value is 'not-a-number'                     |
| [lcg_value()](https://www.w3schools.com/php/func_math_lcg_value.asp) | Returns a pseudo random number in a range between 0 and 1    |
| [log()](https://www.w3schools.com/php/func_math_log.asp)     | Returns the natural logarithm of a number                    |
| [log10()](https://www.w3schools.com/php/func_math_log10.asp) | Returns the base-10 logarithm of a number                    |
| [log1p()](https://www.w3schools.com/php/func_math_log1p.asp) | Returns log(1+number)                                        |
| [max()](https://www.w3schools.com/php/func_math_max.asp)     | Returns the highest value in an array, or the highest value of several specified values |
| [min()](https://www.w3schools.com/php/func_math_min.asp)     | Returns the lowest value in an array, or the lowest value of several specified values |
| [mt_getrandmax()](https://www.w3schools.com/php/func_math_mt_getrandmax.asp) | Returns the largest possible value returned by mt_rand()     |
| [mt_rand()](https://www.w3schools.com/php/func_math_mt_rand.asp) | Generates a random integer using Mersenne Twister algorithm  |
| [mt_srand()](https://www.w3schools.com/php/func_math_mt_srand.asp) | Seeds the Mersenne Twister random number generator           |
| [octdec()](https://www.w3schools.com/php/func_math_octdec.asp) | Converts an octal number to a decimal number                 |
| [pi()](https://www.w3schools.com/php/func_math_pi.asp)       | Returns the value of PI                                      |
| [pow()](https://www.w3schools.com/php/func_math_pow.asp)     | Returns x raised to the power of y                           |
| [rad2deg()](https://www.w3schools.com/php/func_math_rad2deg.asp) | Converts a radian value to a degree value                    |
| [rand()](https://www.w3schools.com/php/func_math_rand.asp)   | Generates a random integer                                   |
| [round()](https://www.w3schools.com/php/func_math_round.asp) | Rounds a floating-point number                               |
| [sin()](https://www.w3schools.com/php/func_math_sin.asp)     | Returns the sine of a number                                 |
| [sinh()](https://www.w3schools.com/php/func_math_sinh.asp)   | Returns the hyperbolic sine of a number                      |
| [sqrt()](https://www.w3schools.com/php/func_math_sqrt.asp)   | Returns the square root of a number                          |
| [srand()](https://www.w3schools.com/php/func_math_srand.asp) | Seeds the random number generator                            |
| [tan()](https://www.w3schools.com/php/func_math_tan.asp)     | Returns the tangent of a number                              |
| [tanh()](https://www.w3schools.com/php/func_math_tanh.asp)   | Returns the hyperbolic tangent of a number                   |

https://www.php.net/manual/en/ref.math.php

<br/>



# PHP String methods

(Friday, February 05, 2021)

**Strings concatenation** (Note that the use of single or double quotes matters)

```php
$name = "Alex";
echo 'Hi I am '.$name.'!<br/>'; // Hi I am Alex!
echo 'Hi I am $name!<br/>'; // Hi I am $name!
echo "Hi I am $name!<br/>"; // Hi I am Alex!
```

<br/>

## strlen, trim, strpos, substr, str_replace

**`strlen()` - Return the Length of a String**

```php
echo strlen("Hello world!"); // outputs 12
```

<br/>

**`trim()` - Removes whitespace from both sides of a string**<br/>For right or left side, use `rtrim()` / `ltrim()`

```php
echo trim("   Hi, World!   "); // Hi, World!
```

<br/>

**`str_word_count()` - Count Words in a String**

```php
echo str_word_count("Hello world!"); // outputs 2
```

<br/>

**`strrev()` - Reverse a String**

```php
echo strrev("Hello world!"); // !dlrow olleH
```

<br/>

**`strpos()` - Search For a Text Within a String (case sensitive), returns the first characters position of the first match, if no match is found, returns `false`**

```php
echo strpos("Hello world!", "world"); // 6
```

**`stripos()` - Search For a Text Within a String (ignore case sensitive)**

```php
echo strpos("Hello World!", "world"); // 6
```

<br/>

**`substr()` - Returns part of a string (substring)**

```php
echo substr("Hello World", 4);  // o World
echo substr("Hello World", -4); // orld

echo substr("Hello World", 4, 3); // O W (takes only 3 characters from pos 4)
```



<br/>

**`str_replace()` - Replace Text (all occurrences) within a String**<br/>`str_ireplace()` (ignore case sensitive)

```php
echo str_replace("world", "Captain", "Hello world!"); // Hello Captain!
echo str_ireplace("hello", "Captain", "Hello? hello!"); // Captain? Captain!
```

<br/>

**`strtolower()` and `strtoupper()`** converts string to Lower Case / Upper Case

```php
echo strtolower("Hello World"); // hello world
echo strtoupper("Hello World"); // HELLO WORLD
```

**`ucfirst()` and `lcfirst()`** converts to Upper Case / Lower Case only the first character

```php
echo ucfirst("hello world"); // Hello world
echo lcfirst("HELLO WORLD"); // hELLO WORLD
```

**`ucwords()`** Upper Case all words in string

```php
echo ucwords("hello world"); // Hello World
```

<br/>

**`nl2br()`** - newline to break line

```php
$longText = "
  Hi,
  I'm Alex,
  I like back-end.
";

echo $longText.'<br>'; // Hi, I'm Alex, I like back-end.
echo nl2br($longText).'<br>';
// Hi,
// I'm Alex,
// I like back-end.
```



<br/>

## String indexes, PHP Strings are mutable

We can access string character's with `[ ]`:

```php
echo "Hello"[0]; // H
echo "Hello"[1]; // e
echo "Hello"[-1]; // o
```

Unlike **JavaScript** and **Python**... Strings in PHP are **mutable** (content can be changed without creating a new object).

```php
$myStr = "hello";
$myStr[0] = "j";
$myStr[-1] = 'y';
echo $myStr; // jelly
```

<br/>

## String Explode, Array Implode

[**`explode()`**](https://www.php.net/manual/en/function.explode.php) Breaks a string into an array (in JavaScript/Python we have `str.split()`)

```explode ( string `$separator` , string `$string` , int `$limit` = `PHP_INT_MAX`) : array```

```php
$pizza  = "piece1 piece2 piece3";
$pieces = explode(" ", $pizza);
echo $pieces[0]; // piece1
echo $pieces[1]; // piece2
```

**`implode()`** Returns a string from the elements of an array (`join()` does the same, is an alias of `implode()`)

```php
$arr = array('Test1', 'Test2', 'Test3');
$str = join(",", $arr);
echo $str; // Test1,Test2,Test3.
```

<center>

![PHP Explode meme](./PhpTutorial/03.jpg)

</center>

<br/>

**[All PHP String Methods](https://www.w3schools.com/php/php_ref_string.asp)**

| Function                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [addcslashes()](https://www.w3schools.com/php/func_string_addcslashes.asp) | Returns a string with backslashes in front of the specified characters |
| [addslashes()](https://www.w3schools.com/php/func_string_addslashes.asp) | Returns a string with backslashes in front of predefined characters |
| **[bin2hex()](https://www.w3schools.com/php/func_string_bin2hex.asp)** | **Converts a string of ASCII characters to hexadecimal values** |
| **[chop()](https://www.w3schools.com/php/func_string_chop.asp)** | **Removes whitespace or other characters from the right end of a string** |
| [chr()](https://www.w3schools.com/php/func_string_chr.asp)   | Returns a character from a specified ASCII value             |
| **[chunk_split()](https://www.w3schools.com/php/func_string_chunk_split.asp)** | **Splits a string into a series of smaller parts**           |
| [convert_cyr_string()](https://www.w3schools.com/php/func_string_convert_cyr_string.asp) | Converts a string from one Cyrillic character-set to another |
| [convert_uudecode()](https://www.w3schools.com/php/func_string_convert_uudecode.asp) | Decodes a uuencoded string                                   |
| [convert_uuencode()](https://www.w3schools.com/php/func_string_convert_uuencode.asp) | Encodes a string using the uuencode algorithm                |
| [count_chars()](https://www.w3schools.com/php/func_string_count_chars.asp) | Returns information about characters used in a string        |
| [crc32()](https://www.w3schools.com/php/func_string_crc32.asp) | Calculates a 32-bit CRC for a string                         |
| [crypt()](https://www.w3schools.com/php/func_string_crypt.asp) | One-way string hashing                                       |
| [echo()](https://www.w3schools.com/php/func_string_echo.asp) | Outputs one or more strings                                  |
| **[explode()](https://www.w3schools.com/php/func_string_explode.asp)** | **Breaks a string into an array**                            |
| [fprintf()](https://www.w3schools.com/php/func_string_fprintf.asp) | Writes a formatted string to a specified output stream       |
| [get_html_translation_table()](https://www.w3schools.com/php/func_string_get_html_translation_table.asp) | Returns the translation table used by htmlspecialchars() and htmlentities() |
| [hebrev()](https://www.w3schools.com/php/func_string_hebrev.asp) | Converts Hebrew text to visual text                          |
| [hebrevc()](https://www.w3schools.com/php/func_string_hebrevc.asp) | Converts Hebrew text to visual text and new lines (\n) into <br> |
| **[hex2bin()](https://www.w3schools.com/php/func_string_hex2bin.asp)** | **Converts a string of hexadecimal values to ASCII characters** |
| [html_entity_decode()](https://www.w3schools.com/php/func_string_html_entity_decode.asp) | Converts HTML entities to characters                         |
| [htmlentities()](https://www.w3schools.com/php/func_string_htmlentities.asp) | Converts characters to HTML entities                         |
| [htmlspecialchars_decode()](https://www.w3schools.com/php/func_string_htmlspecialchars_decode.asp) | Converts some predefined HTML entities to characters         |
| [htmlspecialchars()](https://www.w3schools.com/php/func_string_htmlspecialchars.asp) | Converts some predefined characters to HTML entities         |
| **[implode()](https://www.w3schools.com/php/func_string_implode.asp)** | **Returns a string from the elements of an array**           |
| [join()](https://www.w3schools.com/php/func_string_join.asp) | Alias of [implode()](https://www.w3schools.com/php/func_string_implode.asp) |
| [lcfirst()](https://www.w3schools.com/php/func_string_lcfirst.asp) | Converts the first character of a string to lowercase        |
| [levenshtein()](https://www.w3schools.com/php/func_string_levenshtein.asp) | Returns the Levenshtein distance between two strings         |
| [localeconv()](https://www.w3schools.com/php/func_string_localeconv.asp) | Returns locale numeric and monetary formatting information   |
| [ltrim()](https://www.w3schools.com/php/func_string_ltrim.asp) | Removes whitespace or other characters from the left side of a string |
| [md5()](https://www.w3schools.com/php/func_string_md5.asp)   | Calculates the MD5 hash of a string                          |
| [md5_file()](https://www.w3schools.com/php/func_string_md5_file.asp) | Calculates the MD5 hash of a file                            |
| [metaphone()](https://www.w3schools.com/php/func_string_metaphone.asp) | Calculates the metaphone key of a string                     |
| [money_format()](https://www.w3schools.com/php/func_string_money_format.asp) | Returns a string formatted as a currency string              |
| [nl_langinfo()](https://www.w3schools.com/php/func_string_nl_langinfo.asp) | Returns specific local information                           |
| [nl2br()](https://www.w3schools.com/php/func_string_nl2br.asp) | Inserts HTML line breaks in front of each newline in a string |
| [number_format()](https://www.w3schools.com/php/func_string_number_format.asp) | Formats a number with grouped thousands                      |
| [ord()](https://www.w3schools.com/php/func_string_ord.asp)   | Returns the ASCII value of the first character of a string   |
| [parse_str()](https://www.w3schools.com/php/func_string_parse_str.asp) | Parses a query string into variables                         |
| [print()](https://www.w3schools.com/php/func_string_print.asp) | Outputs one or more strings                                  |
| [printf()](https://www.w3schools.com/php/func_string_printf.asp) | Outputs a formatted string                                   |
| [quoted_printable_decode()](https://www.w3schools.com/php/func_string_quoted_printable_decode.asp) | Converts a quoted-printable string to an 8-bit string        |
| [quoted_printable_encode()](https://www.w3schools.com/php/func_string_quoted_printable_encode.asp) | Converts an 8-bit string to a quoted printable string        |
| [quotemeta()](https://www.w3schools.com/php/func_string_quotemeta.asp) | Quotes meta characters                                       |
| [rtrim()](https://www.w3schools.com/php/func_string_rtrim.asp) | Removes whitespace or other characters from the right side of a string |
| [setlocale()](https://www.w3schools.com/php/func_string_setlocale.asp) | Sets locale information                                      |
| [sha1()](https://www.w3schools.com/php/func_string_sha1.asp) | Calculates the SHA-1 hash of a string                        |
| [sha1_file()](https://www.w3schools.com/php/func_string_sha1_file.asp) | Calculates the SHA-1 hash of a file                          |
| [similar_text()](https://www.w3schools.com/php/func_string_similar_text.asp) | Calculates the similarity between two strings                |
| [soundex()](https://www.w3schools.com/php/func_string_soundex.asp) | Calculates the soundex key of a string                       |
| [sprintf()](https://www.w3schools.com/php/func_string_sprintf.asp) | Writes a formatted string to a variable                      |
| [sscanf()](https://www.w3schools.com/php/func_string_sscanf.asp) | Parses input from a string according to a format             |
| [str_getcsv()](https://www.w3schools.com/php/func_string_str_getcsv.asp) | Parses a CSV string into an array                            |
| [str_ireplace()](https://www.w3schools.com/php/func_string_str_ireplace.asp) | Replaces some characters in a string (case-insensitive)      |
| [str_pad()](https://www.w3schools.com/php/func_string_str_pad.asp) | Pads a string to a new length                                |
| [str_repeat()](https://www.w3schools.com/php/func_string_str_repeat.asp) | Repeats a string a specified number of times                 |
| [str_replace()](https://www.w3schools.com/php/func_string_str_replace.asp) | Replaces some characters in a string (case-sensitive)        |
| [str_rot13()](https://www.w3schools.com/php/func_string_str_rot13.asp) | Performs the ROT13 encoding on a string                      |
| [str_shuffle()](https://www.w3schools.com/php/func_string_str_shuffle.asp) | Randomly shuffles all characters in a string                 |
| [str_split()](https://www.w3schools.com/php/func_string_str_split.asp) | Splits a string into an array                                |
| **[str_word_count()](https://www.w3schools.com/php/func_string_str_word_count.asp)** | **Count the number of words in a string**                    |
| **[strcasecmp()](https://www.w3schools.com/php/func_string_strcasecmp.asp)** | **Compares two strings (case-insensitive)**                  |
| [strchr()](https://www.w3schools.com/php/func_string_strchr.asp) | Finds the first occurrence of a string inside another string (alias of strstr()) |
| **[strcmp()](https://www.w3schools.com/php/func_string_strcmp.asp)** | **Compares two strings (case-sensitive)**                    |
| [strcoll()](https://www.w3schools.com/php/func_string_strcoll.asp) | Compares two strings (locale based string comparison)        |
| [strcspn()](https://www.w3schools.com/php/func_string_strcspn.asp) | Returns the number of characters found in a string before any part of some specified characters are found |
| [strip_tags()](https://www.w3schools.com/php/func_string_strip_tags.asp) | Strips HTML and PHP tags from a string                       |
| [stripcslashes()](https://www.w3schools.com/php/func_string_stripcslashes.asp) | Unquotes a string quoted with addcslashes()                  |
| [stripslashes()](https://www.w3schools.com/php/func_string_stripslashes.asp) | Unquotes a string quoted with addslashes()                   |
| [stripos()](https://www.w3schools.com/php/func_string_stripos.asp) | Returns the position of the first occurrence of a string inside another string (case-insensitive) |
| [stristr()](https://www.w3schools.com/php/func_string_stristr.asp) | Finds the first occurrence of a string inside another string (case-insensitive) |
| [strlen()](https://www.w3schools.com/php/func_string_strlen.asp) | Returns the length of a string                               |
| [strnatcasecmp()](https://www.w3schools.com/php/func_string_strnatcasecmp.asp) | Compares two strings using a "natural order" algorithm (case-insensitive) |
| [strnatcmp()](https://www.w3schools.com/php/func_string_strnatcmp.asp) | Compares two strings using a "natural order" algorithm (case-sensitive) |
| [strncasecmp()](https://www.w3schools.com/php/func_string_strncasecmp.asp) | String comparison of the first n characters (case-insensitive) |
| [strncmp()](https://www.w3schools.com/php/func_string_strncmp.asp) | String comparison of the first n characters (case-sensitive) |
| [strpbrk()](https://www.w3schools.com/php/func_string_strpbrk.asp) | Searches a string for any of a set of characters             |
| [strpos()](https://www.w3schools.com/php/func_string_strpos.asp) | Returns the position of the first occurrence of a string inside another string (case-sensitive) |
| [strrchr()](https://www.w3schools.com/php/func_string_strrchr.asp) | Finds the last occurrence of a string inside another string  |
| **[strrev()](https://www.w3schools.com/php/func_string_strrev.asp)** | **Reverses a string**                                        |
| [strripos()](https://www.w3schools.com/php/func_string_strripos.asp) | Finds the position of the last occurrence of a string inside another string (case-insensitive) |
| [strrpos()](https://www.w3schools.com/php/func_string_strrpos.asp) | Finds the position of the last occurrence of a string inside another string (case-sensitive) |
| [strspn()](https://www.w3schools.com/php/func_string_strspn.asp) | Returns the number of characters found in a string that contains only characters from a specified charlist |
| **[strstr()](https://www.w3schools.com/php/func_string_strstr.asp)** | **Finds the first occurrence of a string inside another string (case-sensitive)** |
| [strtok()](https://www.w3schools.com/php/func_string_strtok.asp) | Splits a string into smaller strings                         |
| **[strtolower()](https://www.w3schools.com/php/func_string_strtolower.asp)** | **Converts a string to lowercase letters**                   |
| **[strtoupper()](https://www.w3schools.com/php/func_string_strtoupper.asp)** | **Converts a string to uppercase letters**                   |
| [strtr()](https://www.w3schools.com/php/func_string_strtr.asp) | Translates certain characters in a string                    |
| [substr()](https://www.w3schools.com/php/func_string_substr.asp) | Returns a part of a string                                   |
| [substr_compare()](https://www.w3schools.com/php/func_string_substr_compare.asp) | Compares two strings from a specified start position (binary safe and optionally case-sensitive) |
| [**substr_count()](https://www.w3schools.com/php/func_string_substr_count.asp)** | **Counts the number of times a substring occurs in a string** |
| **[substr_replace()](https://www.w3schools.com/php/func_string_substr_replace.asp)** | **Replaces a part of a string with another string**          |
| **[trim()](https://www.w3schools.com/php/func_string_trim.asp)** | **Removes whitespace or other characters from both sides of a string** |
| [ucfirst()](https://www.w3schools.com/php/func_string_ucfirst.asp) | Converts the first character of a string to uppercase        |
| [ucwords()](https://www.w3schools.com/php/func_string_ucwords.asp) | Converts the first character of each word in a string to uppercase |
| [vfprintf()](https://www.w3schools.com/php/func_string_vfprintf.asp) | Writes a formatted string to a specified output stream       |
| [vprintf()](https://www.w3schools.com/php/func_string_vprintf.asp) | Outputs a formatted string                                   |
| [vsprintf()](https://www.w3schools.com/php/func_string_vsprintf.asp) | Writes a formatted string to a variable                      |
| [wordwrap()](https://www.w3schools.com/php/func_string_wordwrap.asp) | Wraps a string to a given number of characters               |



<br/>

# PHP if..else..elseif, switch, loops



# PHP Arrays

There are two ways to create indexed arrays:

The index can be assigned automatically (index always starts at 0), like this:

```php
$cars = array("Volvo", "BMW", "Toyota");
```

or like this:

```php
$cars = ["Volvo", "BMW", "Toyota"];
var_dump($cars);
// array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(6) "Toyota" }

echo $cars[0]; // Volvo
echo $cars[1]; // BMW
echo $cars[2]; // Toyota
```

or we can set elements by index manually (without declaring `$cars` first):

```php
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";
```

<br/>

Print all the contents of an array while nicely formated:

```php
$fruits = ["Banana", "Apple", "Orange"];
echo '<pre>';
var_dump($fruits);
echo '</pre>';
```

```
array(3) {
  [0]=>
  string(5) "Banana"
  [1]=>
  string(5) "Apple"
  [2]=>
  string(6) "Orange"
}
```

<br/>

**Loop through an Indexed Array** using a `for` loop

```php
$fruits = ["Banana", "Apple", "Orange"];

for($i = 0; $i < count($fruits); $i++) {
  echo $fruits[$i].'<br>';
}
/* 
Banana
Apple
Orange */
```

## Array methods

(Saturday, February 06, 2021)

### count, push, pop, unshift, shift

**Get the length of array with `count()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
echo count($fruits); // 3
```

`sizeof()` it's an alias of `count()` (it's the same function)

```php
echo sizeof($fruits); // 3
```



<br/>

**Check if array has an element at index**

```php
isset($fruits[2]); // true
var_dump(isset($fruits[2])); // bool(true)
```

<br/>

**Append element at the end of Array**

```php
$fruits[] = 'Kiwi';
var_dump($fruits);
// array(4) { [0]=> string(5) "Banna" [1]=> string(5) "Apple" [2]=> string(6) "Orange" [3]=> string(4) "Kiwi" }
```

```php
// Note that 
$fruits[] = ['Kiwi', 'Mango'];
// will append an array to the end of the array.

array(4) {
  [0]=>
  string(5) "Banna"
  [1]=>
  string(5) "Apple"
  [2]=>
  string(6) "Orange"
  [3]=>
  array(2) {
    [0]=>
    string(4) "Kiwi"
    [1]=>
    string(5) "Mango"
  }
}
```

We can append multiple elements to array using `array_push()`

```php
$fruits = ["Banana", "Apple", "Orange"];
array_push($fruits, "Kiwi", "Raspberry");

print_r($fruits);
// Array ( [0] => Banana [1] => Apple [2] => Orange [3] => Kiwi [4] => Raspberry )
```

<br/>

**Remove (pop) element from the end of Array (and also return it)**

```php
$fruits = ["Banana", "Apple", "Orange"];
echo array_pop($fruits); // Orange
print_r($fruits); // Array ( [0] => Banana [1] => Apple )
```

<br/>

**Add element at the beginning of the array with `array_unshift()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
array_unshift($fruits, 'Pineapple');
print_r($fruits); // Array ( [0] => Pineapple [1] => Banana [2] => Apple [3] => Orange )
```

<br/>

**Remove element from the beginning of the array with `array_shift()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
array_shift($fruits);
// Array ( [0] => Apple [1] => Orange )
```

<br/>

### String Explode, Array Implode

```explode ( string `$separator` , string `$string` , int `$limit` = `PHP_INT_MAX` ) : array```

```php
$fruits = explode(",", "Banana,Apple,Orange");
print_r($fruits); // Array ( [0] => Banana [1] => Apple [2] => Orange )
```

```implode ( string `$separator` , array `$array` ) : string```

```php
$fruits = ["Banana", "Apple", "Orange"];
echo implode(", ", $fruits); // Banana, Apple, Orange
```

<br/>

### Check if element in array, get index of element

**Check if element exists in Array with `in_array()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
var_dump(in_array('Apple', $fruits)); // bool(true)
var_dump(in_array('Lemon', $fruits)); // bool(false)
```

**Return element's index in Array (if exists) with `array_search()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
var_dump(array_search('Apple', $fruits)); // int(1)
var_dump(array_search('Lemon', $fruits)); // bool(false)
```

<br/>

### Merge arrays, chunk arrays

**Return merged array from two or more arrays with `array_merge()`**

```php
$fruits = ["Banana", "Apple", "Orange"];
$veggies = ["Potato", "Cucumber"];
print_r(array_merge($fruits, $veggies));
// Array ( [0] => Banana [1] => Apple [2] => Orange [3] => Potato [4] => Cucumber )
```

From `PHP 7.4` and above, we can use the **Spread** operator to merge arrays:

```php
print_r( [...$fruits, ...$veggies] );
// Array ( [0] => Banana [1] => Apple [2] => Orange [3] => Potato [4] => Cucumber )
```

<br/>

**The [`array_chunk()`](https://www.w3schools.com/php/func_array_chunk.asp) function splits an array into chunks of new arrays.**

```php
$cars = array("Volvo","BMW","Toyota","Honda","Mercedes");
echo "<pre>";
print_r(array_chunk($cars, 2));
echo "</pre>";

Array
(
    [0] => Array
        (
            [0] => Volvo
            [1] => BMW
        )
    [1] => Array
        (
            [0] => Toyota
            [1] => Honda
        )
    [2] => Array
        (
            [0] => Mercedes
        )
)
```

<br/>

### Sort Arrays

```php
$fruits = ["Banana", "Apple", "Orange"];
sort($fruits);
print_r($fruits); // Array ( [0] => Apple [1] => Banana [2] => Orange )

$numbers = array(4,6,2,22,11);
sort($numbers);
echo(join(', ', $numbers)); // 2, 4, 6, 11, 22
```

(`sort($arr)` mutates the array and returns true on success, false on failure)



## PHP Associative Arrays (Dictionaries/JS Objects)

[Associative arrays](https://www.w3schools.com/php/php_arrays_associative.asp) are `key-value` pairs.

They are the equivalent of [dictionaries in Python](https://www.w3schools.com/python/python_dictionaries.asp) or [objects in JavaScript](https://www.w3schools.com/js/js_objects.asp). All in all, associative arrays are like JSON in PHP's coat (the same applies for objects in JavaScript, this data format is JSON - [read more here](https://stackoverflow.com/questions/8067590/associative-array-versus-object-in-javascript)).

Example:

```php
$ages = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
// Array ( [Peter] => 35 [Ben] => 37 [Joe] => 43 )
```

Another example:

```php
$person = [
  'name' => 'Brad',
  'surname' => 'Traversy',
  'age' => 30,
  'hobbies' => ['Tennis', 'Video Games']
];
echo "<pre>";
print_r($person);
echo "</pre>";
```

Output:

```
Array
(
    [name] => Brad
    [surname] => Traversy
    [age] => 30
    [hobbies] => Array
        (
            [0] => Tennis
            [1] => Video Games
        )
)
```

<br/>

Let's compare the same "associative array" to a JavaScript object:

```js
let person = {
  name: "Brad",
  surname: "Traversy",
  age: 30,
  hobbies: ["Tennis", "Video Games"]
}
console.log(person);
```

Output:

```
{name: "Brad", surname: "Traversy", age: 30, hobbies: Array(2)}
  age: 30
  hobbies: (2) ["Tennis", "Video Games"]
  name: "Brad"
  surname: "Traversy"
```

<br/>

### Associative Array methods

**Loop Through an Associative Array**

```php
$person = [
  'name' => 'Brad',
  'surname' => 'Traversy',
  'age' => 30,
  'hobbies' => ['Tennis', 'Video Games']
];

foreach($person as $key => $value) {
  echo($key.": ");
  print_r($value);
  echo("<br/>");
}
```

```
name: Brad
surname: Traversy
age: 30
hobbies: Array ( [0] => Tennis [1] => Video Games )
```

<br/>





