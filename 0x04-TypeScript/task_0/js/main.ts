interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student0: Student = {
  firstName: 'Joseph',
  lastName: 'Green',
  age: 20,
  location: 'San Franciso'
}

const student1: Student = {
  firstName: 'Joylyn',
  lastName: 'Mary',
  age: 18,
  location: 'Kampala-Uganda'
}

const studentsList: Student[] = [student0, student1];

const table = document.createElement('table');
const table_body = document.createElement('table_body');

table.appendChild(table_body);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table_body.appendChild(row);
});

document.body.appendChild(table);
