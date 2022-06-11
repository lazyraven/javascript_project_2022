const students = [
  { name: 'Nisha', subject: 'Javascript' },
  { name: 'Yadav', subject: 'HTML' },
];

function enrollStudent(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(student);
      console.log('student has been enrolled');
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
      // callback();
    }, 1000);
  });
}

function getStudents() {
  setTimeout(() => {
    let str = '';
    students.forEach((student) => {
      str += `<li> ${student.name}</li>`;
    });
    console.log(str);
    // document.getElementById('students').innerHTML = str;
    console.log('Students have been fetched', str);
  }, 5000);
}

let newStudent = { name: 'lazyraven', subject: 'Vue Js' };
enrollStudent(newStudent)
  .then(getStudents)
  .catch((err) => {
    console.log('some error occured', err);
  });
