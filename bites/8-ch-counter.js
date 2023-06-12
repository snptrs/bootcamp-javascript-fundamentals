let counter = 1;

const increment = () => {
  // counter++;
  console.log(counter++);
};

setInterval(increment, 1000);
