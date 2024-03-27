export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  return getListStudents.reduce((sum, student) => sum + student.id, 0);
}
