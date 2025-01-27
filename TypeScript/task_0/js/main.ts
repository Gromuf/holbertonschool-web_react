// task 0

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "bob",
	lastName: "bob",
	age: 1,
	location: "NY",
};

const student2: Student = {
	firstName: "boby",
	lastName: "boby",
	age: 2,
	location: "LA",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableHeader = document.createElement("tr");
const header1 = document.createElement("th");
const header2 = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);