import React from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import { Router, Route, browserHistory } from 'react-router'; 
import MovieDetails from './components/MovieDetails';

library.add(fab, faCheckSquare, faSearch);

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Movies}></Route>
        <Route path="/movie/(:filter)" component={MovieDetails}></Route>
      </Router>
    </div>
  );
}

export default App;
