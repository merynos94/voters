import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
    <React.Fragment>
    return (
    <SideDrawer>
        <nav className="main-navigation__draver-nav"></nav>
        <NavLinks />
    </SideDrawer>
    <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>    
        <h1 className="main=navigation__title">
            YourPlaces
            <Link to ="/">YourPlaces</Link>
        </h1>    
        <nav className="main-navigation__header-nav">
           <NavLinks />
        </nav>
    </MainHeader>
    </React.Fragment>
};

export default MainNavigation;