import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";
import { getStudents, deleteStudent } from '../services/StudentService';
import Swal from "sweetalert2";


const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }
    getStudents()
      .then(data => {
        if (mounted) {
          setStudents(data);
        }
      })
    return () => {
      mounted = false;
      setIsUpdated(false);
    }
  }, [isUpdated, students])

  const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  // const handleDelete = (e, studentId) => {
  //   if (window.confirm('Are you sure ?')) {
  //     e.preventDefault();
  //     deleteStudent(studentId)
  //       .then((result) => {
  //         alert(result);
  //         setIsUpdated(true);
  //       },
  //         (error) => {
  //           alert("Failed to Delete Student");
  //         })
  //   }
  // };

  const deleteTodo = (studentId) => {

    console.log(studentId)
        deleteStudent(studentId)
            .then(() => {
                Swal.fire("Supprimé!", "", "success");
                setIsUpdated(true);
            })
            .catch((error) => Swal.fire("Erreur", error.toString(), "error"));
};

  function handleDelete(e, studentId) {
    e.preventDefault();
    Swal.fire({
        title: "Etes-vous sûre?",
        text: "Cette action est irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Annuler",
        confirmButtonText: "Supprimer",
    }).then((result) => {
        if (result.isConfirmed) {
            deleteTodo(studentId);
        }
    });
}

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row" >
        <p id="manage"></p>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Ajout etudiant
          </Button>
          <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModal>
        </ButtonToolbar>
        <br />
        <br />

        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th >ID</th>
              <th>NOM</th>
              <th>PRENOM</th>
              <th>NIVEAU</th>
              <th>MATIERE</th>
              <th>MATRICULE</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) =>

              <tr key={stu.Id}>
                <td>{stu.Id}</td>
                <td>{stu.nom}</td>
                <td>{stu.prenom}</td>
                <td>{stu.niveau}</td>
                <td>{stu.matiere}</td>
                <td>{stu.matricule}</td>
                <td>{stu.date}</td>
                <td>{stu.status}</td>
                <td>

                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event, stu.Id)}>
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event, stu)}>
                    <FaEdit />
                  </Button>
                  <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                    onHide={EditModelClose}></UpdateStudentModal>
                </td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Manage;