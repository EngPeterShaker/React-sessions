import axios from "axios";


export const fetchUsersAction=(pageNumber)=>Dispatch=>{
  axios.get(`https://reqres.in/api/users?page=${pageNumber}`)
  .then(res => {
    console.log('res', res)
    return Dispatch({
      type: 'GET_USERS',
      payload : res.data
    })
  })
}