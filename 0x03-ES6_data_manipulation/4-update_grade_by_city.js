export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const neededStudents = getListStudents.filter((student) => student.location === city);

  return neededStudents.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (studentGrade) {
      return { ...student, grade: studentGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
