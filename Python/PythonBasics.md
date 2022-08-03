

## Number types in Python 3
- `int`

```python
a = 28

# We can get the data type using type() function
type(a)  # output: <type 'int'>
```

- `float`

```python
e = 2.712818
type(e)  # <type 'float'>
```

- `complex`

```python
z = 3 + 5.7j
type(z)  # <type 'complex'>
print(z.real)  # 3
print(z.imag)  # 5.7
```

Convert `int` to `float`: `x = float(28)` or `x = 28.0`. <br/>
Convert `int`/`float` to `complex`: `x = complex(1.72)` or `x = 1.72 + 0j`. <br/>

```python
# More on Python Casting
x = int(1)   # x will be 1
y = int(2.8)  # y will be 2
z = int("3")  # z will be 3

x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2")  # w will be 4.2

x = str("s1")  # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'
```

```python
# More examples:
16 / 5    # output: 3.2 (float)
16 // 5   # output 3 (int)
16 % 5    # output 1 (int)
```

## Python Data Types
- Text Type: `str`
- Numeric Types: `int`, `float`, `complex`
- Sequence Types: `list`, `tuple`, `range`
- Mapping Type: `dict`
- Set Types: `set`, `frozenset`
- Boolean Type: `bool`
- Binary Types: `bytes`, `bytearray`, `memoryview`

Declaring these data types:

```python
x = "Hello World"       # str
x = 20                  # int
x = 20.5                # float
x = 1j                  # complex
x = ["apple", "banana", "cherry"]   # list
x = ("apple", "banana", "cherry")   # tuple
x = range(6)                        # range
x = {"name": "John", "age": 36}     # dict
x = {"apple", "banana", "cherry"}   # set
x = frozenset({"apple", "cherry"})  # frozenset
x = True                            # bool
x = b"Hello"                        # bytes
x = bytearray(5)                    # bytearray
x = memoryview(bytes(5))            # memoryview
```



## Python Operators `+` `*` `/` `%` `//` `**`

