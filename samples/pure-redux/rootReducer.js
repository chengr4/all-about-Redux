import { combineReducers } from 'redux';

import navigationBar from './features/navigation-bar/reducer';

const rootReducer = combineReducers({
  navigationBar
});

export default rootReducer;