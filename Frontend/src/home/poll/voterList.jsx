import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { VOTERS_URI } from '../../shared/constants';

const VoterList = props => {
  const [voters, setVoters] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      fetch(VOTERS_URI)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('something went wrong')
          }
        })
        .then(res => setVoters(res))
        .catch(err => setError(true))
    },
  []
  )

  if (error) {
    return <h2 style={{ "margin-top": "150px" }}>Lista głosujących jest niedostępna</h2>
  }

  return (
    <>
    <h2 style={{ "margin-top": "150px" }}>Lista osób, które oddały głos</h2>
    <ul className="results-list">
      {
        _.map(
          voters,
          (item, index) => (
            <li key={ index }>
              <p>VoterId: { item.id }</p>
              <p>Message: { item.message }</p>
              <p>Signed Message: { item.signature }</p>
            </li>
        ))
      }
    </ul>
    </>
  );
};

export default VoterList;
