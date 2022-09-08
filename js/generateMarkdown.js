// takes user's license choice and returns badge image linking to license page
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
    return "## License\n[![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)\n\nThis application is covered under Apache License 2.0.";

    case 'MIT License':
    return "## License\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\nThis application is covered under the MIT License.";
 

    case 'GNU GPLv3':
    return "## License\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\nThis application is covered under GNU GPLv3.";
    
    case 'I don’t want a license.':
    return '';
  };
}

// passes user answers into generateREADME and returns answers in markdown format
const generateREADME = (answers) => {
  const answersFormatted = 
  `# ${answers.title}
  
  ${renderLicenseBadge(answers.license[0])}

  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Description

  ${answers.description}

  ## Installation

  ${answers.install}

  ## Usage

  ${answers.usage}

  ## Contributions

  ${answers.contribute}

  ## Testing

  ${answers.test}

  ## Questions

  If you have additional questions, please feel free to reach me at ${answers.email}.

  Feel free to check out my GitHub if you'd like to view more of my work!
  [https://github.com/${answers.github}](https://github.com/${answers.github})`;
  // returns answersFormatted string to be written to file
  return answersFormatted;
}

// export generateREADME function 
module.exports = generateREADME;