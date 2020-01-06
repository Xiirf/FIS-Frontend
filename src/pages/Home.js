import React from 'react';

import { authenticationService } from '../_services/authentication.service';
import Reviews from '../components/Reviews/Reviews';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentToken: authenticationService.currentTokenValue
        };
    }

    render() {
        return (
            <div>
                <h1>Bienvenido !</h1>
                <Reviews/>

            </div>
        );
    }
}

export default Home;
