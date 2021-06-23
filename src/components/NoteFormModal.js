function NoteFormModal(props) {
  const noteFormSubmitHandler = event => {
    event.preventDefault();
    props.addNote(event.target[0].value, event.target[1].value);
    props.toggleNoteFormModal(false);
  };
  return (
    <>
      <div
        className="backdrop"
        onClick={props.toggleNoteFormModal.bind(this, false)}
      ></div>
      <form className="note-form" onSubmit={noteFormSubmitHandler}>
        <h1>Add Note</h1>
        <label>Title</label>
        <input type="text" name="title" required={true} />
        <label>Content</label>
        <textarea name="content" required={true}></textarea>
        <div>
          <button type="submit" className="note-form-submit-btn">
            Add Note
          </button>
          <button
            className="note-form-cancel-btn"
            onClick={props.toggleNoteFormModal.bind(this, false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default NoteFormModal;
