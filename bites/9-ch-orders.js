const addToBatch = (arr, num) => {
  if (arr.length >= 5) {
    return arr;
  } else {
    return arr.concat(num);
  }
};
