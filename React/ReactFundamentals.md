# React Fundamentals

## Credits / Notes taken from:
- [10h7m Full React Course 2020 - Fundamentals, Hooks, Context API, React Router, Custom Hooks from freeCodeCamp](https://youtu.be/4UZrsTqkcW4)
- [w3schools React Tutorial](https://www.w3schools.com/react/default.asp)
- [React Official Documentation](https://www.w3schools.com/react/default.asp)

## Contents




## Requirements:
- Some JavaScript Knowledge, you can refer to my [JavaScript Notes](../JavaScript/JavaScriptBeginners.md)
- Installation of Node.js and a Text Editor, you can follow [my first React notes here](../React/React-ToDoApp.md)


## NPM Basics and Create-React-App
- `npm init` - creates package.json (manifest) file and list dependencies<br/>
When we share/upload a Node app to GitHub, we usually just include `package.json`, without large-sized `node_modules` folder where all the files from the installed modules are stored. To restore the `node_modules` folder, we just need to run `npm install` in our local project.
- `npm install <package_name> --save` - Install package locally (default) and add to package.json<br/>
Example: `npm install bootstrap --save`
- `npm install <package_name> -g` - Install package globally (access it anywhere, not only current project)<br/>
Example: `sudo npm install gatsby-cli -g`
- `npm install <package_name> --save-dev` (used only in development, for testing, once we ship the application into production, the package is not longer needed)
<br/><br/>
- `npx create-react-app my-app` will do all the *"heavy lifting"* for your Node/React application, it will install automatically (locally) all the dependencies needed for a React application. Create-React-App uses [Babel](https://babeljs.io/) behind the scenes.

## Hello World (First component) in React
- You can delete these files: `App.css`, `App.js`, `App.test.js`, `index.css`, `logo.svg`, `serviceWorked` and `setupTests`
- Keep in mind that our main component is `<div id="root">` from our `./public/index.html`
- You cand delete everything in index.js and write:

```js
// index.js
import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return <h2>This is my first component</h2>;
}

/* Or we can create an element using React:
const Greeting = () => {
  return React.createElement('h1', {}, 'hello world');
};
*/

ReactDom.render(<Greeting/>, document.getElementById('root'));


// Now open terminal and:
>> npm start
```

If we have more elements (tags), we can write:
```js
import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

// Or (under the hood):
const Greeting = () => {
  return React.createElement(
    'div',
    {}, 
    React.createElement('h1', {}, 'Hello World')
  );
};

ReactDom.render(<Greeting/>, document.getElementById('root'));
```
We observe than using JSX (first method) is easier and more readable for making components.<br/>
**Short JSX Rules:**
- We must return a single element (only one `<div></div>` or a `section`/`article`/`React Fragment`)
- Use camelCase for html attributes
- Use `className` instead of `class`
- close every element (even we have `<img`>, we need to use `<img/`)

## Nested components

```js
// index.js
function Greeting() {
  return (
    <div>
      <p>Main component</p>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>child component</h2>;
const Message = () => {
  return <p>another child component</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
```
Our component structure will look like this:
- Greeting (Main)
  - Person
  - Message

**A real-world simple example with nested components**:
```js
// index.js
import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41LtJtWn9OL._SX331_BO1,204,203,200_.jpg"
        alt="12 Rules for Life book cover"
      />
      <BookTitle />
      <BookAuthor />
    </article>
  );
};

const BookTitle = () => {
  return <h2>12 Rules for Life</h2>;
};

const BookAuthor = () => {
  return <h4>Jordan B. Peterson</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
```
Our component structure will look like this:
- BookList
  - Book
    - BookTitle
    - BookAuthor
  - Book
    - BookTitle
    - BookAuthor




## Add CSS to our React components (from index.css or in JSX)

```CSS
/* index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #e0e0e0;
  min-height: 100vh;
}

.booklist {
  padding: 2rem 3rem 4rem 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 3rem;
}

.book img {
  max-width: 10rem;
}
```

Then we import `index.css` in our `index.js`
```js
import "./index.css"; // "../" means previous folder; "./" is current/same folder

function BookList() {
  return (
    <section className="booklist"> // Add className to each of our components
      <Book />
      <Book />
    </section>
  );
}

// Or we can add CSS directly into our JSX code as an object
// one pair of brackes is for JavaScript, another pair is for object {{}}
const BookTitle = () => {
  return <h2 style={{ color: "#263B44FF", marginTop: "0.25rem"}}>
    12 Rules for Life
  </h2>;
};

```




## JavaScript JSX, variables and props
We can write variables inside or outside of function components:
```js
const title = "The Brothers Karamazov";
const img = "https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg"
const Book = () => {
  const author = "Fyodor Dostoevsky";
  return (
    <article className="book">
      <img
        src={img} alt=''
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};
```
<br/><br/>
However,<br/>

`Book` is a function, so we can give it parameters (we use `props` as convention, meaning properties in React):

```js
const Book = (props) => {
  return (
    <article className="book">
      <img
        src={props.img} alt=''
      />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};
```
And we pass the parameters we want inside our main/upper component (`BookList` here) as an object:

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        title="The Brothers Karamazov"
        author="Fyodor Dostoevsky"
        img="https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg"
      />
      <Book
        title="12 Rules for Life"
        author="Jordan B. Peterson"
        img="https://images-na.ssl-images-amazon.com/images/I/41LtJtWn9OL._SX331_BO1,204,203,200_.jpg"
      />
    </section>
  );
}
```
This will be the result so far:<br/>
<p align="center"><img src="./ReactFundamentals01.jpg" width=500></p>

<br/><br/>
Also, inside our `Book` function, if we don't want to repeat `props` var name, we can use ***JavaScript Destructuring***:

```js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// However, we don't even need to specify "props" object
/* We know that the parameter will eb an object, 
   so we can get it's properties right away */
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```





## Props: `children` keyword as parameter in function component 
If we add more properties directly in our Main Component ("BookList" here) without naming them, we can include a `children` parameter in our "Book" sub-component function (in order to render it):

```js
// index.js
var secondBook = {
  title: "12 Rules for Life",
  author: "Jordan B. Peterson",
  img: "https://images-na.ssl-images-amazon.com/images/I/41LtJtWn9OL._SX331_BO1,204,203,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          malesuada fermentum pharetra.
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
};
```





## Rewrite our dummy data as a simple list of objects and Iterate through it with `map()`
We can put all our books objects in a simple (global) `Array [ ]` called `books`:

```js
// index.js
var books = [
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg",
  },
  {
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41LtJtWn9OL._SX331_BO1,204,203,200_.jpg",
  },
];
```

Then we can iterate through each object in that array in our base component (`BookList` function) using `map()` and destructuring:

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return 
          <Book 
            title={book.title}
            img={book.img}
            author={book.author} 
          />;
      })}
    </section>
  );
}

// Our "Book" component will remain the same
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```

We can also use the ***Spread operator*** (`...`) inside our `BookList` main component, without modifying our `Book` function:

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return 
          <Book 

            {...book} 
          />;
      })}
    </section>
  );
}
```



## Solve warning: Each child in a list should have a unique "key" prop
React uses the `key` property create a relationship between the component and the DOM element, so each object should have an `id`. [The library uses this relationship to determine whether or not the component should be re-rendered](https://sentry.io/answers/unique-key-prop/).

```js
// index.js
// We just need to add an id to each object in our array
var books = [
  {
    id: 1,
    title: "The Brothers Karamazov",
    ...
  },
];

