import {AuthContext} from "../Context/AuthContext"
import React,{useContext, useRef} from "react"
import { Navigate } from "react-router-dom"


 const Login=()=>{
const ref=useRef(null)
const {isAuth,handleLogIn}=useContext(AuthContext)
console.log(isAuth)

const handleLogin = async(user)=>{
try{
    let res= await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    })
res=await res.json()
handleLogIn(res.token)
console.log("res",res)
if(isAuth){

}
}
catch(err){
    console.log(err)
}

}

const LoginPrevent=(e)=>{
    e.preventDefault();
    const {email,password}=ref.current
   const  user={email:email.value,password:password.value}
handleLogin(user)
}
return isAuth.status ?(<Navigate to="/Products" />): (
    <div>
<h1>Log In</h1>


<form ref={ref} onSubmit={LoginPrevent}>
    <input type="text" id="email" placeholder="enter Email"/>
    <br/>
    <input type="password" id="password" placeholder="enter password" />
    <br />
    <input type="submit" />
</form>
<br />
<br />
        <p>for login use reqres login: eve.holt@reqres.in </p>
        <p>for login use reqres password: cityslicka </p>
    </div>
)

}
export  {Login}