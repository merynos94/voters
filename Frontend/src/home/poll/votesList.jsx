import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { VOTES_URI } from '../../shared/constants';

const VotesList = props => {
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      fetch(VOTES_URI)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('something went wrong')
          }
        })
        .then(res => setVotes(res))
        .catch(err => setError(true))
    },
  []
  )

  if (error) {
    return <h2 style={{ "margin-top": "150px" }}>Lista wyników jest niedostępna</h2>
  }

  return (
    <>
    <h2 style={{ "margin-top": "150px" }}>Lista głosów</h2>
    <ul className="results-list">
      {
        _.map(
          votes,
          (item, index) => (
            <li key={ index }>
              <p>Index: { item.uuid }</p>
              <p>Bit Commitment: { item.bit_commitment }</p>
              <p>Signed Message: { item.signed_message }</p>
            </li>
        ))
      }
    </ul>
    </>
  );
};

export default VotesList;
