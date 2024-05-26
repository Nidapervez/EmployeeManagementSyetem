#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("*****WELCOME TO EMPLOYEE MANAGEMENT SYSYTEM******"))

let EMPLOYEES = [];

let condition = true;

while (condition) {
    let collectionOfEmployee: any = await inquirer.prompt([
        {
            message: chalk.bgMagenta("Enter Employee Name"),
            type: "string",
            name: "EmployeeName"
        },
        {
            message: chalk.bgMagenta("Enter Employee ID"),
            type: "string",
            name: "EmployeeID"
        },
        {
            message: chalk.bgMagenta("Enter Salary"),
            type: "string",
            name: "EmployeeSalary"
        },
        {
            message: chalk.bgMagenta("Do you want to add more employees?"),
            type: "confirm",
            name: "moreEmployee",
            default: false
        }
    ]);

    EMPLOYEES.push(collectionOfEmployee);
    condition = collectionOfEmployee.moreEmployee;
    console.log(chalk.green("Employee added successfully."));
    console.log(chalk.yellow("Updated Employee List:"), EMPLOYEES);
}

let filterBySalary: any = await inquirer.prompt([
    {
        message: chalk.bgBlue("Enter Salary to filter the employees"),
        type: "number",
        name: "EmployeeSalaryfilter"
    }
]);

let filteredBySalary: any = EMPLOYEES.filter(employee => parseInt(employee.EmployeeSalary) >= filterBySalary.EmployeeSalaryfilter);
console.log(chalk.bgBlue("Employees filtered by salary:"), filteredBySalary);

let filterByID: any = await inquirer.prompt([
    {
        message: chalk.bgCyan("Enter ID to filter the employees"),
        type: "string",
        name: "EmployeeIDfilter"
    }
]);

let filteredByID: any = EMPLOYEES.filter(employee => parseInt(employee.EmployeeID) >= filterByID.EmployeeIDfilter);
console.log(chalk.bgCyan("Employees filtered by ID:"), filteredByID);

let delete1: any = await inquirer.prompt([
    {
        message: chalk.bgRed("Enter the ID you want to delete?"),
        type: "input",
        name: "EmployeeDelete"
    }
]);

EMPLOYEES = EMPLOYEES.filter((employee: any) => employee.EmployeeID !== delete1.EmployeeDelete);
console.log(chalk.bgRed("Employee deleted successfully."));
console.log(chalk.yellow("Updated Employee List:"), EMPLOYEES);
