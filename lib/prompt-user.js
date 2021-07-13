const inquirer = require('inquirer');
const Employee = require('./Employee');
const generatePage = require('../src/page-template');
const { writeFile } = require('./generate_html');


// Global variables
const team = [];

// Follow-up prompts
const isIntern = function(employeeData) {
    inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'Please enter your school name'
        }])
        .then(schoolOutput => {
            if (!schoolOutput) {
                return;
            }
            employeeData[i].detail = schoolOutput.school;
            console.log('Intern', employeeData[i]);
            return employeeData;
        });
}

const isManager = function(employeeData) {
    inquirer.prompt([{
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
        }])
        .then(officeOutput => {
            if (!officeOutput) {
                return;
            }
            employeeData.detail = officeOutput.office.toString();
            console.log('Manager: ', employeeData);
            return employeeData;
        })
};

const isEngineer = function(employeeData) {
    inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    }]).then(githubOutput => {
        if (!githubOutput) {
            return;
        }
        employeeData.detail = githubOutput.github;
        console.log('Engineer: ', employeeData[i]);
        return employeeData;
    });
}

// Get office, github, school info
const getEmployeeSpecifics = team => {
    console.log('team', team);
    for (i = 0; i < team.length; i++) {
        if (team[i].role === 'Manager') {
            isManager(team[i]);
        } else if (team[i].role === 'Engineer') {
            isEngineer(team[i]);
        } else {
            isIntern(team[i]);
        }
    }
    return team;
}

// Prompt for employee data
const createEmployee = new Promise() => {
    if (!team.employee) {
        team.employee = [];
    }

    const response = inquirer.prompt([{
                type: 'input',
                name: 'firstName',
                message: 'Employee first name:',
                validate: firstNameInput => {
                    if (!firstNameInput) {
                        console.log('You must enter a first name.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Employee last name:',
                validate: lastNameInput => {
                    if (!lastNameInput) {
                        console.log('Please enter your last name.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select the employee role:',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter employee ID:',
                validate: idInput => {
                    if (!idInput) {
                        console.log('Employee ID is required.');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email:',
                validate: emailInput => {
                    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                    if (!emailInput) {
                        console.log('Employee email is required.');
                        return false;
                    }
                    if (emailInput.match(regex)) {
                        return true;
                    } else {
                        console.log('Please verify the email address matches the @domain.com format.')
                        return false
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
        ])
        .then(employee => {
            if (!employee.confirmAddEmployee) {
                team.push(employee);
                // return team;
            }
            team.push(employee);
            createEmployee();
        });
};



createEmployee()
    // .then(team => {
    //     console.log('success');
    //     // getEmployeeSpecifics(team);
    // }, err => {
    //     console.log('failure', err);
    // })