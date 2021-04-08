// Pair programming with Carolyn Gregoris, Suki Chan
const transpose = function(matrix) {
let result = [];
for (let j = 0; j < matrix[0].length; j++) {
    let subresult = [];
    for (let i = 0; i < matrix.length; i++) {
    subresult.push(matrix[i][j]);
    // console.log("subresult: ", subresult);
    // console.log("matrix[i]: ", matrix[i]);
    }
    result.push(subresult);
}
// console.log("final result:", result);
return result;
};

const wordSearch = (letters, word) => { 

const horizontalJoin = letters.map(ls => ls.join(''))

for (l of horizontalJoin) {
    if (l.includes(word)) return true
}
const verticalJoin = transpose(letters).map(ls => ls.join(''))
for (c of verticalJoin) {
    if (c.includes(word)) return true;
}
return false;
};


module.exports = wordSearch