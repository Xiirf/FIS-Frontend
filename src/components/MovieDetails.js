import React from 'react';
import MoviesApi from './MoviesApi';
import SearchBarApi from './SearchBarApi';
import { Alert } from 'react-bootstrap';

class MovieDetails extends React.Component {

    static POSTER_URL_TMDB = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

    constructor(props){
        super(props);
        this.id_movie = props.params.filter;
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state={
                success: false,
                error: false,
                id_status: "",
                status: "",
                loggued:true,
                movie: {}
        }
    }

    componentDidMount() {
        SearchBarApi.getMovieByID(this.id_movie)
            .then(
                (result) => {
                console.log(result);
                this.setState({
                    movie: result,
                })
               
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            );
        MoviesApi.getMovieStatusByUserAndMovie("3", this.id_movie)
                .then(
                    (result) => {
                      if(result.length > 0){
                        console.log(result);
                        this.setState({
                          id_status: result[0]._id,
                          status: result[0].status
                        })
                      }else {
                        this.setState({
                          status: "No_visto"
                        })
                      }
                    },
                    (error) => {
                        this.setState({
                            errorInfo: "Problem with connection to server"
                        })
                    }
                )
      }

    handleStatusChange(event){
    const status = event.target.value;
    const {movie} = this.state;
    this.setState({
        status: status
    });
    let body = {
        "id_movie": movie.id.toString(),
        "id_user": "3", //TODO - Change this for the user in te auth 
        "status": status
    };
    if(this.state.id_status === ""){
        MoviesApi.postMovieStatus(body)
        .then(
            (result) => {
            this.setState({success:true, error: false});
            },
            (error) => {
                this.setState({
                    error: true,
                    success: false
                })
            }
        )
    } else {
        MoviesApi.putMovieStatus(this.state.id_status,body)
        .then(
            (result) => {
            this.setState({success:true, error: false});
            },
            (error) => {
                this.setState({
                    error: true,
                    success: false
                })
            }
        )
    }
    
    }
    
    render(){
        const {movie, status} = this.state;
        return (
            <div>
                <Alert variant="success" className={(this.state.success)? ("col-12"): ("d-none")}>Estado guardado con éxito</Alert>
                <Alert variant="danger" className={(this.state.error)? ("col-12"): ("d-none")}>Algo ha ido mal</Alert>
                <div className="film-css row shadow-sm bg-white rounded my-3">
                    <div className="col-md-3">
                        <img src={MovieDetails.POSTER_URL_TMDB + movie.poster_path} width="300px" className="img-fluid p-3 my-auto"></img>
                    </div>
                    <div className="col-md-6">
                        <div className="row my-4 text-primary">
                        <h3>{movie.title}</h3>
                        </div>
                        <div className="row my-2">
                        <div className="row p-2">
                        <p className="text-justify">
                            {movie.overview}
                        </p>
                        </div>
                        <div className="row p-2">
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4 pl-4 text-justify text-secondary">
                        <div className={(this.state.loggued)? ("pr-5 my-2"): ("d-none")}>
                            <select className="form-control col-md-11 border border-primary" value={status} onChange={this.handleStatusChange}>
                            <option value="No_visto" default>No visto</option>
                            <option value="Visto">Visto</option>
                            <option value="Siguiendo">Siguiendo</option>
                            <option value="Pendiente">Pendiente</option>
                            </select>
                        </div>
                        <div className="pr-5">
                            <h5 className={(movie.vote_average > 6)? "alert alert-success": "alert alert-warning"}>
                                Puntuación: {movie.vote_average}
                                <br></br>
                                Popularidad: {movie.popularity}
                            </h5>
                        </div>
                        <h6>
                            Fecha: {movie.release_date} 
                            <br></br>
                            Generos:
                            <ul>
                                {(movie.genres)? (movie.genres.map((gen) => <li key={gen.id}>{gen.name}</li>)): ""}
                            </ul>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;