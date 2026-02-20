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

//Required

type RequiredTodo = Required<Todo>;

//Readonly

type ReadonlyTodo = Readonly<Todo>;
let updatetodo1: ReadonlyTodo = {
  title: "t1",
  description: "ok",
  completed: true,
  createdAt: new Date(),
  assignedTo: "raj",
};
// updatetodo1.title = "kk";//Cannot assign to 'title' because it is a read-only property.

//Pick : create new type

type TodoPreview = Pick<Todo, "title" | "completed">;

//hover on TodoPreview
// type TodoPreview = {
//     title: string;
//     completed: boolean;
// }

//Omit - omit specific properties

type TodoWithoutDate = Omit<Todo, "createdAt">;

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

//ReturnType : get return type of function

function createUser() {
  return {
    id: 1,
    name: "raj",
  };
}
type UserType = ReturnType<typeof createUser>;

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

// Promises

function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "raj" });
    }, 1000);
  });
}

/////////////////////

//async/await

async function getuserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
}

//generic async function

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}
fetchData<string>("hh");
