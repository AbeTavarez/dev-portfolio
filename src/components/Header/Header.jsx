import React, { Fragment, useState, useEffect } from "react";
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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { MenuItem, Link } from "@material-ui/core";
// import Dropdown from "../DropdownMenu/Dropdown";
import "./Header.css";

//* Styles
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "10em",
  },

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
  logo: {
    height: "5em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    justifyContent: "space-evenly",
    marginLeft: "auto",
    flexGrow: 1,
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: "45px",
  },
}));

// Scroll control
function ElevationScroll(props) {
  const { children } = props;
  //event listener for scrolling
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
  // Tabs State and handler
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  // active tab refresh
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/projects" && value !== 0) {
      setValue(1);
    } else if (window.location.pathname === "/resume" && value !== 0) {
      setValue(2);
    } else if (window.location.pathname === "/services" && value !== 0) {
      setValue(3);
    } else if (window.location.pathname === "/opensource" && value !== 0) {
      setValue(4);
    }
  }, [value]);

  return (
    <Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary">
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
              <Typography
                className={classes.title}
                variant="h3"
                color="primary"
                noWrap
              >
                <div className="message">
                  <Button
                    component={NavLink}
                    to="/"
                    disableRipple
                    onClick={() => setValue(0)}
                    className={classes.logoContainer}
                  >
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
                      alt="avatar"
                      className="ninja-header"
                      className={classes.logo}
                    />
                  </Button>
                  <h1>Hello Friend</h1>
                  <Paper className={classes.tabContainer}>
                    <Tabs value={value} onChange={handleChange}>
                      <Tab
                        className={classes.tab}
                        component={NavLink}
                        to="/"
                        label="Home"
                      />
                      <Tab
                        className={classes.tab}
                        component={NavLink}
                        to="/projects"
                        label="Projects"
                      />
                      <Tab
                        className={classes.tab}
                        component={NavLink}
                        to="/resume"
                        label="Resume"
                      />
                      <Tab
                        className={classes.tab}
                        component={NavLink}
                        to="/services"
                        label="Services"
                        disabled
                      />
                      <Tab
                        className={classes.tab}
                        to="/opensource"
                        label="Open Source"
                        disabled
                      />
                    </Tabs>
                  </Paper>
                  <div className="estimate">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      disabled
                    >
                      Free Estimate
                    </Button>
                  </div>
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
      <div className={classes.toolbarMargin} />
    </Fragment>
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
