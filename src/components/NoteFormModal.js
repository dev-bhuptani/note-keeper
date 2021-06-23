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
        <label>Title</label>
        <input type="text" name="title" required={true} />
        <label>Content</label>
        <textarea name="content" required={true}></textarea>
        <button type="submit">Add Note </button>
      </form>
    </>
  );
}

export default NoteFormModal;
