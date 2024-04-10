const numbers = [10, 5, 20, 15, 8];

const maxNumber = numbers.reduce((max, currentNumber) => {
    return Math.max(max, currentNumber);
}, -Infinity);

console.log(maxNumber); 
