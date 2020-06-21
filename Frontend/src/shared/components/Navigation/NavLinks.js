/**
 * Navlinks - Which Link schould be show users before or after login in.
 * @constant {Object} Navlinks 
 * @param {boolean} drawerIsOpen - open/close navigation menu
 * @returns {Object} Link which is a logo on the top.
 */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links">
            {auth.isLoggedIn && (<li>
                <NavLink to="/results" > RESULTS </NavLink>
            </li>
            )}
            {auth.isLoggedIn && (<li>
                <NavLink to="/poll"> MY POLL </NavLink>
            </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/open-vote"> ADD VOTE </NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth"> LOGIN </NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <button onClick={auth.logout}> LOGOUT</button>
                </li>
            )}
        </ul>
    );
}
export default NavLinks;

