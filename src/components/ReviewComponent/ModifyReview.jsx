import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";
import Rater from 'react-rater';

class ModifyReview extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){

        event.preventDefault();
        alert(event.target.Titulo.value);
        alert(event.target.Contenido.value);
        alert(event.target.Valoración.value);
        /*
        fetch('direccion/v1/reviews/id',{
              
              method:'PUT',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'

            },
            body:({
              Titulo:JSON.stringify(event.target.Titulo.value),
              Contenido:JSON.stringify(event.target.Contenido.value),
              Valoracion:null //lo vas a tener que sacar de aquí

            })
        }).then(res => res.json()).then((result)=>{

          alert(result); //imprime el resultado
        },(error)=>{
          alert('Failed')
        })
        */
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
          Modificar la review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="container">

              <Row>
                <Col sm={12}>
                    <Form onSubmit={this.handleSubmit}>

                      <Form.Group controlId="Título">
                              <Form.Label> Título </Form.Label>
                              <Form.Control
                                type="text"
                                name="Titulo"
                                defaultValue={this.props.titulo}
                                placeholder="Título"
                              />

                       </Form.Group>

                      <Form.Group controlId="Contenido">
                              <Form.Label> Contenido </Form.Label>
                              <Form.Control
                                type="text"
                                name="Contenido"
                                defaultValue={this.props.contenido}
                                placeholder="Contenido"
                              />
                      </Form.Group>

                      <Form.Group controlId="Valoración">
                              <Form.Label> Valoración </Form.Label>
                              <Form.Control
                                type="text"
                                name="Valoración"
                                defaultValue={this.props.valoracion}
                                placeholder="Valoración"
                              />
                      </Form.Group>

                    <div className="text-left ml-4">
                    <Rater total={5} rating={0} interactive={true}  onRate={this.handleValoracion}/>
                    </div>

             

                      <Form.Group>
                        <Button variant="primary" type="submit">
                          Añadir cambios
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

export default ModifyReview