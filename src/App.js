import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReviewsPage from './components/ReviewComponent/ReviewsPage.jsx';
import Review from './components/ReviewComponent/Review.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import{faEdit as edit} from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col';
import reviewsPagination from './components/ReviewComponent/reviewsPagination.jsx';
import PopUpApp from  './components/ReviewComponent/PopUpApp.jsx';

library.add(edit);



 function App () {

        let reviews=[{id:"e4sdfg23fsdf3",user:"NoLoSe",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}}, 
        {id:"e4sdfg23fsdf3",user:"Rick",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}},
        {id:"e4sdfg23fsdf3",user:"Rick",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}}
        ];
        
        //si hay más de cinco reviews se realiza la paginación si no se imprimen directamente
        //<ReviewsPage reviews={reviews} />
                return (
                <div className="App">

                        {reviews.length<5 ? 
                                        reviews.map((review)=>
                                        <Review id={review.id} username={review.user} title={review.title} 
                                                rating={review.rating} timestamp={review.timestamp} content={review.content} 
                                                likes={10} dislikes={0} spams={0} />
                                        )

                                        :  <reviewsPagination todo={reviews} todosPerPage={2} />
                                       
                        } 

                         <Col xs className="ml-4"> <PopUpApp/> </Col>

                </div>
                
                );
         }



export default App;
