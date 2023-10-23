const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle')
const triangle = require('./lib/triangle')
const square = require('./lib/square');

const script = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 characters:'
    },
    {
        type: 'input',
        name: 'textColor',
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
];

function init() {
    inquirer
    .prompt(script)
    .then(answer => {
        const pathway = 'logo.svg';

        const text = answer.text;
        const textColor = answer.textColor;
        const shape = answer.shape;
        const shapeColor = answer.shapeColor;

        function circleRender() {
            const shape = new circle();
            shape.setColor(shapeColor);
            
            svgTemplate = `
            <svg width="300" height="200">
                ${shape.render()}
                <text x="50%" y="52.5%" font-size="40" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
            </svg>
             `

             fs.appendFile(pathway, svgTemplate, (err) => err ? console.error('Error generating svg file') : console.log('Generated logo.svg'))
        };

        function triangleRender() {
            const shape = new triangle();
            shape.setColor(shapeColor);
            
            svgTemplate = `
            <svg width="300" height="200">
                ${shape.render()}
                <text x="150" y="125" font-size="45" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
            </svg>
             `

             fs.appendFile(pathway, svgTemplate, (err) => err ? console.error('Error generating svg file') : console.log('Generated logo.svg'))
        };
     

    
        function squareRender() {
            const shape = new square();
            shape.setColor(shapeColor);
            
            svgTemplate = `
            <svg width="300" height="200">
                ${shape.render()}
                <text x="100" y="52.5%" font-size="40" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
            </svg>
             `

             fs.appendFile(pathway, svgTemplate, (err) => err ? console.error('Error generating svg file') : console.log('Generated logo.svg'))
        };
     
     
        switch (shape) {
            case 'circle': 
                circleRender();
                break;

            case 'triangle':
                triangleRender();
                break;

            case 'square':
                squareRender();
                break;
            }

     

    })
}

init()