// Then add key={book.id} as a return in our arrow function inside BookList()
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return 
          <Book 
            key={book.id}
            {...book} 
          />;
      })}
    </section>
  );
}
```








## React Event Basics
Complete List of events from documentation: [here](https://reactjs.org/docs/events.html).<br/>
The main two components of an event is: **attribute** and **eventHandler**.

- ***onClick*** event:
Add a `<button>` with an `onClick` event, and a new `const (arrow) function` to handle that event:

```js
const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert(title);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        See description
      </button>
    </article>
  );
};
```

<p align="center"><img src="./ReactFundamentals02.jpg" width=700></p>

[But what happens if we want to pass an argument to our outside Handler function (timestamp:3h5m)?](https://youtu.be/4UZrsTqkcW4?t=11121) The Handler functions (with a passed argument) will execute all at once when first opening the page! To solve this we need to pass an arrow function with the argument we want as an argument:

```js
// Our Handler function is outside our Book() component
const complexClickHandler = (author) => {
  alert(author);
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => complexClickHandler(author)}>
        See description
      </button>
    </article>
  );
};
```

- ***onMouseOver*** event:

```js
const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onMouseOver={clickHandler}>
        See description
      </button>
    </article>
  );
};
```







## Import and Export modules (JavaScript ES6)

We can split our functionalities in separate files instead of putting them all together in `index.js`.<br/>
We can create a new folder `./src/components` with `BookItem.js`, and a new file `booksData.js` where we'll store our dummy data books (array)
  - `./src/components/BookItem.js`
  - `./src/booksData.js`

In `./src/booksData.js` we will cut and paste our array and add `export`:

```js
// booksData.js
export const books = [
  {
    id: 1,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51FIyYKsCXL._SX333_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41LtJtWn9OL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/412Nd1QaikL._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/412gUd3iiKL._SX331_BO1,204,203,200_.jpg",
  },
];
```

In `./src/components/BookItem.js` we will have:

```js
import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert(title);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        See description
      </button>
    </article>
  );
};

export default Book;

```

Note, we can only have ***one*** `default export` per `.js` file. However, it is good practice to keep the component name `Book` same as our `.js` file name (here we have `BookItem.js` instead of `Book.js`)<br/><br/>

In our main `./src/index.js` we will import these new files (for `.js` files, we don't have to specify the extension):

```js
// index.js
import {books} from './booksData'
import Book from "./components/BookItem";
import "./index.css";
```

Note that we use ***curly brackets {}*** for exports that aren't `default` (like our `books` array from our `booksData.js`).



