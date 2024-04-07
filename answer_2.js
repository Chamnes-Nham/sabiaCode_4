function filterArrayByCallback(arr, callback) {
    return arr.filter(callback);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  const evenNumbers = filterArrayByCallback(numbers, isEven);
  console.log(evenNumbers); 