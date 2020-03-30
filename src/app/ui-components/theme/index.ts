import {
  createMuiTheme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';

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
      main: '#ff0000'
    }
  },
  shape: {
    borderRadius: 8
  }
});

theme = {
  ...theme,
  overrides: {
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
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    position: 'relative'
  }
});

export const landingStyles = createStyles({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default theme;
