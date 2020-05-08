import {GET_USERS  } from "./actionTypes";
import dotProp from 'dot-prop-immutable';

const initialState ={
  usersList : []
}

function usersReducer(state = initialState , action ){
  console.log('action ', action )
  switch (action.type) {
    case GET_USERS:
      // return {...state , usersList:[...state.usersList , action.payload.data]}
      return dotProp.set(state, `usersList`, action.payload.data)
      break;

    default:
      return state
      break;
  }
}

export default usersReducer