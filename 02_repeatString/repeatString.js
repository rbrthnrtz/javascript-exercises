const repeatString = function (word, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        let newWord = [];
        for (let i = 0; i < num; i++) {
            newWord.push(word);
        }
        return newWord.join("");
    }
};

// Do not edit below this line
module.exports = repeatString;
