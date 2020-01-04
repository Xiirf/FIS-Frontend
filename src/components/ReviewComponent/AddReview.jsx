import React from 'react';
import {Modal,Button,Row,Col,Form} from "react-bootstrap";

class AddReview extends React.Component{
    constructor(props){
        super(props);
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
              Añadir campos para nueva review
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