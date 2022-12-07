var badge; 
var licenseLink;
var licenseSection;
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license === 'Apache 2.0'){
  badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
} else if (license === 'MIT'){
  badge = '![License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
} else if( license === "GPL v3.0"){
  badge = '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)'
} else if (license === "Boost Software License 1.0"){
  badge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
} else {
  badge = '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache 2.0'){
    licenseLink = '![Apache 2.0 Link](http://www.apache.org/licenses/LICENSE-2.0)'
  } else if (license === 'MIT'){
    licenseLink = '![MIT Link](https://choosealicense.com/licenses/mit/)'
  } else if( license === "GPL v3.0"){
    licenseLink = '![License](https://www.gnu.org/licenses)'
  } else if (license === "Boost Software License 1.0"){
    licenseLink = '![Boost Software License 1.0 Link](https://www.boost.org/LICENSE_1_0.txt)'
  } else {
    licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
  if(license ==='None'){
    licenseSection = ''
  } else {
    licenseSection = `${data.license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description

${data.description}
# ${data.license}
          

# Table of Contents:
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributors](#contributors)
 * [Tests](#tests)
 * [Questions](#questions)

# Installation:
${data.installation}
# Usage:
${data.usage}
# Contributors:
${data.contributing}
# Tests:
${data.tests}
# Questions:
If you have any questions, you may contact me at either
GitHub: https://github.com/${data.username}
or
Email: ${data.email}
`;


}

module.exports = generateMarkdown;
