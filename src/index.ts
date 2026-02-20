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

//basic function with types

function add(a: number, b: number): number {
  return a + b;
}

// optional parameters

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting},${name}`;
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

console.log("arrow functions");

const divide = (a: number, b: number): number => a / b;

// with {}
const divide2 = (a: number, b: number): number => {
  return a / b;
};

console.log("function types");

function add2(a: number, b: number): number {
  return a + b;
}
let calculate: (x: number, y: number) => number;

calculate = add2;

/////////////////////////////////////////////////////
console.log("object");

//give types to object in ts

interface User {
  name: string;
  age: number;
  email?: string; //optional
  readonly id: number;
}

let user: User = {
  name: "raj",
  age: 20,
  id: 2,
};

// user.id=9 //Cannot assign to 'id' because it is a read-only property.

//interface with methods

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let laptop: Product = {
  name: "raj",
  price: 5,
  getDiscount(percent: number): number {
    return this.price * (percent / 100);
  },
};

///////////////// type alias //////////////

console.log("type alias");

type Point = {
  x: number;
  y: number;
};
let point: Point = { x: 10, y: 20 };

//type alias for primitives

type ID = string | number; // union
let userId: ID = "raj";
let productId: ID = 65254;

////////////////////////////////////// types vs interfaces /////////////

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

// console.log(mydog)

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

//An intersection type combines multiple types into one type. The resulting type has all properties from the combined types.

type Person = {
  name: string;
};
type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 1234,
};

/////////////////////////////////////////

//union types (or)

type Status = "pending" | "approved";

function setstatus(status: Status): void {
  console.log(`Status set to ${status}`);
}
setstatus("approved");

// intersection type (and)

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
// types on its own
//string literal types

let directions: "north" | "south";
// console.log(directions) //Variable 'directions' is used before being assigned.
// directions = "north";

// numerical lieral types

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

//type assertion

let someValue: unknown = "ok";
let strLength: number = (someValue as string).length;
//or
let strLength2: number = (<string>someValue).length;

//type guards

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
  } else {
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

function makeSound(animal: Dog2 | Cat) {
  if (animal instanceof Dog2) {
    animal.bark();
  } else {
    animal.meow();
  }
}

//////////////////////////////////////////////////////////////////

//class

class Person2 {
  private name: string;
  protected age: number;
  public email;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  //methods
  public introduce(): string {
    return `hi i'm ${this.name} and i'm ${this.age} yrs old`;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

////////////////////////// short way ////////////////////////////////

class Employee1 {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let piy = new Employee1(101, "piu", "eng");
console.log(piy.getDetails());

class Manager extends Employee1 {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.teamSize} people`;
  }
}

//////////////////////////////////////////////
