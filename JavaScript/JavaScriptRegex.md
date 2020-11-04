# JavaScript Regular Expressions (Regex)

## References:

- [freeCodeCamp JavaScript Regex](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/)
- [weschools JavaScript Regex full References](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
- [w3schools JavaScript Regex Object](https://www.w3schools.com/js/js_regexp.asp)

## Contents

- [JavaScript Regular Expressions (Regex)](#javascript-regular-expressions-regex)
  - [References:](#references)
  - [Contents](#contents)
  - [Useful resources:](#useful-resources)
  - [JavaScript functions that uses Regex](#javascript-functions-that-uses-regex)
    - [`.test()` method](#test-method)
    - [`.match()` method](#match-method)
    - [`.matchAll()` method](#matchall-method)
    - [`.search()` method](#search-method)
    - [`.split()` method](#split-method)
    - [`.replace(str|regexp, str|func)`](#replacestrregexp-strfunc)
  - [Regex flags/modifiers](#regex-flagsmodifiers)
    - [`i` flag (case-insensitive matching)](#i-flag-case-insensitive-matching)
    - [`g` flag (global match)](#g-flag-global-match)
  - [Regex Brackets `[ ]` (_character classes_)](#regex-brackets---character-classes)
    - [`/[a-e]/` Find any character/digit between the brackets](#a-e-find-any-characterdigit-between-the-brackets)
    - [`[^abc]` Find any character NOT between the brackets](#abc-find-any-character-not-between-the-brackets)
    - [OR operator: `|` and `(str1|str2)` to find any of the specified alternatives](#or-operator--and-str1str2-to-find-any-of-the-specified-alternatives)
    - [Capture groups `( )` to write multiple repeated substrings in a regex (DRY)](#capture-groups---to-write-multiple-repeated-substrings-in-a-regex-dry)
    - [Use Capture Groups to Search and Replace](#use-capture-groups-to-search-and-replace)
  - [Regex Metacharacters](#regex-metacharacters)
    - [`.` (dot) Find a single character](#-dot-find-a-single-character)
    - [`\w` (w lower) Find a word character](#w-w-lower-find-a-word-character)
    - [`\W` (W upper) Find a non-word character](#w-w-upper-find-a-non-word-character)
    - [`\d` Match All Digits](#d-match-all-digits)
    - [`\D` Match All Non-Digits](#d-match-all-non-digits)
    - [`\s` Find a whitespace character](#s-find-a-whitespace-character)
    - [`\S` Find a non-whitespace character](#s-find-a-non-whitespace-character)
  - [Regex Quantifiers](#regex-quantifiers)
    - [`^n` Matches any string with _n_ at the beginning of it](#n-matches-any-string-with-n-at-the-beginning-of-it)
    - [`n\$` Matches any string with _n_ at the end of it](#n-matches-any-string-with-n-at-the-end-of-it)
    - [`n+` Match Characters that Occur One or More Times](#n-match-characters-that-occur-one-or-more-times)
    - [`n*` Match Characters that Occur Zero or More Times](#n-match-characters-that-occur-zero-or-more-times)
    - [`n?` Matches any string that contains zero or one occurrences of _n_ (Lazy)](#n-matches-any-string-that-contains-zero-or-one-occurrences-of-n-lazy)
    - [`n{X,Y}` Match string that contains a sequence of X _n's_ that appears Y times](#nxy-match-string-that-contains-a-sequence-of-x-ns-that-appears-y-times)
    - [`n{X,}` Matches any string that contains a sequence of at least X _n_'s](#nx-matches-any-string-that-contains-a-sequence-of-at-least-x-ns)
    - [`n{X}` Matches any string that contains a sequence of _X_ _n_'s](#nx-matches-any-string-that-contains-a-sequence-of-x-ns)
    - [`?=n` and `?!n` Matches any string that is followed/not followed by a specific string _n_](#n-and-n-matches-any-string-that-is-followednot-followed-by-a-specific-string-n)
- [Exercises/Challenges using Regex:](#exerciseschallenges-using-regex)
  - [Exercise: Restrict Possible Usernames](#exercise-restrict-possible-usernames)
  - [Exercise: Spinal Tap Case](#exercise-spinal-tap-case)

## Useful resources:

- [ihateregx.io: Lots of already made regex presets for date/email/password/etc... + helpers](https://ihateregex.io/)
- [regexr.com: Find matches in a text with custom regex + show hints](https://regexr.com/)
- [regexster.com Same as above, but with multiple regex already made presets](https://www.regextester.com/)
- [regex101.com: Find matches with custom regex. JS, Python, PHP, Golang also supported](https://regex101.com/)
- [Dev.to article: A Visual Guide to Regular Expression](https://dev.to/amitness/a-visual-guide-to-regular-expression-i3)
- [Dev.to article 20 Small Steps to Become a Regex Master 42min read](https://dev.to/awwsmm/20-small-steps-to-become-a-regex-master-mpc)
- https://javascript.info/regular-expressions

> Note: each language has different regular expressions. [Python's regex is different than JavaScript's](https://stackoverflow.com/questions/636485/whats-different-between-python-and-javascript-regular-expressions) ([Regular Expression Flavor Comparison](http://web.archive.org/web/20130830063653/http://www.regular-expressions.info:80/refflavors.html)).

## JavaScript functions that uses Regex

### `.test()` method

The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let myString = 'Hello, World!';
let myRegex = /Hello/; // /Hello/ regex is case sensitive
let result = myRegex.test(myString); // result is true

console.log(/hello/.test('Hello, world')); // false
```

<br/>

### `.match()` method

You can extract the actual matches you found with the `.match()` method.

```js
'Hello, World!'.match(/Hello/);
// Returns [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]
```

Note that the `.match` syntax is the "opposite" of the `.test`:

```js
/regex/.test('string');

'string'.match(/regex/);
```

However, this method is commonly used with `g` flag:

```js
'Repeat, Repeat, Repeat'.match(/Repeat/);
// Returns ['Repeat', index: 0, input: 'Repeat, Repeat ,Repeat', groups: undefined]

'Repeat, Repeat, Repeat'.match(/Repeat/g); // ["Repeat", "Repeat", "Repeat"]
```

<br/>

### `.matchAll()` method

[The method `str.matchAll(regexp)` is a “newer, improved” variant of `str.match`](https://javascript.info/regexp-methods#str-matchall-regexp). It’s used mainly to search for all matches with all groups. There are 3 differences from `match`:

1. It returns an iterable object with matches instead of an array. We can make a regular array from it using `Array.from`.
2. Every match is returned as an array with capturing groups (the same format as `str.match` without flag `g`).
3. If there are no results, it returns not `null`, but an empty iterable object.

```js
let str = '<h1>Hello, world!</h1>';
let matchAll = str.matchAll(/<(.*?)>/g);

console.log(matchAll); // Object [RegExp String Iterator] {}, not array, but an iterable

matchAll = Array.from(matchAll); // convert to array of objects
console.log(matchAll); // [ ['<h1>','h1',index: 0,input:'<h1>Hello, world!</h1>',groups: undefined], ['</h1>',...] ]
```

<br/>

### `.search()` method

`search()` method searches a string for a specified value and returns the position of the match.

```js
'You saw Titanic?'.match(/titanic/i); // [ 'Titanic' ]
'You saw Titanic?'.search(/titanic/i); // 8

'Should watch Titanic or The Titans?'.match(/t[a-z]*n/gi); // [ 'Titan', 'Titan' ]
'Should watch Titanic or The Titans?'.search(/t[a-z]*n/gi); // 13 (only first match)
```

<br/>

### `.split()` method

```js
'Hello World, I-am coding'.split(' '); // [ 'Hello', 'World,', 'I-am', 'coding' ]
'Hello World, I-am coding'.split(/\W/); // [ 'Hello', 'World', 'I', 'am', 'coding' ]
console.log('12, 34, 56'.split(/,\s*/)); // array of [12, 34, 56]
```

<br/>

### `.replace(str|regexp, str|func)`

This is a generic method for searching and replacing, one of most useful ones. The swiss army knife for searching and replacing. We can use it without regex, to search and replace a substring:

```js
// replace a dash by a colon
console.log('12-34-56'.replace('-', ':')); // 12:34-56
```

[**When the first argument of `replace` is a string, it only replaces the first match.**](https://javascript.info/regexp-methods#str-replace-str-regexp-str-func)

To find all hyphens, we need to use not the string `"-"`, but a regexp `/-/g`, with the obligatory `g` flag:

```js
// replace all dashes by a colon
console.log('12-34-56'.replace(/-/g, ':')); // 12:34:56
```

However, the second argument is a replacement string. We can use special character in it:

| Symbols   | Action in the replacement string                                                                                                                      |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$&`      | inserts the whole match                                                                                                                               |
| `\$``     | inserts a part of the string before the match                                                                                                         |
| `$'`      | inserts a part of the string after the match                                                                                                          |
| `$n`      | if `n` is a 1-2 digit number, inserts the contents of n-th capturing group, for details see [Capturing groups](https://javascript.info/regexp-groups) |
| `$<name>` | inserts the contents of the parentheses with the given `name`, for details see [Capturing groups](https://javascript.info/regexp-groups)              |
| `$$`      | inserts character `$`                                                                                                                                 |

For instance:

```javascript
let str = 'John Smith';

// swap first and last name
console.log(str.replace(/(john) (smith)/i, '$2, $1')); // Smith, John
```

<br/>

## Regex flags/modifiers

### `i` flag (case-insensitive matching)

You can match both upper and lower cases using a flag. There are other flags but here you'll focus on the flag that ignores case - the `i` flag. You can use it by appending it to the regex. An example of using this flag is `/ignorecase/i`. This regex can match the strings `"ignorecase"`, `"igNoreCase"`, and `"IgnoreCase"`.

```js
console.log(/freeCodeCamp/i.test('FreecodeCamp')); // true
```

### `g` flag (global match)

To search or extract a pattern more than once, you can use the `g` flag _(Perform a global match - find all matches rather than stopping after the first match)_.

```js
'Repeat, Repeat, Repeat'.match(/Repeat/); // Returns ["Repeat"]
'Repeat, Repeat, Repeat'.match(/Repeat/g); // ["Repeat", "Repeat", "Repeat"]
```

Another example:

```js
let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi;
console.log(twinkleStar.match(starRegex)); // [ 'Twinkle', 'twinkle' ]
```

<br/>

## Regex Brackets `[ ]` (_character classes_)

Character classes allow you to define a group of characters you wish to match by placing them inside square `[ ]` brackets

For example, you want to match `"bag"`, `"big"`, and `"bug"` but not `"bog"`. You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `"a"`, `"i"`, or `"u"`.

```js
let bgRegex = /b[aiu]g/;
'big'.match(bgRegex); // Returns ["big"]
'bag'.match(bgRegex); // Returns ["bag"]
'bug'.match(bgRegex); // Returns ["bug"]
'bog'.match(bgRegex); // Returns null
```

Another simple example: Find and return all the vowels in a string:

```js
let str =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
str.match(/[aeriou]/gi); // ['e', 'a', 'r', 'e', 'o', 'u','i', 'e', 'a', ...
```

### `/[a-e]/` Find any character/digit between the brackets

Inside a character set, you can define a range of characters to match using a hyphen character: `-`.

```js
// Match lowercase letters a through e using [a-e].
'cat'.match(/[a-e]at/); // Returns ["cat"]
'bat cat'.match(/[a-e]at/g); // Returns ["bat", "cat"]
'mat'.match(/[a-e]at/); // Returns null
```

We can also use digits: `/[0-5]/` matches any number between `0` and `5`, including the `0` and `5`.<br/>Also, it is possible to combine a range of letters and numbers in a single character set.

```js
let jennyStr = 'Jenny8675309';
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex); // ['J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', ...]
```

### `[^abc]` Find any character NOT between the brackets

```js
let quoteSample = '3 blind mice.';
let myRegex = /[^aeiou0-9]/gi;
quoteSample.match(myRegex); // [' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.']
```

### OR operator: `|` and `(str1|str2)` to find any of the specified alternatives

You can search for multiple patterns using the `alternation` or `OR` operator: `|`.

```js
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); // true
```

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`. If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`

```js
let testRegex = /P(engu|umpk)in/;
testRegex.test('Pumpkin'); // Returns true
```

Regex that checks for the names of `Franklin Roosevelt` or `Eleanor Roosevelt` in a case sensitive manner and it should make concessions for middle names (using `. dot` metacharacter)

```js
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
myRegex.test('Eleanor Roosevelt'); // true
myRegex.test('Franklin D. Roosevelt'); // true
myRegex.test('Frank Roosevelt'); // false
```

<br/>

### Capture groups `( )` to write multiple repeated substrings in a regex (DRY)

Parentheses, `(` and `)`, are used to find repeated substrings. You put the regex of the pattern that will repeat in between the parentheses. To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.

The example below matches any word that occurs twice separated by a space:

```js
let repeatStr = 'regex regex';
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

- `\w+` find a word (alphanumeric A-Z0-9\_) characters that occurs _one_ or more times
- `\s` find a whitespace character

```js
let testString = 'test test test';
let reRegex = /(test)\s\1/;
reRegex.test(testString); // true
testString.match(reRegex); // ['test test', 'test']

reRegex = /(test)\s\1/; // is literally equivalent to:
literalReRegex = /test\stest/; // Both reRegex and literalReRegex will match the same thing
```

So, basically, you write the _group_ `(test)`, which is the _first (1)_ group written in that regex, and then you write `\1` to _reuse_ the value of that first group (`\1` will get replaced with the first value within the _first group_, namely `test`).

```js
/(test)\s\1/;
/* is equivalent to */ /test\stest/;
/(\w\s)\1/;
/* is equivalent to */ /\w\s\w\s/;
/(\w\s)\1\1/;
/* is equivalent to */ /\w\s\w\s\w\s/;
/(hi)\s(hello)\s\1\s\2/;
/* is equivalent to */ /hi\shello\shi\shello/;
```

Another example:

```js
let testString = 'test test test';
let reRegex = /(test)(\s)\1\2\1/;
let resultMatch = testString.test(reRegex); // [ 'test test test', 'test' ]
let result = reRegex.test(testString); // true
/* result will match whole test test test because:
\1 repeats (test)
\2 repeats (\s) */
```

So, we basically Don't Repeat Ourselves (DRY) while writing a regex.

<br/>

Another example: Use capture groups in `reRegex` to match numbers that are repeated only three times in a string, each separated by a space:

```js
let reRegex = /^(\d+)\s\1\s\1$/;
reRegex.test('42 42 42'); // true
reRegex.test('101 102 103'); // true
reRegex.test('42 42'); // false
reRegex.test('40 45 50 55'); // false
```

<br/>

### Use Capture Groups to Search and Replace

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = 'The sky is silver.';
let silverRegex = /silver/;
wrongText.replace(silverRegex, 'blue'); // "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs (`$`).

```js
'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"
```

Another example:

```js
'one two three'.replace(/(\w+)\s(\w+)\s(\w+)/, '$3 $2 $1'); // three two one
```

Note (to myself): we cannot use `/^(\w+)\s\1\s\1$/` to don't repeat ourselves AND search/replace... we can use these _catch groups_ for only one purpose at a time.

<br/>

## Regex Metacharacters

### `.` (dot) Find a single character

The wildcard character `.` will match any one character. The wildcard is also called `dot` or `period`. For example, if you wanted to match `"hug"`, `"huh"`, `"hut"`, and `"hum"`, you can use the regex `/hu./` to match all four words.

```js
"I'll hum a song".test(/hu./); // Returns true
'Bear hug'.test(/hu./); // Returns true
console.log(['fun', 'run', 'sun'].every((item) => /.un/.test(item))); // true

/hu.*/.test('huggie'); // true
```

### `\w` (w lower) Find a word character

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

```js
longHand.test(42); // Returns true
shortHand.test(42); // Returns true
/[A-Za-z0-9_]+/.test('important_var'); // Returns true
/\w+/.test('important_var'); // Returns true
```

Example: Count the number of alphanumeric characters in various quotes and strings.

```js
'The five boxing wizards jump quickly.'.match(/\w/g).length; // 31
'The quick brown fox jumps over lazy dog...'.match(/\w/g).length; // 32
```

### `\W` (W upper) Find a non-word character

```js
'42%'.match(/\W/); // Returns ["%"]
'Coding!'.match(/\W/); // Returns ["!"]
```

`/\W/` Matches any non-word character. This includes spaces and punctuation, but not underscores. It’s equivalent to `/[^A-Za-z0-9_]/`:

```js
'Hello World, I-am code'.split(/\W/); // [ 'Hello', 'World', 'I', 'am', 'code' ]
```

### `\d` Match All Digits

The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

```js
'2001: A Space Odyssey'.match(/\d/g); // [ '2', '0', '0', '1' ]
```

### `\D` Match All Non-Digits

The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

```js
'2020:Earth'.match(/\D/g); // [ ':', 'E', 'a', 'r', 't', 'h' ]
```

### `\s` Find a whitespace character

You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

```js
'Whitespace. Whitespace everywhere!'.match(/\s/g); // Returns [" ", " "]
```

[Another example (Challenge):](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

```js
// Write a regex and use replace() to remove whitespace at the beginning and end of strings
let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, ''); // Hello, World!
```

### `\S` Find a non-whitespace character

Search for non-whitespace using `\S`, which is an uppercase `s`. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

```js
let sample = 'Whitespace is important in separating words';
sample.match(/\S/g); // ['W', 'h', 'i', 't', 'e', 's', 'p', ...
```

<br/>

## Regex Quantifiers

### `^n` Matches any string with _n_ at the beginning of it

To not be confused with the caret character (`^`) inside a character set (brackets `[ ]`) used to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. <br/>Outside of a character set (`[ ]`), the caret is used to search for patterns at the beginning of strings.

```js
/^Ricky/.test('Ricky is first and can be found.'); // Returns true
/^Ricky/.test("You can't find Ricky now."); // Returns false
```

### `n\$` Matches any string with _n_ at the end of it

You can search the end of strings using the dollar sign character `$` at the end of the regex.

```js
/story$/.test('This is a never ending story'); // Returns true
/story$/.test('Sometimes a story will end'); // Returns false
```

### `n+` Match Characters that Occur One or More Times

You can use the `+` character to check if a character appears one or more times in a row.<br/>For example, `/a+/g` would find one match in `"abc"` and return `["a"]`. Because of the `+`, it would also find a single match in `"aabc"` and return `["aa"]`. If it were instead checking the string `"abab"`, it would find two matches and return `["a", "a"]` because the `a` characters are not in a row - there is a `b` between them.

```js
'Mississippi'.match(/s+/gi); // returns [ 'ss', 'ss' ]
```

### `n*` Match Characters that Occur Zero or More Times

```js
'gooooooooal'.match(/go*/); // Returns ["goooooooo"]
'gut feeling'.match(/go*/); // Returns ["g"]
'Go, go, goooo!'.match(/go*/gi); // [ 'Go', 'go', 'goooo' ]
'over the moon'.match(/go*/); // Returns null
```

### `n?` Matches any string that contains zero or one occurrences of _n_ (Lazy)

In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

```js
'titanic'.match(/t[a-z]*i/); // ['titani']
'titanic'.match(/t[a-z]*?i/); // ['ti']
```

You can apply the regex `/t[a-z]*i/` to the string `"titanic"`. This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between. Regular expressions are by default greedy, so the match would return `["titani"]`. It finds the largest sub-string possible to fit the pattern. However, you can use the `?` character to change it to lazy matching. `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.

```js
// Example
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"
'<h1>Winter is coming</h1>'.match(/<.*?>/g); // [ '<h1>', '</h1>' ]

'<h1>Winter is coming</h1>'.match(/<.*>/g); // [ '<h1>Winter is coming</h1>' ]
```

<br/>

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless. You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional. For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```js
let american = 'color';
let british = 'colour';
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

```js
let favRegex = /favou?rite/;
favRegex.test('favorite'); // Returns true
```

### `n{X,Y}` Match string that contains a sequence of X _n's_ that appears Y times

Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, your regex would be `/a{3,5}h/`:

```js
/a{3,5}h/.test('aaaah'); // true
/a{3,5}h/.test('aah'); // false
```

### `n{X,}` Matches any string that contains a sequence of at least X _n_'s

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string `"hah"` with the letter `a` appearing at least `3` times, your regex would be `/ha{3,}h/`.

```js
let A4 = 'haaaah';
let A2 = 'haah';
let A100 = 'h' + 'a'.repeat(100) + 'h';
/ha{3,}h/.test(A4); // Returns true
/ha{3,}h/.test(A2); // Returns false
/ha{3,}h/.test(A100); // Returns true
```

### `n{X}` Matches any string that contains a sequence of _X_ _n_'s

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word `"hah"` with the letter `a` `3` times, your regex would be `/ha{3}h/`.

```js
let A4 = 'haaaah';
let A3 = 'haaah';
let A100 = 'h' + 'a'.repeat(100) + 'h';
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```

### `?=n` and `?!n` Matches any string that is followed/not followed by a specific string _n_

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string. There are two kinds of lookaheads: _positive lookahead_ and _negative lookahead_.

- A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched. A negative lookahead will look to make sure the element in the search pattern is not there.
- A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

```js
let quRegex = /q(?=u)/; // positive lookahead
let qRegex = /q(?!u)/; // negative lookahead
'qu'.match(quRegex); // Returns ["q"]
'qt'.match(qRegex); // Returns ["q"]
```

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let password = 'abc123';
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

Use lookaheads in the `pwRegex` to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits:

```js
let pwRegex = /^\D(?=\w{5,})(?=\w*\d{2})/;
pwRegex.test('astronaut123'); // true
pwRegex.test('suit4ndTi3'); // false
```

<br/><br/>

# Exercises/Challenges using Regex:

## Exercise: Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites. You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1. Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

```js
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
userCheck.test('JackOfAllTrades'); // true
userCheck.test('Jo'); // true
userCheck.test('J'); // false
userCheck.test('Oceans11'); // true
userCheck.test('007'); // false
userCheck.test('BadUs3rnam3'); // false
```

Code Explanation

1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[a-z]+` - following characters are letters (`+` for _one_ or more letters)
4. `\d*$` - input ends with 0 or more digits
5. `|` - or
6. `^[a-z]` - first character is a letter
7. `\d\d+` - following characters are 2 or more digits
8. `$` - end of input

See a more [visual representation of an _username_ regex at iHateRegex.io](https://ihateregex.io/expr/username)

<br/>

## Exercise: Spinal Tap Case

[Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case).

- `spinalCase("This Is Spinal Tap")` should return `"this-is-spinal-tap"`.
- `spinalCase("thisIsSpinalTap")` should return `"this-is-spinal-tap"`.
- `spinalCase("TheAndyGriffith_Show")` should return `"the-andy-griffith-show"`.
- `spinalCase("Teletubbies say Eh-oh")` should return `"teletubbies-say-eh-oh"`.
- `spinalCase("AllThe-small Things")` should return `"all-the-small-things"`.

[Solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078):

- **regex** contains the regular expression `/\s+|_+/g`, which will select all white spaces and underscores.
- The first `replace()` puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
- While returning the string, another `replace()` replaces spaces and underscores with dashes using regex.

```js
function spinalCase(str) {
  let regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}
```

[Another Solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078):

- Similar to the first solution, the first `replace()` puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
- Instead of using `replace()` here to replace whitespace and underscores with dashes, the string is `split()` on the regular expression `/(?:_| )+/` and `join()`-ed on `-`.

```js
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join('-');
}
```

[Another Solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-spinal-tap-case/16078):

- Split the string at one of the following conditions (converted to an array)
  - a whitespace character `\s` is encountered
  - underscore character `_` is encountered
  - or is followed by an uppercase letter `(?=[A-Z])`
- Join the array using a hyphen (`-`)
- Lowercase the whole resulting string

```js
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}
```
