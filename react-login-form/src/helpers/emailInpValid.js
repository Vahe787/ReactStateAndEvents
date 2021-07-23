import emailRegex from "../constants/emailRegex";

const emailInpValid = (input, error, value) => {
  if (input.match(emailRegex.email)) {
    error = "";
    value = input;
    return [error, value];
  }
  error = "Error Email";
  input = "";
  return [error, input];
};

export { emailInpValid };
