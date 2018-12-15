const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
      console.log('The value of accumulator: ', accumulator);
  		console.log('The value of currentValue: ', currentValue);
  		return accumulator+currentValue;
                                 }, 10);
console.log(newSum);

/* I used the reduce method, which returns a single value after iterating the elements of an array, and added a second parameter to act as the initial value for the accumulator */
