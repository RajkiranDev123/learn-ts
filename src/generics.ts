//generics

function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let output1 = identity<string>("raj");
let output2 = identity<number>(10);

//////////////////////////////////////////////////////

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let myNum = getFirstElement([1, 2]);
let myName = getFirstElement(["raj"]);

////////////////////////////////////////

//generic interfaces

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 5,
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
