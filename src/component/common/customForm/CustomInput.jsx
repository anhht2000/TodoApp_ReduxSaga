import { TextField } from "@material-ui/core";
import React from "react";

export default function CustomInput({
  field,
  form,
  type,
  placeholder,
  autoFocus,
}) {
  const { name } = field;
  const { errors, touched } = form;
  const isErrors = errors[name] && touched[name]; // cos nghia la co ton tai loi va no da duoc thao tac chua

  return (
    <>
      <TextField
        autoFocus={autoFocus}
        placeholder={placeholder}
        margin="dense"
        name="title"
        type={type}
        fullWidth
        error={isErrors}
        {...field} //name, value, onBlur, onChange
      />
    </>
  );
}
