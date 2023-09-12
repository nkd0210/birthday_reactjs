import React, { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  const handleClearAll = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={handleClearAll}>
          Clear all
        </button>
      </section>
    </main>
  )
}

export default App;
