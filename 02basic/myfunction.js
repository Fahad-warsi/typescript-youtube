"use strict";
// function addTwo(num: number): number {
//   return num + 2;
// }
// console.log(addTwo(3));
Object.defineProperty(exports, "__esModule", { value: true });
// function loginuser(name: string, email: string, isPaid: boolean) {}
// let adduser = (name: string, email: string, isPaid: boolean = false) => {};
// function consoleErr(errmsg: String): void {
//   console.log(errmsg);
// }
// function handleErr(errmsg: string): never {
//   throw new Error(errmsg);
// }
//const heros = ["thor", "iron"];
const heros = [1, 2, 3];
let gethero = heros.map((hero) => {
    return `heros name : ${hero}`;
});
console.log(gethero);
