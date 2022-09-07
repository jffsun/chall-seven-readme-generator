// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
   return inquirer .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your application.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How does the user install your application? Provide a step-by-step description.',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Include guidelines for other developers who would like to contribute to your application.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide examples on how to run the tests you built for your application.',
        },
        {
            type: 'checkbox',
            message: 'Which license will you use for your application?',
            name: 'license',
            choices: ['Apache License 2.0', 'MIT License', 'GNU GPLv3', 'I don’t want a license.'],
        },
      
    ]);
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((content) => fs.writeFileSync('README.md', generateREADME(content)))
    .then(() => console.log('README successfully generated!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
