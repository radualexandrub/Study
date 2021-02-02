# Object Oriented Programming Principles

Credits from:

- [30m Intro to Object Oriented Programming - freeCodeCamp](https://youtu.be/SiBw7os-_zI?list=WL)

Before objects, we had primitive data types that stores single, simple values (eg. `Byte`, `Int`, `Boolean`, `Float`, `Double`, `Char`). But, we need more complex data types to store values... For example, in a chess game, for each piece - eg. knight - we need to store the position, ifCaptured, color, movement etc.. It would be easier if we group all those values together as one entity. Additionally, we could group some knights together as they behave similarly.

In C or C++ programming language, we have:

| Structures                                                   | Arrays                                 |
| ------------------------------------------------------------ | -------------------------------------- |
| - Stores many pieces of data                                 | - Stores many pieces of data           |
| - CAN store different types of data (eg. `int` and `strings` together) | - CANNOT store different types of data |
| - Can store other structures within it                       |                                        |
| - CANNOT store functions within one !!! (unlike objects)     |                                        |

The structures are the *precursor* of the *objects*.

<br/>

**Definitions:**

- **Objects are *instances* of a class.**
- **The Classes are templates for objects.**

In Object Oriented Programming, we combine groups of related variables and functions into objects. We refer to variables as properties and to functions as methods within an object.

## Encapsulation

Encapsulation refers to *bundling data with methods* that can operate on that data within a class.

- it is in the idea of hiding data within a class, preventing anything outside that class from directly interacting with that data.

- members of other classes *can interact with the attributes of another object through its methods* (therefore, classes should not directly interact with other classes' data)

- **the methods are the functions defined within the class**

- encapsulation is about **getting** (retrieving information) and **setting** (changing information) methods

  - eg. `piece.getColor()` (checks the color of any given piece from anywhere in the program)

  - eg. 

    ```python
    # Setters are helpful when changing multiple attributes values of an object based on conditions
    class Player:
      ...
      def setCurrentHealth(newHealth):
        if newHealth > player.maxHealth:
          player.currentHealth = player.maxHealth
        else:
          player.currentHealth = newHealth
    ```

- also, you can set some attributes to be "read only" by defining only *getter* methods.
- it's generally best to not allow *external classes* to *directly edit on object's attributes*. This is very important when working on large and complex programs
- Encapsulation keeps the programmer in control of access to data and prevents the program from ending up in any unwanted states



## Abstraction

Abstraction refers to only showing the essential details and hiding everything else. As long as we understand the outcome, the process is not very important.

Users of the classes created should not worry about the inner details of those classes.

- *This is important when we work on out program incrementally, when we work on one class at a time and we make sure it works. Therefore we can split our big project into smaller chunks to make it more manageable. This will also prevent the project from becoming entangled and complex.*
- *It's also important when multiple programmers work on one project*

It's best to think of a program (big project) in terms of an **Interface** and **Implementation**

- The interface refers to the sections of code that can communicate with one another (which is done through methods that each class is able to access)
- The implementation (code) of these^ methods should be hidden and not accessible from the outside (encapsulation), therefore reducing the impact of change.



## Inheritance

Inheritance is the principle that allows classes to derive from other classes.

With inheritance, we will have a **class hierarchy** that acts as a web of classes with different relationships to one another.

**Access modifiers** change which classes have access to other classes, methods or attributes. There are 3 types of access modifiers:

- Public
  - Public members can be accessed **from anywhere in a program** (useful when we need access from a wide variety of classes in a program)
- Private
  - Private members can only be accessed from **within the same class** that the member is defined
  - This allow us to create multiple private members of the same name in separate classes (and will not conflict with one another)
- Protected
  - Protected members can be accessed **within the same class** where it's defined, **as well as any subclasses of that class**.
  - In other words, protected members are private to the *class hierarchy* where they are defined in.

(members = properties/variables of a class and/or methods/functions of a class)

Inheritance will also help in eliminating redundant code (we will not have to redefine properties and methods for each different object... these objects could be simply be inherited from a generic object).



## Polymorphism

Polymorphism describes the methods that are able to take on many forms.

There are two types of polymorphism:

- **Dynamic polymorphism** - occurs during the *runtime* of the program (runtime = when the program is being executed). Dynamic polymorphism ***describes when a method signature/name is in both a subclass and a superclass***
  - The methods from the superclass and the subclass (inherited from superclass) have the same names... but, the implementation of the method in the subclass overrides the one from the superclass.
  - It's called dynamic because the implementation of a method signature that will be used is determined dynamically as the program is run.
  - *The main benefit of dynamic polymorphism is that it allow to write methods in the superclass without having to include "if" and "if else" (or "switch case") statements to account which subclass is being used when the method is called.*

(subclasses could also be called: extended class or child class; superclasses could also be called parent class or base class)

- **Static polymorphism** - occurs during *compile-time* (when the program is being compiled, rather than during runtime/execution). Static polymorphism refers to when multiple ***methods with the same name but with different arguments are defined in the same class.***

  - Some of the ways to differentiate methods with the same name:
    - *Different numbers of parameters* (`.drive(int speed)`)
    - *Different types of parameters* (`.drive(int speed, string dest)`)
    - *Different order of parameters* (based on their type) (`.drive(string dest, int speed)`)
  - ^^ This is known as **method overloading** (= ability to create multiple functions of the same name but with different implementations)

  <br/>

  Overall, polymorphism allow methods to take on many different forms, therefore allowing methods to exist in the same class, and also within different classes.

<br/>

# JavaScript OOP