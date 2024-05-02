<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script>
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());
</script>

<!-- Output: blue -->

<!-- Explenation:

    shape is the parent class
    Circle is the child class
    ColoredCircle is the child class of Circle
    
shape class has a constructor and a getColor method
Circle class has a constructor and a getColor method
ColoredCircle class has a constructor and a getColor method

ColoredCircle class inherits the getColor method from Circle class
ColoredCircle class inherits the getColor method from Shape class

ColoredCircle class inherits the color property from Shape class

ColoredCircle class inherits the radius property from Circle class

 -->
