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


// ------------------------------------
var obj = {
    name: "ali",
    family: "hosseini",
    age: 15
}

function getData(name) {
    console.log(name, this.family, this.age);
}

getData.apply(obj, [
    obj.name
])

getData.call(obj, obj.name)

// هر سه تا متود مثل هم کار میکنند اما در متد اپلای ارگومان ها به صورت ارایه هستند اما در متد کال ارگومان ها به صورت ساده و  props هستند همچنین فرق متد bind  با دو متد دیگر این است که ان دو متد در هین پاس دادن مقادیر ان تابع را هم نیز اجرا میکنند اما این متد اینگونه نیست و در حین پاس دادن ران نمیکند