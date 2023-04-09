const { Triangle, Square, Circle } = require("./shapes");

//this is a test for the triangle
describe("Triangle", () => {
  // this test is created to check that sum does return the two numbers added.
    it("this will give you a blue triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150,0 30,165 270,165" fill="blue"/>'
      );
    });
  });

  // this is a test for the circle
describe("Circle", () => {
  // this test is created to check that sum does return the two numbers added.
  it("this will give you a red circle", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red"/>'
    );
  });
});


// this is a test for the square 
describe("Square", () => {
// this test is created to check that sum does return the two numbers added.
  it("this will give you a yellow square", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x = "75" y="25" width="150" height="150" fill="yellow"/>'
    );
  });
});