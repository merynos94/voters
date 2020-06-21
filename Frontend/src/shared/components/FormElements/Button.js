/**
 * Button Component which user can control.
 * @constant {Object} Button - Object custom button 
 * @prop {string} href - Render a normal link
 * @prop {string} to - Render a link comming from React-router-dom. 
 * Give user optional editing a special style E.g controling size, inverse, danger.
 * @returns {Object} - Return a custom button.
 * @prop {string} type - control a type
 * @prop {string} onClick - forward onclick
 * @prop {string} disabled - disabled button
 */
import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
