// Class for shapes with constructor.
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

// Constructor and methods to generate SVG for Circle.
class Circle extends Shape {
    render () {
        return `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
        </svg>
    `;
}
}

// Constructor and methods to generate SVG for Triangle.
class Triangle extends Shape {
    render () {
        return `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,15 100,100 0,100" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
        </svg>
    `;
}
} 
// Constructor and methods to generate SVG for Square.
class Square extends Shape{
    render() {
        return `
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" x="50" y="50" fill="${this.color}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.text}</text>
            </svg>
        `;
    }
}
module.exports = { Circle, Triangle, Square };