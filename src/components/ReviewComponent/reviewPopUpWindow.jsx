import React from 'react';
import '.style.css';

class Popup extends React.Component{

    render(){
        <div className='popup'>
            <div className='popup\_inner'>

                    <button>Título</button>
                    <button onClick={this.props.closePopup}>cerrar</button>

            </div>
        </div>

    }

}

export default Popup;