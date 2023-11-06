import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/StudentService';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Student");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Information des etudiants
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nom">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" name="nom" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="prenom">
                                    <Form.Label>Prenom</Form.Label>
                                    <Form.Control type="text" name="prenom" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="niveau">
                                    <Form.Label>Niveau</Form.Label>
                                    <Form.Control type="text" name="niveau" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="matiere">
                                    <Form.Label>Matiere</Form.Label>
                                    <Form.Control type="text" name="matiere" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="matricule">
                                    <Form.Label>Matricule</Form.Label>
                                    <Form.Control type="text" name="matricule" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" name="date" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="status">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control type="text" name="status" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                            <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Ajouter
                        </Button>
                        <Button variant="danger" onClick={props.onHide}>
                        Annuler
                    </Button>
                    </Modal.Footer>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
              
            </Modal>
        </div>
    );
};

export default AddStudentModal;