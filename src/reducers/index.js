import {combineReducers} from 'redux';
import UserReducer from './user-reducer';
import ActiveUserReducer from './active-user-reducer';
import ActivePage from './active-page';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  activePage: ActivePage
})

export default allReducers;

