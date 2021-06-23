function Header(props) {
  return (
    <header>
      <h1>Note Keeper</h1>
      <button onClick={props.toggleNoteFormModal.bind(this, true)}>
        <span>
          <i className="fa fa-plus"></i> Create Note
        </span>
      </button>
    </header>
  );
}

export default Header;
