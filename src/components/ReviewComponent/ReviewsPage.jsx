 import React from 'react';
import Pagination from './Pagination.jsx';
import Review from './Review.jsx';
import Col from 'react-bootstrap/Col';
import{Button,ButtonToolbar} from 'react-bootstrap';
import PopUpApp from  './PopUpApp.jsx';
import AddReview from './AddReview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import{faEdit as edit} from '@fortawesome/free-solid-svg-icons';


class ReviewsPage extends React.Component{

    constructor(props){
        super();
        this.state={
            currentPage:1,
            reviews:props.reviews,
            printReviews:[],
            addReviewShow: false,
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
        let j=1;
        let array=[];
        //imprimimos por pantalla las reviews de esa pagina
        for(let i=beginning; i < end+1;i++){

                array[j]=this.state.reviews[i];
                j=j+1;
        }


        
        this.setState({currentPage:pagenumber})
        this.setState({printReviews:array});
    }

    render(){


         //el numero de paginas en el que se van a paginar las reviews
        //depende directamente del número de reviews.
        //number of pages: Math.round(this.state.reviews.length/5-> numero de reviews (tamaño del array)/ reviews por pagina
        //al redondear ese resultado da el numero de paginas
       let numberOfpages=Math.round(this.state.reviews.length/5);
       let addreviewClose=()=>this.setState({
            addReviewShow: false,
        });

        return(

        <div>
            <div className="ReviewsPage">
                                        {this.state.reviews.length<5 ? 

                                        this.state.reviews.map((review)=>
                                        <Review id={review.id} username={review.user} title={review.title} 
                                                rating={review.rating} timestamp={review.timestamp} content={review.content} 
                                                likes={10} dislikes={0} spams={0} />) : ''

                                        /*:   {this.state.printReviews.map((review)=>
                                            <Review id={review.id} username={review.user} title={review.title} 
                                            rating={review.rating} timestamp={review.timestamp} content={review.content} 
                                            likes={10} dislikes={0} spams={0} />
                                            )}
                                
                                            <Pagination pages={numberOfpages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> }
                                              <Button variant='primary'
                                                onClick={()=>this.setState({addReviewShow:true})}
                                                    >Añadir Review </Button>
                                                    */
                                             
                        
                                       
                        } 

            <ButtonToolbar>
           
                <FontAwesomeIcon icon={"edit"} size="6x" onClick={()=>this.setState({addReviewShow:true})}/> <h1>Crear una review</h1> 
                <AddReview
                show={this.state.addReviewShow}
                    onHide={addreviewClose}/>

            </ButtonToolbar>                         
            </div>
         </div>
             
        )
       
    }
}

export default ReviewsPage;