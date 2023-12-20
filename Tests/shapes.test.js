const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Circle', () => {
    test('creates a circle SVG with specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toContain('<circle');
        expect(circle.render()).toContain('fill="red"');
    });
    // Const circle creates a new circle, setting it to red and verifying the rendered SVG contains a circle element with the fill red attribute in the expect method.

    // Test for the default color (I did not set a default color, this test creates a circle without a color).
    test('creates a circle SVG with default color when no color is set', () => {
        const circle = new Circle();
        expect(circle.render()).toContain('<circle');
        expect(circle.render()).toContain('fill=""'); 
    });


});
// Creates the triangle, uses polygon elements with the fill attribute at blue. 
describe('Triangle', () => {
    test('creates a triangle SVG with specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toContain('<polygon');
        expect(triangle.render()).toContain('fill="blue"');
    });

    // Test for the default color (again I set no default color and included an empty fill attribute).
    test('creates a triangle SVG with default color when no color is set', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toContain('<polygon');
        expect(triangle.render()).toContain('fill=""'); 
    });

});

describe('Square', () => {
    test('creates a square SVG with specified color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toContain('<rect');
        expect(square.render()).toContain('fill="green"');
    });

    // Test for the default color (same as triangle and circle.)
    test('creates a square SVG with default color when no color is set', () => {
        const square = new Square();
        expect(square.render()).toContain('<rect');
        expect(square.render()).toContain('fill=""'); 
    });

 
});


