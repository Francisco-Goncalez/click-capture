import React from 'react';
import ClickCapture from "./ClickCapture";
import logo from './logo.svg';
import './App.css';

function App() {
  const executaClick = () => {
    alert("Executou onClick do botão")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clique no botao abaixo e veja o  alerta na tela.
        </p>
        <ClickCapture>
          <button onClick={()=> executaClick()}>Executa</button>
        </ClickCapture>
      </header>
    </div>
  );
}

export default App;
