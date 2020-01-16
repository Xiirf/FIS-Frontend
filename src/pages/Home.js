import React from 'react';

import { authenticationService } from '../_services/authentication.service';

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
            </div>
        );
    }
}

export default Home;
