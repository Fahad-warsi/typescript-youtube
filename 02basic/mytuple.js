"use strict";
//define array like this. it not good way to working with array.
// let abc: (string | number | boolean)[] = ["a", "b", 125, 555, 1255, true];
// //alternative tuples we use. if we know length of array & type inthe order in the array.
// let mytup: [number, string] = [1, "fahad"];
// let mytup1: [number, number, number] = [255, 255, 255];
// console.log(mytup1, mytup);
// function doSomething(pair: [string, number]) {
//   const a = pair[0];
//   const b = pair[1];
//   console.log(pair);
//   // ...
// }
// doSomething(["hello", 42]);
// doSomething(["hello1", 43]);
// doSomething(["hello2", 44]);
// doSomething(["hello3", 45]);
// doSomething(["hello4", 46]);
//function for tuple set...
function settuple(pair) {
    const a = pair[0];
    const b = pair[1];
    console.log(pair);
}
settuple([101, "hello"]);
