// callback method
const students = [
  { name: 'Nisha', subject: 'Javascript' },
  { name: 'Yadav', subject: 'HTML' },
];

function enrollStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log('student has been enrolled');
    callback();
  }, 3000);
}

function getStudents() {
  setTimeout(() => {
    let str = '';
    students.forEach((student) => {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById('students').innerHTML = str;
    console.log('student have been fetched');
  }, 1000);
}

let newStudent = { name: 'lazyraven', subject: 'Vue Js' };
enrollStudent(newStudent, getStudents);
// getStudents();
