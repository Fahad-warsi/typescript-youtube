// let value: null | string | undefined = null;
// console.log(typeof value);
function printYarnSize(house) {
    var _a;
    var yardsize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardsize === undefined) {
        console.log("No Yard");
    }
    else {
        console.log("Yard is ${yardsize}");
    }
}
var home = {
    sqft: 50,
};
console.log(typeof home);
