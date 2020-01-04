import React from 'react';
import './style.css';



class reviewsPopUpWindow extends React.Component {  

        render() {  
            return (  
                <div className='popup'>  
                    <div className='popup\_inner'>  
                                 <h1>Título</h1>  
                        <button onClick={this.props.closePopup}>Cerrar</button>  
                    </div>  
            </div>  
            );  
        }  
}  

export default reviewsPopUpWindow;