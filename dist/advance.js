"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let updatetodo = {
    completed: true,
};
let updatetodo1 = {
    title: "t1",
    description: "ok",
    completed: true,
    createdAt: new Date(),
    assignedTo: "raj",
};
let pages = {
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
// const enum
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(status) {
    if (status === HttpStatus.OK) {
        console.log("success");
    }
}
///////////////////////////////////////////////////////////
// Promises
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "raj" });
        }, 1000);
    });
}
/////////////////////
//async/await
async function getuserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.log(error);
    }
}
//generic async function
async function fetchData(url) {
    const res = await fetch(url);
    return res.json();
}
fetchData("hh");
//# sourceMappingURL=advance.js.map