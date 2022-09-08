const inquirer = require('inquirer');
const fs = require('fs');

// genMark returns the exported generateREADME function
const genMark = require('./generateMarkdown')

// inquirer prompts for user input
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
            name: 'usage',
            message: 'Explain why your application is useful and how it should be used.',
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
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
  ])

  .then((answers) => {

    // prompt answers as values in generateREADME function
    const mdContent = genMark(answers);

    fs.writeFile('README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });