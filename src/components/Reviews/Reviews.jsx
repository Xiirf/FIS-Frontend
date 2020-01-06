import React from 'react';

import Review from '../ReviewComponent/Review';
import { reviewService } from '../../_services/review.service';

import './Reviews.scss';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as thumbsUpUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as thumbsUpChecked } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown as thumbsDownUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown as thumbsDownChecked } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle as spamUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle as spamChecked } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(thumbsUpChecked,thumbsUpUnchecked, thumbsDownChecked, thumbsDownUnchecked, spamChecked, spamUnchecked);

class Reviews extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            maxPerPage: 5,
            currentPage: 0,
            reviews: [],
            total: 2
        };
    }

    componentDidMount() {
        this.refreshReviews(this.state.maxPerPage, this.state.currentPage);
    }

    refreshReviews(limit, currentPage) {
        reviewService.getReviews(limit, currentPage).then((reviews) => {
            this.setState({
                reviews: reviews,
                maxPerPage: limit,
                currentPage: currentPage,
                total: reviews[0].total
            });
        });
    }

    render() {
        return (
            <Card>
                <Row className="mt-4">
                    <Col className="ml-3"><h5>Lo que opinan los usuarios:</h5></Col>
                </Row>
                <Row className="mt-1">
                    <Col className="ml-3">
                    <p className="ml-4 label">Reviews / Página</p>
                    <DropdownButton id="dropdown-basic-button" className="ml-4" size="sm" title={this.state.maxPerPage}>
                        <Dropdown.Item onClick={() => this.refreshReviews(1, this.state.currentPage)}>1</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.refreshReviews(3, this.state.currentPage)}>3</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.refreshReviews(5, this.state.currentPage)}>5</Dropdown.Item>
                    </DropdownButton>
                    </Col>
                    <Col className="text-right mr-5">
                        <p>{this.state.total} valoraciones</p>
                    </Col>
                </Row>
                <div className="page">
                {
                    this.state.reviews.map((review) => (
                        <Review key={review.id}
                         username={review.user} title={review.title} 
                         rating={review.rating} content={review.content}
                         likes={review.impressions.likes}
                         dislikes={review.impressions.dislikes}
                         spams={review.impressions.spam}
                         timestamp={review.created}></Review>
                    ))
                }
                </div>
                <div className="footer">
                <Row>
                    <Col className="center">
                    {
                        Array.from(Array(Math.ceil(this.state.total/this.state.maxPerPage))).map((obj,index) => <Button key={index} className="ml-1 mr-1" onClick={() => this.refreshReviews(this.state.maxPerPage, index)} variant={this.state.currentPage === index ? 'primary':'outline-primary'}>{index + 1}</Button>)
                    }
                    </Col>
                </Row>
                </div>
            </Card>
        );
    }
}

export default Reviews
