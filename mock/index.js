const express = require("express")
const app = express()
const viplogin = require("./data/vip_login.json")
const adminlogin = require("./data/admin_login.json")
const url = require("url")
    app.get("/login",(req,res) =>{
       const user = url.parse(req.url,true).query.user;
       if (user === 'admin')
       {
            res.send(adminlogin)
       }
       else
       {
         res.send(viplogin)
       }
    })
    app.listen(3300,() =>{
      console.log("服务器运行在3300")
    })