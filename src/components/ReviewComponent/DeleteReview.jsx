import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

class DeleteReview extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){ //será necesario que pongas this.props.id

        event.preventDefault();
        alert('Borrada');
        /*
        fetch('direccion/v1/reviews/'+this.props.id,{
              
              method:'DELETE',
              headers:{
                  'Accept':'application/json',
                   'Content-Type':application/json'
            },
            body:JSON.stringify({
              id:this.props.id
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