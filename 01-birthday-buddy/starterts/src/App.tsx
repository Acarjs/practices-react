import { useState } from 'react';
import { data } from './data';
import List from './List';

type DataProps = typeof data;

export default function App() {
  const [people, setPeople] = useState<DataProps>(data);

  return (
    <main>
      <section className="container">
        <h2>{data.length} birthday today</h2>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}
