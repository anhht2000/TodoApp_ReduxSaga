import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Modal,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";

const useStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "fixed",
    border: "2px solid #000",
    width: 400,
    backgroundColor: "white",
  },
});

export default function ModalDelete({ open, handleClose, data }) {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDis = () => {
    console.log("k dong y");
    handleClose();
  };
  const handleAgree = () => {
    console.log("dong y");
    dispatch({ type: "DELETE_TASK", payload: data });
    handleClose();
  };
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Confirm"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure delete this to do??
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDis} color="primary">
          Disagree
        </Button>
        <Button onClick={handleAgree} color="primary">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
