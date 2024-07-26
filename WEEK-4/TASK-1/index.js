const employees = [
    { name: 'smitha', age: 20, department: 'Sales', salary: 5000 },
    { name: 'kiran', age: 27, department: 'IT', salary: 4000 },
    { name: 'ram', age: 21, department: 'entertainment', salary: 6000 },
    { name: 'charan', age: 32, department: 'agricultural', salary: 5500},
  ];

  // caluculating average 
function calculateAvg(employees) {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
      totalSalary += employees[i].salary;
    }
    return totalSalary / employees.length;
  }


  //finding employees by department 
  function findEmployeesByDepartment(employees, department) {
    const result = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].department === department) {
        result.push(employees[i]);
      }
    }
    return result;
  }
  //increase in salaries
  function increaseSalaries(employees, percentage) {
    for (let i = 0; i < employees.length; i++) {
      employees[i].salary += employees[i].salary * (percentage / 100);
    }
    return employees;
  }
// sorting age in ascending order
function sortEmployeesByAge(employees) {
    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        if (employees[i].age > employees[j].age) {
          let temp = employees[i];
          employees[i] = employees[j];
          employees[j] = temp;
        }
      }
    }
    return employees;
  }
  
console.log(calculateAvg(employees));// average of employees 5125
const salesEmployees = findEmployeesByDepartment(employees, "Sales");// finds employees by dep
console.log(salesEmployees);

const increasedEmployees = increaseSalaries(employees, 10);// increases salaries for  employee 

console.log(increasedEmployees);

console.log(sortEmployeesByAge(employees));// sorts employees by age


