# Java Tutorial

Credits / Notes taken from:

- [Learn Java 8 - Full Tutorial for Beginners 8-Aug-2018 - 9h32m - freeCodeCamp](https://youtu.be/grEKMHGYyns)
- [Java - W3Schools](https://www.w3schools.com/java/default.asp)
- [Intro to Java Programming - Course for Absolute Beginners - 21-May-2019 - 3h48m](https://youtu.be/GoXwIVyNvX0)

Table of Contents:

## Java Introduction

[to be updated]

- **Java Frameworks**
  - [Spring](https://spring.io/) - lightweight web application development framework used for Enterprise Java (JEE)
  - [Hibernate](https://hibernate.org/) - object-relational mapping framework for relational database management systems (RDBMS)
  - [JSF (JavaServer Faces)](https://www.oracle.com/java/technologies/javaserverfaces.html)
  - [GWT (Google Web Toolkit)](http://www.gwtproject.org/)
  - See also: [10 of the Most Popular Java Frameworks of 2020](https://stackify.com/10-of-the-most-popular-java-frameworks-of-2020/) and [Top 10 Java Frameworks You Should Know](https://www.edureka.co/blog/java-frameworks/)

<br/>

## First Java Project

- You should theoretically have Java already installed if on Windows Machine:

![](./LearnJava_imgs/java01_2.jpg)

However, the "javac" command won't work (we can't compile java to binary classes with Command Prompt using the default Windows's Java)

(Recommended) You can download the JDK (Java Development Toolkit) separately from here: https://www.oracle.com/java/technologies/downloads/#jdk17-windows

**[Setup Java for Windows (Command Prompt) - w3schools](https://www.w3schools.com/java/java_getstarted.asp)**

1. Go to "System Properties" (Can be found on Control Panel > System and Security > System > Advanced System Settings)
2. Click on the "Environment variables" button under the "Advanced" tab
3. Then, select the "Path" variable in System variables and click on the "Edit" button
4. Click on the "New" button and add the path where Java is installed, followed by **\bin**. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: **C:\Program Files\Java\jdk-11.0.1\bin**
   Then, click "OK", and save the settings
5. Restart PC
6. Open Command Prompt (cmd.exe) and type **java -version** to see if Java is running on your machine

![](./LearnJava_imgs/java01_3.jpg)

![](./LearnJava_imgs/java01_4.jpg)

Now we can also run "javac" command.

![](./LearnJava_imgs/java01_5.jpg)

<br/>

**Eclipse IDE:**

- Install Eclipse IDE from here: https://www.eclipse.org/downloads/ (it will be installed to `C:\Users\your_name\eclipse\java-2021-09\eclipse`)

![](./LearnJava_imgs/java01.jpg)

![Eclipse](./LearnJava_imgs/java02.jpg)

- To create a new Java Project, go to File -> New -> Other -> Java -> Java Project

![Eclipse](./LearnJava_imgs/java03.jpg)

- We can delete the module that is automatically created
- On our new project, right click on "src" (source) folder -> new -> package. The first package (or the main package of the project) should be the same name as the project.

![Eclipse](./LearnJava_imgs/java04.jpg)

- Inside our package, we right click again -> new -> class -> we can name it "Main" (class names starts with Capital letters)

![Eclipse](./LearnJava_imgs/java05.jpg)

- Write "Hello World" and, to fix "Editor Does Not Contain Main Type" error, follow these steps (Right click on "src" folder):

![Elipse Editor Does Not Contain Main Type Error](./LearnJava_imgs/java06.jpg)

- Click again on "Run Main" icon and... congrats, you successfully ran your first "Hello World" app in Java.

<br/>



# Java Syntax / Keywords

## Classes

https://www.w3schools.com/java/java_classes.asp

Everything in Java is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has **attributes**, such as weight and color, and **methods**, such as drive and brake.

A Class is like an object constructor, or a "blueprint" for creating objects.

**Every Java program has a `class` name which must match the filename.**





## Package

https://www.w3schools.com/java/java_packages.asp

A java package is **a group of similar types of classes, interfaces and sub-packages**. 

Think of it as **a folder in a file directory**. We use packages to avoid name conflicts, and to write a better maintainable code. Packages are divided into two categories:

- Built-in Packages (packages from the Java API), such as java, lang, awt, javax, swing, net, io, util, sql etc.
- User-defined Packages (create your own packages)

<br/>

To use a class or a package from the library, you need to use the `import` keyword:

```java
import package.name.Class;   // Import a single class
import package.name.*;   // Import the whole package
```





<br/>

**The main Method**

The `main()` method is required and you will see it in every Java program:

```java
public static void main(String[] args) {
  String userName = "Alex";
  System.out.println("Hello " + userName); // Hello Alex
  
  int x = 1, y = 2, z = 3;
	System.out.println(x + y + z); // 6
}
```

Any code inside the `main()` method will be executed.



## Final variables

You can add the `final` keyword if you don't want others (or yourself) to overwrite existing values (this will declare the variable as "final" or "constant", which means unchangeable and read-only):

```java
int myNum = 15;
myNum = 20;
System.out.println(myNum); // 20

final int myNumFinal = 15;
myNumFinal = 20;  // will generate an error: cannot assign a value to a final variable

/* The final local variable myNumFinal cannot be assigned. It must be blank and not using a compound assignment */
```

<br/>

## Naming Conventions

**Packages**

Packages should be written in all-lowercase ASCII letters, starting with a domain name (eg com, ro, gov, net, org, to, etc)

```
com.sun.eng
com.apple.quicktime.v2
edu.cmu.cs.bovik.cheese
```

<br/>

**Classes**

Class names should be nouns, in mixed case with the first letter of each internal word capitalized.

```
eg. Raster, ImageSprite, Student, Person, Employee
```

<br/>

**Interfaces**

Interface names should be adjectives and capitalized.

```
eg. Storing, RasterDelegate, Runable, Readable, Remote, Printable
```

<br/>

**Methods**

Methods should be verbs, using camelCase.

```
eg. print(), run(), actionPerformed(), runFast(), getBackground(), draw()
```

<br/>

**Variables**

Variable names should not start with underscore _ or dollar sign $ characters, even though both are allowed. Variables could use camelCase.

```
eg. id, sumPrice, keyWidth, stockprice
```

<br/>

**Constants**

The names of variables declared class constants and of ANSI constants should be all uppercase with words separated by underscores ("_").

```
eg. PI, MIN_WIDTH, GET_CPU, MIN_AGE, DENSITY, MAX_PRICE, MAX_PRIORITY
```



<br/>

# Java Data Types and Operators

Source: https://www.w3schools.com/java/java_data_types.asp

## Primitive Data Types

**Primitive Data Types**

| Data Type | Size           | Description                                                  |
| :-------- | :------------- | :----------------------------------------------------------- |
| byte      | 1 byte         | Stores whole numbers from -128 to 127                        |
| short     | 2 bytes        | Stores whole numbers from -32,768 to 32,767                  |
| int       | 4 bytes        | Stores whole numbers from -2,147,483,648 to 2,147,483,647    |
| long      | 8 bytes        | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float     | 4 bytes        | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits |
| double    | 8 bytes        | Stores fractional numbers. Sufficient for storing 15 decimal digits |
| boolean   | 1 bit / 1 byte | Stores true or false values                                  |
| char      | 2 bytes        | Stores a single character/letter or ASCII values             |

<br/>

Code Examples:

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
double myDouble = 5.99d;      // Double

char myLetter = 'D';         // Character
String myText = "Hello";     // String

boolean myBool = true;       // Boolean
```

<br/>

```java
double x = 0.2;
float y = .1f;
System.out.println(x + y); // 0.30000000149011613
```

<br/>

```java
System.out.println(0.1 + 0.2); // 0.30000000000000004

System.out.printf("%f", 0.1 + 0.2); // 0.300000
System.out.printf("%.2f", 0.1 + 0.2); // 0.30
```

More about [Floating Point Math](https://0.30000000000000004.com/)

<br/>

**Non-primitive data types**:

| Data Type | Size | Description                                                  |
| :-------- | :--- | :----------------------------------------------------------- |
| String    |      | Store a sequence of characters (text). String values must be surrounded by double quotes. Strings are immutable. |
| Array     |      | Store multiple values in a single variable                   |
| Class     |      |                                                              |
| Interface |      |                                                              |



Code Examples:

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

// get type of data in cars variable (works only for non-primitive data)
System.out.println(cars.getClass().getName()); // [Ljava.lang.String;
System.out.println(cars.getClass().getSimpleName()); // String[]

// ? Get type of data in cars variable and hashcode (it's not the memory address)
System.out.println(cars); // [Ljava.lang.String;@182decdb

// Loop through Array
for (int i = 0; i < cars.length; i++) {
  System.out.print(cars[i] + " "); // Volvo BMW Ford Mazda 
}
```

<br/>

**Java constants**

Java doesn't have built-in constants like PHP. However you can create a "constant" (a `final` variable).

Example:

```java
public class Main {
	public static final int MAX_SECONDS = 25;
  
	public static void main(String[] args) {
		System.out.println(MAX_SECONDS); // 25
	}
}
```

🟠 Note that Java doesn't have a `const` keyword. (Article [Why the const keyword in Java is not implemented?](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-the-const-keyword-in-Java-is-not-implemented))

<br/>



## Type Casting

https://www.w3schools.com/java/java_type_casting.asp

- **Widening Casting** (automatically) - converting a smaller type to a larger type size
  `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`
- **Narrowing Casting** (manually) - converting a larger type to a smaller size type
  `double` -> `float` -> `long` -> `int` -> `char` -> `short` -> `byte`

<br/>

<u>**Widening Casting**</u>

Widening casting is done automatically when passing a smaller size type to a larger size type:

```java
public class Main {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);      // Outputs 9
    System.out.println(myDouble);   // Outputs 9.0
  }
}
```

**<u>Narrowing Casting</u>**

Narrowing casting must be done manually by placing the type in parentheses in front of the value:

```java
public class Main {
  public static void main(String[] args) {
    double myDouble = 9.78d;
    int myInt = (int) myDouble; // Manual casting: double to int

    System.out.println(myDouble);   // Outputs 9.78
    System.out.println(myInt);      // Outputs 9
  }
}
```



<br/>

## Java Operators

Source: https://www.w3schools.com/java/java_operators.asp

**Java Arithmetic Operators**

| Operator | Name           | Description                      | Example |
| :------- | :------------- | :------------------------------- | :------ |
| +        | Addition       | Adds together two values         | x + y   |
| -        | Subtraction    | Subtracts one value from another | x - y   |
| *        | Multiplication | Multiplies two values            | x * y   |
| /        | Division       | Divides one value by another     | x / y   |
| %        | Modulus        | Returns the division remainder   | x % y   |

Increment / Decrement:

| Operator | Name           | Description                         |
| :------- | :------------- | :---------------------------------- |
| ++x      | Pre-increment  | Increments x by one, then returns x |
| x++      | Post-increment | Returns x, then increments x by one |
| --x      | Pre-decrement  | Decrements x by one, then returns x |
| x--      | Post-decrement | Returns x, then decrements x by one |

<br/>

**Assignment operators**

| Operator | Example | Same As    |
| :------- | :------ | :--------- |
| =        | x = 5   | x = 5      |
| +=       | x += 3  | x = x + 3  |
| -=       | x -= 3  | x = x - 3  |
| *=       | x *= 3  | x = x * 3  |
| /=       | x /= 3  | x = x / 3  |
| %=       | x %= 3  | x = x % 3  |
| &=       | x &= 3  | x = x & 3  |
| \|=      | x \|= 3 | x = x \| 3 |
| ^=       | x ^= 3  | x = x ^ 3  |
| >>=      | x >>= 3 | x = x >> 3 |
| <<=      | x <<= 3 | x = x << 3 |

<br/>

**Java Comparison Operators to compare two values**

| Operator | Name                     | Example | Try it                                                       |
| :------- | :----------------------- | :------ | :----------------------------------------------------------- |
| ==       | Equal to                 | x == y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare1) |
| !=       | Not equal                | x != y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare2) |
| >        | Greater than             | x > y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare3) |
| <        | Less than                | x < y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare4) |
| >=       | Greater than or equal to | x >= y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare5) |
| <=       | Less than or equal to    | x <= y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare6) |

<br/>

**Java Logical Operators**

| Operator | Name        | Description                                             | Example            | Try it                                                       |
| :------- | :---------- | :------------------------------------------------------ | :----------------- | :----------------------------------------------------------- |
| &&       | Logical and | Returns true if both statements are true                | x < 5 && x < 10    | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical1) |
| \|\|     | Logical or  | Returns true if one of the statements is true           | x < 5 \|\| x < 4   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical2) |
| !        | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10) | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical3) |

