import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { OPEN_VOTE_URI } from '../../shared/constants';

const formSubmit = (succesCallback, errorCallback) => async (data) => {
  const body = JSON.stringify({ data: { key: data.key, iv: data.iv } });
  const fetchParams = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }

  fetch(OPEN_VOTE_URI('0d41ba33-577c-4b98-981b-0ad4cadc593c'), fetchParams)
    .then(res => res.json())
    .then(res => {
      succesCallback(true)
      console.log("YAS YAS YAS! ", res);
    })
    .catch(err => {
      console.log("uh oh! ", err);
      errorCallback(true);
    })
};


const VoteOpener = props => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(false);
  const [voteResponse, setVoteResponse] = useState(false)

  if (voteResponse) {
    return (
      <>
        <h2>Thank you for voting!</h2>
        <h4>Your vote has been succesfully opened!</h4>
      </>
    )
  }

  if (error) {
    return (
      <h2>Something went wrong, refresh the page</h2>
    )
  }

  return (
    <form onSubmit={ handleSubmit(formSubmit(setVoteResponse, setError)) }>
      <p>
        <input ref={ register } type="text" id="key" name="key" />
        <label htmlFor="key">Your private key</label>
      </p>
      <p>
        <input ref={ register } type="text" id="iv" name="iv" />
        <label htmlFor="iv">Your initialisation vector</label>
      </p>
      <input type="submit">
      </input>
    </form>
  );
};
//
export default VoteOpener;
