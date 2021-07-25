import baseURL from "./baseURL";
import axios from "axios";
const http = {}

let instance = axios.create({
  timeout: 5000})

instance.interceptors.request.use(function
    (config)
    {
        return config
   },
    function (error){
  return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response =>{
      return response.data
    },
    error => {
      if (error && error.response){
        switch (error.response.status){
          case 400:
              alert("请求出错")
            break
          case 401:
            alert("授权失败")
              setTimeout(()=>{
                window.location.reload()
              },1000)
            return
        }
      } else
      {
        alert("链接服务器失败")
        return Promise.reject(error.response)
      }
    }
)

http.get = function (url,options){
  return new  Promise((resolve,reject) =>
  {
    instance
        .get(url,options)
        .then(response =>{
          let data = JSON.parse(JSON.stringify(response))
         resolve(data.data)
        })
        .catch( e =>{
          reject(e)
          console.log(e)
        })
  })
}

http.post = function (url,data,options){
  return new Promise((resolve,reject) => {
    instance
        .post(url,data,options)
        .then(response =>{
          resolve(response)
        })
        .catch( e => {
          reject(e)
          alert(e)
        })
  })
}
export default http

