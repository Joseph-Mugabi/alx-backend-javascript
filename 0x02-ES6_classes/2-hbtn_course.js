export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); }
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    if (!Array.isArray(students)) { throw new TypeError('Students must be an array'); }

    for (const student of students) {
      if (typeof student !== 'string') { throw new TypeError('students must contain strings'); }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(name) {
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = length;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) { throw new TypeError('Students must be an array'); }
    for (const element of newStudents) {
      if (typeof element !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = newStudents;
  }
}
