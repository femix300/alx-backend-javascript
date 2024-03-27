export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.filter((student) => student.location === city);
}
