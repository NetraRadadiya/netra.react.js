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

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());
</script>

<!-- Output : Make:Toyota , Model:Camry , year:2020-->

<!-- Explenation:
    vehicle class has 2 properties and 1 method
    car class has 3 properties and 1 method

    car class extends vehicle class
    so car class has all the properties and methods of vehicle class

    so we can use super keyword to call the method of vehicle class
    super keyword is used to call the method of parent class
    super keyword is used to call the constructor of parent class

 --><!DOCTYPE html>
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

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());
</script>

<!-- Output : Make:Toyota , Model:Camry , year:2020-->

<!-- Explenation:
    vehicle class has 2 properties and 1 method
    car class has 3 properties and 1 method

    car class extends vehicle class
    so car class has all the properties and methods of vehicle class

    so we can use super keyword to call the method of vehicle class
    super keyword is used to call the method of parent class
    super keyword is used to call the constructor of parent class

 -->
