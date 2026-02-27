"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("primitives ====================================>");
let username = "raj";
let age = 77;
let isAdmin = true;
console.log("Arrays ===============================================>");
let numbers = [1, 2];
let names = ["raj", "ok"];
console.log("tuples ============================================>");
// Tuple = array with a fixed order + Store multiple values of specific types (heterogenous)
let person = ["raj", 1];
console.log("enum ===============================================>");
//let move = 0; // ❌ what does 0 mean?
//Enum = named values → Instead of 0, 1, 2, use Color.red  etc.
var Color;
(function (Color) {
    Color[Color["red"] = 9] = "red";
    Color[Color["green"] = 10] = "green";
    Color[Color["blue"] = 11] = "blue";
})(Color || (Color = {}));
let favColor = Color.green;
console.log(favColor); //10
// let favColor2: Color = Color.yellow //Property 'yellow' does not exist on type 'typeof Color'
console.log("any ====================================================================>");
// avoid any when possible
let randomvalue = 10;
randomvalue = "raj";
console.log("unknown ========================================================>");
let userInput = 9;
userInput = "raj";
//Unlike any, TypeScript forces you to check the type before using it.
let value;
value = "Hello";
// console.log(value.toUpperCase()) // ❌ Error: Object is of type 'unknown'
// ✅ Safe: check type first
if (typeof value === "string") {
    console.log(value.toUpperCase()); // HELLO
}
//Type narrowing = making a broad type more specific so you can use it safely.
console.log("functions =======================================================>");
// void : function that dont return
function subscribe(message) {
    console.log(message);
}
console.log("null and undefined ============================================>");
let nullValue = null;
nullValue = null;
// nullValue=0 //Type '0' is not assignable to type 'null'.
let undefinedValue = undefined;
undefinedValue = undefined;
console.log("type inference =======================================>");
//ts automatically deduces the type of a variable
let inferredString = "raj";
// inferredString=5 // Type 'number' is not assignable to type 'string'
console.log("more on functions =================================>");
//basic function with types
function add(a, b) {
    return a + b;
}
// optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting} ${name}`;
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
console.log("arrow functions ============================================>");
const divide = (a, b) => a / b;
// with {} you need return keyword
const divide2 = (a, b) => {
    return a / b;
};
console.log("function types ===============================================>");
function add2(a, b) {
    return a + b;
}
let calculate;
calculate = add2;
/////////////////////////////////////////////////////
console.log("object ======================================================>");
let user = {
    name: "raj",
    age: 20,
    id: 2,
};
user.age = 88;
// now implementing
let laptop = {
    name: "raj",
    price: 5,
    getDiscount(percent) {
        return this.price * (percent / 100);
    },
    getS1: (tax) => {
        return 7 * (tax / 20);
    },
};
///////////////// type alias //////////////
console.log("type alias =========================================================>");
let point = {
    x: 10,
    y: 20,
};
console.log("type alias for primitives =============================>");
let userId = "raj";
let productId = 65254;
console.log("types vs interface =====================================================>");
let mydog = {
    name: "raj",
    breed: "german ",
};
let girl = {
    name: "raj",
    age: 66,
};
/////////////////////////////////////////
// interface for object shapes
// types aliases for union/intersection
console.log("intersection type  & ==================================>");
// Staff is resulting type
const staffMember = {
    name: "Alice",
    employeeId: 1234,
};
/////////////////////////////////////////
console.log("union type ======================================================>");
function setstatus(status) {
    console.log(`Status set to ${status}`);
}
setstatus("approved");
console.log("intersection type  & ==================================>");
let myCircle = {
    color: "red",
    radius: 5,
};
//////////////////////////////////////////////////////////
console.log("string literal types ======================================>");
// types on its own
// string literal types
let directions;
// console.log(directions) //Variable 'directions' is used before being assigned.
// directions = "north";
// directions="o" // Type '"o"' is not assignable to type '"north" | "south"'.
console.log("numerical literal types ======================================>");
let diceRoll;
diceRoll = 2;
//////////////////
console.log("type assertion ======================================>");
let someValue = "ok";
let strLength = someValue.length;
//or
let strLength2 = someValue.length;
console.log("type guards =================================================>");
// type guard : A check or function that tells TypeScript the type.
// type narrowing : TypeScript figuring out a more specific type from a broad type (unknown).
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
console.log("instanceof type guard ============================>");
class Dog2 {
    bark() {
        console.log("woof");
    }
}
class Cat {
    meow() {
        console.log("meow ");
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
let obj = new Cat();
makeSound(obj);
//////////////////////////////////////////////////////////////////
console.log("class ====================================>");
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