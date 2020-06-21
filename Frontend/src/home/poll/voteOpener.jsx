import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { OPEN_VOTE_URI } from '../../shared/constants';

const formSubmit = (succesCallback, errorCallback) => async (data) => {
  const body = JSON.stringify({ data: { key: data.key, iv: data.iv } });
  const fetchParams = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }

  fetch(OPEN_VOTE_URI(data.index), fetchParams)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('something went wrong')
      }
    })
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
        <h2 style={{ "margin-top": "150px" }}>Thank you for voting!</h2>
        <h4>Your vote has been succesfully opened!</h4>
      </>
    )
  }

  if (error) {
    return (
      <h2 style={{ "margin-top": "150px" }}>Something went wrong, refresh the page</h2>
    )
  }

  return (
    <form onSubmit={ handleSubmit(formSubmit(setVoteResponse, setError)) } style={{ "margin-top": "150px" }}>
      <p>
        <input ref={ register } type="text" id="index" name="index" />
        <label htmlFor="index">Your vote index</label>
      </p>
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
