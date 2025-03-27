const car1 = {
    name: "ali",
    family: "hosseini",
    age: 15
}

// ----------------------------------------

const car2 = new Object()
car2.name = "ali"
car2.family = "hosseini"
car2.age = 15

// ----------------------------------------

function Car () {
    this.name = "ali"
    this.family = "hosseini"
    this.getAge = () => {
        return 15
    }
}

let car3 = new Car()
car3.test = "its a test"

if (car3 instanceof Object) {
    console.log("ok");
}

Car.prototype.test2 = function() {
    return "test"
}

console.log(car3.test2())

// ----------------------------------------- create an object without any prototype

var car4 = Object.create(null)

// ----------------------------------------- create an object with a prototype but extend from car3

var car5 = Object.create(car3)

console.log(car5.test)