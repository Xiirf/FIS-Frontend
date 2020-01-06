import React from 'react';

import { authenticationService } from '../_services/authentication.service';
import Recomendaciones from '../../src/Recomendaciones';
import ListaNegraRecomendaciones from '../../src/ListaNegraRecomendaciones';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: authenticationService.currentTokenValue
        };
    }

    render() {
        return (
            <div className="homeStyle">
                <h1>Bienvenido !</h1>

                <hr></hr>
                {/* tipoRecomendacion = 1 -> aleatoria
                    tipoRecomendacion = 2 -> por similitud
                    
                    idRecomendacion es la pelicula o serie sobre la que hay que obtener peliculas o series similares.
                        Si esta vacio extrae aleatoriamente peliculas y series
                    
                    categoria = 1 -> peliculas
                    categoria = 2 -> series

                    visibleSlides -> numero de recomendaciones visibles en el scroll

                    number -> numero de recomendaciones a devolver pasado por parametro en la consulta a la api, por defecto el valor es 5
                */}
                <h3>Recomendaciones Aleatorias</h3>
                <Recomendaciones tipoRecomendacion="1" categoria="1" idRecomendacion="" visibleSlides="5" number="15"/>
                <Recomendaciones tipoRecomendacion="1" categoria="2" idRecomendacion="" visibleSlides="5" number="25"/>

                <h3>Recomendaciones Por Similitud Ejemplo</h3>
                <Recomendaciones tipoRecomendacion="2" categoria="1" idRecomendacion="tt0816692" visibleSlides="5" number="10"/>
                <Recomendaciones tipoRecomendacion="2" categoria="2" idRecomendacion="tt0903747" visibleSlides="5" number="10"/>

                {/* <hr></hr>
                <h3>Listas no recomendadas</h3>
                <ListaNegraRecomendaciones /> */}

            </div>
        );
    }
}

export default Home;
