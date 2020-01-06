import React from 'react';
import Movie from './Movie';
import SearchBar from './Searchbar';
import SearchBarApi from './SearchBarApi';
import PaginationBar from './PaginationBar';
import qs from 'qs';
import Spinner from 'react-bootstrap/Spinner';


class Movies extends React.Component {
    constructor(props){
        super(props);
        this.url_params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        this.apijson = "";
        this.state = { 
            errorInfo: null,
            pagination: false,
            response: [],
            movies:[],
            currentPage: (this.url_params)? this.url_params.page: 1 ,
            totalPages: null,
            query: (this.url_params)? this.url_params.query: ""
        };
        
    }

    componentDidMount(){
        if(this.state.query!==''){
            this.setState({
                loading: true
            })
            SearchBarApi.getMovies(this.state.query, this.state.currentPage)
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        loading:false,
                        pagination:true,
                        totalPages: result.total_pages,
                        movies: result.results,
                        
                    });
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
        }    
       
    }

    render(){
        let pagination = {
            currentPage: this.state.currentPage,
            totalShow: 10,
            query: this.state.query
        }
        return (
            <div className="container">
                { (this.state.movies)? (this.state.movies.map((movie) => 
                            <Movie key={movie.id} movie={movie}></Movie>
                        )):""}   
                <div className="row">

                {(this.state.loading)?(
                    <Spinner animation="grow" className="mx-auto"/>
                ):<Spinner animation="grow" className="mx-auto d-none"/>}

                </div> 
                {(this.state.pagination)?(<PaginationBar pagination={pagination} totalPages={this.state.totalPages}></PaginationBar>):""}
            </div>
        );
    } 
}

export default Movies;