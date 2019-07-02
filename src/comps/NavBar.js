import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
        <ul className="app-nav flex ">
            <li>
                <NavLink  className="nav-link"  
                    activeClassName="activeRoute"  
                    to="/home">Home
                </NavLink> |
            </li>
            <li>
                <NavLink className="nav-link" 
                    activeClassName="activeRoute"
                     to="/movie">Movies
                </NavLink> 
            </li>
        </ul>
        </nav>
    )
}

export default NavBar