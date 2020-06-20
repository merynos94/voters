import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import './NavLinks.css';

// export default class Navbar extends Component {
//     scrollToTop = () => {
//         scroll.scrollToTop();
//     };

    const NavLinks = props => {
        const auth = useContext(AuthContext);



        // render() {
            return (
                // <React.Fragment>
                <ul className="nav-links">



                    {auth.isLoggedIn && (<li>
                        <NavLink to="/users" > ALL CANDIDATE </NavLink>
                    </li>
                    )}
                    {auth.isLoggedIn && (<li>
                        <NavLink to="/u1/places"> MY POLLY </NavLink>
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

