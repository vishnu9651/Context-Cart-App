import { createContext, useState } from "react"
export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
const [isAuth,setIsAuth]=useState({token:"",status:false})
const [cart,setCart]=useState([])
const [price,setPrice]=useState(0)

function AddCart(item){
    setCart([...cart,item])
    setPrice(price+item.price)
}
function handleDelete(item){
console.log(cart.length)
    console.log("item",item)
let updateData=cart.filter((k)=>{
    console.log("kjjk",k)
    return k!==item
})
setCart(updateData)
console.log(cart.length)

}

const handleLogIn=(token)=>{
    if(token==null || token==""){
        return
    }
    setIsAuth({...isAuth,token:token,status:true})
    
    }
    const handleLogout=()=>{
        setIsAuth({...isAuth,token:"",status:false})
    }
    


return(    <AuthContext.Provider 
    value={{isAuth,cart,AddCart,handleLogIn,handleLogout,price,handleDelete}}>
        {children}
    </AuthContext.Provider>)
}