- [Python Arithmetic Operators](https://www.w3schools.com/python/python_operators.asp)


| Operator | Name           | Example |
|----------|----------------|---------|
| +        | Addition       | x + y   |
| -        | Subtraction    | x - y   |
| *        | Multiplication | x * y   |
| /        | Division       | x / y   |
| %        | Modulus        | x % y   |
| **       | Exponentiation | x ** y  |
| //       | Floor division | x // y  |


- Python Comparison Operators

| Operator | Name                     | Example |
|----------|--------------------------|---------|
| ==       | Equal                    | x == y  |
| !=       | Not equal                | x != y  |
| >        | Greater than             | x > y   |
| <        | Less than                | x < y   |
| >=       | Greater than or equal to | x >= y  |
| <=       | Less than or equal to    | x <= y  |

- Python Logical Operators: `and`, `or`, `not`

- Python Identity Operators

| Operator | Description                                            | Example    |
|----------|--------------------------------------------------------|------------|
| is       | Returns True if both variables are the same object     | x is y     |
| is not   | Returns True if both variables are not the same object | x is not y |

- Python Membership Operators

| Operator | Description                                                                      | Example    |
|----------|----------------------------------------------------------------------------------|------------|
| in       | Returns True if a sequence with the specified value is present in the object     | x in y     |
| not in   | Returns True if a sequence with the specified value is not present in the object | x not in y |


## Python Strings and Strings methods
String literals in python are surrounded by either single quotation marks, or double quotation marks. `'hello'` is the same as `"hello"`.

- Multiline Strings <br/>
You can assign a multiline string to a variable by using three quotes:

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor."""

# Or three single quotes:
a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor.'''

print(a)
```

- Strings as Arrays
Python does not have a character data type, a single character is simply a string with a length of 1.<br/>
<br/>

- Square brackets `[ ]` can be used to access elements of the string.

```python
a = "Hello, World!"
print(a[1]) # 'e'
```

- Slicing

```python
b = "HelloWorld!"
print(b[2:5]) # 'loWo'
print(b[-5:-2]) # 'Wor'

print("Helloop"[3:7]) # 'loop'
print("Helloop"[3:12]) # 'loop'
print("Helloop"[2:]) # 'lloop'
print("Helloop"[-3:]) # 'oop'
print("Helloop"[:3]) # 'Hel'
print("Helloop"[:5]) # 'Hello'
print("Helloop"[:-3]) # 'Hell'
print("Helloop"[:-4]) # 'Hel'
```

- String length

```python
a = len("HelloWorld")
print(a) # 10
```

- `strip()` method removes any whitespace from the beginning or the end:

```python
a = "  Hello, World!   "
print(a.strip()) # returns "Hello, World!"
```

- `lower()` and `upper()` returns the string in lower/upper case:

```python
a = "Hello, World!"
print(a.lower()) # "hello, world!"
print(a.upper()) # "HELLO, WORLD!"
```

- `replace()` method replaces a string with another string:

```python
a = "Hello, World!"
print(a.replace("ello", "i")) # "Hi, World!"
```

- [important] `split()` method splits the string into substrings if it finds instances of the separator. The result will be a list:

```python
"Hello, World".split(',') # returns ['Hello', ' World!']
"Hello World".split(' ') # returns ['Hello', 'World!']
```

- [important] Check if a certain substring is present in a string using the keywords `in` or `not in`:

```python
txt = "The rain in Spain stays mainly in the plain"
x = "ain" in txt
print(x) # True

"The" not in txt # False
```

- String concatenation with `+`

```python
print("Hi" + "People") # "HiPeople"
```

We cannot combine strings and numbers like in JavaScript:

```python
"John is " + 36 + " years old." # TypeError: can only concatenate str (not "int") to str

## We would use

"John is " + str(36) + " years old."
```

- We can use `format()` method and `{}` to insert numbers or substrings into strings:

```python
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))
```

```python
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
```

- Escape characters:

| Code | Result          |
|------|-----------------|
| \'   | Single Quote    |
| \\   | Backslash       |
| \n   | New Line        |
| \r   | Carriage Return |
| \t   | Tab             |
| \b   | Backspace       |
| \f   | Form Feed       |
| \ooo | Octal value     |
| \xhh | Hex value       |

- [All strings methods:](https://www.w3schools.com/python/python_strings.asp)

| Method         | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| capitalize()   | Converts the first character to upper case                                                    |
| casefold()     | Converts string into lower case                                                               |
| center()       | Returns a centered string                                                                     |
| count()        | Returns the number of times a specified value occurs in a string                              |
| encode()       | Returns an encoded version of the string                                                      |
| endswith()     | Returns true if the string ends with the specified value                                      |
| expandtabs()   | Sets the tab size of the string                                                               |
| find()         | Searches the string for a specified value and returns the position of where it was found      |
| format()       | Formats specified values in a string                                                          |
| format_map()   | Formats specified values in a string                                                          |
| index()        | Searches the string for a specified value and returns the position of where it was found      |
| isalnum()      | Returns True if all characters in the string are alphanumeric                                 |
| isalpha()      | Returns True if all characters in the string are in the alphabet                              |
| isdecimal()    | Returns True if all characters in the string are decimals                                     |
| isdigit()      | Returns True if all characters in the string are digits                                       |
| isidentifier() | Returns True if the string is an identifier                                                   |
| islower()      | Returns True if all characters in the string are lower case                                   |
| isnumeric()    | Returns True if all characters in the string are numeric                                      |
| isprintable()  | Returns True if all characters in the string are printable                                    |
| isspace()      | Returns True if all characters in the string are whitespaces                                  |
| istitle()      | Returns True if the string follows the rules of a title                                       |
| isupper()      | Returns True if all characters in the string are upper case                                   |
| join()         | Joins the elements of an iterable to the end of the string                                    |
| ljust()        | Returns a left justified version of the string                                                |
| lower()        | Converts a string into lower case                                                             |
| lstrip()       | Returns a left trim version of the string                                                     |
| maketrans()    | Returns a translation table to be used in translations                                        |
| partition()    | Returns a tuple where the string is parted into three parts                                   |
| replace()      | Returns a string where a specified value is replaced with a specified value                   |
| rfind()        | Searches the string for a specified value and returns the last position of where it was found |
| rindex()       | Searches the string for a specified value and returns the last position of where it was found |
| rjust()        | Returns a right justified version of the string                                               |
| rpartition()   | Returns a tuple where the string is parted into three parts                                   |
| rsplit()       | Splits the string at the specified separator, and returns a list                              |
| rstrip()       | Returns a right trim version of the string                                                    |
| split()        | Splits the string at the specified separator, and returns a list                              |
| splitlines()   | Splits the string at line breaks and returns a list                                           |
| startswith()   | Returns true if the string starts with the specified value                                    |
| strip()        | Returns a trimmed version of the string                                                       |
| swapcase()     | Swaps cases, lower case becomes upper case and vice versa                                     |
| title()        | Converts the first character of each word to upper case                                       |
| translate()    | Returns a translated string                                                                   |
| upper()        | Converts a string into upper case                                                             |
| zfill()        | Fills the string with a specified number of 0 values at the beginning                         |






## Python `if else` , `for _ in range(len())`, `for _ in iterable`, `while`, `break`, `continue`

Example: Solving FizzBuzz:

```py
def FizzBuzz(num):
    for _ in range(1, num + 1):
        out = ""
        if _ % 3 == 0:
            out += "Fizz"
        if _ % 5 == 0:
            out += "Buzz"
        if out == "":
            out = _
        print(out)


FizzBuzz(18)
```















## Python Collection data types (data structures)
Python Data Structure Types:
- sets: `{"cherry", "apple", "banana"}` with *curly brackets {}* or with `set(any_iterable)` or `set([list])`
- tuples: `("cherry", "apple", "banana")` with *round brackets ()* or with `tuple(any_iterable)` or `tuple([list])`
- dictionaries: `{"name": "John", "age": 36, 404:"Error"}` with *curly brackets {}*
- lists: `["cherry", "apple", "banana"]` with *square brackets []*

| Collection Type | Properties                                               |
|-----------------|----------------------------------------------------------|
| Set             | unordered and unindexed. No duplicate members.           |
| Dictionary      | unordered, changeable and indexed. No duplicate members. |
| Tuple           | ordered and unchangeable. Allows duplicate members.      |
| List            | ordered and changeable. Allows duplicate members.        |





## Python Sets

A set is a collection which is unordered and unindexed, meaning that the order doesn't matter in a set and you cannot be sure in which order the items will appear.
- Sets are not subscriptable (they can't be accessed with an index/key or `[ ]`). 
- They don't have a `sort()` attribute.
- Sets doesn't contain duplicates, you can't have 2 or more of a same value.

```python
mySet = {1, 2, 2, 3, 3, "yes", "no", "yes"}
# or
mySet = set([1, 2, 2, 3, 3, "yes", "no", "yes"])
print(mySet) # {1, 2, 3, 'no', 'yes'}
type (mySet) # set

# You can find all set methods by declaring a set and calling dir() on it
dir(mySet)
```

### Sets methods:

- Elements can be accessed only with a `for` loop

```python
mySet = {"apple", "banana", "cherry"}

for x in mySet:
  print(x)
``` 

- We cannot change items in a set but we can add elements one by one with `add()`

```python
mySet.add("orange")
print(mySet) # {'apple', 'banana', 'cherry', 'orange'}
```

- Or we can add multiple items using `update()`

```python
mySet.update(["mango", "grapes"])
print(mySet) # {'apple', 'banana', 'cherry', 'grapes', 'mango', 'orange'}

# Note that the elements are not pushed to the end of the set 
# but rather sorted alphabetically or in ascending order
numberSet = {5, 3, 2, 55, 32}
print(numberSet) # {2, 3, 5, 32, 55}
```

- Get the length of a set with `len()`

- We can remove items in a set by using `discard()` (Note that a remove() method doesn't exist)

```python
mySet = {"apple", "banana", "cherry"}
mySet.discard("banana")
```

- Remove the last item in a set with `pop()`

```python
mySet = {"apple", "banana", "cherry"}
x = mySet.pop() # x = 'cherry'
print(mySet) # {"apple", "banana"}
```

- `clear()` method empties a set (removes every element)

```python
mySet.clear()
print(mySet) # set()
```

- We can join two sets using `union()`

```python
set1 = {"c", "d" , "e", 3}
set2 = {1, 'a', 2, 3}

set3 = set1.union(set2) # set3 = {1, 2, 3, 'a', 'c', 'd', 'e'}
set2 = set1.union(set2) # set2 = {1, 2, 3, 'a', 'c', 'd', 'e'}
```

- We can intersect sets using `intersection()`

```python
odds = set([1,3,5,7,9])
primes = set([2,3,5,7])

primes.intersection(odds) # {2}
```

- Difference of a two sets with `difference()`

```python
# Python
a = {1, 3, 5, 7, 8, 9} # type(a) returns <class 'set'>
b = {2, 4, 6, 7, 8, 9, 10}
a.difference(b) # {1, 3, 5}
b.difference(a) # {2, 4, 6, 10}
```

- [All sets methods](https://www.w3schools.com/python/python_sets.asp):

| Method                        | Description                                                                    |
|-------------------------------|--------------------------------------------------------------------------------|
| add()                         | Adds an element to the set                                                     |
| clear()                       | Removes all the elements from the set                                          |
| copy()                        | Returns a copy of the set                                                      |
| difference()                  | Returns a set containing the difference between two or more sets               |
| difference_update()           | Removes the items in this set that are also included in another, specified set |
| discard()                     | Remove the specified item                                                      |
| intersection()                | Returns a set, that is the intersection of two other sets                      |
| intersection_update()         | Removes the items in this set that are not present in other, specified set(s)  |
| isdisjoint()                  | Returns whether two sets have a intersection or not                            |
| issubset()                    | Returns whether another set contains this set or not                           |
| issuperset()                  | Returns whether this set contains another set or not                           |
| pop()                         | Removes an element from the set                                                |
| remove()                      | Removes the specified element                                                  |
| symmetric_difference()        | Returns a set with the symmetric differences of two sets                       |
| symmetric_difference_update() | inserts the symmetric differences from this set and another                    |
| union()                       | Return a set containing the union of sets                                      |
| update()                      | Update the set with the union of this set and others                           |







## Python Dictionaries

A dictionary is a collection which is **unordered**, **changeable** and **indexed**. Dictionaries are written with curly brackets, and they have keys and values.

```python
myDict = {
  "name": "Alex",
  2: 'Hello',
  "years": [1964. 1972]
}
print(thisdict)

# We can also create a dictionary using dict()
blogPost = dict(message="Hi", language="English")
```

### Dictionary methods

- In a Dictionary, we can access items and change values by keys using `[]`:

```python
myDict["name"] # 'Alex'
myDict["years"] # [1964. 1972]
myDict[2] # 'Hello'

myDict["name"] = "Ed"
```

- Loop through dictionary's key names and access their values:

```python
for key in myDict:
	print(key) # 'name' ...
	print(myDict[key]) # 'Ed' ...
```

- Loop through both keys and values, by using the `items()` method:

```python
for key, value in myDict.items():
	print(key) # 'name' ...
	print(value) # 'Ed' ...
```

- Check if a key exists in a dictionary with `in`: `"name" in myDict` will return `True`

- Check dictionary length with `len()`: `print(len(myDict))`

- Adding an item to the dictionary is done by using a new index key and assigning a value to it:

```python
recipeArticle = {
  "title": "How to cook cookies",
  "ingredients": ['flour', 'milk', 'eggs']
}
recipeArticle["subtitle"] = "Cook delicious cookies in just an hour"
print(thisdict)
```

- Removing elements by a specific key name using `pop()`

```python
recipeArticle.pop('ingredients')
```

- Remove the last inserted item with `popitem()`

- Empty a dictionary with `myDict.clear()`

- Make a copy of a dictionary with the `copy()` method, or using directly the `dict()` function

```python
myDict2 = myDict.copy()

# same as
myDict2 = dict(myDict)
```

- Nested Dictionaries:

```python
myfamily = {
  "child1" : {
    "name" : "Andrew",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}
```





## Python Tuples

A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.

- We can access tuple elements with their index numbers using `[]`:

```python
myTuple = ("apple", "banana", "cherry")
print(myTuple[1]) # "banana"

print(myTuple[-1]) # "cherry" (-1 refers to last item)
print(myTuple[-2]) # "banana" (-2 refers to second last item)

anotherTuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(anotherTuple[2:5]) # ('cherry', 'orange', 'kiwi')

print(anotherTuple[3:]) # ('orange', 'kiwi', 'melon', 'mango')
print(anotherTuple[:3]) # ('apple', 'banana', "cherry")
print(anotherTuple[2:]) # ('cherry', 'orange', 'kiwi', 'melon', 'mango')
print(anotherTuple[:2]) # ('apple', 'banana')
```

- Iterate through a tuple:

```python
for item in myTuple:
	print(item)

for i in range(0, len(myTuple)):
	print(myTuple[i])
```

- **Once created, we cannot *add* or *remove* items in a tuple !!** Tuples are unchangeable.

- We can multiple tuples using `+` operator:

```python
tuple1 = ("a", "b" , "c")
tuple2 = ('a', 1, 2, 3)

tuple3 = tuple1 + tuple2
print(tuple3) # ('a', 'b', 'c', 'a', 1, 2, 3)
```

- We can return the number of times a specific element repeats in a tuple with `count()`

```python
monTuple = ('un', 'deux', 'trois', 'un', 'quatre', 'trois', 'trois')
monTuple.count('trois') # 3
monTuple.count('un') # 2
```

- Search in a tuple for a specified value and return the position with `index()`

```python
monTuple.index('trois') # 2
```














## Python Lists
Python lists could be seen as *Arrays* from JavaScript's perspective.
