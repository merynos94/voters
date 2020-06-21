/**
 * BackDrop is use for show left hamburger Menu on the page, thanks for Portal, we can show menu synchronize from main page.
 * @constant {Object} Backdrop - class Backdrop
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
