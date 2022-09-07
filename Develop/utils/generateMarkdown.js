// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      // append badge to README [![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    break;
    case 'MIT License':
      // append badge to README [![MIT License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    break;
    case 'GNU GPLv3':
      // append badge to README [![GNU GPLv3 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    break;
    case 'I don’t want a license.':
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateREADME = (content) => {
  const license = content.license
  console.log(content);
  console.log(license);
  // `# ${content.title}`
  // renderLicenseBadge(license);
  // renderLicenseLink(license);
  // renderLicenseSection(license);
}

module.exports = generateREADME;