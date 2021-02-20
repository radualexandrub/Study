let form = document.getElementById('addItemForm');
let itemList = document.getElementById('itemList');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  // Get input value and create li element
  let newItemValue = document.getElementById('itemInput').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';

  // Append text node with input value to li
  if (newItemValue !== "") {
    li.appendChild(document.createTextNode(newItemValue));
    document.getElementById('itemInput').value = "";

    // Create and Append delete Button to li
    let btnDelete = document.createElement('button');
    btnDelete.className = 'btn btn-danger btn-sm float-end delete';
    btnDelete.appendChild(document.createTextNode('X'));
    li.appendChild(btnDelete);
  
    // Append li to ul list
    itemList.appendChild(li);
  }
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  
  let allItems = itemList.getElementsByTagName('li');
  Array.from(allItems).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}