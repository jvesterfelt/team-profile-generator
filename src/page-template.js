const fs = require('fs');


// Generate Manager Card
const generateMngrCard = function(employee) {

    return `
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
};


// Generate Engineer Cards
const generateEngCards = (employee) => {
    return `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text"><small class="text-muted">Github Username: ${employee.detail}</small></p>
            </div>
        </div>
`
};


// Generate Intern Cards
const generateInternCards = (employee) => {
    return `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                            <p class="card-text">${employee.id}</p>
                            <p class="card-text"><small class="text-muted">School: ${employee.detail}</small></p>
                        </div>
                    </div>
`
};

const pageTemplate = (employees) => {
    page = `
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
                ${ generateMngrCard(employees)}
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
                    ${ generateEngCards(employees) };
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
                ${ generateInternCards(employees) }
                </div>
                <div class="col-4"></div>
            </div>
        </section>
    </main>
</body>

</html>
    `
};



module.exports = { pageTemplate };