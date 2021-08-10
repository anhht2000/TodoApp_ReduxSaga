import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  container: {
    backgroundColor: "rgba(71, 255, 253 ,0.8)",
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
  },
  action: {
    display: "block",
  },
});
export default function SignIn() {
  const classes = useStyle();
  const history = useHistory();
  const handleLogin = () => {
    console.log("ok");
    localStorage.setItem("access_token", "ok");
    history.push("/admin/dashboard");
  };
  return (
    <Box
      component='div'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      className={classes.container}
    >
      <Card>
        <CardContent>
          <TextField
            className={classes.input}
            variant='filled'
            required
            label='User name'
            fullWidth
          />
          <TextField
            className={classes.input}
            variant='filled'
            required
            label='Password'
            fullWidth
          />
        </CardContent>
        <CardActions className={classes.action}>
          <Button variant='contained' fullWidth color='primary' onClick={handleLogin}>
            Dang nhap
          </Button>
          <Button variant='text' fullWidth className={classes.button}>
            Dang ky tai khoan
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
