function processArray(arr, back) {

    if (!Array.isArray(arr)) {
        console.log("Input is not an array.");
    }
    
    const result = arr.map(back);

    return result;
}

function square(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); 