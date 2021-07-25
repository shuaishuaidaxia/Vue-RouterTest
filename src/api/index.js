import axios from "../utils/http";
import store from '../store'

export function  fetchPermission(){
return  axios.get("/api/permission?user="+store.state.UserToken)
}


export function  login (user) {
   console.log(user,'login-api')
   return axios.get("/api/login?user="+user)
}
