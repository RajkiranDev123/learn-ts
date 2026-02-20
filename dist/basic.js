"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("primitives :");
let username = "raj";
let age = 77;
let isAdmin = true;
console.log("Arrays");
let numbers = [1, 2];
let names = ["raj", "ok"];
console.log("tuples");
let person = ["raj", 1];
console.log("enum");
//Enums group related constants under a single name.
//enums in TypeScript are numeric, starting at 0 and incrementing by 1.
//a constant refers to a value that cannot be changed after it is set.
var Color;
(function (Color) {
    Color[Color["red"] = 9] = "red";
    Color[Color["green"] = 10] = "green";
    Color[Color["blue"] = 11] = "blue";
})(Color || (Color = {}));
let favColor = Color.green;
console.log(favColor); //10
// let favColor2: Color=Color.yellow //Property 'yellow' does not exist on type 'typeof Color'
console.log("any");
// avoid any when possible
let randomvalue = 10;
randomvalue = "raj";
console.log("unknown");
let userInput = 9;
userInput = "raj";
console.log("functions");
// void : function that dont return
function subscribe(message) {
    console.log(message);
}
console.log("null and undefined");
let nullValue = null;
let undefinedValue = undefined;
console.log("type inference");
let inferredString = "raj";
// inferredString=5 // Type 'number' is not assignable to type 'string'
console.log("more on functions");
//basic function with types
function add(a, b) {
    return a + b;
}
// optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting},${name}`;
    }
    return `hello ${name}`;
}
//default parameters
function multiply(a, b = 1) {
    return a * b;
}
//rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("arrow functions");
const divide = (a, b) => a / b;
// with {}
const divide2 = (a, b) => {
    return a / b;
};
console.log("function types");
function add2(a, b) {
    return a + b;
}
let calculate;
calculate = add2;
/////////////////////////////////////////////////////
console.log("object");
let user = {
    name: "raj",
    age: 20,
    id: 2,
};
let laptop = {
    name: "raj",
    price: 5,
    getDiscount(percent) {
        return this.price * (percent / 100);
    },
};
///////////////// type alias //////////////
console.log("type alias");
let point = { x: 10, y: 20 };
let userId = "raj";
let productId = 65254;
let mydog = {
    name: "raj",
    breed: "german ",
};
let girl = {
    name: "raj",
    age: 66,
};
const staffMember = {
    name: "Alice",
    employeeId: 1234,
};
function setstatus(status) {
    console.log(`Status set to ${status}`);
}
setstatus("approved");
let myCircle = {
    color: "red",
    radius: 5,
};
//////////////////////////////////////////////////////////
// types on its own
//string literal types
let directions;
// console.log(directions) //Variable 'directions' is used before being assigned.
// directions = "north";
// numerical lieral types
let diceRoll;
diceRoll = 2;
//////////////////
//type assertion
let someValue = "ok";
let strLength = someValue.length;
//or
let strLength2 = someValue.length;
//type guards
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toLocaleLowerCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
//instanceof type guard
class Dog2 {
    bark() {
        console.log("woof");
    }
}
class Cat {
    meow() {
        console.log("meow");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog2) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
//////////////////////////////////////////////////////////////////
//class
class Person2 {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    //methods
    introduce() {
        return `hi i'm ${this.name} and i'm ${this.age} yrs old`;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
////////////////////////// short way ////////////////////////////////
class Employee1 {
    id;
    name;
    department;
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let piy = new Employee1(101, "piu", "eng");
console.log(piy.getDetails());
class Manager extends Employee1 {
    teamSize;
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
//////////////////////////////////////////////
//# sourceMappingURL=basic.js.map