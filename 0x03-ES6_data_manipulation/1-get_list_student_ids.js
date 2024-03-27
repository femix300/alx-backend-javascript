export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const ids = getListStudents.map((student) => student.id);

  return ids;
}
