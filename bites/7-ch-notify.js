const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
};

const notification = (string, resultFunction) => {
  console.log(resultFunction(string));
};
