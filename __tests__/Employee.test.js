const Employee = require('../lib/Employee');

test('creates an manager Employee object', () => {
    const employee = new Employee('Bob', 'Newman', 'Manager', 1, 'bob.newman@mail.com', 324);

    expect(employee.firstName).toBe('Bob');
    expect(employee.lastName).toBe('Newman');
    expect(employee.role).toBe('Manager');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bob.newman@mail.com');
    expect(employee.office).toEqual(expect.any(Number));
});

test('creates an engineer Employee object', () => {
    const employee = new Employee('Bob', 'Newman', 'Engineer', 1, 'bob.newman@mail.com', 'github.com/bnewman');

    expect(employee.firstName).toBe('Bob');
    expect(employee.lastName).toBe('Newman');
    expect(employee.role).toBe('Manager');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bob.newman@mail.com');
    expect(employee.github).toBe('github.com/bnewman');
});

test('creates an intern Employee object', () => {
    const employee = new Employee('Bob', 'Newman', 'Intern', 'Intern', 1, 'bob.newman@mail.com', 'University of Utah');

    expect(employee.firstName).toBe('Bob');
    expect(employee.lastName).toBe('Newman');
    expect(employee.role).toBe('Manager');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bob.newman@mail.com');
    expect(employee.school).stringContaining('University' || 'College');
});