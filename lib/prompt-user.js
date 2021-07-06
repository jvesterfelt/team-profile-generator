const inquirer = require('inquirer');
const Employee = require('./Employee');


const createEmployee = () => {
    const office = '';
    const github = '';
    const school = '';

    return inquirer.prompt([{
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
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput === 'Manager') {
                    return inquirer.prompt([{
                        type: 'input',
                        name: 'office',
                        message: 'Enter the office number:',
                        validate: officeInput => {
                            if (!officeInput) {
                                console.log('Please enter the office number:');
                                return false;
                            }
                            office = officeInput;
                            return true;
                        }
                    }])
                } else if (roleInput === 'Engineer') {
                    return inquirer.prompt([{
                        type: 'input',
                        name: 'github',
                        message: 'Please enter employee github username:',
                        validate: githubInput => {
                            if (!githubInput) {
                                console.log('Please enter the github username.');
                                return false;
                            }
                            github = githubInput;
                            return true;
                        }
                    }])
                } else if (roleInput === 'Intern') {
                    return inquirer.prompt([{
                        type: 'input',
                        name: 'school',
                        message: 'Please enter school:',
                        validate: schoolInput => {
                            if (!schoolInput) {
                                console.log('Please enter the school');
                                return false;
                            }
                            school = schoolInput;
                            return true;
                        }
                    }])
                }
            }
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
                    return false;
                }
            }
        }
    ]).then(userInfo => {
        const employeeData = [];
        employeeData.push(userInfo);
        // employeeData.push(office);
        // employeeData.push(github);
        // employeeData.push(school);
        console.log('employeeData: ', employeeData);
    })
};

createEmployee();