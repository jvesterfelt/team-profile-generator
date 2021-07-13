const generateHtml = require('../lib/generate_html');

// Generate Manager Card
const generateMngrCard = function(employee, office) {

    return `
<div class="col-4"></div>
<div class="col-4" id="manager-info">
    <div class="row">
        <h3 class="text-center">Manager:</h3>
    </div>
    <div class="row" id="manager-card">
        <div class="card">
            <h4 class="card-title bg-primary text-light"><i class="far fa-id-badge text-light"></i> Manager</h4>
            <div class="card-body">
                <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text">${employee.email}</p>
                <p class="card-text"><small class="text-muted">${office}</small></p>
            </div>
        </div>
    </div>
</div>
<div class="col-4"></div>
`
};


// Generate Engineer Cards
const generateEngCards = (employee, github) => {
    return `
<div class="col-12">
<div class="row">
    <h3 class="text-center">Employees:</h3>
</div>
<div class="row">
    <div class="col-4"></div>
    <div class="card-deck col-4" id="employee-card-deck">
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${employee.id}</p>
                <p class="card-text"><small class="text-muted">Github Username: ${github}</small></p>
            </div>
        </div>
    </div>
    <div class="col-4"></div>
</div>
</div>
`
};


// Generate Intern Cards
const generateInternCards = (employee, school) => {
    return `
<div class="row">
                <h3 class="text-center">Interns:</h3>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="card-deck col-4" id="intern-card-deck">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${employee.firstName} ${employee.lastName}</h5>
                            <p class="card-text">${employee.id}</p>
                            <p class="card-text"><small class="text-muted">School: ${school}</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
`
};

module.exports = (employee, office, github, school) => {
    const { firstName, lastName, ...email } = employee;
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=", initial-scale=1.0">
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
           ${generateMngrCard(employee, office)};
        </section>
        <section class="row" id="employee-row">
           ${generateEngCards(employee, github)};
        </section>
        <section class="row" id="intern-row">
            ${generateInternCards(employee, school)};
        </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
</body>

</html>
    `
};