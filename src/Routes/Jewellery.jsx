import { useEffect } from "react"
import { useState } from "react"
import {useContext} from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
// import {AuthContext} from "../Context/AuthContext"

function getData(){
    return fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res=>res.json())
    
}


function Jewellery(){
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
{data.map((item)=>(<div key={item.id} style={{ border:"1px solid red",padding:"5px",margin:"5px",backgroundColor:"lightblue"}}>
    <img  height="100px" src={item.image} alt={item.title}/>
    <br />
    {item.title}
    <br />
    <h3>Price:{item.price}</h3>
    <button onClick={()=>isAuth.status? AddCart(item):navigate("/login")} style={{margin:"15px"}} >Add To Cart</button>

</div>))}

        </div>
    )
}
export {Jewellery}