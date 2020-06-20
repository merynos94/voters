import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import uris from '../../shared/constants';

const candidateInput = (candidate, register) => (
  <p key={ candidate.id }>
    <input ref={ register } id={ candidate.id } type="radio" name="candidate" value={ candidate.id } />
    <label htmlFor={ candidate.id }>{ candidate.description }</label>
  </p>
);

const formSubmit = (callback) => async (data) => {
  const body = JSON.stringify({
    data: {
      id: data.voterId,
      message: { candidate: data.candidate },
    }
  })

  fetch(uris.castVoteUri, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body })
    .then(res => res.json())
    .then(res => {
      const x = _.map(res.data, (key, val) => [key, val])
      callback(x);
    })
    .catch(err => console.log("uh oh! ", err))
};

const fetchCandidates = (successCallback, failureCallback) => () => {
  fetch(uris.candidatesUri)
    .then(res => res.json())
    .then(res => successCallback(res))
    .catch(err => failureCallback(true));
}

const Poll = props => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(false);
  const [pollResponse, setPollResponse] = useState(false)
  const [candidates, setCandidates] = useState({});

  useEffect(fetchCandidates(setCandidates, setError), [])

  if (pollResponse) {
    return (
      <>
        <h2>Thank you for voting!</h2>
        {
          _.map(
            pollResponse,
            item => (
              <p><strong>{ item[1] }:</strong> <span>{ item[0] }</span></p>
            )
          )
        }
      </>
    )
  }

  if (error) {
    return (
      <h2>Something went wrong, refresh the page</h2>
    )
  }

  return (
    <form onSubmit={ handleSubmit(formSubmit(setPollResponse)) }>
      { _.map(candidates, candidate => candidateInput(candidate , register)) }
      <p>
        <input ref={ register } type="text" id="voterId" name="voterId" />
        <label htmlFor="voterId">Your voter ID</label>
      </p>
      <input type="submit" />
    </form>
  );
};


//

export default Poll;
