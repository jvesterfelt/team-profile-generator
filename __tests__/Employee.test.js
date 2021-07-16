const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employeeObj = {
        firstName: 'Bob',
        lastName: 'Newman',
        role: 'Manager',
        id: 234,
        email: 'bnewman@email.com',
        detail: '435'
    };

    const employee = new Employee(employeeObj);

    // console.log('employee', employee);

    expect(employee.firstName).toBe('Bob');
    expect(employee.lastName).toBe('Newman');
    expect(employee.role).toBe('Manager');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.detail).toEqual(expect.any(String));
});