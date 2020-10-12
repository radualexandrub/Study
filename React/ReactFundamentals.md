# React Fundamentals

## Credits / Notes taken from:
- [10h7m Full React Course 2020 - Fundamentals, Hooks, Context API, React Router, Custom Hooks from freeCodeCamp](https://youtu.be/4UZrsTqkcW4)
- [w3schools React Tutorial](https://www.w3schools.com/react/default.asp)
- [React Official Documentation](https://www.w3schools.com/react/default.asp)

## Contents



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
// index.css
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
<img src="./ReactFundamentals01.jpg" width=500>

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
        return <Book title={book.title} img={book.img} author={book.author} />;
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



## Warning: Each child in a list should have a unique "key" prop
