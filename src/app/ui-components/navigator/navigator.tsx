import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PaperProps } from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { styles } from './navigator.css';

const categories = [
  {
    id: 'Dashboard',
    children: [
      { id: 'Map', icon: <MapIcon />, path: '/' },
      { id: 'Analytics', icon: <SettingsIcon /> }
    ]
  }
];

interface INavigatorProps {
  PaperProps: Partial<PaperProps>;
  route: string;
  variant?: DrawerProps['variant'];
  classes?: any;
  open?: boolean;
  onClose?: () => void;
}

function Navigator(props: INavigatorProps) {
  const { classes, route, onClose, ...other } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding={true}>
        <Link href='/'>
          <ListItem
            button={true}
            className={clsx(
              classes.firebase,
              classes.item,
              classes.itemCategory
            )}
          >
            moodli
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path }) => (
              <Link key={childId} href={path}>
                <ListItem
                  key={childId}
                  button={true}
                  className={clsx(
                    classes.item,
                    path === route && classes.itemActiveItem
                  )}
                  onClick={onClose}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
