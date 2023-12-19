let inquirer;

// Function to prompt user input.
async function promptUser() {
    // Ensure inquirer is loaded
    if (!inquirer) {
        console.error("Inquirer module not loaded");
        return;
    }

    // Uses the inquirer to prompt for text, text color, shape, and shape color.
}



// Loads inquirer dynamically.
import('inquirer').then(module => {
    inquirer = module.default;
    main(); // Calls the main after inquirer is loaded.
}).catch(error => {
    console.error("Failed to load inquirer:", error);
});
