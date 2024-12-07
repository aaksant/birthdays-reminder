import Button from './Button';

export default function Person({ name, age, image, onRemove }) {
  return (
    <div className="row">
      <div className="person-info">
        <div className="img-container">
          <img className="img" src={image} alt={`${age} years old ${name}`} />
        </div>
        <div className="detail">
          <h3 className="name">{name}</h3>
          <p className="age">{age}</p>
        </div>
      </div>
      <Button kind="row" onRemove={onRemove}></Button>
    </div>
  );
}
