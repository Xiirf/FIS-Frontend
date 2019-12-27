import React from 'react';
import './App.css';

import Review from './components/ReviewComponent/Review.jsx';


function App() {
  return (
    <div className="App">
      
      <div className="container mt-5">
        <Review id="e4sdfg23fsdf3" username="rick_957" title="Buena peli" rating={4} timestamp="2019-12-27T17:32:36.884+01:00" content="La peli ha estado muy bien. Me ha gustado el actor principal." likes={10} dislikes={0} spams={0} />
      </div>
      
    </div>
  );
}

export default App;
