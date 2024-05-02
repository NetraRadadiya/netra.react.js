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
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();
</script>

<!-- Output: Buddy barks.-->  

<!-- Explenation :
    animal class has a constructor and a speak method.
    dog class extends animal class and has a speak method.
     dog class extends to animal class and has a speak method that overrides the speak method in the animal class.
     than console log the dog class and it will output the dog class speak method.

-->
