Table of Contents:

- **[JS Crash course on Callbacks, Promises, Async Await - Traversy](#js-crash-course-on-callbacks-promises-async-await---traversy)**
  - [Example for receiving/sending Data](#example-for-receivingsending-data)
  - [Sending/Receiving data using Callbacks](#sendingreceiving-data-using-callbacks)
  - [Sending/Receiving data using Promises](#sendingreceiving-data-using-promises)
    - [Catching promise errors from reject](#catching-promise-errors-from-reject)
    - [Using Promise.all function](#using-promiseall-function)
    - [Using Promises with Fetch API](#using-promises-with-fetch-api)
  - [Handling promises with async await](#handling-promises-with-async-await)
    - [Using async await to handle promises with Fetch API](#using-async-await-to-handle-promises-with-fetch-api)
- **[JavaScript Promises - fCC](#javascript-promises---fcc)**
  - [Handle a Fulfilled Promise with `then`](#handle-a-fulfilled-promise-with-then)
  - [Handle a Rejected Promise with `catch`](#handle-a-rejected-promise-with-catch)
- **[Fetch API - Traversy](#fetch-api---traversy)**
  - [Example Fetching local TXT file asynchronously](#example-fetching-local-txt-file-asynchronously)
  - [Example Fetching local JSON file](#example-fetching-local-json-file)
  - [Fetch Data from external REST API](#fetch-data-from-external-rest-api)
  - [Making a POST request to external API](#making-a-post-request-to-external-api)
  - [Adding bootstrap to the examples above for fun.](#adding-bootstrap-to-the-examples-above-for-fun)
- **[AJAX - Traversy](#ajax---traversy)**
  - [Fetch a Text file with Ajax](#fetch-a-text-file-with-ajax)
    - [xhr.onload](#xhronload)
    - [xhr.onreadystatechange](#xhronreadystatechange)
    - [xhr.onprogress](#xhronprogress)
    - [xhr.onerror](#xhronerror)
  - [Fetch local JSON with Ajax](#fetch-local-json-with-ajax)
  - [Fetch JSON from external API](#fetch-json-from-external-api)
  - [PHP Form submit with Ajax](#php-form-submit-with-ajax)
    - [Send a variable to PHP with GET](#send-a-variable-to-php-with-get)
    - [PHP Form submit using GET](#php-form-submit-using-get)
    - [Send PHP Form submit using POST](#send-php-form-submit-using-post)
  - [PHP Ajax Form Submit data to MySQL db](#php-ajax-form-submit-data-to-mysql-db)
  - [PHP Ajax Fetch users from MySQL db](#php-ajax-fetch-users-from-mysql-db)
- **[Axios HTTP Library](#axios-http-library)**
  - [Complete code from Brad Traversy](#complete-code-from-brad-traversy)

# JS Crash course on Callbacks, Promises, Async Await - Traversy

Credits:

- [24min Async JS Crash Course - Callbacks, Promises, Async Await - Traversy Media](https://youtu.be/PoRJizFvM7s?list=WL)
- [JavaScript Async, Callbacks, Promises - w3schools](https://www.w3schools.com/js/js_callback.asp)

> **A callback function is a function passed as an argument to another function**
>
> This technique allows a function to call another function
>
> A callback function can run after another function has finished

(Notes taken on Saturday, March 27, 2021)

## Example for receiving/sending Data

We'll mimic fetching a few blog posts from a server which are going to take a couple of seconds in order to retrieve them (we'll mimic using the `setTimeout()` function - this function takes a callback function as first argument, and number of milliseconds as second argument).. For this we will write in a file called `callbacks.js`:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Async JS</title>
  </head>

  <body>
    <script src="callbacks.js"></script>
  </body>
</html>
```

JS:

```js
/* /callbacks.js */
const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getPosts();
```

^^ After two seconds, our tittles for those two posts will appear:

![](./JSAsync/async01.jpg)

<br/>

Now let's try creating a new post (we will also use a `setTimeout` of 2 seconds to hypothetically deal with a server):

```js
/* /callbacks.js (full code) */
const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post 3" });

getPosts();
```

**Now here comes the problem... after two seconds we will see the two posts we already created (as in the image above)**, but we will not gonna see the third newly created post... that is because the `createPost` took longer that the `getPosts` (for the `getPosts` method, our mimicked server took one second to respond, but for posts creation took 2 seconds... and by the time `getPosts` returned, the DOM/HTML was already rendered and won't do anything beyond that point)... **therefore this is why we need asynchronous programming.**

One way to handle this scenario is by using a **callback function**

## Sending/Receiving data using Callbacks

In our `createPost()` method, we will put another argument, namely a function called `callback` (it can be any name, not necessarily _callback_ - it's just common practice)... we want this callback `callback` function to be called right after the post is pushed on into the `posts` list.

Also, when we will call the `createPost()` function, we'll actually put the `getPosts()` function as second argument for the `callback` function... like this:

```js
/* /callbacks.js (full code) */
const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post 3" }, getPosts);
```

Nicely done, after four seconds (two seconds to create the post and push it to `posts`, and two more seconds to retrieve each post), we'll get the result we expected:

![](./JSAsync/async02.jpg)

<br/>

Now let's explore another method of doing this, by using **Promises**.

<br/>

## Sending/Receiving data using Promises

`Promise` is a constructor function that is created with `new` keyword that take a callback function as its argument with two parameters: `resolve` and `reject` (these are methods used to determine the outcome of the promise):

- `resolve` is used when you want resolve your promise successfully
- `reject` is used when you want it to fail or you have some kind of error

```js
/* /promises.js (full code) */
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; // error checking

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post 3" }).then(getPosts);
```

Our `createPost` function will now return a `Promise` object on which we can call a method called `then()` (The `Promise` object has this `then()` method). We will pass our `getPosts` function as argument.

And voila, we successfully retrieve all posts (including the newly created one):

![](./JSAsync/async03.jpg)

### Catching promise errors from reject

Note: If some error checking will return `true` to `error` variable, then the promise will be rejected. In our example we can simply set `error = true` to simulate this example:

![](./JSAsync/async04.jpg)

Note that we will get an actual error in our JS console.. which is not good. We can solve this issues by **catching** the errors... so after `then` method called on our returned `Promise` object, we can call `catch()`:

```js
createPost({ title: "Post Three", body: "This is post 3" })
  .then(getPosts)
  .catch((err) => console.log(err));
```

![](./JSAsync/async05.jpg)

<br/>

We will often deal with promises when we will use the **Fetch API**, or **Axios (AJAX)**, or even **Mongoose** for **MongoDB** databases.

<br/>

### Using Promise.all function

If we will deal with a lot of different promises, we don't want to rewrite `.then` each and every time for each promise. For this we can use `Promise.all()`.

So, instead of calling `createPost` function, we will create a few other promises and use the `Promise.all` function to handle them.

```js
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
```

`Promise.all()` takes an array of promises as argument, and returns a Promise object on which we can call `.then()` and `.catch()`.

![](./JSAsync/async06.jpg)

Note that it will take 2 seconds (the sum/longest of all promises) in order to return everything.

<br/>

### Using Promises with Fetch API

Let's see another example with promises using the **Fetch API**. We can actually fetch real data from a JSON from https://jsonplaceholder.typicode.com/

We will make a request to this `users` JSON (https://jsonplaceholder.typicode.com/users).

**`const promise4 = fetch("https://jsonplaceholder.typicode.com/users");` will return a promise. However, the `fetch()` is a little weird because you need to use two `.then` when you fetch data, because: we'll use the first `fetch` to format the data (the JSON), and the next `fetch` is used to display the data.**

```js
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
```

![](./JSAsync/async07.jpg)

<br/>

## Handling promises with async await

**Async await** is another way to handle responses from promises (is not a different way to write/create promises!).

In order to use async await, we need to create a function that is labelled `async`, and we will use `await` inside it. `await` will wait for an asynchronous process/action to complete, then will execute whatever we want after (ex: `getPosts`).

```js
/* /promises_async_await.js (full code) */
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true; // error checking

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Post Three", body: "This post three" });
  getPosts();
}

init();
```

And we got the expected result:

![](./JSAsync/async08.jpg)

Overall, using async await to handle promises is cleaner (from a syntax perspective) than using `.then()` and `.catch()`.

<br/>

### Using async await to handle promises with Fetch API

(`res` = response)

```js
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
```

![](./JSAsync/async09.jpg)

<br/>

<br/>

<br/>

# JavaScript Promises - fCC

[(Notes taken from freeCodeCamp JavaScript course)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise)

We use promises to do something asynchronously. When a task completes, you either fulfill your promise or fail to do so.<br/>
`Promise` is a constructor function that is created with `new` keyword. It takes a function as its argument, with two parameters: `resolve` and `reject`. These are methods used to determine the outcome of the promise.

```js
const myPromise = new Promise((resolve, reject) => {});
```

A promise has three states: `pending`, `fulfilled`, and `rejected`:

- `resolve` is used when you want your promise to succeed
- `reject` is used when you want it to fail.

```js
const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Promise was fulfilled or Data Acquired");
  } else {
    reject("Promise was rejected or Data not received");
  }
});
```

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

## [Handle a Fulfilled Promise with `then`](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-fulfilled-promise-with-then)

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with `resolve`:

```js
const makeServerRequest = new Promise((resolve, reject) => {
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});
```

## [Handle a Rejected Promise with `catch`](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch)

`catch` is the method used when your promise has been rejected and it's executed immediately after a promise's reject method is called.

```js
makeServerRequest.catch((error) => {
  console.log(error);
});
```

- More on **promises**:
  - [from web.dev](https://web.dev/promises/)
  - [from developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

<br/>

<br/>

<br/>

# Fetch API - Traversy

Notes taken from:

- [31m Fetch API Introduction - Traversy Media](https://www.youtube.com/watch?v=Oive66jrwBs)
- [w3schools Fetch API](https://www.w3schools.com/js/js_api_fetch.asp)
- [Developer Mozilla Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Resources:

- [JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

(Notes taken on Sunday, March 28, 2021)

<br/>

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used [`XMLHttpRequest` (used in AJAX)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but the new API provides a more powerful and flexible feature set. Note that the Fetch API is newer than AJAX request, [so it's not compatible with older browsers](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility) (eg. not compatible with IE Explorer at all).

> [The Fetch API interface allows web browser to make HTTP requests to web servers.](https://www.w3schools.com/js/js_api_fetch.asp)
>
> 😀 No need for XMLHttpRequest anymore.

<br/>

Let's get started with some examples from the Traversy Media tutorial: [Fetch API Introduction](https://www.youtube.com/watch?v=Oive66jrwBs)

## Example Fetching local TXT file asynchronously

First we are going to create a local text file with random text (`./sample.txt`).

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch (either a URL or a file name). Fetch API returns a `Promise` object that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request, whether it is successful or not. To work with Promises we can either use `.then()` methods or the `async await` functions.

In `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch API Tutorial</title>
  </head>
  <body>
    <button id="getText">Get Text</button>
  </body>

  <script>
    document.getElementById("getText").addEventListener("click", () => {
      fetch("sample.txt").then((res) => {
        console.log(res);
      });
    });
  </script>
</html>
```

We will get a `Response` with status 200 (The HTTP **`200 OK`** success status response code indicates that the request has succeeded):

![JavaScript Fetch API](./JSAsync/fetch01.jpg)

If we want to retrieve the actual text from the returned Promise, we need to use the `.text()` function (because the resource is from a `.txt` file, if it was a JSON file, we'd use `.json()`), then add another `.then()`.

```html
<script>
  document.getElementById("getText").addEventListener("click", () => {
    fetch("sample.txt")
      .then((res) => res.text())
      .then((data) => console.log(data));
  });
</script>
```

![JavaScript Fetch API](./JSAsync/fetch02.jpg)

<br/>

Let's try to output the retrieved text to the DOM. We will add a `<div>` tag with an ID of `#output`.

Complete HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Fetch API Tutorial</title>
  </head>
  <body>
    <button id="getText">Get Text</button>
    <div id="output"></div>
  </body>

  <script>
    document.getElementById("getText").addEventListener("click", () => {
      fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
          document.getElementById("output").innerHTML = data;
        })
        .catch((error) => console.log(error));
    });
  </script>
</html>
```

![JavaScript Fetch API output to DOM](./JSAsync/fetch03.jpg)

<br/>

## Example Fetching local JSON file

Let's create a JSON file:

```json
[
  {
    "id": 1,
    "name": "Alex",
    "email": "alex@example.com"
  },
  {
    "id": 2,
    "name": "Glenn",
    "email": "glenn@example.com"
  },
  {
    "id": 3,
    "name": "Negan",
    "email": "negam@example.com"
  }
]
```

HMTL:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Fetch API Tutorial</title>
  </head>
  <body>
    <button id="getText">Get Text</button>
    <button id="getLocalUsers">Get Local Users</button>
    <div id="output"></div>
  </body>

  <script src="script.js"></script>
</html>
```

<br/>

We are going to fetch the content of our local `users.json` file, then we will loop through and display each user in the DOM HTML. We will also use JS template literals strings.

JS:

```js
/* script.js */
document.getElementById("getLocalUsers").addEventListener("click", () => {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users:</h2>";
      data.forEach((user) => {
        output += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
});
```

![JavaScript Fetch API JSON output to DOM](./JSAsync/fetch04.jpg)

<br/>

<br/>

## Fetch Data from external REST API

We will fetch data from an external REST API (namely https://jsonplaceholder.typicode.com/posts).

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Fetch API Tutorial</title>
  </head>
  <body>
    <button id="getText">Get Text</button>
    <button id="getLocalUsers">Get Local Users</button>
    <button id="getExternalPosts">Get External Posts</button>
    <div id="output"></div>
  </body>

  <script src="script.js"></script>
</html>
```

JS:

```js
/* script.js */
document.getElementById("getExternalPosts").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
```

![JavaScript Fetch API JSON output to DOM](./JSAsync/fetch05.jpg)

<br/>

Now let's display all these data to DOM:

```js
/* script.js */
document.getElementById("getExternalPosts").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach((post) => {
        output += `
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
});
```

![JavaScript Fetch API JSON output to DOM](./JSAsync/fetch06.jpg)

Nice.

<br/>

## Making a POST request to external API

Now let's make a POST request to the external REST API from https://jsonplaceholder.typicode.com/. We will make this request from a **form** in our HTML.

Of course we can make a POST request with data filled directly from JavaScript (see examples here: https://jsonplaceholder.typicode.com/guide/ on `Creating a resource` section), our example will be the same but we will retrieve the values from form fields.

![JS POST Method to External API](./JSAsync/fetch07.jpg)

<br/>

Let's get started:

Add a simple form in HMTL:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Fetch API Tutorial</title>
  </head>
  <body>
    <button id="getText">Get Text</button>
    <button id="getLocalUsers">Get Local Users</button>
    <button id="getExternalPosts">Get External Posts</button>
    <hr />

    <form id="addPost">
      <div>
        <input type="text" id="title" placeholder="Title" />
      </div>
      <div>
        <textarea id="body" placeholder="Body"></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>

    <div id="output"></div>
  </body>

  <script src="script.js"></script>
</html>
```

Now, in JS we'll add an event listener for that form with the action of `submit`. We'll also `preventDefault()` for the form submit and retrieve each value from the form's fields using `.value`.

Now, in our `fetch()` function we will add an object as a second argument, where we specify that the request method used is POST. Also, our request must contain the required headers and body...

```js
document.getElementById("addPost").addEventListener("submit", addPost);
function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
```

![JS POST Method to External API](./JSAsync/fetch08.jpg)

Nice.

![JS POST Method to External API](./JSAsync/fetch09.jpg)

<br/>

## Adding bootstrap to the examples above for fun.

Now let's just add some [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for our buttons, form and output to look a little nicer.

We will wrap everything in a `<div class="container">`, add a `<h1 class="display-4 my-4">` header, wrap buttons in `d-flex` div, add style to buttons with `btn btn-info mr-4` classes.

We'll wrap our form div's in a `form-group` classes, and to the inputs/text-areas will add `form-control`, and then we add `btn btn-secondary` to submit.

In `script.js` we'll add `list-group mb-3` classes to `<ul>` tags, and `list-group-item` to `<li>` tags. For our external API, we'll add `class="card card-body mb-3"` to the div.

![JS POST Method to External API](./JSAsync/fetch10.jpg)

Nice.

<br/>

**COMPLETE CODE:**

HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <title>Fetch API Tutorial</title>
  </head>

  <body>
    <div class="container">
      <h1 class="display-4">Fetch API Sandbox</h1>
      <div class="d-flex">
        <button class="btn btn-primary mr-2" id="getText">Get Text</button>
        <button class="btn btn-info mr-2" id="getLocalUsers">
          Get Local Users
        </button>
        <button class="btn btn-success mr-2" id="getExternalPosts">
          Get External Posts
        </button>
      </div>

      <hr />

      <form id="addPost">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="body"
            placeholder="Body"
          ></textarea>
        </div>
        <input class="btn btn-secondary" type="submit" value="Submit" />
      </form>

      <div id="output"></div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

JS:

```js
/* script.js */
document.getElementById("getText").addEventListener("click", () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = `<p>${data}</p>`;
    })
    .catch((error) => console.log(error));
});

document.getElementById("getLocalUsers").addEventListener("click", () => {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users:</h2>";
      data.forEach((user) => {
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
});

document.getElementById("getExternalPosts").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach((post) => {
        output += `
          <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
});

document.getElementById("addPost").addEventListener("submit", addPost);
function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data));
}
```

<br/>

<br/>

<br/>

# AJAX - Traversy

Notes taken from:

- [1h10 AJAX Crash Course in Vanilla JS - Traversy Media](https://youtu.be/82hnvUYY6QA)
- [AJAX on w3schools](https://www.w3schools.com/xml/ajax_intro.asp)
- [AJAX on developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

AJAX stands for **Asynchronous JavaScript and XML**. With AJAX, you can:

- Update a web page without reloading the page (asynchronously)
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background

Although X in Ajax stands for XML, [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in the Ajax model.

![AJAX](./JSAsync/ajax01.jpg)

The JS Calls can be done with **Vanilla JS**, or **Fetch API**, or with **JQuery**, or a HTTP Library like **Axios**, or **Superagent**,or **Node HTTP**... These request are made with the **`XmlHttpRequest` object** (also called the XHR object). These request can be anything (like creating/adding an entry to the database, update the database, search within database, delete, etc... eg: when user clicks outside the form, automatically search in that database if the entered email is correct, and display a success/warning message).

<br/>

**NOTE: In order to use AJAX, we will need some kind of Server, for this tutorial we'll install [XAMPP](https://www.apachefriends.org/ro/index.html).**

<br/>

(from [tutorial](https://www.youtube.com/watch?v=82hnvUYY6QA)) First, we will create a folder in **C:\xampp\htdocs\tutorials\ajaxcrash** and open it in VS Code. If we start the Apache server (from XAMPP Control Panel), we can access the files within this folder from http://localhost/tutorials/ajaxcrash/.

## Fetch a Text file with Ajax

We'll create a simple html file with a button that fetches a _text file_ with Ajax. (html location: `C:\xampp\htdocs\tutorials\ajaxcrash\ajax1_textfile.html`). We will also create a simple `sample.txt` with dummy lorem text.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Ajax 1 - Fetch Text File</title>
  </head>

  <body>
    <button id="button">Get Text File</button>
    <script>
      document.getElementById("button").addEventListener("click", loadText);
      function loadText(event) {
        console.log("hi");
      }
    </script>
  </body>
</html>
```

<br/>

### xhr.onload

First thing first, we will create a **XHR Object** (stored within a variable called `xhr`, or `request`, or `xhrRequest`)

Then, we will need a function to make the request, specify the type of request and to what file/URL we are making the request. For this, we will use the `open` function that takes 3 parameters: **the type of request**, **url/file**, and if it's **async** or not. In our case, for retrieving a text file, we will call the function like this `xhr.open('GET', 'sample.txt', true);`

Then we will use `xhr.onload` to set a function on the _onload_ property of our XMLHttpRequest object:

- if the `xhr` object has the value of `status` property to 200 (OK) we can `console.log(xhr.responseText);`. However, when we click the button nothing will be logged because we need `xhr.send()` function.

![AJAX](./JSAsync/ajax02.jpg)

- however, even if we comment the cosole.log, we can see the response if we go to Chrome Dev Tools -> Network Tab -> XHR -> we can see our `sample.txt` file, with its content shown in the `Response` tab.

![AJAX](./JSAsync/ajax03.jpg)

And that's pretty much all for retrieving content from a text file (stored locally, in the same location with the current html/php file on the server):

```html
<!-- ajax1_textfile.html -->
<body>
  <button id="button">Get Text File</button>
  <p id="output"></p>

  <script>
    document.getElementById('button').addEventListener('click', loadText);
    function loadText(event) {
      var xhr = new XMLHttpRequest();

      // open - type of request, url/file, async or not
      xhr.open('GET', 'sample.txt', true);

      xhr.onload = function () {
        if (this.status == 200) {
          // console.log(this.responseText);
          document.getElementById('output').innerHTML += this.responseText;
        }
      };
      xhr.send();
    }
  </script>
</body>

</html>
```

---

### xhr.onreadystatechange

Here's the **old** method of fetching a text file using Ajax. Instead of using `xhr.onload`, we will use `xhr.onreadystatechange()`.

- Now, we need to check for the status of xhr object, but we also need to check out the state. The state values are the following:
  - 0: request not initialized
  - 1: server connection established
  - 2: request received
  - 3: processing request
  - 4: request finished and response is ready
- When we use onreadystatechange we need to make sure we are on state 4.

```html
<body>
  <button id="button">Get Text File</button>
  <p id="output"></p>

  <script>
    document.getElementById("button").addEventListener("click", loadText);
    function loadText(event) {
      var xhr = new XMLHttpRequest();

      // open - type of request, url/file, async or not
      xhr.open("GET", "sample.txt", true);

      // xhr.onload = function () {
      //   if (this.status == 200) {
      //     // console.log(this.responseText);
      //     document.getElementById('output').innerHTML += this.responseText;
      //   }
      // };

      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
      };
      xhr.send();
    }
  </script>
</body>
```

Overall, the biggest difference between `onload` and `onreadystatechange` methods, is the fact that `onload` method only runs it's function if the xhr request state value is 4 (_request finished and response is ready_). `onreadystatechange` will run it's function each time the `readyState` property will change (it will run for three times, for state 2, state 3 and finally state 4), therefore that's why we need to check if we are on state 4 to only run what we need once.

`onload()` function it's not going to run unless it's ready (in stateReady 4).

![AJAX](./JSAsync/ajax04.jpg)

### xhr.onprogress

We can also use `xhr.onprogress` if we want to add loaders animations on front-end. The associated function of `onprogress` property will run if the state of request is on `readyState` == 3 (_processing request_). This property is optional.

### xhr.onerror

Also, if something goes wrong, we can use `xhr.onerror`.

```html
<body>
  <button id="button">Get Text File</button>
  <p id="output"></p>

  <script>
    document.getElementById("button").addEventListener("click", loadText);
    function loadText(event) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", "sample.txt", true); // type of request, url/file, async or not

      xhr.onprogress = function () {
        console.log("readyState: ", xhr.readyState);
      };

      xhr.onload = function () {
        if (this.status == 200) {
          // console.log(this.responseText);
          document.getElementById("output").innerHTML += this.responseText;
        }
      };

      xhr.onerror = function () {
        console.log("There was an Error...");
      };

      // xhr.onreadystatechange = function () {
      //   if (this.readyState == 4 && this.status == 200) {
      //     console.log(this.responseText);
      //   }
      // }

      xhr.send();
    }
  </script>
</body>
```

Note that an error is different than 404 status for example:

![AJAX](./JSAsync/ajax05.jpg)

<br/>

---

<br/>

## Fetch local JSON with Ajax

For this example we will create a file (**ajax2_json**) `C:\xampp\htdocs\tutorials\ajaxcrash\ajax2_json.html` and two JSON files: `C:\xampp\htdocs\tutorials\ajaxcrash\user.json` and `C:\xampp\htdocs\tutorials\ajaxcrash\users.json`.

```json
{
  "id": 1,
  "name": "Andrew",
  "email": "andrew@email.com",
  "tel": "073-xxx-xxx"
}
```

```json
[
  {
    "id": 1,
    "name": "Rick",
    "email": "rick@email.com"
  },
  {
    "id": 2,
    "name": "Glenn",
    "email": "glenn@email.com"
  },
  {
    "id": 3,
    "name": "Negan",
    "email": "negan@email.com"
  }
]
```

Here's the HTML for now (boilerplate):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Ajax 2 - Local JSON</title>
  </head>

  <body>
    <button id="btn1">Get User</button>
    <button id="btn2">Get All Users</button><br /><br />

    <h2>User</h2>
    <div id="user"></div>

    <h2>Users</h2>
    <div id="users"></div>

    <script>
      document.getElementById("btn1").addEventListener("click", loadUser);

      function loadUser() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "user.json", true);

        xhr.onload = function () {
          if (this.status == 200) {
            console.log(this.responseText);
          }
        };

        xhr.send();
      }
    </script>
  </body>
</html>
```

![AJAX](./JSAsync/ajax06.jpg)

<br/>

However, with that code, if we store into a variable (`var user = this.responseText`) the response and we console log `user.name`, we will get an `undefined` error. Therefore, we need to wrap our response in a JSON.parse function: `var user JSON.parse(this.responseText);`.

```html
<body>
  <button id="btn1">Get User</button>
  <button id="btn2">Get All Users</button><br /><br />

  <h2>User</h2>
  <div id="user"></div>

  <h2>Users</h2>
  <div id="users"></div>

  <script>
    document.getElementById("btn1").addEventListener("click", loadUser);

    function loadUser() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "user.json", true);

      xhr.onload = function () {
        if (this.status == 200) {
          var user = JSON.parse(this.responseText);
          var output = `
          <ul>
            <li>${user.name}</li>
            <li>${user.email}</li>
            <li>${user.tel}</li>
          </ul>`;
          document.getElementById("user").innerHTML = output;
        }
      };

      xhr.send();
    }
  </script>
</body>
```

![AJAX](./JSAsync/ajax07.jpg)

<br/>

**If we want to fetch a JSON that contains an array of objects**, we need to loop the array of retrieved object and append each object/user in HTML front-end.

```html
<body>
  <button id="btn1">Get User</button>
  <button id="btn2">Get All Users</button><br /><br />

  <h2>User</h2>
  <div id="user"></div>

  <h2>Users</h2>
  <div id="users"></div>

  <script>
    document.getElementById("btn1").addEventListener("click", loadUser);
    document.getElementById("btn2").addEventListener("click", loadUsers);

    function loadUser() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "user.json", true);

      xhr.onload = function () {
        if (this.status == 200) {
          var user = JSON.parse(this.responseText);
          var output = `
          <ul>
            <li>${user.name}</li>
            <li>${user.email}</li>
            <li>${user.tel}</li>
          </ul>`;
          document.getElementById("user").innerHTML = output;
        }
      };

      xhr.send();
    }

    function loadUsers() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "users.json", true);

      xhr.onload = function () {
        if (this.status == 200) {
          var users = JSON.parse(this.responseText);
          var output = "";

          for (var user of users) {
            output += `
              <ul>
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
              </ul>`;
          }

          document.getElementById("users").innerHTML = output;
        }
      };

      xhr.send();
    }
  </script>
</body>
```

![AJAX](./JSAsync/ajax08.jpg)

<br/>

---

<br/>

## Fetch JSON from external API

(Tuesday, August 30, 2021)

We will use the github free API (that doesn't need any authentication) - https://api.github.com/users will give us the first 100 users.

We'll create another file `C:\xampp\htdocs\tutorials\ajaxcrash\ajax3_external_api.html`.

We will start with this (logging the retrieved users on console):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajax 3 - External API</title>
    <meta name="description" content="Fetch JSON with AJAX from External API" />
  </head>

  <body>
    <button id="btn">Load GitHub Users</button><br /><br />

    <h2>Github Users</h2>
    <div id="users"></div>

    <script>
      document.getElementById("btn").addEventListener("click", getGithubUsers);
      function getGithubUsers() {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users", true);
        xhr.onload = function () {
          if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            console.log(users);
          }
        };
        xhr.send();
      }
    </script>
  </body>
</html>
```

![AJAX](./JSAsync/ajax09.jpg)

<br/>

Now we can output/render the retrieved users in HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajax 3 - External API</title>
    <meta name="description" content="Fetch JSON with AJAX from External API" />

    <style>
      .user {
        display: flex;
        background: #f4f4f4;
        padding: 0.75rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
      }

      .user ul {
        list-style: none;
      }
    </style>
  </head>

  <body>
    <button id="btn">Load GitHub Users</button><br /><br />

    <h2>Github Users</h2>
    <div id="users"></div>

    <script>
      document.getElementById("btn").addEventListener("click", getGithubUsers);
      function getGithubUsers() {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.github.com/users", true);
        xhr.onload = function () {
          if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            console.log(users);

            var output = "";
            for (user of users) {
              output += `
            <div class="user">
            <img src=${user.avatar_url} width="70", height="70">
            <ul>
              <li>ID: ${user.id}</li>
              <li>User: <a href=${user.html_url}>${user.login}</a></li>
            </ul>
            </div>
            `;
            }
            document.getElementById("users").innerHTML = output;
          }
        };
        xhr.send();
      }
    </script>
  </body>
</html>
```

![AJAX](./JSAsync/ajax10.jpg)

<br/>

## PHP Form submit with Ajax

For this, we will create 2 new files: `C:\xampp\htdocs\tutorials\ajaxcrash\process.php` and `C:\xampp\htdocs\tutorials\ajaxcrash\ajax4_form.html`

<br/>

**Sidenote:** If we only `open` a GET request to a PHP file, we will receive the content (the rendered html with php) from the PHP file:

![AJAX](./JSAsync/ajax11.jpg)

Another example: rendering HTML from PHP file without refreshing:

![AJAX](./JSAsync/ajax12.jpg)

**end of Sidenote.**

<br/>

### Send a variable to PHP with GET

Now, we want to send a GET variable to `process.php`. In our `process.php` file, we will write:

```php
<?php

echo 'Processing...';
if (isset($_GET['name'])) {
  echo 'GET: Your name is ' . $_GET['name'];
}
```

Then, to send a variable (called _name_ in our example) to `process.php` with Ajax, we need to add to `xhr.open()` function the parameters: `xhr.open('GET', 'process.php?name=Brad', true);`

```html
<body>
  <button id="btn">Get Name</button>
  <div id="output"></div>

  <script>
    document.getElementById("btn").addEventListener("click", getName);

    function getName() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "process.php?name=Brad", true);
      xhr.onload = function () {
        document.getElementById("output").innerHTML = this.responseText;
      };
      xhr.send();
    }
  </script>
</body>
```

![AJAX](./JSAsync/ajax13.jpg)

### PHP Form submit using GET

Now, we want to send a variable with a value that user has wrote in a HTML form:

First things first, let's submit a form variable without using AJAX. We just need to specify in `<form>` html the `php` file we are submitting (by writing `<form action="process.php" method="GET"`).

![AJAX](./JSAsync/ajax14.jpg)

Once we click Submit, we the HTML from `process.php` will be rendered with a **refresh**.

![AJAX](./JSAsync/ajax15.jpg)

<br/>

**Now, we will use Ajax to render the content of `process.php` on submit without refreshing the page.** For this, we don't need to set anything on HTML `<form>` (we don't need to specify `action` or `method`).

Note that we need to attach the variable name and value as parameter in the URL when we call `xhr.open('GET', 'process.php?surname=' + surname, true);`

```html
<body>
  <h2>Submit form with Ajax with GET</h2>
  <form id="getForm">
    <label for="surname">Surname: </label>
    <input type="text" name="surname" id="surname" />
    <button type="submit">Submit</button>
  </form>
  <hr />
  Output:
  <div id="output"></div>

  <script>
    document
      .getElementById("getForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        var surname = document.getElementById("surname").value.trim();

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "process.php?surname=" + surname, true);
        xhr.onload = function () {
          document.getElementById("output").innerHTML = this.responseText;
        };
        xhr.send();
      });
  </script>
</body>
```

```php
<?php
if (isset($_GET['surname'])) {
  echo 'GET: Your surname is ' . $_GET['surname'];
}
```

![AJAX](./JSAsync/ajax16.jpg)

<br/>

**Complete code for Ajax with GET request**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajax 4 - Form submit with PHP</title>
  </head>

  <body>
    Send "name" variable with Ajax with hardcoded value of "Brad".
    <button id="btn">Get Name</button>
    <hr />
    <h2>Submit form without Ajax with GET</h2>
    <form action="process.php" method="GET">
      <label for="name">Name: </label>
      <input type="text" name="name" id="name" />
      <button type="submit">Submit</button>
    </form>

    <hr />

    <h2>Submit form with Ajax with GET</h2>
    <form id="getForm">
      <label for="surname">Surname: </label>
      <input type="text" name="surname" id="surname" />
      <button type="submit">Submit</button>
    </form>
    <hr />
    Output:
    <div id="output"></div>

    <script>
      document
        .getElementById("getForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          var surname = document.getElementById("surname").value.trim();

          var xhr = new XMLHttpRequest();
          xhr.open("GET", "process.php?surname=" + surname, true);
          xhr.onload = function () {
            document.getElementById("output").innerHTML = this.responseText;
          };
          xhr.send();
        });
    </script>

    <script>
      document.getElementById("btn").addEventListener("click", getName);
      function getName() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "process.php?name=Brad", true);
        xhr.onload = function () {
          document.getElementById("output").innerHTML = this.responseText;
        };
        xhr.send();
      }
    </script>
  </body>
</html>
```

<br/>

### Send PHP Form submit using POST

Now we are submitting the same form with **POST** request (with POST request we can send data to a server and is more secured).

`C:\xampp\htdocs\tutorials\ajaxcrash\ajax4_POST.html`:

```html
<body>
  <h2>Submit form using POST</h2>
  <form action="process.php" method="post">
    <label for="name">Name: </label>
    <input type="text" id="name" name="name" />
    <button type="submit">Submit</button>
  </form>
</body>
```

`C:\xampp\htdocs\tutorials\ajaxcrash\process.php`:

```php
<?php
if (isset($_GET['name'])) {
  echo 'GET: Your surname is ' . $_GET['name'];
}

if (isset($_POST['name'])) {
  echo 'POST: Your surname is ' . $_POST['name'];
}
```

With this the page will refresh and redirect us to `process.php`:

![AJAX](./JSAsync/ajax17.jpg)

![AJAX](./JSAsync/ajax18.jpg)

<br/>

**Now let's submit the form using POST with AJAX** (without refreshing the page on submit):

- With POST request, we no longer need to attach the parameter in `xhr.open()`.
- With POST request, we also need to set another property called `xhr.setRequestHeader` under `xhr.open()` where we specify the `Content-type` of `application/x-www-form-urlencoded`.
- We also need to specify our variables that we need to send in JS variable (`var params = "name="+name`) that we'll put over as a parameter in `xhr.send(params);`

![AJAX](./JSAsync/ajax19.jpg)

**Complete code:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajax 4 - Submit PHP form with POST method</title>
  </head>

  <body>
    <h2>Submit form using POST</h2>
    <form action="process.php" method="post">
      <label for="name">Name: </label>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
    <hr />
    <h2>Submit form using POST with AJAX</h2>
    <form id="formAjax">
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
    </form>

    <hr />
    Output:
    <div id="output"></div>

    <script>
      var form = document.getElementById("formAjax");
      var output = document.getElementById("output");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value.trim();
        var params = "name=" + name;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php", true);
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.onload = function () {
          output.innerHTML = this.responseText;
        };
        xhr.send(params);
      });
    </script>
  </body>
</html>
```

```php
<?php
if (isset($_GET['name'])) {
  echo 'GET: Your name is ' . $_GET['name'];
}

if (isset($_POST['name'])) {
  echo 'POST: Your name is ' . $_POST['name'];
}
```

<br/>

## PHP Ajax Form Submit data to MySQL db

Now, we are going to submit data through HTML Form with Ajax (without refreshing the page), to a MySQL database.

First, we create in http://localhost/phpmyadmin a database called `test`, and inside this database we can create a `users` table with 2 columns:

- `id` of `INTEGER` with `AUTO_INCREMENT` and `PRIMARY_KEY`.
- `name` of `VARCHAR`

![AJAX](./JSAsync/ajax20.jpg)

![AJAX](./JSAsync/ajax21.jpg)

<br/>

Then, in `process.php` we are going to connect to the database:

**PHP** for `C:\xampp\htdocs\tutorials\ajaxcrash\process`:

```php
<?php
// Connect to MySQL database
$conn = mysqli_connect('localhost', 'root', 'password', 'test');
if(mysqli_connect_error())
  echo "Connection Error.";
else
  echo "Database Connection Successfully.";

if (isset($_POST['name'])) {
  $name = mysqli_real_escape_string($conn, $_POST['name']);
  echo 'POST: Your name is ' . $_POST['name'];

  $query = "INSERT INTO users(name) VALUES ('$name')";

  if(mysqli_query($conn, $query)) {
    echo "<br>User $name added to MySQL database.";
  } else {
    echo "ERROR: ".mysqli_error($conn);
  }
}
```

- `mysqli_connect` has the following parameters `mysqli_connect ( "host", "username", "password", "database_name" )`. (more info [here](https://www.geeksforgeeks.org/php-mysqli_connect-function/))
- For security reasons, we need to wrap our received variable value within `mysqli_real_escape_string($conn, $_POST['name'])`
- We'll set a `$query` variable where put the MySQL syntax for inserting into database
- And we check if we successfully inserted the data in our MySQL database.

**HTML** and **JS** for `C:\xampp\htdocs\tutorials\ajaxcrash\ajax5_mysql.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Submit Data with POST to MySQL with Ajax</title>
  </head>

  <body>
    <h2>Submit form using POST with AJAX and save to MySQL</h2>
    <form id="formAjax">
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
    </form>

    <hr />
    Output:
    <div id="output"></div>

    <script>
      var form = document.getElementById("formAjax");
      var output = document.getElementById("output");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value.trim();
        var params = "name=" + name;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php", true);
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.onload = function () {
          output.innerHTML = this.responseText;
        };
        xhr.send(params);
      });
    </script>
  </body>
</html>
```

<br/>

We successfully inserted to our database:

![AJAX](./JSAsync/ajax22.jpg)

![AJAX](./JSAsync/ajax23.jpg)

<br/>

## PHP Ajax Fetch users from MySQL db

We successfully inserted new users into `test` MySQL database, `users` table. Now, we'll fetch the data from MySQL database using Ajax.

Create a new file `C:\xampp\htdocs\tutorials\ajaxcrash\users.php`.

```php
<?php
// Connect to MySQL database
$conn = mysqli_connect('localhost', 'root', 'ilikepizza', 'test');

$query = 'SELECT * FROM users';

$result = mysqli_query($conn, $query);
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
```

Here:

- we connect to the `test` database in MySQL
- we create our query to select all users from the `users` table within `test` database
- we put the result (object that is not directly accessible) from the query in a variable `$result`.
- then we fetch all the data from the `$result` and store into `$users` variable using `mysqli_fetch_all`

![AJAX](./JSAsync/ajax24.jpg)

<br/>

In `C:\xampp\htdocs\tutorials\ajaxcrash\ajax6_fetch_mysql.html` file, we add the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Ajax 6 - Fetch data from MySQL</title>
  </head>

  <body>
    <button id="btnGetUsers">Get Users from MySQL</button>

    <h2>Users</h2>
    <div id="output"></div>

    <script>
      var output = document.getElementById("output");
      var btnGetUsers = document.getElementById("btnGetUsers");

      btnGetUsers.addEventListener("click", function (event) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "users.php", true);
        xhr.onload = function () {
          if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            console.log(users);

            var outputHTML = "";
            for (user of users) {
              outputHTML += `
            <ul>
              <li>${user.id}</li>
              <li>${user.name}</li>
            </ul>
            `;
            }

            output.innerHTML = outputHTML;
          }
        };
        xhr.send();
      });
    </script>
  </body>
</html>
```

![AJAX](./JSAsync/ajax25.jpg)

<br/>

<br/>

# Axios HTTP Library

For this tutorial we will use the **Live Server** plugin from VS Code.

Credits / Notes taken from:

- [42m Axios Crash Course | HTTP Library - Traversy Media](https://youtu.be/6LyagkoRWYA)
- [Axios Crash Course GITHUB - Traversy Media](https://github.com/bradtraversy/axios-crash)
- [Axios GitHub page](https://github.com/axios/axios)

Axios Library is similar to the Fetch API (that is built-in the browser), but the syntax is a little better and it's more powerful. It is useful for building Full Stack React/Vue Apps or even Vanilla Javascript and Node.js.

Axios Library can be imported using jsDelivr CDN: `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>` or by installing it with `npm install axios`.

All requests with Axios will return a Promise that can be handled with `.then` and `.catch`.

<br/>

## Complete code from Brad Traversy

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Axios Crash Course</title>
  </head>
  <body>
    <div class="container my-5">
      <div class="text-center">
        <h1 class="display-4 text-center mb-3">Axios Crash Course</h1>
        <button class="btn btn-primary my-3" id="get">GET</button>
        <button class="btn btn-info" id="post">POST</button>
        <button class="btn btn-warning" id="update">PUT/PATCH</button>
        <button class="btn btn-danger" id="delete">DELETE</button>
        <button class="btn btn-secondary" id="sim">Sim Requests</button>
        <button class="btn btn-secondary" id="headers">Custom Headers</button>
        <button class="btn btn-secondary" id="transform">Transform</button>
        <button class="btn btn-secondary" id="error">Error Handling</button>
        <button class="btn btn-secondary" id="cancel">Cancel</button>
      </div>
      <hr />
      <div id="res"></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

<br/>

**main.js** (JavaScript)

```js
// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getTodos() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      timeout: 5000,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])
    .then(axios.spread((todos, posts) => showOutput(posts)))
    .catch((err) => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };

  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false,
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss", {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert("Error: Page Not Found");
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      }
    });

  if (true) {
    source.cancel("Request canceled!");
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCE
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: "https://jsonplaceholder.typicode.com",
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
```
