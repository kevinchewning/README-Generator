// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please give a description of your project:',
        name: 'description',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project:',
        name: 'installation',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter usage information for your project:',
        name: 'usage',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter any contribution guidelines for your project:',
        name: 'contribution',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter any tests for your project here:',
        name: 'tests',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (input) => {
            if (input === '') {
                return 'Answers cannot be blank!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'What type of license will you be using for your project?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'none'],
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    var data;

    inquirer
        .prompt(questions)
        .then((response) => {
            data = response;
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();
