export default function getStudentsByLocation(student, city) {
  return student.filter((objects) => objects.location === city);
}
