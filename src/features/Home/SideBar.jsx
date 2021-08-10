import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import cn from "classname";

const useStyle = makeStyles((theme) => {
  console.log(theme);
  return {
    list: {
      display: "block",
      width: "300px",
    },
    draw: {
      "& > .MuiDrawer-paper": { position: "relative" },
      transition: theme.transitions.create("display", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),

      // position: "relative",
    },
    block: {
      display: "none",
      transition: theme.transitions.create("display", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    link: {
      textDecoration: "none",
    },
    active: {
      backgroundColor: "rgba(0,0,0,0.2)",
      display: "block",
    },
  };
});

export default function SideBar({ open, handleclose }) {
  const { url, path } = useRouteMatch();
  const classes = useStyle();
  return (
    <Drawer
      // classes={{
      //   paper: classes.draw,
      // }}
      className={cn(classes.draw, { [classes.block]: open === false })}
      anchor={"left"}
      open={open}
      onClose={handleclose}
      variant="persistent"
    >
      {
        <List
          component="nav"
          aria-label="main mailbox folders"
          // claseName={classes.list}
          classes={{ root: classes.list }}
        >
          <NavLink
            to={`${url}/dashboard`}
            className={classes.link}
            activeClassName={classes.active}
          >
            <ListItem
              button
              // selected={selectedIndex === 0}
              // onClick={}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Trang quan tri" />
            </ListItem>
          </NavLink>

          <NavLink
            to={`${url}/home`}
            className={classes.link}
            activeClassName={classes.active}
          >
            <ListItem
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Quan ly cong viec" />
            </ListItem>
          </NavLink>
        </List>
      }
    </Drawer>
  );
}
