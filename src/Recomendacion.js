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

        var resumenOverviewRecomendacion = "";
        if (overview.length > 50) {
            resumenOverviewRecomendacion = overview.substring(0,50);
            resumenOverviewRecomendacion = resumenOverviewRecomendacion + "...";
        } else if (overview.length == 0 || overview.length == undefined){
            resumenOverviewRecomendacion = "No está disponible actualmente..."
        } else {
            resumenOverviewRecomendacion = overview;
        }

        // las series no tienen fecha de publicacion
        let fechaPubli;        
        if (this.state.recomendacion.release_date) {
            fechaPubli =  <tr>
                            <td>Fecha:</td>
                            <td className="datos_recomendacion_celda">{this.state.recomendacion.release_date}</td>
                          </tr>;                
        }

        var generos = "";
        var generosTrimmed = "";
        if(this.state.recomendacion.genre_ids != null){
            this.state.recomendacion.genre_ids.map((genero) => {
                if(genero === 28){
                    generos = generos + "Acción" + ", ";
                } else if(genero === 12){
                    generos = generos + "Aventura" + ", ";
                } else if(genero === 16){
                    generos = generos + "Animación" + ", ";
                } else if(genero === 35){
                    generos = generos + "Comedia" + ", ";
                } else if(genero === 80){
                    generos = generos + "Crimen" + ", ";
                } else if(genero === 99){
                    generos = generos + "Documental" + ", ";
                } else if(genero === 18){
                    generos = generos + "Drama" + ", ";
                } else if(genero === 10751){
                    generos = generos + "Familia" + ", ";
                } else if(genero === 14){
                    generos = generos + "Fantasía" + ", ";
                } else if(genero === 36){
                    generos = generos + "Historia" + ", ";
                } else if(genero === 27){
                    generos = generos + "Terror" + ", ";
                } else if(genero === 10402){
                    generos = generos + "Música" + ", ";
                } else if(genero === 9648){
                    generos = generos + "Misterio" + ", ";
                } else if(genero === 10749){
                    generos = generos + "Romance" + ", ";
                } else if(genero === 878){
                    generos = generos + "Ciencia Ficción" + ", ";
                } else if(genero === 10770){
                    generos = generos + "Película de TV" + ", ";
                } else if(genero === 53){
                    generos = generos + "Suspense" + ", ";
                } else if(genero === 10752){
                    generos = generos + "Bélica" + ", ";
                } else if(genero === 37){
                    generos = generos + "Western" + ", ";
                } else if(genero === 10759){
                    generos = generos + "Batalla" + ", ";
                } else if(genero === 10765){
                    generos = generos + "Magia" + ", ";
                } else {
                    generos = generos + "Otros" + ", ";
                }
                
            })

            //eliminar la ultima ,
            generos = generos.substring(0,generos.length - 2);

            if (generos.length > 15) {
                generosTrimmed = generos.substring(0,15);
                generosTrimmed = generosTrimmed + "...";
            } else {
                generosTrimmed = generos;
            }
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
                        
                        <button data-testid="clickedListaNegra" type="button" name="boton_lista_negra" value={this.state.recomendacion.id} className="btn btn-danger boton_lista_negra" title="Añadir a la lista de No Recomendaciones" onClick={() => this.props.clickAddListaNegra(this.state.recomendacion.id,this.state.tipo)}>X</button>

                        <img className="poster" src={urlPoster} alt="texto" title={tituloRecomendacion}/>
                        {/* <span>{this.state.recomendacion.id}</span> */}

                        <p className="tituloRecomendacion" title={tituloRecomendacion}>
                            {tituloRecomendacion} 
                        </p>     

                        <p className="resumenOverview">{resumenOverviewRecomendacion}<span className="verMasOverview">ver más</span></p>                   

                        <hr className="divider"></hr>

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
                                    <td className="datos_recomendacion_celda generos" title={generos}>{generosTrimmed}</td>
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