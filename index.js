// Calling in all dependencies
const SVG = require("./lib/svg");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");


// Node promises module
const { writeFile } = require("fs").promises;

// This is the list of questions
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter a 3 letter abbreviation',
        name: 'characters',
        validate: function (input){
            if(input.length > 3){
                return "Should not be more than 3 characters"
            }
            return true;
        }
        },
    {
      type: "list",
      message: "What shape do you want to use",
      name: "shapeType",
      choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        message: "What color would you like your logo text to be?",
        name: "textColor",
      },
    {
      type: "input",
      message: "What color do you want the background",
      name: "shapeColor",
    },

    //
  ])
  .then(({ characters, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      case "square":
        shape = new Square();
        break;
    }
// with svg, call setText and setShape method
// also a console.log to see the output
    shape.setColor(shapeColor);
    const svg = new SVG();
    svg.setText(characters, textColor);
    svg.setShape(shape);
    return writeFile("./examples/logo.svg", svg.render())
      .then(() => {
        console.log("made your logo.svg");
      })
      .catch((err) => console.log("something went wrong", err));
  })