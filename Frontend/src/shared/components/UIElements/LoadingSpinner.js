/**
 * LoadingSpinner - animate component when we wait for other component.
 * @constant {Object} LoadingSpinner - Main Class
 * @param {object} asOverlay - show display as overlay
 */
import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
