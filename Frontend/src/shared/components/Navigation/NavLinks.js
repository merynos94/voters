import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return (
        <ul className="nav-links">
            {auth.isLoggedIn && (<li>
                <NavLink to="/users" > ALL CANDIDATE </NavLink>
            </li>
            )}
            {auth.isLoggedIn && (<li>
                <NavLink to="/u1/places"> MY POLL </NavLink>
            </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/poll"> ADD VOTE </NavLink>
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

