// Used let for inquirer because it will be declared as another value in the import section at the bottom of our code.
let inquirer;
const fs = require('fs'); // FS module for file operations.
const { Circle, Triangle, Square } = require('./lib/shapes'); // Imports shape classes, values won't change.

// Function to prompt user input.
async function promptUser() {
    // Ensures that the inquirer mod is loaded.
    if (!inquirer) {
        console.error("Inquirer module not loaded");
        return;
    }

    // Uses the inquirer to prompt the user for input in the command line. This includes text, text color, shape, shape color.
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 && input.length > 0
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):' 
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
            message: 'Enter the shape color (keyword or hex):'
        }
    ]);
}

// Function to generate and save the SVG and the user input.
function generateSVG(shapeType, textColor, text, shapeColor) {
    // Uses the shape classes to create the SVG string.
    let shape;
    switch (shapeType) {
        case 'circle':
            shape = new Circle();
            break;
            case 'triangle':
                shape = new Triangle();
                break;
                case 'square':
                    shape = new Square();
                    break;
                    default:
                        throw new Error('Invalid shape type'); // Handles invalid shape input.
    }
    shape.setText(text);
    shape.setTextColor(textColor);
    shape.setColor(shapeColor);

    // Returns the generated SVG code.
    return shape.render();
}

// Main function to run the application. userInput collects the input using the promptUser function. Generate SVG is based on the input in the command line and saves it to "logo.svg."
async function main() {
    try {
    const userInput = await promptUser();
    if (!userInput) {
        throw new Error('User input was not obtained.');
    }
    const svg = generateSVG(userInput.shape, userInput.textColor, userInput.text, userInput.shapeColor);
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
    } catch (error) {
        console.error("error in main function:", error);
    }
}


// Loads inquirer dynamically. Module.default assigns the inquirer module and console.error handles module loading errors.
import('inquirer').then(module => {
    inquirer = module.default;
    main(); // Calls the main after inquirer is loaded.
}).catch(error => {
    console.error("Failed to load inquirer:", error);
});
