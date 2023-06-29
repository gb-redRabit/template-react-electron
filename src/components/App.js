import '../style/App.css';
import logo from "../img/logo.webp";
import {  Routes, Route, NavLink  } from 'react-router-dom';
import Hello from './Hello';
import World from './World';

const {ipcRenderer} = window.require("electron");

function MyButton() {
  const handleClick = () => {
    ipcRenderer.send('sluchacz1', "do servera zapytanie"); //wiadomośc do servera
    ipcRenderer.on('dopowiedz1', (e, d) => {
      console.log(d)
    })
  }
  return ( 
  <> 
    <button onClick={handleClick}>
      Clicked 
    </button>

  </>
  );
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img className='App-img' src={logo} alt="logo"/>
        <MyButton /> 
       
        <nav style={{ margin: 10 }}>
          <NavLink  to="/" style={{ padding: 5 }}>
          Hello
          </NavLink>
          <NavLink  to="/world" style={{ padding: 5 }}>
          World
          </NavLink>
        </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/world" element={<World />} />
      </Routes>
  
      </header> 
    </div>
  );
}

export default App;