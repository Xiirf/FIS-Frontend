import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

class AddReview extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
      event.preventDefault();
      alert(event.target.Titulo.value);
      alert(event.target.Contenido.value);
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
          Crear una review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="container">
              <Row>
                <Col sm={6}>

                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="Título">
                              <Form.Label> Título </Form.Label>
                              <Form.Control
                                type="text"
                                name="Titulo"
                                required
                                placeholder="Título"
                              />

                      </Form.Group>
                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Añadir título
                        </Button>
                      </Form.Group>

                  </Form>
                </Col>


                <Col sm={5}>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="Contenido">
                              <Form.Label> Contenido </Form.Label>
                              <Form.Control
                                type="text"
                                name="Contenido"
                                required
                                placeholder="Contenido"
                              />
                      </Form.Group>
                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Añadir Contenido
                        </Button>
                      </Form.Group>
                  </Form>
                </Col>


                <Col sm={4}>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="Valoración">
                              <Form.Label> Valoración </Form.Label>
                              <Form.Control
                                type="text"
                                name="Valoración"
                                required
                                placeholder="Valoración"
                              />
                      </Form.Group>
                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Añadir Valoración
                        </Button>
                      </Form.Group>
                  </Form>
                </Col>

              </Row>
          </div>

      </Modal.Body>
      <Modal.Footer>  
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>


        );
    }



}
export default AddReview