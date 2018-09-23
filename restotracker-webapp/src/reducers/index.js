import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import componentChange from './componentChange';
import updateDrawer from './updateDrawer';
import user from './user';


const rootReducer = combineReducers({
  user,
  componentChange,
  updateDrawer,
  routing: routerReducer,
});

export default rootReducer;