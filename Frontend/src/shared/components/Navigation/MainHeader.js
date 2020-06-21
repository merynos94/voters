/**
 * MainHeader to use for button on menu.
 * @constant {Object} MainHeader - class MainHeader
 * @returns {Object} header.
 * @prop {string} children - Refer to the thinks from open to close component. Is a placeholder for the content which enter.
 */
import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
