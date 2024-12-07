export default function Header({ numOfPeople }) {
  const getHeaderText = numOfPeople => {
    if (numOfPeople) return `${numOfPeople} birthdays today`;
    else return 'You have no birthdays today';
  };

  return <h1 className="header">{getHeaderText(numOfPeople)}</h1>;
}
