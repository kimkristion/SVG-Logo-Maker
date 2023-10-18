const inquirer = require('inquirer');
const fs = require('fs');

const script = [
    {
        type: 'input',
        name: 'txt',
        message: 'Please enter 3 characters:'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Enter color for text (keyword or hexidecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color for shape (keyword or hexidecimal):'
    }
]