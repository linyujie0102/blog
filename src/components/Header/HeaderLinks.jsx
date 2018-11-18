import React, {Fragment} from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import {isAdmin} from "services/utils.js";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";
import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

import Modal from "@material-ui/core/Modal";

import LoginModal from "components/Modals/LoginModal.jsx";
import NewPostModal from "components/Modals/NewPostModal.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false,
    loginModalOpen: false,
    newPostModalOpen: false,
    snackBar: false,
    snackBarLevel: 'info',
    snackBarMsg: '',
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  getMenuItems = (classes) => {
    if (!isAdmin()) {
      return (
        <MenuItem
          onClick={() => this.setState({loginModalOpen: true, open:false})}
          className={classes.dropdownItem}
        >
          Login
        </MenuItem>
      )
    } else {
      return (
        [
          (<MenuItem
            key={0}
            onClick={() => this.setState({newPostModalOpen: true, open: false})}
            className={classes.dropdownItem}
          >
            New Post
          </MenuItem>),
          (<MenuItem
            key={1}
            onClick={this.logout}
            className={classes.dropdownItem}
          >
            Logout
          </MenuItem>)
        ]
      )
    }
  }

  loginModal = () => {
    return (
      <LoginModal
        open={this.state.loginModalOpen}
        onClose={this.loginModalClose}
        snackBarController={this.openSnackBar}
      />
    )
  }

  newPostModal = () => {
    return (
      <NewPostModal
        open={this.state.newPostModalOpen}
        onClose={this.newPostModalClose}
        snackBarController={this.openSnackBar}
      />
    )
  }

  openSnackBar = (snackBarLevel, snackBarMsg) => {
    this.setState({
      loginModalOpen: false,
      newPostModalOpen: false,
      snackBar: true,
      snackBarLevel: snackBarLevel,
      snackBarMsg: snackBarMsg,
      open: false,
    })
    setTimeout(() => {
      this.setState({
        snackBar: false,
      })
    }, 2000)
  }

  logout = () => {
    console.log('logout')
    window.sessionStorage.removeItem("admin");
    this.openSnackBar(
      'success',
      'Goodbye Gryffindor'
    )
  }

  snackbar = () => {
    return (
      <Snackbar
        place="bc"
        color={this.state.snackBarLevel}
        message={this.state.snackBarMsg}
        open={this.state.snackBar}
        closeNotification={() => this.setState({ snackBar: false })}
        close
      />
    )
  }

  loginModalClose = () => {
    this.setState({loginModalOpen: false})
  }

  newPostModalClose = () => {
    this.setState({newPostModalOpen: false})
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <Person className={classes.icons} />
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      {this.getMenuItems(classes)}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        {this.loginModal()}
        {this.newPostModal()}
        {this.snackbar()}
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
