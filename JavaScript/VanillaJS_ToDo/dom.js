// document.title = "Hello World";
// console.log(document.head);
// console.log(document.body);

// getElementById
let headerTitle = document.getElementById('header-title');
headerTitle.innerHTML = "<span>Hello</span>";
headerTitle.style.fontWeight = 'bold';

// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';


// getElementsByClassName
let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementsByTagName
let li = document.getElementsByTagName('li');


// querySelector
// var header = document.querySelector('header'); // grab by tag
// console.log(header);
// var header = document.querySelector('#main-header'); // grab by id
// console.log(header);
// var header = document.querySelector('.header'); // grab by class
// console.log(header);

let input = document.querySelector('input');
// console.log(input);
// input.value = "Hi World";

let submitBtn = document.querySelector('input[type="submit"]');
// console.log(submitBtn);
submitBtn.value = "Send";


let firstItem = document.querySelector('.list-group-item');
firstItem.style.color = 'red';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'purple';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';


// querySelectAll
let titles = document.querySelectorAll('.title');
// console.log(titles);
titles[0].textContent = 'Hello';


// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#bbb";
// }





/* DOM EVENTS */
// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick() {
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = "#ccc";
// }

// let button = document.getElementById('button');
// button.addEventListener('mouseup', buttonClick);

// function buttonClick(e) {
//   console.log(e);
// }



// let box = document.querySelector("#box");

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// function runEvent(e) {
//     console.log(e.type);
// }


/* FORM */
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('copy', runEvent);
// select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(e.type);
  console.log(e.target.value);
}
