import axios from 'axios';

export function getStudents() {
  return axios.get('http://localhost:8000/etudiants/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete(`http://localhost:8000/etudiant/${studentId}`)
  //.then(response => response.data)
}

export function addStudent(student){
  console.log(student.value, student.prenom, student.niveau, student.matiere, student.matricule, student.date, student.status)
  return axios.post('http://localhost:8000/etudiant/', {
    nom:student.nom.value,
    prenon:student.prenom.value,
    niveau:student.niveau.value,
    matiere:student.matiere.value,
    matricule:student.matricule.value,
    date:student.date.value,
    status:student.status.value,
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://192.168.49.2:30984/students/' + stuid + '/', {
    nom:student.nom.value,
    prenom:student.prenom.value,
    niveau:student.niveau.value,
    matiere:student.matiere.value,
    matricule:student.matricule.value,
    date:student.date.value,
    status:student.status.value,
  })
   .then(response => response.data)
}

