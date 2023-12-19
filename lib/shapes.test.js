const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('creates a circle SVG with specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toContain('<circle');
        expect(circle.render()).toContain('fill="red"');
    });

    // Test for the default color.
    test('creates a circle SVG with default color when no color is set', () => {
        const circle = new Circle();
        expect(circle.render()).toContain('<circle');
        expect(circle.render()).toContain('fill=""'); // Assuming default color is an empty string
    });


});

describe('Triangle', () => {
    test('creates a triangle SVG with specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toContain('<polygon');
        expect(triangle.render()).toContain('fill="blue"');
    });

    // Test for the default color.
    test('creates a triangle SVG with default color when no color is set', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toContain('<polygon');
        expect(triangle.render()).toContain('fill=""'); // Assuming default color is an empty string
    });

});

describe('Square', () => {
    test('creates a square SVG with specified color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toContain('<rect');
        expect(square.render()).toContain('fill="green"');
    });

    // Test for the default color.
    test('creates a square SVG with default color when no color is set', () => {
        const square = new Square();
        expect(square.render()).toContain('<rect');
        expect(square.render()).toContain('fill=""'); // Assuming default color is an empty string
    });

 
});


