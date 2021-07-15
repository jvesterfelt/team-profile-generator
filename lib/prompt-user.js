const inquirer = require('inquirer');
const Employee = require('./Employee');
const { pageTemplate, generateMngrCard, generateEngCards, generateInternCards } = require('../src/page-template');


const page = {
    managers: [],
    engineers: [],
    interns: []
};

// Get office, github, school info
const getEmployeeSpecifics = async function(employees) {
    if (employees.role === 'Manager') {
        // isManager(employees);
        const response = await inquirer.prompt([{
                    type: 'input',
                    name: 'office',
                    message: 'What is your office number?',
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
            ])
            .then(specifics => {
                if (!specifics) {
                    return employees;
                }
                employees.detail = specifics.office.toString();
                employees.confirmAddEmployee = specifics.confirmAddEmployee;
                return employees;
            })
            .then(employees => {

                if (!employees.confirmAddEmployee) {
                    // pageTemplate(page);
                    return;
                }
                createTeam();
            });
        generateMngrCard(employees)
            .then(mngrCardsArr => {
                page.managers.push(mngrCardsArr);
                return;
            })
            .then(theseResults => {
                pageTemplate(page);
            });
    } else if (employees.role === 'Engineer') {
        // isEngineer(employees);
        const response = await inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: 'Please enter your github username',
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
            ]).then(specifics => {
                if (!specifics) {
                    return employees;
                }
                employees.detail = specifics.github;
                employees.confirmAddEmployee = specifics.confirmAddEmployee;
                return employees;
            })
            .then(employees => {
                if (!employees.confirmAddEmployee) {
                    // pageTemplate(page);
                    return;
                }
                createTeam();
            });
        generateEngCards(employees)
            .then(engCardsArr => {
                page.engineers.push(engCardsArr);
                return;
            })
            .then(theseResults => {
                pageTemplate(page);
            });
    } else if (employees.role === 'Intern') {
        // isIntern(employees);
        const response = await inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Please enter your school name'
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add another employee?',
                    default: false
                }
            ])
            .then(specifics => {
                if (!specifics) {
                    return employees;
                }
                employees.detail = specifics.school;
                employees.confirmAddEmployee = specifics.confirmAddEmployee;
                return employees;
            })
            .then((employees) => {
                if (!employees.confirmAddEmployee) {
                    // pageTemplate(page);
                    return;
                }
                createTeam();
            });
        generateInternCards(employees)
            .then(internCardsArr => {
                page.interns.push(internCardsArr);
                return;
            })
            .then(theseResults => {
                pageTemplate(page);
            });
    }
}

// Prompt for employee data
const createTeam = async() => {

    const response = await inquirer.prompt([{
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
        ])
        .then(employees => {
            getEmployeeSpecifics(employees);
        });
};


module.exports = { createTeam };