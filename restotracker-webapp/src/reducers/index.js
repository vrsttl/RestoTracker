import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import componentChange from './componentChange';
import updateDrawer from './updateDrawer';
import user from './user';
import getTables from './getTables';

const rootReducer = combineReducers({
  user,
  componentChange,
  updateDrawer,
  getTables,
  routing: routerReducer,
});

export default rootReducer;