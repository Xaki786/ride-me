import React from "react";
import { TextField } from "@material-ui/core";
const CustomTextField = ({
  label,
  autoComplete,
  name,
  id,
  type,
  autoFocus,
  input: { value, onChange },
  ...custom
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      name={name}
      type={type}
      variant="outlined"
      required
      fullWidth
      id={label}
      label={label}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
};

export default CustomTextField;
