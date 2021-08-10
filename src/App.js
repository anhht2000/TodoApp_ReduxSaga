import {
  Box,
  Button,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import {} from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import Customer from "./features/Home";
import { useDispatch, useSelector } from "react-redux";
import getDataTaskFromApi from "./actions/task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FETCH_DATA } from "./constants/task";
import GlobalLoading from "./component/common/GlobalLoading";
import DashBoard from "./features/Home/DashBoard";
import SideBar from "./features/Home/SideBar";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./features/Login";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export const theme = createTheme({
  color: {
    primary: "#0288D1",
    secondary: "#FFEB3B",
    error: "#D32F2F",
  },
  font: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: "4px",
    backgroundColor: "#AFB42B",
    textShape: "#fff",
  },
});
function App() {
  const dispatch = useDispatch();
  const { filterdata } = useSelector((state) => state.task);
  const { isLoading, getDataTaskFromApi, err } = useSelector((state) => state.task);
  const [openSide, setopenSide] = useState(false);
  const handleOpenSidebar = () => {
    setopenSide(!openSide);
  };
  const handleCloseSidebar = () => {
    setopenSide(false);
  };
  //
  useEffect(() => {
    // dispatch(getDataTaskFromApi()); thunk
    //saga
    dispatch({ type: FETCH_DATA });
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/admin'>
          <ThemeProvider theme={theme}>
            <DashBoard handleopen={handleOpenSidebar} />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {isLoading && <GlobalLoading />}
            <Box component='div' display='flex'>
              <SideBar open={openSide} handleclose={handleCloseSidebar} />
              <Customer openSide={openSide} />
            </Box>
          </ThemeProvider>
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='*'>
          <Redirect to='/signin' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
