import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { RESULTS_URI } from '../../shared/constants';

const ResultsList = props => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      fetch(RESULTS_URI)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('something went wrong')
          }
        })
        .then(res => setResults(res))
        .catch(err => setError(true))
    },
  []
  )

  if (error) {
    return <h2 style={{ "margin-top": "150px" }}>Lista wyników jest niedostępna</h2>
  }
  return (
    <ul className="results-list" style={{ "margin-top": "150px" }}>
      {
        _.map(
          results,
          (item, index) => (
            <li key={ index }>
              <h2>Kandydat: { item.desc }</h2>
              <p>Wynik: { item.result }</p>
            </li>
        ))
      }
    </ul>
  );
};

export default ResultsList;
