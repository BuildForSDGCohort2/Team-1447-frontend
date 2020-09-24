import React from "react";
import {Link, NavLink} from "react-router-dom"
function Navbar(){
    return(
         <nav>
             <Link to="/"><div className="logo">dev<span>Story</span></div></Link>
             <ul className="">
                 {/* <a href="#">devStory</a> */}
                 <li ><NavLink to="/">Home</NavLink></li>
                 <li>< NavLink to="/signup">Sign up</NavLink></li>
                 <li>< NavLink to="/signin">Sign in</NavLink></li>
                 <li className="chosen"><NavLink to="/help">Help</NavLink></li>
             </ul>
         </nav>
    );
}

export default Navbar;