export default function updateStudentGradeByCity(listStudents, city, newGrade) {
  const students = listStudents.filter((object) => (object.location === city));
  return students.map((object) => {
    const newObject = { ...object };
    newObject.grade = 'N/A';
    for (const grade of newGrade) {
      if (newObject.id === grade.studentId) {
        newObject.grade = grade.grade;
      }
    }
    return newObject;
  });
}
