import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { SimpleCard } from "../../component/common";
import FormDialog from "../../component/common/Modal";
import { listData } from "../../constants/listData";
import ListStatus from "../../constants/status";
import SearchBox from "./SearchBox";

const useStyle = makeStyles((theme) => {
  return {
    buttonAddContainer: {
      textAlign: "center",
    },
    box: {
      width: "100%",
    },
  };
});

export default function Customer({ openSide }) {
  const task = useSelector((state) => state.task);
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const isLogin = Boolean(localStorage.getItem("access_token"));
  if (!isLogin) {
    history.push("/signin");
    console.log("ok");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showToask = () => {
    toast.success("ok");
  };
  let { path, url } = useRouteMatch();
  console.log({ path, url });
  return (
    <Switch>
      <Route path={`${url}/dashboard`}>
        <Box component='div' mt={2}>
          {/* className={classes.box} */}
          <div className={classes.buttonAddContainer}>
            <Button variant='contained' color={"primary"} onClick={handleClickOpen}>
              <AddCircleIcon /> Add Todo
            </Button>
            <Button variant='contained' color={"primary"} onClick={showToask}>
              <AddCircleIcon /> Show Toask
            </Button>
          </div>
          <Box component='div' mx={10}>
            <SearchBox />
          </Box>
          <FormDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
          <Box component='div' width='100%' overflow='hidden'>
            <Grid container spacing={2}>
              {ListStatus.map((status) => {
                return (
                  <Grid item xs={12} sm={4} key={status.value}>
                    <div>
                      {status.label}
                      {task.data &&
                        task.data.map((item) => {
                          if (status.value === item.completed)
                            return (
                              <SimpleCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                data={item}
                              />
                            );
                        })}
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Route>
      <Route path={`${url}/home`}>HOme</Route>
      <Route path='*'>{<Redirect to={`${url}/dashboard`} />}</Route>
    </Switch>
  );
}
