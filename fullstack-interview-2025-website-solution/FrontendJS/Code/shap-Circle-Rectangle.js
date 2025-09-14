// Base class
class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    throw new Error('Method "area()" must be implemented');
  }

  perimeter() {
    throw new Error('Method "perimeter()" must be implemented');
  }
}

// Circle class
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Rectangle class
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Usage
const circle = new Circle(5);
console.log(circle.name); // Circle
console.log(circle.area()); // 78.5398...
console.log(circle.perimeter()); // 31.4159...

const rectangle = new Rectangle(4, 6);
console.log(rectangle.name); // Rectangle
console.log(rectangle.area()); // 24
console.log(rectangle.perimeter()); // 20

// // Common methods for all shapes
// const shapeMethods = {
//   area() {
//     if (this.type === "Circle") {
//       return Math.PI * this.radius ** 2;
//     } else if (this.type === "Rectangle") {
//       return this.width * this.height;
//     }
//   },
//   perimeter() {
//     if (this.type === "Circle") {
//       return 2 * Math.PI * this.radius;
//     } else if (this.type === "Rectangle") {
//       return 2 * (this.width + this.height);
//     }
//   },
// };

// // Factory function for Circle
// function createCircle(radius) {
//   return Object.assign(Object.create(shapeMethods), {
//     type: "Circle",
//     radius,
//   });
// }

// // Factory function for Rectangle
// function createRectangle(width, height) {
//   return Object.assign(Object.create(shapeMethods), {
//     type: "Rectangle",
//     width,
//     height,
//   });
// }

// // Usage
// const circle = createCircle(5);
// console.log(circle.type); // Circle
// console.log(circle.area()); // 78.5398...
// console.log(circle.perimeter()); // 31.4159...

// const rectangle = createRectangle(4, 6);
// console.log(rectangle.type); // Rectangle
// console.log(rectangle.area()); // 24
// console.log(rectangle.perimeter()); // 20
