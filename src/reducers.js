import {combineReducers} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';

//Custom initial map state
const map_state = {
    pitch: 0,
    bearing: 0,
    latitude: 41.38,
    longitude: 2.15,
    zoom: 11,
    dragRotate: false,
    width: 800,
    height: 800,
    isSplit: false
  };

// Custom reducer to aply initial map state
const customizedKeplerGlReducer = keplerGlReducer
    .initialState({
        mapState: map_state,
        mapStyle: {
            styleType: 'basic'
        }
});

const reducers = combineReducers({
  // mount keplerGl reducer
  keplerGl: customizedKeplerGlReducer
});


export default reducers;