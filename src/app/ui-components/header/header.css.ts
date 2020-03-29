import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { spacing } from '../theme';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export const styles = (theme: Theme) => ({
  appBar: {
    paddingTop: spacing.xs,
    paddingLeft: spacing.xs,
    zIndex: 2
  },
  logo: {
    maxHeight: '40px'
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  }
});
