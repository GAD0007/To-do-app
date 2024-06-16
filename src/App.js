import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ListComp } from "./ListComp";
import { InputComp } from "./InputComp";
import { Header } from "./Header";

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
  const [filter, setFilter] = useState("All");

  let unPacked = List.filter((item) => !item.completed).length;
  let packed = List.filter((item) => item.completed).length;

  function handleCompleted() {
    setFilter("Completed");
    
  }

  function handleActive() {
    setFilter("Active");
  }
  function handleAll() {
    setFilter("All");
  }
  function clearCompleted(completed) {
    setList(List.filter((item) => !item.completed));
  }

  const filteredList = List.filter((item) => {
    if (filter === "All") return item;
    if (filter === "Completed") return item.completed;
    if (filter === "Active") return !item.completed;
    return true;
  });
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
          List={filteredList}
          Theme={Theme}
          onToggle={handleSelection}
          onDelete={handleDeletion}
          onCompleted={handleCompleted}
          onActive={handleActive}
          onAll={handleAll}
          onClear={clearCompleted}
          unPacked={unPacked}
          packed={packed}


        />
      </div>
      <div className="App-bg">
        <div className={Theme ? "dark-bg" : "light-bg"}> </div>
        <div className={Theme ? "dark-bg-color" : "light"}></div>
      </div>
    </div>
  );
}

export default App;
