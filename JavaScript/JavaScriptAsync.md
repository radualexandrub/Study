

# JS Crash course on Callbacks, Promises, Async Await

Credits:

- [24min Async JS Crash Course - Callbacks, Promises, Async Await - Traversy Media](https://youtu.be/PoRJizFvM7s?list=WL)
- [JavaScript Async, Callbacks, Promises - w3schools](https://www.w3schools.com/js/js_callback.asp)

> **A callback function is a function passed as an argument to another function**
>
> This technique allows a function to call another function
>
> A callback function can run after another function has finished



<br/>

<br/>



# [JavaScript Promises - fCC](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise)

(Notes taken from freeCodeCamp JavaScript course)

We use promises to do something asynchronously. When a task completes, you either fulfill your promise or fail to do so.<br/>
`Promise` is a constructor function that is created with `new` keyword. It takes a function as its argument, with two parameters: `resolve` and `reject`. These are methods used to determine the outcome of the promise.

```js
const myPromise = new Promise((resolve, reject) => {

});
```

A promise has three states: `pending`, `fulfilled`, and `rejected`: 

- `resolve` is used when you want your promise to succeed
- `reject` is used when you want it to fail.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition) {
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
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

## [Handle a Rejected Promise with `catch`](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch)

`catch` is the method used when your promise has been rejected and it's executed immediately after a promise's reject method is called.

```js
makeServerRequest.catch(error => {
  console.log(error);
});
```

- More on **promises**:
  - [from web.dev](https://web.dev/promises/) 
  - [from developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).


