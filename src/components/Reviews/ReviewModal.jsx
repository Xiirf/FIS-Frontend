import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";
import Rater from 'react-rater';
import { reviewService } from '../../_services/review.service';

class ReviewModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating: this.props.rating || 0
        }

        this.handleValoracion=this.handleValoracion.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){

        event.preventDefault();
        if (localStorage.getItem("currentToken")) {
          if(this.props.reviewId) {
            reviewService.updateReview(this.props.reviewId, this.state.rating, event.target.Titulo.value, event.target.Contenido.value).then((response) => {
              alert(response.msg);
              window.location.reload();
            });
          } else {
            reviewService.createReview(this.props.resourceId, this.state.rating, event.target.Titulo.value, event.target.Contenido.value).then((response) => {
              alert(response.msg);
              this.props.action(this.props.resourceId);
            });
          }
            
        } else {
            alert("Debes haber iniciado sesión primero!");
        }
        
    }

    handleValoracion(e) {
        this.setState({
            rating: e.rating
        });
    }


    render(){
        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Valoración
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="container">

              <Row>
                <Col sm={12}>
                    <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="Valoración">
                            <Form.Label>Puntuación </Form.Label>
                            <br/>
                            <Rater total={5} rating={this.state.rating} interactive={true}  onRate={this.handleValoracion}/>
                    </Form.Group>

                      <Form.Group controlId="Título">
                              <Form.Label> Título </Form.Label>
                              <Form.Control
                                type="text"
                                name="Titulo"
                                defaultValue={this.props.title}
                                placeholder="Título"
                              />

                       </Form.Group>

                      <Form.Group controlId="Contenido">
                              <Form.Label> Contenido </Form.Label>
                              <Form.Control
                                type="text"
                                name="Contenido"
                                defaultValue={this.props.content}
                                placeholder="Contenido"
                              />
                      </Form.Group>

                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Guardar
                        </Button>
                      </Form.Group>

                   </Form>
                </Col>
              </Row>
          </div>

      </Modal.Body>
      <Modal.Footer>  
        <Button variant="danger" onClick={this.props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>


        );
    }

}

export default ReviewModal