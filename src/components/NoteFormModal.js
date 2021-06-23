function NoteFormModal(props) {
  const noteFormSubmitHandler = event => {
    event.preventDefault();
    if (props.noteEditMode) {
      props.editNote(event.target[0].value, event.target[1].value);
    } else {
      props.addNote(event.target[0].value, event.target[1].value);
    }
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
        <input
          type="text"
          name="title"
          required={true}
          defaultValue={props.title || ""}
        />
        <label>Content</label>
        <textarea
          name="content"
          required={true}
          defaultValue={props.title || ""}
        ></textarea>
        <div>
          <button type="submit" className="note-form-submit-btn">
            {props.noteEditMode ? "Edit Note" : "Add Note"}
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
