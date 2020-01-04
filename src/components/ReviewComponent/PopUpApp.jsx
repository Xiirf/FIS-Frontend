import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import{faEdit as edit} from '@fortawesome/free-solid-svg-icons';

import ReviewPopUpWindow from './reviewPopUpWindow.jsx';
library.add(edit);

class PopUpApp extends React.Component {  

    constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
    }  

    togglePopup() {  
    this.setState({  
        showPopup: !this.state.showPopup  
    });  
    }  

    

  render() {  
        return (  
        <div>  
        <FontAwesomeIcon icon={"edit"} size="6x" onClick={this.togglePopup.bind(this)}/> <h1>Crear una review</h1> 

        {this.state.showPopup ?  
        <ReviewPopUpWindow
                  text='Click "Close Button" to hide popup'  
                  closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
        }  
        </div>  

        );  
    }  
}  

export default PopUpApp;


