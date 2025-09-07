console.log(
  "------------------------- CLASS INHERITANCE RESULT ------------------------"
);
// 1. Basic Class | A class is a blueprint for creating objects with properties and methods.
// Define a class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Create an object
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

// 2. Inheritance | Inheritance allows a class (child) to use properties and methods of another class (parent).
// Parent class
class Animal1 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inherits from Animal
class Dog extends Animal1 {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Overriding method
  speak() {
    console.log(`${this.name} barks. Breed: ${this.breed}`);
  }
}

const dog2 = new Dog("Tommy", "German Shepherd");
dog2.speak(); // Tommy barks. Breed: German Shepherd

// 3. Multiple Levels of Inheritance
// Child → Parent → Grandparent
