const reverseString = function(str) {
    let arrayWord = Array.from(str);
    let reverseWord = [];
    for (i = 0; i < str.length; i++) {
        reverseWord.push(arrayWord.pop());
    }
    return reverseWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
