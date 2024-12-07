import Person from './Person';

export default function PersonList({ people, onRemove }) {
  return (
    <div className="person-list">
      {people.map(({ id, name, age, image }) => (
        <Person
          key={id}
          name={name}
          age={age}
          image={image}
          onRemove={() => onRemove(id)}
        ></Person>
      ))}
    </div>
  );
}
