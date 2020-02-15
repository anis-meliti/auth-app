import { createStore, compose, applyMiddleware } from 'redux';
import combineReducers from '../reducer/index';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const store = createStore(
  combineReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
