import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Typography,
  Button,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  SwipeableDrawer,
  InputBase,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//* Styles
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "20em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "3.5em",
    },
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
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5em",
    },
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
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//* Scroll control
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//* Main Function
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Tabs State and handler
  const [opendrawe, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpenMenu] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  //updates Tabs state
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  //opens Services menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  //close Services menu
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  //Menu Item Handler
  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIdx(idx);
  };
  //Menu Items Array
  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Personal Website", link: "personalwebsite" },
    { name: "Store Website", link: "/storewebsite" },
    { name: "Custom Website", link: "/customwebsite" },
  ];
  // active tab refresh
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
          setSelectedIdx(0);
        }
        break;

      case "/projects":
        if (value !== 1) {
          setValue(1);
        }
        break;

      case "/resume":
        if (value !== 2) {
          setValue(2);
        }
        break;

      case "/services":
        if (value !== 3) {
          setValue(3);
          setSelectedIdx(0);
        }
        break;

      case "/personalwebsite":
        if (value !== 3) {
          setValue(3);
          setSelectedIdx(1);
        }
        break;
      case "/storewebsite":
        if (value !== 3) {
          setValue(3);
          setSelectedIdx(2);
        }
        break;
      case "/customwebsite":
        if (value !== 3) {
          setValue(3);
          setSelectedIdx(3);
        }
        break;
      case "/opensource":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <Fragment>
      <div className="message">
        <Button
          component={Link}
          to="/"
          disableRipple
          onClick={() => setValue(0)}
          className={classes.logoContainer}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
            alt="avatar"
            className={classes.logo}
          />
        </Button>

        <h1 style={{ color: "white" }}>Hello Friend</h1>
        <Paper className={classes.tabContainer}>
          <Tabs value={value} onChange={handleChange}>
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/projects"
              label="Projects"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/resume"
              label="Resume"
            />
            <Tab
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? true : undefined}
              className={classes.tab}
              component={Link}
              onMouseOver={(event) => handleClick(event)}
              to="/services"
              label="Services"
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
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            openMenu={openMenu}
            onClose={handleClose}
            classes={{ paper: classes.menu }}
            MenuListProps={{ onMouseLeave: handleClose }}
            elevation={0}
            keepMounted
          >
            {menuOptions.map((option, idx) => (
              <MenuItem
                key={option}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
                onClick={(event, idx) => {
                  handleMenuItemClick(event, idx);
                  setValue(3);
                  handleClose();
                }}
                selected={idx === selectedIdx && value === 3}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary">
            <Toolbar className={classes.toolbar}>
              {matches ? null : tabs}
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

{
  /* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
                <MenuItem />
              </IconButton>
              <Typography
                className={classes.title}
                variant="h3"
                color="primary"
                noWrap
              ></Typography>
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
              </IconButton> */
}
