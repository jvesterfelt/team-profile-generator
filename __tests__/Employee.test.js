const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Bob', 'Newman', 'Manager', 1, 'bob.newman@mail.com', '234');

    expect(typeof employee.firstName).toBe(String);
    expect(typeof employee.lastName).toBe(String);
    expect(typeof employee.role).toBe(String);
    expect(typeof employee.id).toEqual(expect.any(Number));
    expect(typeof employee.email).toBe(String);
    expect(typeof employee.detail).toBe(String);
});