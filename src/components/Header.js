function Header(props) {
  return (
    <header>
      <h1>Note Keeper</h1>
      <button onClick={props.toggleNoteFormModal.bind(this, true)}>
        Add Note
      </button>
    </header>
  );
}

export default Header;
