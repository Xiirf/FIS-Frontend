import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

class DeleteReview extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){

        event.preventDefault();
        alert('Borrada');
        /*
        fetch('direccion/v1/reviews/imdbId',{
              
              method:'POST',
              headers:{'Accept':'application/json',
            },
            body:JSON.stringify({
              Titulo:event.target.Titulo.value,
              Contenido:event.target.Contenido.value,
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
                    Borrar una review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        ¿Seguro que quiere borrar la review?
                </Modal.Body>

                <Modal.Footer>  
                    <Button variant="danger" onClick={this.handleSubmit}> Borrar Review </Button>
                    <Button variant="primary" onClick={this.props.onHide}>Cancelar</Button>
                </Modal.Footer>
                </Modal>

        );
    }

}
export default DeleteReview