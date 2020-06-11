import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../../shared/components/UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    
    const openDrawer = () =>{
        setDrawerIsOpen(true);
    };

    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    };
    return (
        <React.Fragment>
    {drawerIsOpen && <Backdrop  onClick={closeDrawer} />}
    {drawerIsOpen && (
    <SideDrawer>
        <nav className="main-navigation__draver-nav">
        <NavLinks />
        </nav>
    </SideDrawer> 
    )}
    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
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
    );
};

export default MainNavigation;