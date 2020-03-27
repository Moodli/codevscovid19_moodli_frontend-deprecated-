import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import dynamic from 'next/dynamic';
import React from 'react';
import { landingStyles } from '../ui-components/theme';

const Map = dynamic(() => import('../ui-components/map/map'), { ssr: false });

const Index = ({ classes }) => (
  <>
    <Grid container={true} className={classes.root}>
      <Grid item={true} md={12}>
        <Map />
      </Grid>
    </Grid>
  </>
);

export default withStyles(landingStyles)(Index);
