/**
 * Card place which my can put on the stylish div. 
 * @constant {Object} Card - class Card.
 */
import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
