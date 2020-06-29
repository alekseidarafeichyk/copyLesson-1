import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/prejunior'} activeClassName={s.activeLink}>PreJunior</NavLink>
                </li>  <li>
                    <NavLink to={'/junior'} activeClassName={s.activeLink}>Junior</NavLink>
                </li>
                <li>
                    <NavLink to={'/juniorplus'} activeClassName={s.activeLink}>Junior+</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;