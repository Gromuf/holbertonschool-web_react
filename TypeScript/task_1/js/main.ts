// task 1

interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };

console.log(teacher3);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	const x = firstName.charAt(0).toUpperCase();
	return `${x}. ${lastName}`;
}

console.log(printTeacher("Jhon", "Doe"));

interface studentInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements studentInterface {
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

const student1 = new StudentClass('Jane', 'Smith');

console.log(student1.displayName());
console.log(student1.workOnHomework());
