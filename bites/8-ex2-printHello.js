const printHello = () => {
  console.log("Hello!");
};

const executeAfterDelay = (delay, func) => {
  setTimeout(func, delay * 1000);
};

executeAfterDelay(5, printHello);
