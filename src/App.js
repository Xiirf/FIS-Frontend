import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Films from './components/films';

function App() {
  let movies = [
    {name: "Star Wars: El ascenso de España",img: "https://image.tmdb.org/t/p/w1280/16G2wZAkmKqSGK3it2VPjco5oyn.jpg", rate: "9.999", resume: "Españita siempre arriba arribisima, todos los dias sale el sol chipiron, que ganas de verte y comerte la vida, soñando en tus bragas perdiendo la vida.", status: "Pendiente" },
    {name: "Star Wars: El ascenso de España",img: "https://image.tmdb.org/t/p/w1280/16G2wZAkmKqSGK3it2VPjco5oyn.jpg", rate: "9.999", resume: "Españita siempre arriba arribisima, todos los dias sale el sol chipiron, que ganas de verte y comerte la vida, soñando en tus bragas perdiendo la vida.", status: "Pendiente" }
  ];
  return (
    <div className="App">
      <Films movies={movies}></Films>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
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
