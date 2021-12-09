const sumAll = function(num1, num2) {
if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'Error';
if (num1 < 0 || num2 < 0) return 'ERROR';
if (num1 > num2) {
    const temp = num2
    num2 = num1;
    num1 = temp;
}
let finalSum = 0;
for (let i = num1; i < num2+1; i++){
    finalSum += i;
}
return finalSum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
