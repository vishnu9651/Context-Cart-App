import { AuthContext } from "../Context/AuthContext"
    import { useContext } from "react"
function Cart(){
const {cart,price,handleDelete}=useContext(AuthContext)
    

return (
    <div>
<h1>Total Price: ₹{price.toFixed(2)}</h1>    
        
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>

{cart.map((item)=>(<div style={{ border:"1px solid red",padding:"5px",margin:"5px",backgroundColor:"lightblue"}} key={item.id}>
    <img  height="80px" src={item.image} alt={item.title}/>
    <br />
    {item.title}
    <br />
    <h3>Price:{item.price}</h3>
    <button style={{backgroundColor:"tomato", borderRadius:"10px"}} onClick={()=>handleDelete(item)}>delete</button>


</div>))}

        </div>
        </div>
)

}
export { Cart}