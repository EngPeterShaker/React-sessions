import React , {useCallback} from 'react'
import {useDispatch  , useSelector , shallowEqual} from "react-redux";
import { fetchUsersAction } from "../redux/usersAction";

const UsersList = () => {
const Dispatch = useDispatch()

//memoization
  const fetchUsers= useCallback( ()=>{
    Dispatch(fetchUsersAction(2))
    //call action for fetching users

  }, [])


  const list = useSelector(state => {
    console.log('state', state)
    return state.usersReducers.usersList
  }, shallowEqual)
  console.log('list', list)

  return (
    <div>
      <button onClick={()=>{fetchUsers()}} > Load USers</button>
      {list.map(listItem => {return (
        <p key={listItem.id}>{listItem.first_name}</p>
      )})}

    </div>
  )
}

export default UsersList
