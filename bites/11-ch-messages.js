const generateMessages = (namesDiscounts) => {
  return namesDiscounts.map((nameDiscount) => {
    return `Hi ${nameDiscount.name}! ${nameDiscount.discount}% off our best candies for you today!`;
  });
};
