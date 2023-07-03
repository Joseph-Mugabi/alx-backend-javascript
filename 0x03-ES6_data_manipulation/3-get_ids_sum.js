export default function getStudentIdsSum(listStudents) {
  if (!(listStudents instanceof Array)) {
    return 0;
  }
  const sum = listStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}
