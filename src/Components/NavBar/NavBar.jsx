import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
    return ( 
        <nav>
            <ul>
                <li><SearchBar search={props.search} setSearch={props.setSearch} getVideo={props.getVideo} /></li>
                <Link to="loginform">
                <li>Login</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;