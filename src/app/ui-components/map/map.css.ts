import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    '& .mapboxgl-ctrl-top-right': {
      zIndex: '9999',
      top: '10px',
      '& .mapboxgl-ctrl': {
        clear: 'left'
      }
    },
    '& .mapboxgl-ctrl-top-left': {
      top: '6em'
    },
    '@media (min-width:320px)': {
      '& .mapboxgl-ctrl-top-right': {
        left: '20px'
      }
    }
  },
  mapOverlay: {
    top: '210px',
    left: '0',
    bottom: '10px',
    padding: '10px'
  },
  mapOverlayInner: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '3px'
  },
  mapOverlayLegendBar: {
    borderRadius: '3px 0 0 3px',
    height: '100px',
    width: '6px',
    background: 'linear-gradient(to bottom, green, yellow, red)'
  },
  mapEmojiesContainer: {
    display: 'flex',
    flexFlow: 'column',
    marginLeft: '3px',
    '& span': {
      flex: 1.7,
      height: '10px'
    },
    '& span:first-child': {
      flex: 1.7
    },
    '& span:last-child': {
      flex: 1
    }
  }
});
