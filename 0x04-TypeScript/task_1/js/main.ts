export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export default function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface
}

export interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassInterface {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomeWork(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }

}