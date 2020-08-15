import { combineReducers } from 'redux';
import biscuitReducer from './biscuit/biscuitReducer';
import cakeReducer from './cake/cakeReducer';
import userReducer from './user/userReducers';

const rootReducer = combineReducers({
  cake: cakeReducer,
  biscuit: biscuitReducer,
  user:userReducer
});

export default rootReducer;
