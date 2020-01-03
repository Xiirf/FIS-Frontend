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

        //primero calculamos el número de divisiones del array siendo una division cada 5 elementos, es decir 5 reviews por pagina
        //por ejemplo si tenemos 12 elementos, tendremos 3 paginas: la primera y la segunda contendran 5 reviews cada una pero la ultima 
        //solo 2:
        //numberOfDivisions=Math.round(this.state.reviews.length/5)

        //dependiendo del numero de divisiones (paginas) y la pagina actual tendremos que imprimir unas reviews u otras
        //si la pagina es igual al numero de divisiones habra que imprimir desde (5xi)-4 hasta el tamaño maximo (en este ejemplo serian r11, y r12)
        //en los demas casos sera desde (5xi)-4 hasta 5xi

        let beginning=(5*pagenumber)-4;
        let end=5*pagenumber;

        //imprimimos por pantalla las reviews de esa pagina
        /*for(let i=beginning; i < end+1;i++){

       <div>{console.log(this.state.reviews[i])} </div>

        }*/

        
        this.setState({currentPage:pagenumber})
    }

    render(){

         //el numero de paginas en el que se van a paginar las reviews
        //depende directamente del número de reviews.
        //number of pages: Math.round(this.state.reviews.length/5-> numero de reviews (tamaño del array)/ reviews por pagina
        //al redondear ese resultado da el numero de paginas
       let numberOfpages=Math.round(this.state.reviews.length/5);
    
        return(

            <Pagination pages={numberOfpages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>  
        );
    }
}

export default ReviewsPage;