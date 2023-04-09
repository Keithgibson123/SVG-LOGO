class Shape {
    constructor() {
      this.Color = "";
    }
    setColor(Color) {
      this.Color = `fill="${Color}"/>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" ${this.Color}`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x = "75" y="25" width="150" height="150" ${this.Color}`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,0 30,165 270,165" ${this.Color}`;
    }
  }
  
  
  module.exports = { Circle, Square, Triangle };