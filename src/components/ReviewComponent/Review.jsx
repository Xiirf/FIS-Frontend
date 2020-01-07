import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rater from 'react-rater';
import Button from 'react-bootstrap/Button';
import ReviewModal from '../Reviews/ReviewModal';


import { reviewService } from '../../_services/review.service';

import './review.scss';

import moment from 'moment';
import 'moment/locale/es';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as thumbsUpUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as thumbsUpChecked } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown as thumbsDownUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown as thumbsDownChecked } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle as spamUnchecked } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle as spamChecked } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(thumbsUpChecked,thumbsUpUnchecked, thumbsDownChecked, thumbsDownUnchecked, spamChecked, spamUnchecked);

class Review extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            liked: props.liked || false,
            spammed: props.spammed || false,
            disliked: props.disliked || false,
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            spams: this.props.spams,
            showModal: false
        };

        this.toggleLike = this.toggleLike.bind(this);
        this.toggleDislike = this.toggleDislike.bind(this);
        this.toggleSpam = this.toggleSpam.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    componentDidMount() {
        
    }

    toggleModal() {
        this.setState({
            modalShow: !this.state.modalShow,
        });
    }

    toggleLike() {
        reviewService.createImpression(this.props.id,'like').then(() => {
            if (!this.state.liked) {
                this.setState(state => ({
                    liked: true,
                    disliked: false,
                    spammed: false,
                    likes: this.state.likes + 1,
                    dislikes: this.state.disliked ? this.state.dislikes - 1 : this.state.dislikes,
                    spams: this.state.spammed ? this.state.spams - 1 : this.state.spams,
                }));
            }
        });
    }

    toggleDislike() {
        reviewService.createImpression(this.props.id,'dislike').then(() => {
            if (!this.state.disliked) {
                this.setState(state => ({
                    liked: false,
                    disliked: true,
                    spammed: false,
                    dislikes: this.state.dislikes + 1,
                    likes: this.state.liked ? this.state.likes - 1 : this.state.likes,
                    spams: this.state.spammed ? this.state.spams - 1 : this.state.spams,
                }));
            }
        });
        
    }

    toggleSpam() {
        reviewService.createImpression(this.props.id,'spam').then(() => {
            if (!this.state.spammed) {
                this.setState(state => ({
                    liked: false,
                    disliked: false,
                    spammed: true,
                    spams: this.state.spams + 1,
                    likes: this.state.liked ? this.state.likes - 1 : this.state.likes,
                    dislikes: this.state.disliked ? this.state.dislikes - 1 : this.state.dislikes,
                }));
            }
        });
    }

    handleDelete() {
        reviewService.deleteReview(this.props.id).then((response) => {
            alert(response.msg);
            this.props.action(this.props.imdbId);
        });
    }

    render() {
        return (
            <>
            <ReviewModal show={this.state.modalShow} onHide={this.toggleModal} reviewId={this.props.id} rating={this.props.rating} title={this.props.title} content={this.props.content} />
            <Card className="mt-2 mb-2 ml-2 mr-2">
                <Row className="mt-4">
                    <Col className="text-left ml-4"><Card.Subtitle className="text-muted">{this.props.username}</Card.Subtitle></Col>
                    <Col className="text-right mr-4"><Card.Subtitle className="text-muted">{moment(this.props.timestamp).fromNow()}</Card.Subtitle></Col>
                </Row>
                <Card.Title className="text-left ml-4 mt-3">{this.props.title}</Card.Title>
                <div className="text-left ml-4">
                    <Rater total={5} rating={this.props.rating} interactive={false}/>
                </div>
                <Card.Body className="text-left ml-4">{this.props.content}</Card.Body>
                <Row className="text-center mr-4 mb-3 mt-3">
                    <Col xs className="ml-4"><FontAwesomeIcon icon={[this.state.liked? "fas" : "far", "thumbs-up"]} size="lg" onClick={this.toggleLike}/> {this.state.likes}</Col>
                    <Col xs className="ml-4"><FontAwesomeIcon icon={[this.state.disliked? "fas" : "far", "thumbs-down"]} size="lg" onClick={this.toggleDislike}/> {this.state.dislikes}</Col>
                    <Col xs className="ml-4"><FontAwesomeIcon icon={[this.state.spammed? "fas" : "far", "times-circle"]} size="lg" onClick={this.toggleSpam}/> {this.state.spams}</Col>
                </Row>
                {   this.props.owner ? 
                    (<Card.Footer>
                        <Row>
                            <Col>
                                <Button onClick={this.toggleModal} className="mr-2" variant="outline-primary">Editar</Button>
                                <Button onClick={this.handleDelete} variant="outline-danger">Borrar</Button>
                            </Col>
                        </Row>
                    </Card.Footer>) : (<></>)

                }
            </Card>
            </>
        );
    }
}

export default Review