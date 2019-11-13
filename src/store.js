import {createStore, compose, applyMiddleware} from 'redux';
import window from 'global/window';
import {taskMiddleware} from 'react-palm/tasks';
import reducers from './reducers';

export const middlewares = [
  taskMiddleware
];

export const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers)
);