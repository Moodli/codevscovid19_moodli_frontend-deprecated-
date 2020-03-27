import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { spacing } from '../theme';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export const styles = (theme: Theme) => ({
  appBar: {
    paddingTop: spacing.l,
    paddingBottom: spacing.l,
    paddingLeft: spacing.xs   
  },
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    'color': lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});