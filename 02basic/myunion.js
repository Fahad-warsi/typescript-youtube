"use strict";
// function printcode(code: number | string) {
//   console.log(`My status code is ${code}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// printcode(404);
// printcode("String-404");
// type user = {
//   name: string;
//   id: number;
// };
// type admin = {
//   name: string;
//   id: number;
// };
// const name_1 = "Fahad warsi";
// const id_1 = 1234;
// let fahad: user | admin = { name: name_1, id: id_1 };
// console.log(fahad);
// let hitesh: user | admin = { name: "histesh", id: 334 };
// console.log(hitesh);
//writing function for check input paratemter, weather number or string.
function checkout(code) {
    if (typeof code === "string") {
        console.log(" you string is an upper case : ", code.toUpperCase());
    }
    else {
        console.log(`You entered an number : ${code}`);
    }
}
checkout(404);
checkout("String");
