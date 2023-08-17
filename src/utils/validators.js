const ERRORS = {
  required: "requiredField",
};

export const validateRequired = (value, required = true) => {
  const empty =
    value === undefined || value === null || value === "" || value === false;

  if (required && empty) return ERRORS.required;
  return "";
};
