import React from 'react';
import { Link } from 'react-router';



class Movie extends React.Component {

  static POSTER_URL_TMDB = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  constructor(props){
    super(props);
    this.id_movie = props.movie.id;
  }
  
  render(){
    return (
      <div>
        <Link to={"/movie/"+ this.id_movie} activeStyle={{textDecoration: 'none'}} style={{textDecoration: 'none'}}>
          <div className="film-css row shadow-sm bg-white rounded my-3">
            <div className="col-md-3">
              <img src={Movie.POSTER_URL_TMDB + this.props.movie.poster_path} width="250px" className="img-fluid p-3 my-auto"></img>
            </div>
            <div className="col-md-9">
              <div className="row my-4 text-primary">
                <h3>{this.props.movie.title}</h3>
              </div>
              <div className="row my-2">
                  <div className="col-md-9">
                    <p className="text-justify text-secondary">
                      {this.props.movie.overview}
                    </p>
                  </div>
                  <div className="col-md-3 p-3 text-dark ">
                    <div className={(this.props.movie.vote_average > 6)? "alert alert-success": "alert alert-warning"} >
                      <h5 className="rate">
                        Puntuación: {this.props.movie.vote_average}
                      </h5>
                      <h6>
                        Popularidad: {this.props.movie.popularity}
                      </h6>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Movie;