<br/>

## Java Math functions

(Tuesday, November 16, 2021)

**Java `Math.min()` and `Math.max()` functions** (it only accepts two arguments)

```java
public static void main(String[] args) {
	System.out.println(Math.max(5.4, 10)); // prints 10.0
}
```

So you can't really use these functions to retrieve max value in an array of primitive numbers... (https://stackoverflow.com/questions/1484347/finding-the-max-min-value-in-an-array-of-primitives-using-java)

You can use `import java.util.IntSummaryStatistics;` (or double) instead (If execution time is important):

```java
import java.util.DoubleSummaryStatistics;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		double[] numberArr = {2.3, 4.5, 8.94, 4.42, 11.5};
		
		DoubleSummaryStatistics stat = Arrays.stream(numberArr).summaryStatistics();
		System.out.println(stat.getMin());
		System.out.println(stat.getMax());
	}
}
```

<br/>

**Java `Math.sqrt()`**

```java
System.out.println(Math.sqrt(64)); // 8.0
```

<br/>

**Java `Math.abs(x)`** 

```java
System.out.println(Math.abs(-6.4)); // 6.4
```

<br/>

**Java `Math.random()`**

```java
System.out.println(Math.random()); // 0.29364907026149933
System.out.println(Math.random() * 100); // 72.94777492645706

/* Narrow Casting to integer, numbers between 0 and 100 - that's why we multiply by 101 */
System.out.println((int)(Math.random() * 101)); // 41
```

