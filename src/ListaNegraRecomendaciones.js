import React from 'react';
import { Ring } from 'react-awesome-spinners';
import ListaNegra from './ListaNegra.js';
import {authenticationService} from './_services/authentication.service';
import swal from 'sweetalert';

let test_token = process.env.REACT_APP_TEST_TOKEN;

class ListaNegraRecomendaciones extends React.Component{
    static API_BASE_URL = "api/v1/";
    static URI = "https://fis-api-gateway.herokuapp.com/" + ListaNegraRecomendaciones.API_BASE_URL; // https://fis-api-gateway.herokuapp.com/recomendador/v1/
    static URI_API = (process.env.REACT_APP_URL_API_RECOMENDADOR || ListaNegraRecomendaciones.URI);

    constructor(props){
        super(props);
        this.state = {
            peliculasNR: [],
            seriesNR : [],
            isLoading: false,
        };

        this.handleDeleteListaNegra = this.handleDeleteListaNegra.bind(this);
    }    
    
    componentDidMount(){
        this.setState({ isLoading: true });        
        //window.alert("test token: " + test_token);

        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || 'https://recomendador-fis1920.herokuapp.com/recomendador/v1/'); // http://localhost:3000/recomendador/v1/

        //var uri = "https://fis-api-gateway.herokuapp.com/" + ListaNegraRecomendaciones.API_BASE_URL; // https://fis-api-gateway.herokuapp.com/recomendador/v1/
        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || uri);

        var urlListaNegraPeliculas = "";
        var urlListaNegraSeries    = "";

        //urlListaNegraPeliculas = url_api + 'listaNegra/peliculas';
        //urlListaNegraSeries    = url_api + 'listaNegra/series';
        urlListaNegraPeliculas = ListaNegraRecomendaciones.URI_API + 'listaNegra/peliculas';
        urlListaNegraSeries    = ListaNegraRecomendaciones.URI_API + 'listaNegra/series';
        Promise.all([
            fetch(urlListaNegraPeliculas, {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  //'authorization' : test_token,
                  'authorization': authenticationService.currentTokenValue.token
                }
            }),
            fetch(urlListaNegraSeries, {
                method: 'GET', // or 'PUT'
                headers:{
                  'Content-Type': 'application/json',
                  //'authorization' : test_token,
                  'authorization': authenticationService.currentTokenValue.token
                }
            })
        ])
        .then(([res11, res22]) => Promise.all([res11.json(), res22.json()]))
        .then(([data11, data22]) => this.setState({
            peliculasNR: data11.results, 
            seriesNR: data22.results,
            isLoading: false
        }));
    }

    handleDeleteListaNegra(idElemento, tipo){
        var idElemento = idElemento;
        var tipoRec = tipo;
        //window.alert("id recurso: " + id_recomendacion + ", tipo: " + tipo);        

        var titleSwal = "";
        var textSwal = "";
        var textConfirmSwalDeleted = "";

        if (tipoRec == 1){
            // pelicula            
            titleSwal = "Eliminar de la lista!";
            textSwal = "¿Estás seguro que desea eliminar la película a la lista de no recomendadas?"
            textConfirmSwalDeleted = "La película ha sido eliminada correctamente!";

        } else if (tipoRec == 2){
            // serie            
            titleSwal = "Eliminar de la lista!";
            textSwal = "¿Estás seguro que desea eliminar la serie a la lista de no recomendadas?"
            textConfirmSwalDeleted = "La serie ha sido eliminada correctamente!";

        } else {
            // error
            swal("Oops!", "Se ha producido un error inesperado. No se puede eliminar de la lista de no recomendadas. Inténtelo de nuevo más tarde.", "error");
        }

        swal({
            title: titleSwal,
            text: textSwal,
            icon: "warning",
            dangerMode: true,
            showCancelButton: true,
          })
          .then(willDelete => {
            if (willDelete) {
                if (tipoRec == 1){
                    this.deletePeliculaListaNegra(idElemento);
                    swal("Eliminada!", textConfirmSwalDeleted, "success");
                } else if (tipoRec == 2){
                    this.deleteSerieListaNegra(idElemento);
                    swal("Eliminada!", textConfirmSwalDeleted, "success");
                }
            
            }
          });
        
    }

    deletePeliculaListaNegra(idPelicula){
        //const urlAPI = "http://localhost:3000/recomendador/v1/listaNegra/pelicula/" + idPelicula;
        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || 'https://recomendador-fis1920.herokuapp.com/recomendador/v1/'); // http://localhost:3000/recomendador/v1/
        
        //var uri = "https://fis-api-gateway.herokuapp.com/" + ListaNegraRecomendaciones.API_BASE_URL; // https://fis-api-gateway.herokuapp.com/recomendador/v1/
        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || uri);
        var urlAPI = ListaNegraRecomendaciones.URI_API + "listaNegra/pelicula/" + idPelicula;
        //console.log("urlAPI: " + urlAPI);
        var data = {username: 'example'};
        //window.alert(urlAPI);
            
        fetch(urlAPI, {
            method: 'DELETE', // or 'PUT'
            //body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              //'authorization' : test_token,
              'authorization': authenticationService.currentTokenValue.token
            }
          }).then(res => res.json())          
          .then(response => {
                //window.alert('Success:', response)
                const newState = this.state;
                const index = newState.peliculasNR.findIndex(a => a.idTmdb === idPelicula);

                if (index === -1) return;
                newState.peliculasNR.splice(index, 1);

                this.setState(newState); // This will update the state and trigger a rerender of the components
                //window.alert("Pelicula eliminada de la lista no recomendadas!");
          })
          .catch(error => 
            swal("Oops!", "Se ha producido un error inesperado. No se puede eliminar de la lista de no recomendadas. Inténtelo de nuevo más tarde.", "error")
          );      

    }

    deleteSerieListaNegra(idSerie){
        //const urlAPI = "http://localhost:3000/recomendador/v1/listaNegra/serie/" + idSerie;
        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || 'https://recomendador-fis1920.herokuapp.com/recomendador/v1/'); // http://localhost:3000/recomendador/v1/

        //var uri = "https://fis-api-gateway.herokuapp.com/" + ListaNegraRecomendaciones.API_BASE_URL; // https://fis-api-gateway.herokuapp.com/recomendador/v1/
        //var url_api = (process.env.REACT_APP_URL_API_RECOMENDADOR || uri);
        var urlAPI = ListaNegraRecomendaciones.URI_API + "listaNegra/serie/" + idSerie;

        var data = {username: 'example'};
        //window.alert(urlAPI);

        fetch(urlAPI, {
            method: 'DELETE', // or 'PUT'
            //body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              //'authorization' : test_token,
              'authorization': authenticationService.currentTokenValue.token
            }
          }).then(res => res.json())
          
          .then(response => {
              //window.alert('Success:', response)
              const newState = this.state;
              const index = newState.seriesNR.findIndex(a => a.idTmdb === idSerie);

              if (index === -1) return;
              newState.seriesNR.splice(index, 1);

              this.setState(newState); // This will update the state and trigger a rerender of the components
              //window.alert("Serie eliminada de la lista no recomendadas!");
          })
          .catch(error => 
            swal("Oops!", "Se ha producido un error inesperado. No se puede eliminar de la lista de no recomendadas. Inténtelo de nuevo más tarde.", "error")
            ); 
    }

    render(){
                 
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Cargando lista de películas y series no recomendadas...</p>
                    <Ring />
                </div>                                
            );
        }

        return (
                <div id="lista_negra_table">                 
                    <h4 className="tituloListaNoRecomendada">Lista de películas no recomendadas</h4>
                    <table className="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id Pelicula</th>
                                <th>Nombre Pelicula</th>
                                <th></th>
                                {/* <th>Tipo</th> */}
                            </tr>
                        </thead>

                        {this.state.peliculasNR.map((peli, index) => 
                                <ListaNegra key = {peli.idTmdb} indice={index} elemento = {peli} tipo = "1" deleteFromListaNegra={this.handleDeleteListaNegra}/>
                            )
                        }

                    </table>

                    <hr></hr>
                    
                    <h4 className="tituloListaNoRecomendada">Lista de series no recomendadas</h4>
                    <table className="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id Serie</th>
                                <th>Nombre Serie</th>
                                <th></th>
                                {/* <th>Tipo</th> */}
                            </tr>
                        </thead>

                        {this.state.seriesNR.map((serie, index) => 
                                <ListaNegra key = {serie.idTmdb} indice={index} elemento = {serie} tipo = "2" deleteFromListaNegra={this.handleDeleteListaNegra}/>
                            )
                        }

                    </table>

            </div>
        );
       
    }
    
}

export default ListaNegraRecomendaciones;