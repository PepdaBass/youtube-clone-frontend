import React from 'react';
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return ( 
        <nav>
            <ul>
                <Link to="loginform">
                <li>Login</li>
                </Link>
                <Link to="registration">
                <li>Signup</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;