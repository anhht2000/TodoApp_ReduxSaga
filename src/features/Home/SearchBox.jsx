import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChangeValue = (e) => {
    console.log(e.target.value);
    dispatch({ type: "FILTER_DATA", payload: { keyword: e.target.value } });
  };
  return (
    <TextField
      autoFocus
      placeholder="nhapde"
      fullWidth
      autoComplete="true"
      onChange={handleChangeValue}
    />
  );
}