<br/>

**Java `Math.round()`** (returns an Integer)

```java
System.out.println(Math.round(3.49)); // 3
System.out.println(Math.round(3.5)); // 4
```

<br/>

**Java floor and ceil**

```java
System.out.println(Math.floor(3.6)); // 3.0

System.out.println(Math.ceil(3.2)); // 4.0
System.out.println(Math.ceil(3)); // 3.0
```

<br/>

**Java pow**

```java
System.out.println(Math.pow(5, 2)); // 25.0
System.out.println(Math.pow(2, 10)); // 1024.0
```



<br/>

More resources:

- https://www.javatpoint.com/java-math
- https://www.w3schools.com/java/java_ref_math.asp 

| Method                                                       | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Math.abs()](https://www.javatpoint.com/java-math-abs-method) | It will return the Absolute value of the given value.        |
| [Math.max()](https://www.javatpoint.com/java-math-max-method) | It returns the Largest of two values.                        |
| [Math.min()](https://www.javatpoint.com/java-math-min-method) | It is used to return the Smallest of two values.             |
| [Math.round()](https://www.javatpoint.com/java-math-round-method) | It is used to round of the decimal numbers to the nearest value. |
| [Math.sqrt()](https://www.javatpoint.com/java-math-sqrt-method) | It is used to return the square root of a number.            |
| [Math.cbrt()](https://www.javatpoint.com/java-math-cbrt-method) | It is used to return the cube root of a number.              |
| [Math.pow()](https://www.javatpoint.com/java-math-pow-method) | It returns the value of first argument raised to the power to second argument. |
| [Math.signum()](https://www.javatpoint.com/java-math-signum-method) | It is used to find the sign of a given value.                |
| [Math.ceil()](https://www.javatpoint.com/java-math-ceil-method) | It is used to find the smallest integer value that is greater than or equal to the argument or mathematical integer. |
| [Math.copySign()](https://www.javatpoint.com/java-math-copysign-method) | It is used to find the Absolute value of first argument along with sign specified in second argument. |
| [Math.nextAfter()](https://www.javatpoint.com/java-math-nextafter-method) | It is used to return the floating-point number adjacent to the first argument in the direction of the second argument. |
| [Math.nextUp()](https://www.javatpoint.com/java-math-nextup-method) | It returns the floating-point value adjacent to d in the direction of positive infinity. |
| [Math.nextDown()](https://www.javatpoint.com/java-math-nextdown-method) | It returns the floating-point value adjacent to d in the direction of negative infinity. |
| [Math.floor()](https://www.javatpoint.com/java-math-floor-method) | It is used to find the largest integer value which is less than or equal to the argument and is equal to the mathematical integer of a double value. |
| [Math.floorDiv()](https://www.javatpoint.com/java-math-floordiv-method) | It is used to find the largest integer value that is less than or equal to the algebraic quotient. |
| [Math.random()](https://www.javatpoint.com/java-math-random-method) | It returns a double value with a positive sign, greater than or equal to 0.0 and less than 1.0. |
| [Math.rint()](https://www.javatpoint.com/java-math-rint-method) | It returns the double value that is closest to the given argument and equal to mathematical integer. |
| [Math.hypot()](https://www.javatpoint.com/java-math-hypot-method) | It returns sqrt(x2 +y2) without intermediate overflow or underflow. |
| [Math.ulp()](https://www.javatpoint.com/java-math-ulp-method) | It returns the size of an ulp of the argument.               |
| [Math.getExponent()](https://www.javatpoint.com/java-math-getexponent-method) | It is used to return the unbiased exponent used in the representation of a value. |
| [Math.IEEEremainder()](https://www.javatpoint.com/java-math-ieeeremainder-method) | It is used to calculate the remainder operation on two arguments as prescribed by the IEEE 754 standard and returns value. |
| [Math.addExact()](https://www.javatpoint.com/java-math-addexact-method) | It is used to return the sum of its arguments, throwing an exception if the result overflows an int or long. |
| [Math.subtractExact()](https://www.javatpoint.com/java-math-subtractexact-method) | It returns the difference of the arguments, throwing an exception if the result overflows an int. |
| [Math.multiplyExact()](https://www.javatpoint.com/java-math-multiplyexact-method) | It is used to return the product of the arguments, throwing an exception if the result overflows an int or long. |
| [Math.incrementExact()](https://www.javatpoint.com/java-math-incrementexact-method) | It returns the argument incremented by one, throwing an exception if the result overflows an int. |
| [Math.decrementExact()](https://www.javatpoint.com/java-math-decrementexact-method) | It is used to return the argument decremented by one, throwing an exception if the result overflows an int or long. |
| [Math.negateExact()](https://www.javatpoint.com/java-math-negateexact-method) | It is used to return the negation of the argument, throwing an exception if the result overflows an int or long. |
| [Math.toIntExact()](https://www.javatpoint.com/java-math-tointexact-method) | It returns the value of the long argument, throwing an exception if the value overflows an int. |

<br/>

**Angular Math Methods**

| Method                                                       | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Math.toDegrees](https://www.javatpoint.com/java-math-todegrees-method) | It is used to convert the specified Radians angle to equivalent angle measured in Degrees. |
| [Math.toRadians](https://www.javatpoint.com/java-math-toradians-method) | It is used to convert the specified Degrees angle to equivalent angle measured in Radians. |



<br/>

<br/>

# Java User Input and Scanners

https://www.w3schools.com/java/java_user_input.asp

```java
Scanner scannerObj = new Scanner(System.in);
```

<br/>

The `Scanner` class is used to get user input, and it is found in the `java.util` package.

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scannerObj = new Scanner(System.in);
		System.out.print("Enter username: ");
		
		String userName = scannerObj.nextLine();
		System.out.println("Username: " + userName);
	}
}

// Enter username: Daniel
// Username: Daniel
```

The `nextLine()` method is used to read Strings.

To read other types, look at the table below (methods for the Scanner object):

| Method          | Description                           |
| :-------------- | :------------------------------------ |
| `nextBoolean()` | Reads a `boolean` value from the user |
| `nextByte()`    | Reads a `byte` value from the user    |
| `nextDouble()`  | Reads a `double` value from the user  |
| `nextFloat()`   | Reads a `float` value from the user   |
| `nextInt()`     | Reads a `int` value from the user     |
| `nextLine()`    | Reads a `String` value from the user  |
| `nextLong()`    | Reads a `long` value from the user    |
| `nextShort()`   | Reads a `short` value from the user   |

<br/>

Another example

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scannerObj = new Scanner(System.in);
    System.out.println("Enter name, age and salary:");

    String name = scannerObj.nextLine();
    int age = scannerObj.nextInt();
    double salary = scannerObj.nextDouble();


    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}
/*
Enter name, age and salary:
Alex
24
999.99
Name: Alex
Age: 24
Salary: 999.99
*/
```

<br/>

🟠 **Note**

However, if we don't want to have any errors if the user is inserting the wrong type of data (double instead of int, etc)... We should always read as strings as input (using `next` or `nextLine`), then *parse* the string in the type of data that we want.

```java
class Main {
  public static void main(String[] args) {
    Scanner scannerObj = new Scanner(System.in);
    System.out.println("Enter name, age and salary:");

    String name = scannerObj.next();
    int age = Integer.parseInt(scannerObj.next());
    double salary = Double.parseDouble(scannerObj.next());

    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}
/*
Enter name, age and salary:
Alex 24 998.97
Name: Alex
Age: 24
Salary: 998.97
*/
```

We will still need to check (if else) or throw/catch errors.

<br/>

<br/>

Another example:

```java
import java.util.Arrays;
import java.util.Scanner;

class Main {
  public static void main(String[] args) {

	  Scanner scannerObj = new Scanner(System.in);
	  String[] names = new String[4];
	  
	  for (int idx = 0; idx < names.length; idx++) {
		  System.out.println("Input: ");
		  names[idx] = scannerObj.nextLine();
	  }
	  
	  System.out.println(Arrays.toString(names));
  }
}
/*
Input: Bob
Input: Alice
Input: Alex
Input: Joe
[Bob, Alice, Alex, Joe]
*/
```



<br/>

<br/>

# Java Strings and String Methods

```java
String greeting = "Hello";
```

You can only use double quotes to define a String,

<br/>

**Length and concatenation**

A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the `length()` method:

```java
String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("Length of txt: " + txt.length()); // Length of txt: 26
```

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName); // Jodn Doe

System.out.println(10 + "22"); // 1022
```

Note that the result between number and String is a concatenated String

<br/>

**`trim()` - Removes whitespace from both sides of a string**

```java
System.out.println("   Hello there!   ".trim()); // Hello there!
```

<br/>

**Uppercase and Lowercase**

```java
String txt = "Hello World";
System.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD"
System.out.println(txt.toLowerCase());   // Outputs "hello world"
```

<br/>

**Compare two strings**

```java
System.out.println("hello" == "hello"); // true
System.out.println("hello".equals("hello")); // true
```

<br/>

**Split a string into an array of substrings**

```java
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		System.out.println(Arrays.toString("hello world. all good".split("\\s+")));
	}
}
// [hello, world., all, good]
```

<br/>

**Count words in a String (using split and regex)**

```java
System.out.println("hello world, all good".split("\\s+").length); // 4
```

<br/>

**Reverse a String using StringBuilder (added in Java 5, for earlier versions you can use StringBuffer)**

`StringBuilder` is built-in, no need for import

```java
public static void main(String[] args) {
	String greeting = new StringBuilder("Hello").reverse().toString();
	System.out.println(greeting); // olleH
}
```

<br/>

**Escape characters**

```java
System.out.println("It\'s ok"); // It's ok
System.out.println("It's ok"); // It's ok

System.out.println("They are so called \"AI\""); // They are so called "AI"
```

| Code | Result          |
| :--- | :-------------- |
| \n   | New Line        |
| \r   | Carriage Return |
| \t   | Tab             |
| \b   | Backspace       |

<br/>

**`replace()` searches a string for a specified value, and returns a new string where all the specified values are replaced**

`replaceFirst()` replaces the first occurrence of a substring that matches the given regular expression with the given replacement

```java
String myStr = "Hello";
System.out.println(myStr.replace('l', 'p')); // Heppo

String myStr = "Hello Hello World";
System.out.println(myStr.replaceFirst("Hello", "Hi"));
```

Note that `replace()` also accepts `chars` as arguments (written in single quotes), while `replaceFirst` accepts only Strings (written in double quotes)

<br/>

**`substring()` returns a new string which is the substring of a specified string**

```java
System.out.println("hello".substring(0)); // hello
System.out.println("hello".substring(2)); // llo

System.out.println("hello".substring(-1)); // ERROR: java.lang.StringIndexOutOfBoundsException: begin -1, end 5, length 5
```

<br/>

**Strings are immutable and can't be accessed by index**

```java
String myStr = "Hello";
System.out.println(myStr[0]); // ERROR: The type of the expression must be an array type but it resolved to String
```

(In other languages like PHP, strings are mutable - content can be changed without creating a new object - and can be accessed)

<br/>

**`charAt()` Returns the character at the specified index (position)**

```java
// public char charAt(int index)
System.out.println("hey".charAt(1)); // e
System.out.println("hey".charAt(2)); // y
```

<br/>

**`indexOf()` Returns the position of the first found occurrence of specified characters in a string**

The `lastIndexOf()` method returns the position of the last occurrence of specified character(s) in a string.

```java
System.out.println("hey there".indexOf("there")); // 4
System.out.println("hey there there".lastIndexOf("there")); // 10
```

<br/>

[All Java Strings Methods - w3schools](https://www.w3schools.com/java/java_ref_string.asp)

| Method                                                       | Description                                                  | Return Type  |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------- |
| [charAt()](https://www.w3schools.com/java/ref_string_charat.asp) | Returns the character at the specified index (position)      | char         |
| [codePointAt()](https://www.w3schools.com/java/ref_string_codepointat.asp) | Returns the Unicode of the character at the specified index  | int          |
| [codePointBefore()](https://www.w3schools.com/java/ref_string_codepointbefore.asp) | Returns the Unicode of the character before the specified index | int          |
| [codePointCount()](https://www.w3schools.com/java/ref_string_codepointcount.asp) | Returns the number of Unicode values found in a string.      | int          |
| [compareTo()](https://www.w3schools.com/java/ref_string_compareto.asp) | Compares two strings lexicographically                       | int          |
| [compareToIgnoreCase()](https://www.w3schools.com/java/ref_string_comparetoignorecase.asp) | Compares two strings lexicographically, ignoring case differences | int          |
| [concat()](https://www.w3schools.com/java/ref_string_concat.asp) | Appends a string to the end of another string                | String       |
| [contains()](https://www.w3schools.com/java/ref_string_contains.asp) | Checks whether a string contains a sequence of characters    | boolean      |
| [contentEquals()](https://www.w3schools.com/java/ref_string_contentequals.asp) | Checks whether a string contains the exact same sequence of characters of the specified CharSequence or StringBuffer | boolean      |
| [copyValueOf()](https://www.w3schools.com/java/ref_string_copyvalueof.asp) | Returns a String that represents the characters of the character array | String       |
| [endsWith()](https://www.w3schools.com/java/ref_string_endswith.asp) | Checks whether a string ends with the specified character(s) | boolean      |
| [equals()](https://www.w3schools.com/java/ref_string_equals.asp) | Compares two strings. Returns true if the strings are equal, and false if not | boolean      |
| [equalsIgnoreCase()](https://www.w3schools.com/java/ref_string_equalsignorecase.asp) | Compares two strings, ignoring case considerations           | boolean      |
| format()                                                     | Returns a formatted string using the specified locale, format string, and arguments | String       |
| getBytes()                                                   | Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array | byte[]       |
| getChars()                                                   | Copies characters from a string to an array of chars         | void         |
| [hashCode()](https://www.w3schools.com/java/ref_string_hashcode.asp) | Returns the hash code of a string                            | int          |
| [indexOf()](https://www.w3schools.com/java/ref_string_indexof.asp) | Returns the position of the first found occurrence of specified characters in a string | int          |
| intern()                                                     | Returns the canonical representation for the string object   | String       |
| [isEmpty()](https://www.w3schools.com/java/ref_string_isempty.asp) | Checks whether a string is empty or not                      | boolean      |
| [lastIndexOf()](https://www.w3schools.com/java/ref_string_lastindexof.asp) | Returns the position of the last found occurrence of specified characters in a string | int          |
| [length()](https://www.w3schools.com/java/ref_string_length.asp) | Returns the length of a specified string                     | int          |
| matches()                                                    | Searches a string for a match against a regular expression, and returns the matches | boolean      |
| offsetByCodePoints()                                         | Returns the index within this String that is offset from the given index by codePointOffset code points | int          |
| regionMatches()                                              | Tests if two string regions are equal                        | boolean      |
| [replace()](https://www.w3schools.com/java/ref_string_replace.asp) | Searches a string for a specified value, and returns a new string where the specified values are replaced | String       |
| replaceFirst()                                               | Replaces the first occurrence of a substring that matches the given regular expression with the given replacement | String       |
| replaceAll()                                                 | Replaces each substring of this string that matches the given regular expression with the given replacement | String       |
| split()                                                      | Splits a string into an array of substrings                  | String[]     |
| [startsWith()](https://www.w3schools.com/java/ref_string_startswith.asp) | Checks whether a string starts with specified characters     | boolean      |
| subSequence()                                                | Returns a new character sequence that is a subsequence of this sequence | CharSequence |
| substring()                                                  | Returns a new string which is the substring of a specified string | String       |
| toCharArray()                                                | Converts this string to a new character array                | char[]       |
| [toLowerCase()](https://www.w3schools.com/java/ref_string_tolowercase.asp) | Converts a string to lower case letters                      | String       |
| toString()                                                   | Returns the value of a String object                         | String       |
| [toUpperCase()](https://www.w3schools.com/java/ref_string_touppercase.asp) | Converts a string to upper case letters                      | String       |
| [trim()](https://www.w3schools.com/java/ref_string_trim.asp) | Removes whitespace from both ends of a string                | String       |
| valueOf()                                                    | Returns the string representation of the specified value     | String       |







<br/>

<br/>

# Java Arrays

https://www.w3schools.com/java/java_arrays.asp

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNums = {10, 20, 30, 40};
```

**Access the Elements of an Array**

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);
// Outputs Volvo
```

**Change an Array Element**

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
System.out.println(cars[0]);
// Now outputs Opel instead of Volvo
```

**Array Length**

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars.length);
// Outputs 4
```

**Loop Through an Array**

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.length; i++) {
  System.out.printf("%s ", cars[i]);
}
// Volvo BMW Ford Mazda 
```

**Loop Through an Array with For-Each**

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda", "Renault"};
for (String car : cars) {
  System.out.printf("%s ".toUpperCase(), car);
}
// VOLVO BMW FORD MAZDA RENAULT 
```

**Multidimensional Arrays**

A multidimensional array is an array of arrays.

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // Outputs 7
```

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
for (int i = 0; i < myNumbers.length; ++i) {
  for(int j = 0; j < myNumbers[i].length; ++j) {
    System.out.print(myNumbers[i][j]);
  }
}
// 1234567
```

<br/>

## Array Methods







<br/>

<br/>

<br/>

# Java Conditions and Loops

(Tuesday, November 16, 2021, 22:31)

## Java Conditions

**if.. else if.. else**

```java
import java.time.LocalDateTime; // needs Java 8

public class Main {
	public static void main(String[] args) {
		
		int hour = LocalDateTime.now().getHour();
		
		if (hour >= 5 && hour < 12) {
			System.out.println("Good morning");
		} else if (hour < 18) {
			System.out.println("Good afternoon");
		} else {
			System.out.println("Good evening");
		}
    
    System.out.println(hour);
	}
}
// Good evening
// 22
```

Another example:

```java
int age = 14;
if (age < 18) System.out.println("Not allowed"); // Not allowed
```

<br/>

**Short Hand If...Else (Ternary Operator)**

```java
int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";
System.out.println(result);
```

<br/>

**Java Switch Case**

```java
import java.util.Calendar;

public class Main {
	public static String getCurrentDayName() {
		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_WEEK);
		String dayName = "";
		
		switch (day) {
		  case 1:
		    dayName = "Sunday";
		    break;
		  case 2:
		    dayName = "Monday";
		    break;
		  case 3:
		    dayName = "Tuesday";
		    break;
		  case 4:
		    dayName = "Wednesday";
		    break;
		  case 5:
		    dayName = "Thursday";
		    break;
		  case 6:
		    dayName = "Friday";
		    break;
		  case 7:
		    dayName = "Saturday";
		    break;
		}
		return dayName;
	}
	
	public static void main(String[] args) {
		System.out.println(getCurrentDayName());
	}
}
// Tuesday
```

Note that `calendar.get(Calendar.DAY_OF_WEEK)` returns an integer from 1 to 7, where 1 is Sunday and 7 is Saturday

Note: on this particular example we could have returned the string directly, without needing to include break on each case. Like this:

```java
public static String getCurrentDayName() {
  Calendar calendar = Calendar.getInstance();
  int day = calendar.get(Calendar.DAY_OF_WEEK);

  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
  }
  return "";
}
```

Or instead of using switch case, we could just use a simple String "array":

```java
import java.util.Calendar;

public class Main {
	public static String getCurrentDayName() {
		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_WEEK); // returns int from 1 to 7
		
		String dayNames[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
		return dayNames[day - 1];
	}
	
	public static void main(String[] args) {
		System.out.println(getCurrentDayName());
	}
}
// Tuesday
```



<br/>

## Java Loops

Java has 3-4 types of loops: `while`, `do..while`, `for` and "for-each".

![](./LearnJava_imgs/meme01.jpg)

<br/>

**`while` loop**

```java
int i = 0;
while (i < 5) {
  System.out.print(i);
  i++;
}
// 01234
```

<br/>

Another example using `break`:

```java
int i = 0;
while (i < 100) {
  if( i == 8) {
    break;
  }
  System.out.print(i);
  i++;
}
// 01234567
```

You have already seen the `break` statement used in an earlier chapter of this tutorial. It was used to "jump out" of a `switch` statement.

The `break` statement can also be used to jump out of a **loop**.

The `continue` statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 4:

```java
for (int i = 0; i < 6; i++) {
  if (i == 4) {
    continue;
  }
  System.out.printf("%d ", i);
}
// 0 1 2 3 5 
```



<br/>

Another example:

```java
String myStr = "";
String[] cars = {"BMW", "Volvo", "Dacia", "Ford"};

int idx = 0;
while (idx < cars.length) {
  myStr += cars[idx] + " ";
  idx += 1;
}
System.out.println(myStr);
// BMW Volvo Dacia Ford 
```

<br/>

**`do while` loop**

```java
int i = 0;do {
  System.out.println(i);
  i++;
}
while (i < 5);

// 01234
```

The `do/while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

<br/>

**`for` loops**

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.print(i);
}
// 0246810
```

Another examples:

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

for (int i = 0; i < cars.length; i++) {
  System.out.printf("%s ", cars[i]);
}
// Volvo BMW Ford Mazda 
```

Note you can use `printf` (print format) in Java and C/C++ (as an alternative to *Template Literals in JavaScript* or *f-strings in Python*)

<br/>

### **"for each" loops**

There is also a "**for-each**" loop, which is used exclusively to loop through elements in an **array**:

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String carName : cars) {
  System.out.printf("%s ", carName);
}
// Volvo BMW Ford Mazda 
```

<br/>

More on For-each loop in Java here: https://www.geeksforgeeks.org/for-each-loop-in-java/

```java
for (type var : array) 		{ 
  // statements using var;
}

/* is equivalent to: */

for (int i = 0; i < arr.length; i++) { 
  type var = arr[i];
  // statements using var;
}
```

<br/>

Another example:

```java
int[] nums = {9, 10, 11, 12};
int sum = 0;

for (int num : nums) {
  sum += num;
}
System.out.println(sum); // 42
```



<br/>







<br/>

# Java Functions / Methods

A **method** is a block of code which only runs when it is called, also known as **functions**.

```java
static double fahrenheitToCelsius(double fahrenheit) {
  return (5.0/9.0) * (fahrenheit - 32);
}

static double celsiusToFahrenheit(double celsius) {
  return celsius * 9.0 / 5.0 + 32;
}

public static void main(String[] args) {
  System.out.println(fahrenheitToCelsius(80)); // 26.666666666666668
  System.out.println(celsiusToFahrenheit(26.6)); // 79.88
}
```

Note that when dividing 5/9 the result is 0.0. You need to specify those constants as 5.0/9.0 to make them double and be equal to 0.555(5).

Note that:

- `static` means that the method belongs to the Main class and not an object of the Main class.
- the first `double` is the returned type

<br/>

**Method Overloading**

With **method overloading**, multiple methods can have the same name with different parameters. (https://www.w3schools.com/java/java_methods_overloading.asp)

```csharp
int myMethod(int x)
float myMethod(float x)
double myMethod(double x, double y)
```

Example:

```java
static int plusMethod(int x, int y) {
  return x + y;
}

static double plusMethod(double x, double y) {
  return x + y;
}

public static void main(String[] args) {
  int myNum1 = plusMethod(8, 5);
  double myNum2 = plusMethod(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}
// int: 13
// double: 10.559999999999999
```

<br/>



## Lambda functions







<br/>

<br/>

# Java OOP



<Br/>

# LinkedList





# Sets and Lists







# HashMaps











