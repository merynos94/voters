import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useForm } from '../../shared/hooks/form-hooks';

const voteUri = 'http://localhost:3000/votes';
const candidatesUri = 'http://localhost:3060/candidates'

const candidateInput = (candidate) => {
  <Input
    element="input"
    id={ candidate.id }
    type="radio"
    label={ candidate.description }
  />
};

const formSubmit = async event => {
  event.preventDefault();

};

const Poll = props => {
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
    <form onSubmit={ formSubmit }>
      { _.map(candidates, candidate => candidateInput(candidate)) }
      <Button type="submit" disabled={!formState.isValid}>
      </Button>
    </form>
  );
};

export default ResultsList;
