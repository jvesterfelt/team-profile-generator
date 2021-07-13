const Employee = require('./Employee');
const fs = require('fs');

// Write index file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Index.html created'
            });
        });
    });
};

module.exports = { writeFile };