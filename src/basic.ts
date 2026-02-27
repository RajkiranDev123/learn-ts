console.log("primitives ====================================>");

let username: string = "raj";
let age: number = 77;
let isAdmin: boolean = true;

console.log("Arrays ===============================================>");

let numbers: number[] = [1, 2];
let names: string[] = ["raj", "ok"];

console.log("tuples ============================================>");
// Tuple = array with a fixed order + Store multiple values of specific types (heterogenous)

let person: [string, number] = ["raj", 1];

console.log("enum ===============================================>");

//let move = 0; // ❌ what does 0 mean?
//Enum = named values → Instead of 0, 1, 2, use Color.red  etc.

enum Color {
  red = 9, //we can also set custom values:
  green,
  blue,
}

let favColor: Color = Color.green;
console.log(favColor); //10

// let favColor2: Color = Color.yellow //Property 'yellow' does not exist on type 'typeof Color'

console.log(
  "any ====================================================================>",
);

// avoid any when possible

let randomvalue: any = 10;
randomvalue = "raj";

console.log(
  "unknown ========================================================>",
);

let userInput: unknown = 9;
userInput = "raj";

//Unlike any, TypeScript forces you to check the type before using it.

let value: unknown;
value = "Hello";

// console.log(value.toUpperCase()) // ❌ Error: Object is of type 'unknown'

// ✅ Safe: check type first
if (typeof value === "string") {
  console.log(value.toUpperCase()); // HELLO
}

//Type narrowing = making a broad type more specific so you can use it safely.

console.log(
  "functions =======================================================>",
);

// void : function that dont return
function subscribe(message: string): void {
  console.log(message);
}

console.log("null and undefined ============================================>");

let nullValue: null = null;
nullValue = null;

// nullValue=0 //Type '0' is not assignable to type 'null'.

let undefinedValue: undefined = undefined;
undefinedValue = undefined;

console.log("type inference =======================================>");

//ts automatically deduces the type of a variable

let inferredString = "raj";
// inferredString=5 // Type 'number' is not assignable to type 'string'

console.log("more on functions =================================>");

//basic function with types

function add(a: number, b: number): number {
  return a + b;
}

// optional parameters

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting} ${name}`;
  }

  return `hello ${name}`;
}

//default parameters

function multiply(a: number, b: number = 1): number {
  return a * b;
}

//rest parameter

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log("arrow functions ============================================>");

const divide = (a: number, b: number): number => a / b;

// with {} you need return keyword
const divide2 = (a: number, b: number): number => {
  return a / b;
};

console.log("function types ===============================================>");

function add2(a: number, b: number): number {
  return a + b;
}
let calculate: (x: number, y: number) => number;

calculate = add2;

/////////////////////////////////////////////////////
console.log("object ======================================================>");

//give types to object in ts

interface User {
  name: string;
  age: number;
  email?: string; //optional
  readonly id?: number;
}

let user: User = {
  name: "raj",
  age: 20,
  id: 2,
};

user.age = 88;

// user.id=9 //Cannot assign to 'id' because it is a read-only property.

//interface with methods

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number; //method declaration
  getS1(tax: number): number;
  getS2?: (percent: number) => number; //getS2 is a property of the interface,
}

// now implementing
let laptop: Product = {
  name: "raj",
  price: 5,
  getDiscount(percent: number): number {
    return this.price * (percent / 100);
  },
  getS1: (tax: number): number => {
    return 7 * (tax / 20);
  },
};

///////////////// type alias //////////////

console.log(
  "type alias =========================================================>",
);

type Point = {
  x: number;
  y: number;
};
let point: Point = {
  x: 10,
  y: 20,
};

console.log("type alias for primitives =============================>");

type id = string | number; // union
let userId: id = "raj";
let productId: id = 65254;

console.log(
  "types vs interface =====================================================>",
);

// Interfaces can be extended but not type aliases

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let mydog: Dog = {
  name: "raj",
  breed: "german ",
};

// its called interface inheritance.
interface Person3 {
  name: string;
}

interface Employee3 {
  employeeId: number;
}

interface Staff3 extends Person3, Employee3 {}

// its called interface inheritance.

// interfaces can be declared multiple times and will merge //

interface Human {
  name: string;
}

interface Human {
  age: number;
}

let girl: Human = {
  name: "raj",
  age: 66,
};

/////////////////////////////////////////

// interface for object shapes
// types aliases for union/intersection

console.log("intersection type  & ==================================>");

//  An intersection type combines multiple types into one type.
//  The resulting type has all properties from the combined types.

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;
// Staff is resulting type

const staffMember: Staff = {
  name: "Alice",
  employeeId: 1234,
};

/////////////////////////////////////////
console.log(
  "union type ======================================================>",
);

//union types (or)

type Status = "pending" | "approved";

function setstatus(status: Status): void {
  console.log(`Status set to ${status}`);
}
setstatus("approved");

console.log("intersection type  & ==================================>");

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
  color: "red",
  radius: 5,
};

//////////////////////////////////////////////////////////
console.log("string literal types ======================================>");

// types on its own
// string literal types

let directions: "north" | "south";

// console.log(directions) //Variable 'directions' is used before being assigned.

// directions = "north";
// directions="o" // Type '"o"' is not assignable to type '"north" | "south"'.

console.log("numerical literal types ======================================>");

let diceRoll: 1 | 2;

diceRoll = 2;

//combining with other types

type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

//////////////////

console.log("type assertion ======================================>");

// a type assertion is a way to tell the compiler or runtime that you know the specific type of a variable

let someValue: unknown = "ok";
let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;

console.log("type guards =================================================>");

// type guard : A check or function that tells TypeScript the type.

// type narrowing : TypeScript figuring out a more specific type from a broad type (unknown).

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else {
    console.log(value.toFixed(2));
  }
}
