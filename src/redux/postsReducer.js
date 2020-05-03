const initialState= {
  todos : [],
  filter : 'hide'
}

function todosReducer(state= initialState , action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('action', action)
        console.log('state', state)
        // state = {
          // todos : [action.payload]
        // }
      let newText = action.payload
      let newState = {...state ,todos:[...state.todos, newText]}
      console.log('newState', newState)
      return newState;
      break;

    default:
      return state
      break;
  }
}
export default todosReducer;
