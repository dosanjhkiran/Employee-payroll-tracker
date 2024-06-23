// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let continueAdding = true;

  while (continueAdding) {
    const firstName = prompt("Enter the employee's First Name:");
    const lastName = prompt("Enter the employee's Last Name:");
    const salary = parseFloat(prompt("Enter the employee's Salary:"));

    if (firstName && lastName && !isNaN(salary)) {
      employees.push({ firstName, lastName, salary });
    } else {
      alert("Invalid input. Please try again.");
    }

    continueAdding = confirm("Do you want to add another employee?");
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  const averageSalaryElement = document.querySelector('#average-salary');
  averageSalaryElement.textContent = `Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "AUD"
  })}`;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  const randomEmployeeElement = document.querySelector('#random-employee');
  randomEmployeeElement.textContent = `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}, Salary: ${randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "AUD"
  })}`;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "AUD"
    });

    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);

  employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
  displayEmployees(employees);
}

addEmployeesBtn.addEventListener('click', trackEmployeeData);
