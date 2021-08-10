import React from "react";
import LoadingIcon from "../../asset/images/loading.gif";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  globalLoading: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    // top: "50%",
    // left: "50%",
  },
});

export default function GlobalLoading() {
  const classes = useStyle();
  return (
    <div className={classes.globalLoading}>
      <img src={LoadingIcon} alt="none-data" className={classes.icon} />
    </div>
  );
}
