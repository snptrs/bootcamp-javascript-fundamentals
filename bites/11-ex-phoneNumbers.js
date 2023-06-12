const checkLength = (p) => {
  if (p.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numbers) => {
  const valid = numbers.filter(checkLength);
  return valid;
};
