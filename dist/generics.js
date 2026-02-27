"use strict";
//generics
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
let output1 = identity("raj");
let output2 = identity(10);
//////////////////////////////////////////////////////
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2]);
let myName = getFirstElement(["raj"]);
let stringNumberPair = {
    key: "age",
    value: 5,
};
let stringNumberPair2 = {
    key: {
        name: "raj",
        myKey: "n",
    },
    value: 5,
};
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello");
logLength([1, 2]);
// logLength(12)
//# sourceMappingURL=generics.js.map