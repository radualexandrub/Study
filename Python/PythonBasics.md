

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



## Python Sets
Python Data Structure Types:
- sets: `{"cherry", "apple", "banana"}` with *curly brackets {}*
- tuples: `("cherry", "apple", "banana")` with *round brackets ()*
- lists: `["cherry", "apple", "banana"]` with *square brackets []*
- dictionaries: `{"name": "John", "age": 36, 404:"Error"}` with *curly brackets {}*
