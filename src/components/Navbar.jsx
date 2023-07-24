


import {Link} from "react-router-dom"
import { BsCartFill } from "react-icons/bs"
import { AuthContext } from "../Context/AuthContext"
import { useContext } from "react"
import Login from "../Routes/Login"
const links=[
    {
    title:"Home",path:"/"},
    {title:"Products",path:"/Products"},
    {title:"About US",path:"/aboutus"},

{title:"FAQ",path:"/faq"}
// {title:{isAuth.status ?"login":"logout"},path:"/login"}
]

function Navbar(){
    const {isAuth,cart,AddCart,handleLogout}=useContext(AuthContext)


return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"skyblue",fontWeight:"bold" ,padding:"5px"}}>
        {links.map((el)=>(<Link key={el.path} to={el.path}>{el.title}</Link>))}
        <Link to="/login"><button onClick={handleLogout}>{isAuth.status ?"logout":"login"}</button></Link>
        <div><Link to={"/cart"}><BsCartFill /> </Link><span>{cart.length}</span></div>
    </div>
)

}
export default Navbar