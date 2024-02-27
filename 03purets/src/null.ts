// // let value: null | string | undefined = null;
// // console.log(typeof value);

// // value = "hello";
// // console.log(typeof value);

// // value = undefined;
// // console.log(typeof value);

// interface House {
//   sqft: number;
//   yard?: {
//     sqft: number;
//   };
// }

// function printYardSize(house: House) {
//   const yardsize = house.yard?.sqft;
//   if (yardsize === undefined) {
//     console.log("No Yard");
//   } else {
//     console.log("Yard is ${yardsize}");
//   }
// }
// let home: House = {
//   sqft: 50,
//   yard: {
//     sqft: 50,
//   },
// };
// printYardSize(home);

// function printmessage(print: number | null | undefined) {
//   console.log(`print : ${print ?? "Nothing to print"}`);
// }

// printmessage(undefined);
// printmessage(100);

//object typesss.....
// const car: {
//   type: string;
//   model: string;
//   year: number;
// } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 1994,
// };

// console.log(car);
// console.log(typeof car);

interface person {
  name: string;
  age: number;
}

const person: readonly {
  name: "Hitesh";
  age: 52;
};
