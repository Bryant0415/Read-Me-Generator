// TODO: Include packages needed for this application
const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");




// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          return false;
        }
        
    }
},

{
  type: 'input',
  message: 'Please provide a description of your project:',
  name: "description",
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: 'input',
  name: 'installation',
  message: 'Is installation required for your project?',
  validate: installationInput => {
      if (installationInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'usage',
  message: 'Explain how your project is used:',
  validate: usageInput => {
      if (usageInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'list',
  name: 'license',
  message: 'Which license does your project use?',
  choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0', 'Boost Software License 1.0'],
  validate: licenseInput = () => {
      if (licenseInput) {
          return true;
      } else {
          return false;
          }
  }
},
{
  type: 'input',
  message: "If applicable, please explain how other developers can contribute to your project:",
  name: 'contributing'
},
{
  type: 'input',
  message: "If applicable, please explain how to test this project:",
  name: 'tests'
},
{
  type: 'input',
  name: 'username',
  message: 'Please provide your GitHub username:',
  validate: usernameInput => {
      if (usernameInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'Please provide your email address:',
  validate: emailInput => {
      if (emailInput) {
          return true;
      } else {
          return false;
      }
  }
}
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./generatedREADME.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true
          });
      });
  });
};

// function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(function(answer) {
          console.log(answer);
      var fileContent = generateMarkdown(answer);
      writeToFile(fileContent)
      });
}

init();

module.exports = questions;