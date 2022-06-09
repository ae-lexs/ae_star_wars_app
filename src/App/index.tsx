/* eslint react/no-array-index-key: "off" */

import React, { useEffect, useState } from 'react';

import PeopleHandler, { IPeople } from '../handler/people';
import SWAPI from '../api';

function App() {
  const [people, setPeople] = useState<Array<IPeople>>([]);

  useEffect(() => {
    new PeopleHandler(new SWAPI())
      .getPerBatch()
      .then((peopleBatch) => setPeople(peopleBatch))
      .catch();
  }, []);

  if (people.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {people.map((character: IPeople, index: number) => (
        <div key={index}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
