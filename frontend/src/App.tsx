import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  function callme() {
    console.log(value);
    setValue(function setterFn(p) { return p + 1 })
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => callme()}>
          {value} Edit <code>src/App.tsx</code> and save to reload.
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
