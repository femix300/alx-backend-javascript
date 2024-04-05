export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

export default function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number') {
        if (salary < 500) {
            return new Teacher();
        }
    }
    return new Director();
}

export function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Subjects = "Math" | "History"

export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return 'Teaching Math';
    }

    return 'Teaching History';
}

