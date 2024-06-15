import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const themes = [1, 2];

const list = [
  {
    id: 0,
    text: "Complete online JavaScript course",
    completed: true,
    cancel: false,
  },
  { id: 1, text: "Jog around the park 3x", completed: false, cancel: false },
  { id: 2, text: "10 minutes meditation", completed: false, cancel: false },
  { id: 3, text: "Read for 1 hour", completed: false, cancel: false },
  { id: 4, text: "Pick up groceries", completed: false, cancel: false },
  {
    id: 5,
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
    cancel: false,
  },
];

function App() {
  const [ToDoList, setToDoList] = useState("");
  const [Theme, setTheme] = useState(false);
  const [List, setList] = useState([...list]);

  function handleList(e) {
    setToDoList(e.target.value);
  }
  function handleAddItems(Listitem) {
    setList((List) => [...List, Listitem]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!ToDoList) return;
    const newListItem = {
      text: ToDoList,
      canceled: false,
      completed: false,
      id: Date.now(),
    };
    handleAddItems(newListItem);

    // setItems((items) => [...items, item]);

    setToDoList("");
  }
  function handleSelection(id) {
    console.log(id);
    setList(
      List.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  function handleDeletion(id) {
    setList(List.filter((item) => item.id !== id));
  }
  
  function handleTheme() {
    setTheme(!Theme);
  }
  return (
    <div className="App">
      <div className="to-do-box">
        <Header onToggleMode={handleTheme} Theme={Theme} />
        <InputComp
          addList={handleList}
          ToDoList={ToDoList}
          handleSubmit={handleSubmit}
          Theme={Theme}
        />
        <ListComp
          List={List}
          Theme={Theme}
          onToggle={handleSelection}
          onDelete={handleDeletion}
        />
      </div>
      <div className="App-bg">
        <div className={Theme ? "dark-bg" : "light-bg"}> </div>
        <div className={Theme ? "dark-bg-color" : "light"}></div>
      </div>
    </div>
  );
}

function Header({ onToggleMode, Theme }) {
  const sun = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
      />
    </svg>
  );
  const moon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      />
    </svg>
  );

  return (
    <div className="Header-Theme">
      <div className="logo">
        <h1>T O D O</h1>
      </div>
      <div className="switch-Box">
        <button onClick={onToggleMode} className="switch-btn">
          {Theme ? moon : sun}
        </button>
      </div>
    </div>
  );
}

function InputComp({ ToDoList, addList, handleSubmit, Theme }) {
  return (
    <form
      style={{
        backgroundColor: Theme ? "hsl(237, 14%, 26%)" : "hsl(236, 33%, 92%)",
      }}
      className="form-box"
      onSubmit={handleSubmit}
    >
      <div className="Fields">
        <input
          type="text"
          className="Fields"
          value={ToDoList}
          onChange={addList}
          placeholder="Create a new todo.."
        />
        {/* <button>submit</button> */}
      </div>
    </form>
  );
}

function ListComp({ List, Theme, onToggle, onDelete }) {
  return (
    <>
      <ul
        className="no-bullet"
        style={{
          backgroundColor: Theme ? "hsl(237, 14%, 26%)" : "hsl(236, 33%, 92%)",
        }}
      >
        {List.map((item) => (
          <ItemsOnList
            listObj={item}
            key={item.id}
            List={List}
            Theme={Theme}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
        <Footer List={List} />
      </ul>
    </>
  );
}

function ItemsOnList({ listObj, List, Theme, onToggle, onDelete }) {

  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
      <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  );
  const iconCross = (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
      <path
        fill="#494C6B"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  );

  return (
    // <img src={icon} alt="icon" width="20" height="20" />
    <li className="list-container">
      <button
        onClick={() => onToggle(listObj.id)}
        className={listObj.completed ? "checker" : "not-checked"}
      >
        {listObj.completed ? icon : null}
      </button>
      <span
        className="list-text"
        style={{
          color: Theme ? "white" : "hsl(235, 19%, 35%)",
          textDecoration: listObj.completed ? "Line-through" : "",
        }}
      >
        {listObj.text}
      </span>
      <button onClick={() => onDelete(listObj.id)} className="x-btn">
        {iconCross}
      </button>
    </li>
  );
}

function Footer({ List }) {
  const unpacked = List.filter((item) => !item.completed).length;

  return (
    <div className="footer-box">
      <div className="items-left">{`${unpacked} items left`}</div>
      <div className="all">All</div>
      <div className="active">Active</div>
      <div className="completed">Completed</div>
      <div className="clear-completed">Clear-Completed</div>
    </div>
  );
}
export default App;
