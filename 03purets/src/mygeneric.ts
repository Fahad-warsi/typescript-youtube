const number: Array<number> = [];
const str: Array<string> = [];

function identifyOne(val: number | boolean): number | boolean {
  return val;
}

function identifyTwo(val: any): any {
  return val;
}

function identifyThree<Type>(val: Type): Type {
  return val;
}
// console.log(identifyThree(105));

interface Bootle {
  brand: string;
  type: number;
}

function identifyfour<Bootle>(val: Bootle): Bootle {
  return val;
}
const four = identifyfour({ brand: "El-COrte", type: 105 });
// console.log(four);

function getSearchProduct<T>(product: T[]): T {
  //do some database operations.
  const myIndex = 4;
  return product[myIndex];
}

//arrow function in generic..
const getMoreSearchProduct = <T>(product: T[]): T => {
  //do some database operation
  const myIndex = 5;
  return product[myIndex];
};

let str2 = "fahad";
const myarray: Array<string> = [
  "Fahad",
  "Hameed",
  "Ahmed",
  "Amin",
  "Hassan",
  "Konain",
];

console.log(getSearchProduct(myarray));

//generic class in typescript....
interface database {
  connection: boolean;
  name: string;
  password: number;
}

function anotherfunction<T, u extends database>(valOne: T, ValTwo: u): object {
  return {
    valOne,
    ValTwo,
  };
}

console.log(
  anotherfunction(2, { connection: true, name: "Fahad", password: 255255 })
);

interface quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  CourseName: string;
}

class sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
const user = new sellable();
user.addToCart(4);
console.log(user);

export {};
