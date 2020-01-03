import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Recomendacion extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            errorInfo : null,
            recomendacion: this.props.recomendacion, // atributos de la pelicula o serie
            tipo : this.props.tipo, // tipo 1 => pelicula, tipo 2 => serie,
        };
    }

    render(){

        const urlPoster = "http://image.tmdb.org/t/p/w185//" + this.state.recomendacion.backdrop_path;

        // las peliculas obttienen el nombre de un elemento diferente al de la series
        var tituloRecomendacion = "";
        var titulo = this.state.recomendacion.title;
        if (titulo) {
            tituloRecomendacion = titulo;
        } else {
            tituloRecomendacion = this.state.recomendacion.name;
        }

        // algunas pelis o series no tiene overview
        var overviewRecomendacion = "";
        var overview = this.state.recomendacion.overview;
        if (overview) {
            overviewRecomendacion = overview;
        } else {
            overviewRecomendacion = "No está disponible actualmente...";
        }

        // las series no tienen fecha de publicacion
        let fechaPubli;        
        if (this.state.recomendacion.release_date) {
            fechaPubli =  <tr>
                            <td>Fecha:</td>
                            <td className="datos_recomendacion_celda">{this.state.recomendacion.release_date}</td>
                          </tr>;                
        }

        return (
            <div id="recomendacion_card" style={{margin:"0.5em"}}>
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: '250px', height: '100%' }} /// these are optional style, it is not necessary
                >
                    <FrontSide
                        style={{backgroundColor: '#fff',}}>
                        
                        <button type="button" name="boton_lista_negra" value={this.state.recomendacion.id} className="btn btn-danger boton_lista_negra" title="Añadir a la lista de No Recomendaciones" onClick={() => this.props.clickAddListaNegra(this.state.recomendacion.id,this.state.tipo)}>X</button>

                        <img className="poster" src={urlPoster} alt="texto" title={tituloRecomendacion}/>
                        {/* <span>{this.state.recomendacion.id}</span> */}

                        <p className="tituloRecomendacion">
                            {tituloRecomendacion}
                        </p>                        

                        <hr></hr>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Puntuación:</td>
                                    <td className="datos_recomendacion_celda"><strong>{this.state.recomendacion.vote_average}</strong></td>
                                </tr>
                                <tr>
                                    <td>Votos:</td>
                                    <td className="datos_recomendacion_celda">{this.state.recomendacion.vote_count}</td>
                                </tr>
                                
                                {fechaPubli}

                                <tr>
                                    <td>Género:</td>
                                    <td className="datos_recomendacion_celda">{this.state.recomendacion.genre_ids}</td>
                                </tr>
                            </tbody>
                        </table>                        
                    </FrontSide>

                    <BackSide
                        style={{ backgroundColor: '#fff'}}>

                        <textarea disabled className="overview" defaultValue={overviewRecomendacion}></textarea>

                    </BackSide>
                </Flippy>
                
                
            </div>
            
        );
    }
    
}

export default Recomendacion;