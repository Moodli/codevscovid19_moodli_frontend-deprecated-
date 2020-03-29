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
    '@media (min-width:320px)': {
      '& .mapboxgl-ctrl-top-right': {
        left: '20px'
      }
    }
  },
  mapOverlay: {
    width: '150px',
    left: '0',
    bottom: '30px',
    padding: '10px'
  },
  mapOverlayInner: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '3px',
    padding: '10px',
    marginBottom: '10px'
  },
  mapOverlayLegendBar: {
    height: '10px',
    width: '100%',
    background: 'linear-gradient(to right, green, yellow, red)'
  },
  mapEmojiesContainer: {
    marginTop: '5px',
    display: 'flex',
    alignItems: 'stretch',
    '& span': {
      flex: 1,
      textAlign: 'center'
    },
    '& span:first-child': {
      textAlign: 'left'
    },
    '& span:last-child': {
      textAlign: 'right'
    }
  }
});
