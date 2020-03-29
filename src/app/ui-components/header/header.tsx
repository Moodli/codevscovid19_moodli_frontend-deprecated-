import { Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { styles } from './header.css';

const logo = require('../../assets/logo.svg');

interface IHeaderProps {
  title: string;
  classes: any;
}

const Header = ({ title, classes }: IHeaderProps) => (
  <Hidden xsDown={true}>
    <div className={clsx('fixed', classes.appBar)}>
      <img src={logo} alt={title} className={classes.logo} />
      <br />
      <span style={{ fontStyle: 'italic', color: 'grey' }}>
        COVID-19 world mood map
      </span>
    </div>
  </Hidden>
);

export default withStyles(styles)(Header);
