export default function Button({ kind, onRemove }) {
  return (
    <button type="button" className="btn" onClick={() => onRemove()}>
      {kind === 'row' ? 'Remove' : 'Remove All'}
    </button>
  );
}
