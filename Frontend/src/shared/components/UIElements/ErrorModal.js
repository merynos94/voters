/**
 * Error modal show diffrent error, when we put inncorect data.  
 * @constant {Object} ErrorModal - basic class.
 */

import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
