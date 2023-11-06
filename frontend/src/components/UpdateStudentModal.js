import React, { Component } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';

const UpdateStudentModal = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.studentId, e.target)
            .then(
                (result) => {
                    alert(result);
                    props.setUpdated(true);
                    props.onHide(); // Fermer le modal après la mise à jour
                },
                (error) => {
                    alert('Failed to Update Student');
                }
            );
    };

    return (
        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modification information Etudiant
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                name="nom"
                                required
                                defaultValue={props.student.nom}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="prenom">
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control
                                type="text"
                                name="prenom"
                                required
                                defaultValue={props.student.prenom}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="niveau">
                            <Form.Label>Niveau</Form.Label>
                            <Form.Control
                                type="text"
                                name="niveau"
                                required
                                defaultValue={props.student.niveau}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="matiere">
                            <Form.Label>Matiere</Form.Label>
                            <Form.Control
                                type="text"
                                name="matiere"
                                required
                                defaultValue={props.student.matiere}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="matricule">
                            <Form.Label>Matricule</Form.Label>
                            <Form.Control
                                type="text"
                                name="matricule"
                                required
                                defaultValue={props.student.matricule}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="date"
                                required
                                defaultValue={props.student.date}
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type="text"
                                name="status"
                                required
                                defaultValue={props.student.status}
                                placeholder=""
                            />
                        </Form.Group>
                        <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Modifier
                        </Button>
                        <Button variant="danger" onClick={props.onHide}>
                        Annuler
                    </Button>
                    </Modal.Footer>
                    </Form>
                </Modal.Body>
        
            </Modal>
        </div>
    );
};

export default UpdateStudentModal;
