import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { RESULTS_URI } from '../../shared/constants';

const ResultsList = props => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      fetch(RESULTS_URI)
        .then(res => res.json())
        .then(res => setResults(res))
        .catch(err => setError(true))
    },
  []
  )

  if (error) {
    return <h2>Lista wyników jest niedostępna</h2>
  }
  return (
    <ul className="results-list">
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
