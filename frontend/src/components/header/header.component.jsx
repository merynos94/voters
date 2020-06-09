import React from 'react';
import { Link } from 'react-router-dom';



//import { ReactComponent as Logo } from '../../assets/crowny.png';
import logo from '../../assets/logo.png';

import './header.styles.scss';


const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    <img src={logo} alt="Logo" />;

      {/* <Logo className='logo' /> */}

    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        ENGLISH
      </Link>
      {/* <Link className='option' to='/shop'>
        CONTACT
      </Link> */}
      
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      
    </div>
  </div>
);

export default Header;