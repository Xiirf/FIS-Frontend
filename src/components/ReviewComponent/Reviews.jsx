import React from 'react';
import Review from './Review.jsx';
import EditReview from './EditReview.jsx';
import ReviewsPage from './ReviewsPage.jsx';

class Reviews extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
        reviews:props.reviews,
        isEditing:{}
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
    }

    handleChange(Review){
             this.setState(prevState => {return({
            isEditing: {...prevState.isEditing, [Review.id]:Review.title,[Review.id]:Review.content}
       })});
    }

    handleEdit(Review){
        this.setState(prevState => {return({
             isEditing: {...prevState.isEditing, [Review.id]:Review.title,[Review.id]:Review.content}
        })})
    };


        render(){
            return(
                <div className="Reviews">

                        {this.state.reviews.length<5 ? 
                                       this.state.reviews.map((review)=>
                                                
                                                !this.state.isEditing[review.title] || this.state.isEditing[review.content]?
                                                <div className="container mt-5">
                                                <Review id={review.id} username={review.user} title={review.title} 
                                                rating={review.rating} timestamp={review.timestamp} content={review.content} 
                                                onEdit={this.handleEdit}
                                                likes={10} dislikes={0} spams={0} />
                                                
                                        </div> :
                                        <EditReview key={review.title} key={review.content}
                                            review={this.state.isEditing[review.id]}
                                        onChange={this.handleChange.bind(this,review.title,this.review.content)} />)
                                        
                                        

                                        :<ReviewsPage reviews={this.state.reviews} />
                        } 

                </div>

            );
        }
    
}
export default Reviews