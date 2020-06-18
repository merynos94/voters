import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const resultsUri = 'http://localhost:3060/results';

const ResultsList = props => {
  const [results, setResults] = useState({});
  useEffect(
    () => {
      fetch(resultsUri)
        .then(res => res.json())
        .then(res => setResults(res))
        .catch(err => console.log(err));
    },
  []
  )

  console.log(results)
  return (
    <ul className="results-list">
      {
        _.map(
          results,
          item => (
            <li>
              <h2>Kandydat: { item.desc }</h2>
              <p>Wynik: { item.result }</p>
            </li>
        ))
      }
    </ul>
  );
};

export default ResultsList;
