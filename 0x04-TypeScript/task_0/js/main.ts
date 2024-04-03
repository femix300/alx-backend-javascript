export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Oladimeji',
    lastName: 'Ayomide',
    age: 22,
    location: 'Ibadan'
}

const student2: Student = {
    firstName: 'Mike',
    lastName: 'Andler',
    age: 21,
    location: 'North Carolina'
}

const studentList: Array<Student> = [student1, student2];


export const addStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headerRow);

    headerRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headerRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

    for (const student of students) {
        const studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        table.insertAdjacentElement('beforeend', studentRow);
    }

    document.body.insertAdjacentElement('beforeend', table);
}

addStudents(studentList);
