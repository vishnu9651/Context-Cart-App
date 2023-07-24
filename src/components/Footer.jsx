import { BsLinkedin, BsPlayBtnFill, BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

function Footer(){
    

return (
    <div style={{display:"flex",backgroundColor:"lightgreen",justifyContent:"space-around",fontWeight:"bold" ,margin:"1rem"}}>
        <div>Career
            <br></br>
        <div style={{fontWeight:"normal"}}>
            <br></br>
            For Artists
            <br></br>
Developers
<br></br>
Advertising

        </div>

        </div>
        <div>Follow
            <br></br>
            <div style={{display:"flex", gap:".5rem",fontWeight:"large",margin:"1rem",fontSize:"large" ,color:"blue"}}>
            <BsLinkedin  />
            <BsWhatsapp />
            <BsPlayBtnFill /> 
            <FaFacebookSquare />
            </div>
        </div>
        <div >FAQ
            <div style={{fontWeight:"normal"}}>
            <br></br>
            For Artists
            <br></br>
Developers
<br></br>
Advertising
<br></br>
Investors
<br></br>
Vendors
</div>
        </div>
        <div >Address
        <br></br>
        <div style={{fontWeight:"normal"}}>
        BH-03,Gandghi Nagar
        Gujraat
        </div>
        <br></br>
        </div>
    </div>
)

}
export default Footer;