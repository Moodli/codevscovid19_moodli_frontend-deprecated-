import {
  createMuiTheme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';

export const yellow = '#F5DB00';
export const white = '#ffffff';
export const spacing = {
  xs: 12,
  l: 32,
  xl: 64
};

const pxToRem = value => `${value / 16}rem`;

let theme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      'Sen',
      '-apple-system',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: pxToRem(70)
      },
      fontSize: pxToRem(32)
    },
    h2: {
      '@media (min-width:600px)': {
        fontSize: pxToRem(32)
      },
      fontSize: pxToRem(24)
    }
  },
  palette: {
    primary: {
      main: white
    },
    secondary: {
      main: yellow
    }
  },
  shape: {
    borderRadius: 8
  }
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiButton: {
      label: {
        textTransform: 'none',
        paddingLeft: spacing.l,
        paddingRight: spacing.l
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        },
        borderRadius: spacing.l,
        fontWeight: 700
      }
    },
    MuiAvatar: {
      root: {
        width: spacing.l,
        height: spacing.l
      }
    }
  },
  props: {},
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: spacing.xl
    }
  }
};

export const cardStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
);

export const drawerWidth = 256;
export const appStyles = createStyles({
  root: {
    background: white,
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1
  }
});

export const landingStyles = createStyles({
  root: {
    paddingLeft: spacing.l,
    paddingRight: spacing.l
  },
  h1: {
    [theme.breakpoints.up('sm')]: {
      marginTop: pxToRem(150)
    }
  },
  h2: {
    marginTop: spacing.l,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  },
  footer: {
    paddingLeft: spacing.l,
    paddingRight: spacing.l,
    paddingBottom: spacing.l
  }
});

export default theme;
