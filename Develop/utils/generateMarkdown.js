// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// takes user's license choice and returns badge image linking to license page
function renderLicenseBadge(license) {
console.log(license);
  switch(license) {
    case 'Apache License 2.0':
    console.log('hello');
    return "## License\n[![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case 'MIT License':
    const mitBadge = 
    `## License
    
    [![MIT License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return mitBadge;

    case 'GNU GPLv3':
    const gnuGplBadge = 
    `## License
    
    [![GNU GPLv3 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return gnuGplBadge;

    case 'I don’t want a license.':
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// passes user answers into generateREADME and returns a markdown format
const generateREADME = (answers) => {
  console.log(renderLicenseBadge(answers.license))
  const answersFormatted = 
  `# ${answers.title}
  
  ${renderLicenseBadge(answers.license[0])}
  
  ## Description

  ${answers.description}

  ## Installation Instructions

  ${answers.install}

  ## Contributions

  ${answers.contribute}

  ## Testing

  ${answers.test}
  `;

  return answersFormatted;
  // const license = answers.license
  // console.log(answers);
  // console.log(license);
  // return answers;
  // renderLicenseBadge(license);
  // renderLicenseLink(license);
  // renderLicenseSection(license);
}

// export generateREADME function 
module.exports = generateREADME;