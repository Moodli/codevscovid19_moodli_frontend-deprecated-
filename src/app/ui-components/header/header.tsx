import { Hidden } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useState } from 'react';
import { styles } from './header.css';

const logo = require('../../assets/logo.svg');

interface IHeaderProps {
  title: string;
  classes: any;
  onDrawerToggle: () => void;
}

const Header = ({ title, classes, onDrawerToggle }: IHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar>
          <Grid container={true} spacing={1} alignItems='center'>
            {/* <Hidden smUp={true}>
              <Grid item={true}>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden> */}
            <Grid item={true} xs={false}>
              <Hidden xsDown={true}>
                <img src={logo} alt='Logo' className={classes.logo} />
                <br />
                <span style={{ fontStyle: 'italic', color: 'grey' }}>
                  World mood map
                </span>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
