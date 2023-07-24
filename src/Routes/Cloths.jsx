import { useEffect } from "react"
import { useState } from "react"
import {AuthContext} from "../Context/AuthContext"
 import {useContext} from "react"

import Login from "./Login"
import { Link, useNavigate } from "react-router-dom"
function getData(){
    return fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res=>res.json())
    
}


function Cloths(){
    const navigate=useNavigate()
     const {AddCart}=useContext(AuthContext)
    const [data,setData]=useState([])
     const {isAuth}=useContext(AuthContext)
    useEffect(()=>{
    
        getData().then((res)=>{
            setData(res)
        })
    },[])
    
    console.log("data",data)
    
        return (
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
    {data.map((item)=>(<div key={item.id}>
        <img  height="100px" src={item.image} alt={item.title}/>
        <br />
        {item.title}
        <br />
        <h3>Price:{item.price}</h3>
        <button onClick={()=>isAuth.status? AddCart(item):navigate("/login")} style={{margin:"15px"}}>Add To Cart</button>
    
    </div>))}
    
            </div>
        )
}
export  {Cloths}