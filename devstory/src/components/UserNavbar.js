import React from "react";
import {Link} from "react-router-dom";

function UserNavbar() {
    return(
        <nav>
            <nav>
             <Link to="/article"><div className="logo">dev<span>Story</span></div></Link>
             <ul className="">
                 {/* <a href="#">devStory</a> */}
                 <li ><Link to="/article">Home</Link></li>
                 <li><Link to="/signup">Your Articles</Link></li>
                 <li><Link to="/signin">Logout</Link></li>
                 <li className="chosen"><Link to="/help">Help</Link></li>
             </ul>
         </nav>
    );
        </nav>
    );
}

export default UserNavbar;