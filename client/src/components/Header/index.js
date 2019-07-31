import React from "react";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";
import Styles from "./Styles";

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to={props.to} {...props} />
));
const renderLinkButton = React.forwardRef((props, ref) => (
  <Button>
    <RouterLink innerRef={ref} to={props.to} {...props} />
  </Button>
));
const Header = () => {
  const classes = Styles.Navbar();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Router>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link
                color="inherit"
                variant="inherit"
                to="/"
                component={CollisionLink}
              >
                RIDE-ME
              </Link>
            </Typography>
            <Link
              variant="inherit"
              color="inherit"
              to="/signup"
              component={renderLinkButton}
            >
              Login
            </Link>
          </Toolbar>
        </Router>
      </AppBar>
    </div>
  );
};
export default Header;
