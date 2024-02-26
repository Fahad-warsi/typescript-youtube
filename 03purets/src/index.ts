console.log("WelCome to typescript...!!!!");

// class point {
//   x: number; //adding field
//   y: number; //adding field
//   constructor(x = 100, y = 100) {
//     this.x = x;
//     this.y = y;
//   }
// } //defination class
// const pt = new point();
// pt.x = 25;
// pt.y = 50;
// console.log(pt);

// const pt1 = new point();
// console.log(pt1);

// class GoodGreeter {
//   name: string;

//   constructor() {
//     this.name = "Hello, World...!!!";
//   }
// }
// const gd = new GoodGreeter();
// console.log(gd);

// class user {
//   email: string;
//   name: string;
//   readonly city: string = "Lahore";
//   constructor(email = "gmail.com", name = "fhd") {
//     this.email = email;
//     this.name = name;
//   }
// }

// let newuser = new user("fhd@gmail.com", "Fahad Warsi");
// console.log(newuser);
// console.log(`City name is : ${newuser.city}`);

class c {
  protected _length: number = 10;

  get length(): number {
    return this.length;
  }
  set length(val) {
    this._length = val;
  }
}

class subc extends c {
  _length = 4;
}
const user = new c();
console.log(user);
user.length = 50;
console.log(user);

let newuser = new subc();
console.log(newuser);
