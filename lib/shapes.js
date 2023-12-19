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

   return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

// Constructor and methods to generate SVG for Triangle.
class Triangle extends Shape {
    render () {
        return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
    }
}
   
// Constructor and methods to generate SVG for Square.
class Square extends Shape{
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };