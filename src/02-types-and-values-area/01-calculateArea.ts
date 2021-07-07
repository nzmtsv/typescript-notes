// При выполнении проверка типов невозможна

interface Square {
    width: number;
}

interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle

// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height
//     }
//
//     return shape.width * shape.width
// }

// Проверка свойств относится только к значениям, доступным при выполнении
// function calculateArea(shape: Shape) {
//     if ('height' in shape) {
//         return shape.width * shape.height
//     }
//
//     return shape.width * shape.width
// }

// Можно также добавить размеченное свойство
// interface Square {
//     kind: 'square';
//     width: number;
// }
//
// interface Rectangle {
//     kind: 'rectangle'
//     height: number,
//     width: number,
// }
//
// type Shape = Square | Rectangle
//
// function calculateArea(shape: Shape) {
//     if (shape.kind === 'rectangle') {
//         // ...
//     }
// }


// // Решение через класс, класс относится к типу и к значению.
// // Интерфейс только к типу.
// class Square {
//     constructor(public width: number) {}
// }
//
// class Rectangle extends Square {
//     constructor(public width: number, public height: number) {
//         super(width);
//     }
// }
//
// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height
//     }
//
//     return shape.width * shape.width
// }

