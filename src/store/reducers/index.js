import {combineReducers} from 'redux';
import userListReducer from './userListReducer';
import userDetailReducer from './userDetailReducer';


const rootReducer = combineReducers({
  UsersList: userListReducer,
  UserDetail: userDetailReducer,
});

export default rootReducer;