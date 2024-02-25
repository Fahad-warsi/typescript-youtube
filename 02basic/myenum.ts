//creating enum

// const enum seatChoice {
//   AISLE = "AISLE",
//   MIDDLE = 3,
//   WINDOW,
//   FORTH,
// }
// const hc = seatChoice.MIDDLE;
// const AB = seatChoice.FORTH;

// const enum cardionaldirection {
//   east = "EAST",
//   north = "NORTH",
//   west = "WEST",
//   south = "SOUTH",
// }

// let currentdirection = cardionaldirection.north;
// console.log(currentdirection);

const enum statuscode {
  success = 200,
  badrequest = 400,
  Notfound = 404,
  accepted = 202,
}
let currentcode = statuscode.badrequest;
console.log(currentcode);
console.log(statuscode.Notfound);
