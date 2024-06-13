import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="to-do-box">
        <Header/>


      </div>
      <div className="App-bg">
        <div className="dark-bg"></div>
        <div className="dark-bg-color"></div>
      </div>
    </div>
  );
}

function Header(){
  return (
    <div className="Header-Theme">
      <div><h1>T O D O</h1></div>
      <div ><button className="switch-btn">Switch</button></div>


    </div>
  )
}

export default App;
