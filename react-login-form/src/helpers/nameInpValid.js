const nameInpValid = (input, error, value) => {
  if (input.length < 4) {
    error = "Length Must be 4 or More";
    input = "";
    return [error, input];
  }
  error = "";
  value = input;
  return [error, value];
};

export { nameInpValid };
