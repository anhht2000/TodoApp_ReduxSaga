import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { Box, Fab } from "@material-ui/core";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  roundButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export function SimpleCard({ title, description, data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpen = () => {
    // console.log(value);
    setOpenUpdate(true);
  };

  const handleClose = () => {
    setOpenUpdate(false);
  };
  //delete
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Card className={classes.root}>
      <ModalUpdate
        openUpdate={openUpdate}
        handleClose={handleClose}
        data={data}
      />

      <ModalDelete
        open={openDelete}
        handleClose={handleCloseDelete}
        data={data}
      />
      <CardContent>
        <Box component="div" display="flex" justifyContent="space-between">
          <Typography component="h1">{title}</Typography>
          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.roundButton}>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={handleClickOpen}
        >
          <Icon fontSize="small" className="fa fa-edit"></Icon>
        </Fab>
        <Fab
          color="secondary"
          aria-label="add"
          size="small"
          onClick={handleOpenDelete}
        >
          <Icon fontSize="small" className="fa fa-trash-alt"></Icon>
        </Fab>
      </CardActions>
    </Card>
  );
}
