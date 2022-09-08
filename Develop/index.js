// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// genMark returns the generateREADME function that was exported 
const genMark = require('./utils/generateMarkdown')

// inquirer questions for user input
inquirer 
    .prompt([
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
            choices: [
            'Apache License 2.0', 
            'MIT License', 
            'GNU GPLv3', 
            'I don’t want a license.'
            ],
        },
  ])

  .then((answers) => {

    // prompt answers as values in generateREADME function
    const mdContent = genMark(answers);
    console.log(mdContent);
    fs.writeFile('README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// TODO: Create a function to initialize app

// Function call to initialize app
// init();

