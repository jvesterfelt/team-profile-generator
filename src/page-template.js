const { create } = require('domain');
const fs = require('fs');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// Generate Manager Card
const generateMngrCard = async function(employee) {
    if (employee.role !== 'Manager') {
        return;
    }

    let managerCard = `
        <div class="card">
            <h4 class="card-title bg-primary text-light"><i class="far fa-id-badge text-light"></i> Manager</h4>
            <div class="card-body">
                <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text">${employee.email}</p>
                <p class="card-text"><small class="text-muted">${employee.detail}</small></p>
            </div>
        </div>
`
    if (!managerCard) {
        return;
    } else {
        return managerCard;
    }
};


// Generate Engineer Cards
const generateEngCards = async function(employee) {
    if (employee.role !== 'Engineer') {
        return;
    }

    let engineerCard = `
        <div class="card">
        <h4 class="card-title bg-primary text-light"><i class="fas fa-glasses text-light"></i> Manager</h4>
            <div class="card-body">
                <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text"><small class="text-muted">Github Username: ${employee.detail}</small></p>
            </div>
        </div>
`
    if (!engineerCard) {
        return;
    } else {
        return engineerCard;
    }
};


// Generate Intern Cards
const generateInternCards = async function(employee) {
    if (employee.role !== "Intern") {
        return;
    }

    let internCard = `
                    <div class="card">
                    <h4 class="card-title bg-primary text-light"><i class="fas fa-graduation-cap text-light"></i> Manager</h4>
                        <div class="card-body">
                            <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                            <p class="card-text">${employee.id}</p>
                            <p class="card-text"><small class="text-muted">School: ${employee.detail}</small></p>
                        </div>
                    </div>
`

    if (!internCard) {
        return;
    } else {
        return internCard;
    }
};

const pageTemplate = async function(page) {
    const { managers, engineers, interns } = page;

    let pageMockup = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <title>Team Profile</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary" style="height: 175px; width: 100%;">
        <div class="col-4"></div>
        <p class="navbar-brand text-light text-center col-4" style="font-size: 50px; font-weight: bold;">My Team</p>
        <div class="col-4"></div>
    </nav>
    <main>
        <section class="row" id="manager-row">
            <div class="col-4"></div>
            <div class="col-4" id="manager-info">
                <div class="row">
                    <h3 class="text-center">Manager:</h3>
                </div>
                <div class="row" id="manager-card">
                ${ managers.map(manager => manager).join(',')}
                </div>
            </div>
            <div class="col-4"></div>
        </section>
        <section class="row" id="employee-row">
            <div class="col-12">
                <div class="row">
                    <h3 class="text-center">Employees:</h3>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="card-deck col-4" id="employee-card-deck">
                    ${ engineers.map(engineer => engineer).join(',') }
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </section>
        <section class="row" id="intern-row">
            <div class="row">
                <h3 class="text-center">Interns:</h3>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="card-deck col-4" id="intern-card-deck">
                ${ interns.map(intern => intern).join(',') }
                </div>
                <div class="col-4"></div>
            </div>
        </section>
    </main>
</body>

</html>
    `
    const indexFile = await writeFile(pageMockup);
};





module.exports = { pageTemplate, generateMngrCard, generateEngCards, generateInternCards };