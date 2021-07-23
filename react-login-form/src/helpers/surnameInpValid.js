const surnameInpValid = (input, error, value) => {
  if (input.length < 8) {
    error = "Length Must be 8 or More";
    input = "";
    return [error, input];
  }
  error = "";
  value = input;
  return [error, value];
};

export { surnameInpValid };
