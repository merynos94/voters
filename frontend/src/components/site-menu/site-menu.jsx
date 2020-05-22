import React from 'react';
import './site-menu.css';


export const SiteMenu = () => {
    return (
        <div className='background-space'>
            <div className='menu-space'>
            {/* <div className='x-symbole'><p>x</p></div> */}
            <button class="header-menu-button__button active" type="button" title="Open menu" aria-expanded="true" aria-pressed="true" >
            <span class="header-menu-button__bars"></span><span class="header-menu-button__text">Menu</span></button>

            </div>

            <div className='section-space'>
            <div className='main-menu-container'>
         

            <ul id="menu-main-navigation" className="main-menu__container">
            <li className="menu-item">
            <a href="#home">Home</a></li>
            
            <li className="menu-item">
            <a href="#home">About</a></li>
            
            <li className="menu-item">
            <a href="#home">FAQ</a></li>
            
            <li className="menu-item">
            <a href="#home">Contact</a></li>
            </ul>
            </div>
            </div>
</div>
    )
}
export default SiteMenu;