import React from 'react';
import './App.css';
import ReviewsPage from './components/ReviewComponent/ReviewsPage.jsx';
import Review from './components/ReviewComponent/Review.jsx';


 function App () {

  

  render() {

        let reviews=[new Review ({id:"e4sdfg23fsdf3",user:"NoLoSe",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}}), 
        new Review ({id:"e4sdfg23fsdf3",user:"Rick",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}}),
        new Review ({id:"e4sdfg23fsdf3",user:"Rick",title:"Buena peli", rating:4, timestamp:"2019-12-27T17:32:36.884+01:00", content:"La peli ha estado muy bien. Me ha gustado el actor principal." ,impressions:{likes:10,dislikes:0,spams:0}})
        ];
        
        //si hay más de cinco reviews se realiza la paginación si no se imprimen directamente
                return (
                <div className="App">

                        {reviews.length<5 ? 
                                        reviews.map((review)=>
                                                (<div className="container mt-3" key={review.user}>
                                                        <div className='col'>
                                                                <div clasName="card">
                                                                        <div className="card-body">
                                                                                <h5 className="card-title">{review.title}</h5>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>))

                                        :<ReviewsPage reviews={reviews} />
                        } 

                </div>
                
                );
        }
}

export default App;
