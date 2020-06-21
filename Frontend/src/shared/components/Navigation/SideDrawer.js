/**
 * SideDraw - Add animaton (slide in. slide out)
 * @constant {Object} SideDrawer - Main class 
 * @param {Object}  content - content to render
 * @param {String} document - where content schould be render
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
    const content = (
        <CSSTransition 
        in={props.show} 
        timeout={200} 
        classNames="slide-in-left" 
        mountOnEnter 
        unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));

};

export default SideDrawer;