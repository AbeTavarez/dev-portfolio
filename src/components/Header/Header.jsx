import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Dropdown from "../DropdownMenu/Dropdown";
import "./Header.css";
import { MenuItem, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles();
  //Unauthenticate
  const alwaysShows = (
    <>
      <NavLink to="/" className="s-link">
        Home
      </NavLink>
      {/* <NavLink to="/about">About</NavLink> */}
      <NavLink to="/projects" className="s-link">
        Projects
      </NavLink>
      <NavLink to="/resume" className="s-link">
        Resume
      </NavLink>
      {/* <NavLink to="/contact">Contact</NavLink> */}
    </>
  );

  return (
    <ElevationScroll>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
              <MenuItem containerElement={<Link></Link>} />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              <div className="message">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
                  alt="avatar"
                  className="ninja-header"
                />
                <h1>Hello Friend</h1>
              </div>
            </Typography>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ElevationScroll>
  );
}

{
  /* <nav>
      <div className="header-container">
        <div className="message">
          <img
            src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
            alt="avatar"
            className="ninja-header"
          />
          <h1>Hello Friend</h1>
        </div>
        <div className="nav-links pad">
          {alwaysShows}
          <div className="dropdown-container">
            <Dropdown />
          </div>
        </div>
      </div>
    </nav> */
}
