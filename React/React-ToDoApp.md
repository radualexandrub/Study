# Build your first ToDo App with React and host it on GitHub Pages
## View it live [here](https://radualexandrub.github.io/My-Study-Notes/React/todo/)
## Contents
* [Installation & create-react-project](#installation)
* [Useful extensions for VS Code](#vscodeextensions)
* [Delete unnecesary files after create-react-app](#deleteunnecesary)
* [Start working on ToDo App](#startworking)
  * [Create new files in `src/components/...`](#startworking)
  * [Add pre-made CSS style to our app:](#workaddstyle)
  * [Hook TodoAddForm.js to the App.js](#workform)
  * [On `TodoList.js`](worktodolist)
  * [Add State to `App.js` in order to input data](workaddstateinput)
  * [Show todos in browser/UI (render them) + Complete and Delete](workshowtodos)
  * [Filter/Show Todo items baed on select dropdown "all" / "completed" / "uncompleted"](workfiltertodos)
* [COMPLETE CODE](#completecode)
  * [TodoAddForm.js](completeTodoAddForm)
  * [TodoList.js](completeTodoList)
  * [TodoItem.js](completeTodoItem)
  * [App.js](completeApp)
* [Build your React App and deploy it on GitHub Pages](#buildapp)

---

## <a name="installation"></a>Installation & create-react-project
* Download [Node.js](https://nodejs.org/en/download/) - We need it to use NPM (Node Package Manager) to install/create React App or any other dependencies.
* [If on Windows 10] Make sure you have **C:\Program Files\nodejs\\** path on your `System Properties > Environment Variables > System Variables > Path`. Restart PC.
* Run [create-react-app](https://github.com/facebook/create-react-app) from terminal:
```bash
npx create-react-app my-app-name
```
`npx` will not install create-react-app on our system. You can [install create-react-app globally on system](https://create-react-app.dev/docs/getting-started/), but then updates are required, while npx always uses the latest version.. 

## <a name="vscodeextensions"></a>Useful extensions for VS Code and Google Chrome
#### For [Visual Studio Code](https://code.visualstudio.com/) ([VSCode keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf))
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - After intalling it, press `CTRL-SHIFT-P -> Preferences: Open Settings(JSON)` and add:
  ```JSON
  {
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }
  }
  ```
- (optional) [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- (optional) [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
  ```JSON
  {
    "workbench.iconTheme": "material-icon-theme",
  }
  ```
- (optional) [VS Color Picker](https://marketplace.visualstudio.com/items?itemName=lihui.vs-color-picker)
#### For Goole Chrome:
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## <a name="deleteunnecesary"></a>Delete unnecesary files after create-react-app
- From `index.js` delete:
```js
// These are used for progressive web app and offline content
import * as serviceWorker from '.serviceWorker';
...
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
- Delete everything from `index.css`
- Delete `logo.svg` and from `App.js` delete:
```js
import logo from '.logo.svg';
...
// And <header>..</header> with everything inside it, keep only return(<div ClassName="App"></div>);
```
- Delete everything from `App.css`

## <a name="startworking"></a>Create new files in `src/components/...`
- Create a new folder in `todo-app/src` called `components`, and create these files:
  - `../src/components/TodoAddForm.js`
  - `../src/components/TodoItem.js`
  - `../src/components/TodoList.js`
  
## <a name="workaddstyle"></a>Add these pre-made CSS styles to our app:
- In `App.css`, add:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-image: linear-gradient(#00779b 0%, #00394a 100%);
  color: white;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}
header {
  font-size: 2rem;
}

header,
form {
  min-height: 15vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
form input,
form button {
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background: white;
}
form button {
  color: #17cbff;
  background: #f7fffe;
  cursor: pointer;
  transition: all 0.3s ease;
}
form button:hover {
  background: #0095bf;
  color: white;
}
.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-list {
  min-width: 30%;
  list-style: none;
}

.todo {
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
}
.filter-todo {
  padding: 1rem;
}
.todo li {
  flex: 1;
}

.trash-btn,
.complete-btn {
  background: #f35252;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
}
.complete-btn {
  background: #18edfe;
}
.todo-item {
  padding: 0rem 0.5rem;
}

.fa-trash,
.fa-check {
  pointer-events: none;
}

.fall {
  transform: translateY(10rem) rotateZ(20deg);
  opacity: 0;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

/*CUSTOM SELECTOR */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
}

/* Custom Select */
.select {
  margin: 1rem;
  position: relative;
  overflow: hidden;
}
select {
  color: #00394a;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 12rem;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: #17cbff;
  cursor: pointer;
  pointer-events: none;
}

.select:hover::after {
  background: #0095bf;
  color: white;
  transition: all 0.3s ease;
}
```
- In `/public/index.html/` add in `<head>`:
```html
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
      crossorigin="anonymous"
    />
```
  
## <a name="workform"></a>Hook TodoAddForm.js to the App.js
- Write in TodoAddForm.js:
```js
import React from "react";
const TodoAddForm = () => {
  return (
    <form>
      <input
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoAddForm;
```
- Hook TodoAddForm.js to the App.js. In `App.js` by importing and adding `<TodoAddForm />`:
```js
import React from "react";
import "./App.css";
import TodoAddForm from "./components/TodoAddForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List. Yay.</h1>
      </header>
      <TodoAddForm />
    </div>
  );
}
```

## <a name="worktodolist"></a>On `TodoList.js`
```js
import React from "react";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">

      </ul>
    </div>
  );
};

export default TodoList;
```
- Import it on `App.js` and hook it on `function App()`:
```js
import TodoList from "./components/TodoList";
...
function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List. Yay.</h1>
      </header>
      <TodoAddForm />
      <TodoList />
    </div>
  );
}
```

## <a name="workaddstateinput"></a>Add State to `App.js` in order to input data
```js
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  ...
  
  return (
    <div className="App">
      <header>
        <h1>ToDo List. Yay.</h1>
      </header>
      <TodoAddForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
```
- Add in `TodoAddForm.js`:
```js
const TodoAddForm = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); // Prevent page from refreshing on submit
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputText,
          completed: false,
        },
      ]);
    }
    setInputText("");
  };
  ...
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
  
```
- Now every time we write in our for and hit the + button, a new state will be created (see with React Chrome Extension)

## <a name="workshowtodos"></a>Show todos in browser/UI (render them) + Complete and Delete
- In `TodoAddForm.js`, add `value={inputText}`:
```js
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
   };
```
- In `TodoList.js`:
```js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```
- And create `TodoItem.js` and add:
```js
import React from "react";

const TodoItem = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
```
- Add in `App.js`:
```js
  return (
    <div className="App">
      
      ...
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
```

## <a name="workfiltertodos"></a>Filter/Show Todo items baed on select dropdown "all"/"completed"/"uncompleted"








---
---
---

## <a name="completecode"></a>COMPLETE CODE
## <a name="completeTodoAddForm"></a>TodoAddForm.js
```js
import React from "react";

const TodoAddForm = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
}) => {
  // JavaScript functions
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputText,
          completed: false,
        },
      ]);
    }
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  // Render HTML
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoAddForm;
```

## <a name="completeTodoList"></a>TodoList.js
```js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

## <a name="completeTodoItem"></a>TodoItem.js
```js
import React from "react";

const TodoItem = ({ text, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
```

## <a name="completeApp"></a>App.js
 ```js
 import React, { useState, useEffect } from "react";
import "./App.css";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to local (browser cache)
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") !== null) {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos(); // function that runs once when the app starts
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); // function that runs every time "todos" changes

  return (
    <div className="App">
      <header>
        <h1>ToDo List. Yay.</h1>
      </header>
      <TodoAddForm
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
```

## <a name="buildapp"></a>Build your React App and deploy it on GitHub Pages
- In `package.json` add:
```json
"homepage": ".",
```
- On terminal, run:
```bash
npm run build
```
- A new folder `build` is created, now you can create a GitHub repository and follow the steps there in order to push your build code to the new repository.
- In the new repository, click on settings and scroll down to GitHub Pages, choose Source and Branch Master and hit Save, your ToDo app will be now published.

## Credits:
- [Build A Todo App With REACT | React Project For Beginners](https://www.youtube.com/watch?v=pCA4qpQDZD8&ab_channel=DevEd) from Dev Ed
- [React JS Crash Course](https://www.youtube.com/watch?v=sBws8MSXN7A&t=5096s&ab_channel=TraversyMedia) from Brad Traversy
