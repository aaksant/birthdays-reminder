import Header from './components/Header';
import PersonList from './components/PersonList';
import Button from './components/Button';
import data from './data';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState(data);

  const handleRemoveRow = id =>
    setPeople(people.filter(person => person.id !== id));

  const handleRemoveAllRows = () => setPeople([]);

  return (
    <div className="wrapper">
      <Header numOfPeople={people.length}></Header>
      <PersonList people={people} onRemove={handleRemoveRow}></PersonList>
      <Button
        kind="all"
        onRemove={handleRemoveAllRows}
        isDisabled={people.length}
      ></Button>
    </div>
  );
}
