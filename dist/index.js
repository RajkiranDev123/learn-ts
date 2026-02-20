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
//# sourceMappingURL=index.js.map