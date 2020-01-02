import React from 'react';
import Pagination from './Pagination.jsx';

class ReviewsPage extends React.Component{

    constructor(props){
        super();
        this.state={
            currentPage:1,
            reviews:props.reviews
        }

    }

    nextPage=(pagenumber)=>{
        //cambiar las reviews que se estan mostrando para el caso de que hay más de 5 reviews con alguna relacion entre el numero de paginas
        //this.state.reviews[].json()

        this.setState({currentPage:pagenumber})
    }

    render(){

         //el numero de paginas en el que se van a paginar las reviews
        //depende directamente del número de reviews.
        const numberOfPages = 2;
    
        return(

            <Pagination pages={numberOfPages} nextPage={this.state.currentPage,this.state.reviews} currentPage={this.state.currentPage}/>  
        );
    }
}

export default ReviewsPage;