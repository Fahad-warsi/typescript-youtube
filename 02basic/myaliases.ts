// // aliases:
// type CarYear = number;
// type CarType = string;
// type CarModel = string;

// type car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };
// const caryear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const carModal: CarModel = "Corolla";
// const num: CarYear = 2024;
// const numtype: CarType = "Audi";
// const modetype: CarModel = "BMW";

// const car: car = {
//   year: caryear,
//   type: carType,
//   model: carModal,
// };
// const car1: car = {
//   year: num,
//   type: numtype,
//   model: modetype,
// };
// const myyear: CarYear = 2030;
// const mytype: CarType = "Ferrari";
// const mymodel: CarModel = "Sports car";

// const mycar: car = {
//   year: myyear,
//   type: mytype,
//   model: mymodel,
// };

// const yearss: CarYear = 2050;
// const typess: CarType = "Fahad";
// const modelss: CarModel = "Hameed Warsi";

// const fahad: car = {
//   year: yearss,
//   type: typess,
//   model: modelss,
// };
// console.log(fahad);

// // console.log(car);
// // console.log(car1);
// // console.log(mycar);

type _id = number;
type name = string;
type fName = string;
type Mobile = number;

type user = {
  readonly _id: _id;
  name: name;
  fName: name;
  Mobile?: Mobile;
};

const userId: _id = 37586;
const username: name = "Fahad";
const userfName: fName = "Hameed Warsi";
const userMobile: Mobile = 923172015200;

const newUser: user = {
  _id: userId,
  name: username,
  fName: userfName,
  Mobile: userMobile,
};

// console.log(newUser);

const userId_1: _id = 12345;
const userName_1: name = "Iqra";
const userFname_1: fName = "Shareef";

const user_1: user = {
  _id: userId_1,
  name: userName_1,
  fName: userFname_1,
};

console.log(user_1);
