import React from 'react';
import { authenticationService } from '../_services/authentication.service';

import ListaNegraRecomendaciones from '../../src/ListaNegraRecomendaciones';

class ListaNoRecomendadas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: authenticationService.currentTokenValue
        };
    }

    render() {
        return (
            <div style={{minWidth:"100%"}}>
                
                <ListaNegraRecomendaciones />

            </div>
        );
    }
}

export default ListaNoRecomendadas;
