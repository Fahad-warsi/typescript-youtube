"use strict";
// const number: Array<number> = [];
// const str: Array<string> = [];
Object.defineProperty(exports, "__esModule", { value: true });
// function identifyOne(val: number | boolean): number | boolean {
//   return val;
// }
// function identifyTwo(val: any): any {
//   return val;
// }
// function identifyThree<Type>(val: Type): Type {
//   return val;
// }
// // console.log(identifyThree(105));
// interface Bootle {
//   brand: string;
//   type: number;
// }
// function identifyfour<Bootle>(val: Bootle): Bootle {
//   return val;
// }
// const four = identifyfour({ brand: "El-COrte", type: 105 });
// // console.log(four);
// function getSearchProduct<T>(product: T[]): T {
//   //do some database operations.
//   const myIndex = 4;
//   return product[myIndex];
// }
// //arrow function in generic..
// const getMoreSearchProduct = <T>(product: T[]): T => {
//   //do some database operation
//   const myIndex = 5;
//   return product[myIndex];
// };
// let str2 = "fahad";
// const myarray: Array<string> = [
//   "Fahad",
//   "Hameed",
//   "Ahmed",
//   "Amin",
//   "Hassan",
//   "Konain",
// ];
// console.log(getSearchProduct(myarray));
// //generic class in typescript....
// interface database {
//   connection: boolean;
//   name: string;
//   password: number;
// }
// function anotherfunction<T, u extends database>(valOne: T, ValTwo: u): object {
//   return {
//     valOne,
//     ValTwo,
//   };
// }
// console.log(
//   anotherfunction(2, { connection: true, name: "Fahad", password: 255255 })
// );
// interface quiz {
//   name: string;
//   type: string;
// }
// interface Course {
//   name: string;
//   author: string;
//   CourseName: string;
// }
// class sellable<T> {
//   public cart: T[] = [];
//   addToCart(product: T) {
//     this.cart.push(product);
//   }
// }
// const user = new sellable();
// user.addToCart(4);
// console.log(user);
//generic type
// function createpairs<S, n>(v1: S, v2: n): [S, n] {
//   return [v1, v2];
// }
// console.log(createpairs<string, number>("Hello", 42));
// class nameValue<T> {
//   private _value: T | undefined;
//   constructor(private name: string) {}
//   public setvalue(value: T) {
//     this._value = value;
//   }
//   public getvalue(): T | undefined {
//     return this._value;
//   }
//   public toString(): string {
//     return `${this.name} : ${this._value}`;
//   }
// }
// const user = new nameValue("myNumber");
// user.setvalue(10);
// console.log(user.toString());
class namevaluess {
    constructor(name) {
        this.name = name;
    }
    setvalue(value) {
        return (this._value = value);
    }
    getvalue() {
        return this._value;
    }
    toString() {
        return `${this.name} : ${this._value}`;
    }
}
const newUser = new namevaluess("myNumber0");
newUser.setvalue(40);
console.log(newUser.toString());
