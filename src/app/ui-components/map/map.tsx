import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import * as GeoJSON from 'geojson';
import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
import { styles } from './map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJ0ZGF3IiwiYSI6ImNrOGFzODg0MTA1M3MzZm1qMTAxNjJ6bjEifQ.CDaURiTGZYvrUNSspris3Q';

interface MapState {
  center: GeoJSON.Feature;
  zoom: number;
}

interface MapProps {
  center: GeoJSON.Feature;
  data: GeoJSON.FeatureCollection;
  classes?: any;
}

class Map extends Component<MapProps, MapState> {
  mapRef = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);
    const { center } = this.props;
    this.state = {
      center,
      zoom: 3
    };
  }

  componentDidMount() {
    const data = this.props.data;

    const geoPoint = {
      lng: this.state.center ? this.state.center.geometry.coordinates[0] : 0,
      lat: this.state.center ? this.state.center.geometry.coordinates[1] : 0
    };
    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: geoPoint,
      zoom: 1
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }),
      'top-left'
    );
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl
      }),
      'top-right'
    );
    map.flyTo({
      center: geoPoint,
      zoom: 6,
      bearing: 0,
      speed: 1, // make the flying slow
      curve: 1, // change the speed at which it zooms out
      essential: true
    });

    map.on('load', () => {
      map.addSource('points', {
        type: 'geojson',
        data
      });

      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'sentiment'],
            -0.2,
            'red',
            0,
            'yellow',
            0.2,
            'green'
          ],
          'circle-opacity': 0.5
        }
      });

      map.on('click', 'points', (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const text = e.features[0].properties.textHuman;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup().setLngLat(coordinates).setHTML(text).addTo(map);
      });

      map.on('mouseenter', 'points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'points', () => {
        map.getCanvas().style.cursor = '';
      });
    });
  }

  render() {
    const classes = this.props.classes;

    return (
      <>
        <div ref={this.mapRef} className={clsx('fixed', classes.map)} />
        <div className={clsx('fixed', classes.mapOverlay)}>
          <div className={classes.mapOverlayInner}>
            <div className={classes.mapOverlayLegendBar} />
            <div className={classes.mapEmojiesContainer}>
              <span>😀</span>
              <span>😐</span>
              <span>🙁</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Map);
