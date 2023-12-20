// Class for shapes with constructor.This elements initialize the text, text color, and shape color properties.
class Shape {
constructor () {
    this.text = '';
    this.textColor = '';
    this.color = '';
}
setText (text) {
    this.text = text;
}
setTextColor(color) {
    this.textColor = color;
}
setColor(color) {
    this.color = color;
}
}

// Constructor and methods to generate SVG for Circle. Had to play around a lot with the text height and width for each of the three shapes.
class Circle extends Shape {
    render () {
        const svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="${this.color}" />
            <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
        </svg>
    `;
        return svgCode;
    }
}

// Constructor and methods to generate SVG for Triangle. The triangle has different properties than the circle so that the text can display inside of the triangle, like the polygon points and text width being different than the circle.
class Triangle extends Shape {
    render() {
        // This svg code will generate the Triangle to have the text fit inside the middle. Polygon points create the SVG triangle shape.
        const svgCode = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 185,185 10,185" fill="${this.color}" />
                <text x="100" y="115" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
            </svg>
        `;

        return svgCode;
    }
}
// Constructor and methods to generate SVG for Square. Had to change the width and vertical position with the text so it would be centered.
class Square extends Shape{
    render() {
        const svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="150" height="150" fill="${this.color}" />
            <text x="122.5" y="125" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
        </svg>
    `;
        return svgCode;
    }
}
module.exports = { Circle, Triangle, Square }; // Export for shape classes.