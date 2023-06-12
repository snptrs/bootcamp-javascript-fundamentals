const fizzBuzz = (n) => {
  if (n % 3 == 0 && n % 5 == 0) {
    return "FizzBuzz";
  } else if (n % 3 == 0) {
    return "Fizz";
  } else if (n % 5 == 0) {
    return "Buzz";
  } else {
    return n;
  }
};

const fizzBuzzUntil = (n) => {
  for (i = 1; i <= n; i++) {
    console.log(fizzBuzz(i));
  }
};
