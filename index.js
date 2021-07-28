// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function checkIfBlank(input) {
    if (input === '') {
        return 'Answers cannot be blank!';
    } else {
        return true;
    }
}

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'Please give a description of your project:',
        name: 'description',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project:',
        name: 'installation',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'Please enter usage information for your project:',
        name: 'usage',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'Please enter any contribution guidelines for your project:',
        name: 'contribution',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'Please enter any tests for your project here:',
        name: 'tests',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
        validate: checkIfBlank
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: checkIfBlank
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
   inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });
}

// Function call to initialize app
init();
