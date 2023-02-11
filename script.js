/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  students.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  students.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = {id:4, name:"susan", age:"20", marks:45};
  students.push(newStudent);
  console.log(students);
}

function removeFailedStudent() {
  students.forEach((student, index) => {
    if (student.marks < 50) {
      students.splice(index, 1);
    }
  });
  console.log(students);
}

function concatenateArray() {
  const newStudents = [    {id:5, name:"peter", age:"21", marks:60},     {id:6, name:"sarah", age:"19", marks:70},     {id:7, name:"mike", age:"20", marks:80}  ];
  const concatenatedArray = students.concat(newStudents);
  console.log(concatenatedArray);
}
