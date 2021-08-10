import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FastField, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import CustomInput from "./customForm/CustomInput";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";

let schema = yup.object().shape({
  title: yup
    .string("you must sturng")
    .required("Title is required")
    .min(2, "you must enter min 2"),
  description: yup.string(),
});

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  const dispatch = useDispatch();

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      dispatch({ type: "ADD_TASK", payload: values });
      resetForm({});
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    title: "",
    description: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {(propsFormik) => {
        const { values, errors, touched, isSubmitting } = propsFormik;
        return (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add To Do</DialogTitle>
            <Form>
              <DialogContent>
                <FastField
                  name="title"
                  component={CustomInput}
                  placeholder="Enter title"
                  type="text"
                  autoFocus
                />
                <FastField
                  name="description"
                  component={CustomInput}
                  placeholder="Enter description"
                  type="text"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary" type="submit">
                  Subscribe
                </Button>
              </DialogActions>
            </Form>
          </Dialog>
        );
      }}
    </Formik>
  );
}
