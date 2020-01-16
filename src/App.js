import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from './PrivateRoute';
import Home from './pages/Home';
import ListaNoRecomendadas from './pages/ListaNoRecomendadas';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';
import Myaccount from './authentication/Myaccount';
import Forgottenpassword from './authentication/Forgottenpassword';

import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

import { history } from './_helpers/history';
import { authenticationService } from './_services/authentication.service';
import Resetpassword from './authentication/Resetpassword';
import SearchBar from './components/Searchbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: null
        };

        toast.configure()
    }

    componentDidMount() {
        authenticationService.currentToken.subscribe(x => this.setState({ currentToken: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/');
    }

    render() {
        const { currentToken } = this.state;
        return (
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav" style={{width:"100%"}}>
                            <Link to="/" className="nav-item nav-link"><img class="App-logo" src="/logo.svg"></img></Link>
                            {
                                currentToken ? 
                                    <div className="navbar-nav">
                                        <Link to="/myaccount" className="nav-item nav-link">Mi cuenta</Link>
                                        <a onClick={this.logout} className="nav-item nav-link">Cierre de sesión</a>                                        
                                    </div>
                                    : 
                                    <div className="navbar-nav">
                                        <Link to="/signin" className="nav-item nav-link">Ingresar</Link>
                                        <Link to="/signup" className="nav-item nav-link">Inscribirse</Link>
                                    </div>
                            }
                            {
                                currentToken ? 
                                    
                                    <div className="navbar-nav ml-auto">
                                        <SearchBar className="ml-auto mr-4"></SearchBar>
                                        <Link to="/listaNoRecomendadas" className="nav-item nav-link link-lista-no-recomendada" title="Películas y Series no recomedadas">
                                            {/* <i className="fas fa-list-alt"></i> */}
                                            <FontAwesomeIcon icon={faListAlt} size="2x"/>
                                        </Link>
                                        
                                    </div>
                                    :
                                    <div></div>                                
                            }
                        </div>
                        {/* <div className="ml-auto mr-4">
                                <SearchBar></SearchBar>
                        </div> */}
                    </nav>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-md-6 offset-md-3"> */}
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/listaNoRecomendadas" component={ListaNoRecomendadas} />
                                    <Route exact path="/signin" component={Signin} />
                                    <Route exact path="/signup" component={Signup} />
                                    <Route exact path="/search" component={Movies}></Route>
                                    <Route exact path="/movie/:filter" component={MovieDetails}></Route>
                                    <Route exact path="/forgottenpassword" component={Forgottenpassword} />
                                    <Route path='/resetpassword/:token' component={Resetpassword} />
                                    <PrivateRoute exact path="/myaccount" component={Myaccount} />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App ;