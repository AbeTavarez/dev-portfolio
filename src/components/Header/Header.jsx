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
    marginBottom: "16em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "5.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5.5em",
    },
  },

  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#1b262c;",
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
    backgroundColor: theme.palette.common.lightBlue,
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
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.lightBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.purple,
  },
  drawItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

//* //////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////
//* /////////////// Scroll control ///////////////////////////
//* //////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////

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

//* ///////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////
//* /////////////////////Main Function ///////////////////////
//* //////////////////////////////////////////////////////////
//* //////////////////////////////////////////////////////////

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Tabs State and handler
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    setSelectedIndex(idx);
  };

  //* @routes - all routes
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },

    { name: "Projects", link: "/projects", activeIndex: 1 },
    { name: "Resume", link: "/resume", activeIndex: 2 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 3,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (e) => handleClick(e),
      isDisable: true,
    },

    {
      name: "Open Source",
      link: "/opensource",
      activeIndex: 4,
      isDisable: true,
    },
  ];
  //Menu Items Array
  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 3, selectedIndex: 0 },
    {
      name: "Personal Website",
      link: "personalwebsite",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Store Website",
      link: "/storewebsite",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Custom Website",
      link: "/customwebsite",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];
  //* ///////////////////////////////////////////////////////////
  //* ///////////////////////////////////////////////////////////
  //* ///////////////ACTIVE TAB REFRESH//////////////////////////
  //* ///////////////////////////////////////////////////////////
  //* //////////////////////////////////////////////////////////
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);
  //* /////////////////////////////////////////////////////////
  //* //////////////////TABS //////////////////////////////////
  //* /////////////////////////////////////////////////////////
  //* /////////////////////////////////////////////////////////

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

        <h1 style={{ color: "white" }}>Welcome</h1>
        <Paper className={classes.tabContainer}>
          <Tabs value={value} onChange={handleChange}>
            {routes.map((route, index) => (
              <Tab
                key={`${route}${index}`}
                className={classes.tab}
                component={Link}
                to={route.link}
                label={route.name}
                aria-owns={route.ariaOwns}
                aria-haspopup={route.ariaPopup}
                onMouseOver={route.mouseOver}
                disabled={route.isDisable}
              />
            ))}
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
            style={{ zIndex: 1302 }}
            keepMounted
          >
            {menuOptions.map((option, idx) => (
              <MenuItem
                key={`${option}${idx}`}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
                onClick={(event, idx) => {
                  handleMenuItemClick(event, idx);
                  setValue(3);
                  handleClose();
                }}
                selected={idx === selectedIndex && value === 3}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </Fragment>
  );

  //* DRAWER ////////////////////////////////////////////////////////////////////////////////
  const drawer = (
    <Fragment>
      <div className="">
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
        <h3>WELCOME</h3>
      </div>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onPen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            oonClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/freeestimate"
            selected={value === 5}
            className={{
              root: classes.drawerItemEstimate,
              selected: classes.drawItemSelected,
            }}
            disabled
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar position="fixed" color="secondary" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
