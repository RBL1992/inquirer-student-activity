const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages'
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'communication'
        },
    ])
    .then((response) => {
        JSON.stringify(response);
        fs.writeFile('log.txt', JSON.stringify(response), (err)=>
        err ? console.error(err) : console.log('Received!'));
    })