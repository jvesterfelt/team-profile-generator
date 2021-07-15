const { writeFile } = require('./lib/generate_html');
const { createEmployee } = require('./lib/prompt-user');

createEmployee()
    .then(page => writeFile(page));