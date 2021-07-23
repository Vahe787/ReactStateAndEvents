const passwordInpValid = (input, error, value) => {
  if (input.length >= 8) {
    error = "";
    value = input;
    return [error, value];
  }
  error = "Length Must be 8 or More";
  input = "";
  return [error, input];
};

export { passwordInpValid };
