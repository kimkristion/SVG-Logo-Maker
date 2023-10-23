const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');



describe('Circle', () => {
    test('render() returns the correct SVG string', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle  cx="150" cy="100" r="50" fill="blue" />')
    })
})

describe('Triangle', () => {
    test('render() returns the correct SVG string', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182, 56, 182" fill="blue" />')
    })
})

describe('Square', () => {
    test('render() returns the correct SVG string', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />')
    })
})

