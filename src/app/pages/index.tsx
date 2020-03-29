import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/styles';
import * as GeoJSON from 'geojson';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { landingStyles } from '../ui-components/theme';

const logo = require('../assets/logo.svg');
const data = require('../dataset.json');
const Map = dynamic(() => import('../ui-components/map/map'), { ssr: false });

const Index = ({ classes }) => {
  const [center, setCenter] = useState<GeoJSON.Feature>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }: Position) => {
          setCenter(
            GeoJSON.parse(
              {
                lat: coords.latitude,
                lng: coords.longitude
              },
              { Point: ['lat', 'lng'] }
            )
          );
        },
        // tslint:disable-next-line: no-console
        e => console.error
      );
    }
    return;
  }, []);

  return center ? (
    <Map center={center} data={data} />
  ) : (
    <div className={classes.loader}>
      <Skeleton animation='wave' style={{ width: '50%' }} />
    </div>
  );
};

export default withStyles(landingStyles)(Index);
