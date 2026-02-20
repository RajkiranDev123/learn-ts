console.log("primitives :");

let username: string = "raj";
let age: number = 77;
let isAdmin: boolean = true;

console.log("Arrays");

let numbers: number[] = [1, 2];
let names: string[] = ["raj", "ok"];

console.log("tuples");

let person: [string, number] = ["raj", 1];

console.log("enum");

//Enums group related constants under a single name.
//enums in TypeScript are numeric, starting at 0 and incrementing by 1.
//a constant refers to a value that cannot be changed after it is set.

enum Color {
  red = 9, //we can also set custom values:
  green,
  blue,
}

let favColor: Color = Color.green;
console.log(favColor); //10
// let favColor2: Color=Color.yellow //Property 'yellow' does not exist on type 'typeof Color'

console.log("any");

// avoid any when possible

let randomvalue: any = 10;
randomvalue = "raj";

console.log("unknown");

let userInput: unknown = 9;
userInput = "raj";

console.log("functions");

// void : function that dont return
function subscribe(message: string): void {
  console.log(message);
}

console.log("null and undefined");

let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log("type inference");

let inferredString = "raj";
// inferredString=5 // Type 'number' is not assignable to type 'string'

console.log("more on functions");
