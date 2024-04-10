function getUniqueValues(array) {
    return array.filter((value, self, index) => {
        return index.indexOf(value) === self;
    });
}

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers); 
