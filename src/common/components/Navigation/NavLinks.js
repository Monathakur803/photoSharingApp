import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import { LoginContext } from "../context";

import "./NavLinks.css";

const NavLinks = (props) => {
    const loggedin=useContext(LoginContext);


    return (
        <ul className="navlinks">
            <li>
                <NavLink  to = "/" exact>
                    Everyone
                </NavLink >
            </li>
            {loggedin.isLoggedIn && (
                <li>
                <NavLink to = "/u1/locations" >  My Locations  </NavLink>
            </li>
            )}
            {loggedin.isLoggedIn && (
              <li>
                <NavLink to = "/locations/new">  Add Location  </NavLink>
            </li>  
            )}
            {!loggedin.isLoggedIn && (
               <li>
                <NavLink to = "/login" >   Sign in/up </NavLink>
            </li> 
            )}
            {loggedin.isLoggedIn && (
                <button onClick={loggedin.logout}>Log out</button>
            )}
     
        </ul>
    );
};

export default NavLinks;