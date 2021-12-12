const ftoc = function(num) {
// [°C] = ([°F] − 32) × 5⁄9
let result = (num -32) * 5/9;
return parseFloat(result.toFixed(1));
};

const ctof = function(num) {
/// [°F] = [°C] × 9⁄5 + 32
let result = num * 9/5 + 32
return parseFloat(result.toFixed(1));
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
