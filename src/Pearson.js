fizzBuzz = arr => {
  for (let i = 0; i > 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      cosole.log("Fizz");
    } else console.log(i);
  }
};
