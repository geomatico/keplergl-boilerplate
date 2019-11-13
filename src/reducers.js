import {combineReducers} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';

const reducers = combineReducers({
  // mount keplerGl reducer
  keplerGl: keplerGlReducer
});

export default reducers;