//generics

//In TypeScript , a generic is a way to create resusable components like (functions, classes, or interfaces)

//same function will work for numbers, arrays, or objects, without losing type safety:

//<T> in the function definition is a generic type parameter
//It’s a placeholder for a type, not a value.

function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let output1 = identity<string>("raj");
//<string> replaces the placeholder T with string.
//<string> generic type argument, not a value
let output2 = identity<number>(10);

//////////////////////////////////////////////////////
// Rule: T = type of one element, not the array itself.
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let myNum = getFirstElement<number>([1, 2]);

let myName = getFirstElement(["raj"]);

////////////////////////////////////////
// If you want to pass and return an array, the function should be:
function identity2<T>(value: T[]): T[] {
  return value;
}

// Using explicit generic type
let output = identity2<string>(["raj"]);

//generic interfaces

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface KeyValuePair4 {
  key: string;
  value: number;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 5,
};

let stringNumberPair55: KeyValuePair4 = {
  key: "age",
  value: 5,
};

// Here, K is replaced with string and V is replaced with number.

// So key must be a string, and value must be a number.

// This matches your object: { key: "age", value: 5 }

let numberArrayPair: KeyValuePair<number, number[]> = {
  key: 1,
  value: [10, 20, 30],
};
/////////////////////////// complex ////////////////////////////

interface KeyValuePair2<K, V> {
  key: {
    name: string;
    myKey: K;
  };
  value: V;
}

let stringNumberPair2: KeyValuePair2<string, number> = {
  key: {
    name: "raj",
    myKey: "n",
  },
  value: 5,
};

////////////////////////////////////////////

//generic contraints

interface LengthWise {
  length: number;
}

function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
logLength("hello");
logLength([1, 2]);

// logLength(12)

console.log("Generic with Constraint ======================>");

type A = { name: string };

function fn<T extends A>(arg: T): T {
  console.log("Name:", arg.name);
  return arg;
}

fn({ name: "Alice" });

fn({ name: "Bob", age: 30 });

// All work because they have at least { name: string }.

//fn({ age: 25 }); // Error: Property 'name' is missing

// T is still generic

// But it must have at least { name: string }

// function fn<T>() → basic generic

// function fn<T extends Something>() → constrained generic

console.log("last ===================>");

// If a generic type only appears in the return type, there’s no input for TypeScript to examine, so it has no clue what type you want.
// createArray function, the generic T only appears in the return type, not in the parameters.
// Example:

function createArray<T>(length: number): T[] {
  return new Array(length);
}

// T only appears in the return type T[].

// When you call it:

const arr = createArray(3);
// function createArray<unknown>(length: number): unknown[]
