import {  ADD_TODO} from "./actionTypes";
const initialState= {
  todos : ['dsfdsfsd', 'fdsfsdfsdf'],
  // todos: [{text : 'dsadsa ' , status : true} , {text : 'dsadsa ' , status : true}]]
  filter : 'hide'
}

function todosReducer(state= initialState , action) {
  switch (action.type) {
    case ADD_TODO:
      // console.log('action', action)
        // console.log('state', state)

        //BAD
        // state = {
          // todos : [action.payload]
        // }

        //GOOD
      let newText = action.payload
      let newState = {...state ,todos:[...state.todos, newText]}
      // console.log('newState', newState)
      return newState;
      break;

    default:
      return state
      break;
  }
}
export default todosReducer;
