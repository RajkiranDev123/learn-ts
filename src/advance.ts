console.log("Partial ===============================================>");
//utility types :  ready made helper types , help to modify other type

//Partial :its a utility type and make all properties optional
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

type PartialTodo = Partial<Todo>;
let updatetodo: PartialTodo = {
  completed: true,
};

console.log("Required ==============================================>");

type RequiredTodo = Required<Todo>;

console.log("Readonly ==============================================>");

type ReadonlyTodo = Readonly<Todo>;

let updatetodo1: ReadonlyTodo = {
  title: "t1",
  description: "ok",
  completed: true,
  createdAt: new Date(),
  assignedTo: "raj",
};
// updatetodo1.title = "kk";//Cannot assign to 'title' because it is a read-only property.

console.log("Pick ==============================================>");

//Pick : create new type

type TodoPreview = Pick<Todo, "title" | "completed">;

// hover on TodoPreview
// type TodoPreview = {
//     title: string;
//     completed: boolean;
// }

console.log("Omit ==============================================>");

//Omit - omit specific properties

type TodoWithoutDate = Omit<Todo, "createdAt">;

console.log("Record ==============================================>");

//Record  : with specific keys and values

type PageInfo = {
  title: string;
  url: string;
};
type Pages = "home" | "about";

type Merged = Record<Pages, PageInfo>;

let pages: Merged = {
  home: {
    title: "uuu",
    url: "/",
  },
  about: {
    title: "jjj",
    url: "/",
  },
};

////////////////////////////////////////////////////////
console.log("Return Type ==============================================>");

//ReturnType : get return type of function

function createUser() {
  return {
    id: 1,
    name: "raj",
  };
}
type UserType = ReturnType<typeof createUser>;

console.log("Const enum ==============================================>");

// const enum

const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

function handleResponse(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("success");
  }
}

///////////////////////////////////////////////////////////

console.log("Promises ==============================================>");

// Promises

type p = {
  id: number;
  name: string;
};

function fetchUser<T>(id: number): Promise<p> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "raj" });
    }, 1000);
  });
}
fetchUser<number>(2).then((msg) => console.log(msg));

/////////////////////
console.log("async/await ==============================================>");

//async/await

async function getuserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
}

console.log(
  "generic async function ==============================================>",
);

//generic async function

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}
fetchData<string>("hh");

//arrow

const aAs = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return res.json();
};
aAs<string>("hh");

/////////////////////////////////////////////////////////////////

// You’ve told TypeScript: Promise<T> → here T = string

// async function fetchData2<T>(url: T): Promise<T> {
//   const res = await fetch(url);
//   return res.json();
// }
// fetchData2<string>("hh");

// But res.json() might return something like { key: "value" }
// the first T is not the return type itself; it’s the generic type parameter declaration.
// T completely independent of url.

/////////////////////////////////////////////////////////////////////

//T = type of elements inside the array.
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let myNum = getFirstElement<number>([1, 2]);

////////////////////////////////////////////

async function fetchData3<T>(id: number): Promise<T> {
  const response = await fetch(`/api/items/${id}`);
  const data = await response.json();
  return data as T; //type assertion.
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const product = async () => {
  await fetchData3<Product>(10);
};

/////////////////////////////////////////////////////////////

console.log("Promise ================================================>");

// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

// Pending – initial state, not fulfilled or rejected.
// Fulfilled – the operation completed successfully.
// Rejected – the operation failed.

const myPromise: Promise<number> = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve(42); // promise resolved with a number
  } else {
    reject("Something went wrong"); // promise rejected with a string
    //reject(...) → can be any type, TypeScript won’t enforce it
  }
});

myPromise
  .then((value) => {
    console.log("Resolved with:", value);
  })
  .catch((error) => {
    console.error("Rejected with:", error);
  });

///////////////////////// async/await ///////////////////////////////////

async function fetchData33(): Promise<string> {
  return "Data loaded!";
}

async function main() {
  try {
    const data = await fetchData33();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();

// async functions always return a Promise.

// await pauses execution until the promise resolves or rejects.

console.log(
  "Promise with TypeScript Generics =======================================>",
);

// Promise with TypeScript Generics

interface User {
  id: number;
  name: string;
}

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

getUser().then((user) => {
  console.log(user.name); // Alice
});

console.log("combining promises ==============================>");
// Combining Promises

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2]).then(([a, b]) => {
  console.log(a + b); // 30
});

// Promise.all → waits for all promises to resolve.

// Promise.race → resolves/rejects as soon as the first promise resolves/rejects : promise settles, regardless of outcome.

const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Success 2");
const promise3 = Promise.resolve("Success 3");

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log("First fulfilled:", value);
  })
  .catch((error) => {
    console.log("All promises failed:", error);
  });

// Output:

// First fulfilled: Success 2

// Here, even though promise1 rejects, Promise.any() resolves as soon as promise2 succeeds.

// Resolves as soon as any of the input promises resolves.

// Rejects only if all input promises reject.

console.log("last ===============================>");

// If the value is a thenable (another promise), it will adopt its state:

const p22 = Promise.resolve(Promise.resolve("Hello"));
p22.then((value) => console.log(value)); // Hello

// new Promise(executor)
// This creates a brand new promise, and you provide an executor function that receives resolve and reject.
// You have full control over when and how the promise resolves or rejects.

// Example:

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done after 1 second");
  }, 1000);
});

p3.then((value) => console.log(value)); // Done after 1 second
