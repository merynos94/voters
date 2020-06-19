import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
// import { Link, animateScroll as scroll } from "react-scroll";
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


                    {!auth.isLoggedIn && (
                        <li>

                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Section 1
              </Link>
                        </li>
                    )}
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
                            <NavLink to="/places/new"> ADD VOTE </NavLink>
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

