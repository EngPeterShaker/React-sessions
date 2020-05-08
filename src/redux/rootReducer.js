
import {combineReducers} from 'redux';
import todosReducer from "./todosReducer";
import usersReducers from "./usersReducers";

export default combineReducers({
  todosReducer ,
  usersReducers,
});
