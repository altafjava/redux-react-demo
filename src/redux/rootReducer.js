import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import biscuitReducer from './biscuit/biscuitReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  biscuit: biscuitReducer,
});

export default rootReducer;
