import React from 'react';
import Movie from './Movie';
import MoviesApi from './MoviesApi';

class Movies extends React.Component {
    constructor(props){
        super(props);
        this.movies = props.movies;
        this.apijson = "";
        this.state = {
            errorInfo: null,
            response: [],
            isEditing: {}
        };
    }

    componentDidMount() {
        MoviesApi.getMovieStatusById("5df2adaa6f31280645c95100")
            .then(
                (result) => {
                    this.setState({
                        response: result
                    })
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }

    render(){
        return (
            <div className="container">
                {this.movies.map((movie) => 
                            <Movie movie={movie}></Movie>
                        )}
                <div className="row">
                    {this.state.response}
                </div>
                
            </div>
        );
    } 
}

export default Movies;