import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useForm } from 'react-hook-form';

const voteUri = 'http://localhost:3000/votes';
const candidatesUri = 'http://localhost:3060/candidates'

const candidateInput = (candidate) => (
  <p key={ candidate.id }>
    <input id={ candidate.id } type="radio" name="candidate" value={ candidate.uuid } />
    <label htmlFor={ candidate.id }>{ candidate.description }</label>
  </p>
);

const formSubmit = (data) => {
  const body = JSON.stringify({
    data: {
      id: data.voterId,
      message: { candidate: data.candidate },
    }
  })

  fetch(voteUri, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body })
    .then(res => console.log("vote success! ", res.json()))
    .catch(err => console.log("uh oh! ", err))
};

const Poll = props => {
  const { handleSubmit, register } = useForm();
  const [candidates, setCandidates] = useState({});

  useEffect(
    () => {
      fetch(candidatesUri)
        .then(res => res.json())
        .then(res => setCandidates(res))
        .catch(err => console.log(err));
    },
    []
  )

  return (
    <form onSubmit={ handleSubmit(formSubmit) }>
      {
        _.map(
          candidates,
          candidate => (
            <p key={ candidate.id }>
              <input ref={ register } id={ candidate.id } type="radio" name="candidate" value={ candidate.id } />
              <label htmlFor={ candidate.id }>{ candidate.description }</label>
            </p>
          )
        )
      }
      <p>
        <input ref={ register } type="text" id="voterId" name="voterId" />
        <label htmlFor="key">Your voter ID</label>
      </p>
      <input type="submit">
      </input>
    </form>
  );
};

export default Poll;
