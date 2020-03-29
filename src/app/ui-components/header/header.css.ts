import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { spacing } from '../theme';

const lightColor = 'rgba(255, 255, 255, 0.7)';

export const styles = (theme: Theme) => ({
  appBar: {
    background:
      'linear-gradient(to bottom, rgba(125,125,125,1) 0%, rgba(125,125,125, 0.50) 25%, rgba(255,255,255,0) 100%)',
    paddingTop: spacing.xs,
    paddingLeft: spacing.xs
  },
  logo: {
    maxHeight: '40px'
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  }
});
