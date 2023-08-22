// Import Required Module
const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} data_Path The path to the CSV data file.
 */
const countStudents = (data_Path) => {
  if (!fs.existsSync(data_Path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(data_Path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(data_Path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const student_Groups = {};
  const db_FieldNames = fileLines[0].split(',');
  const student_PropNames = db_FieldNames.slice(0, db_FieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const student_Record = line.split(',');
    const student_PropValues = student_Record.slice(0, student_Record.length - 1);
    const field = student_Record[student_Record.length - 1];
    if (!Object.keys(student_Groups).includes(field)) {
      student_Groups[field] = [];
    }
    const studentEntries = student_PropNames
      .map((propName, idx) => [propName, student_PropValues[idx]]);
    student_Groups[field].push(Object.fromEntries(studentEntries));
  }

  const total_Students = Object
    .values(student_Groups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${total_Students}`);
  for (const [field, group] of Object.entries(student_Groups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
