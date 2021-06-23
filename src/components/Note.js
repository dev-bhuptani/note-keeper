function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div
        className="note-delete"
        onClick={props.deleteNote.bind(this, props.id)}
        title="Delete Note"
      >
        <span>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </span>
      </div>
      <div
        className="note-edit"
        onClick={props.editNoteFormModal.bind(this, props.id)}
        title="Edit Note"
      >
        <span>
          <i className="fa fa-pencil"></i>
        </span>
      </div>
    </div>
  );
}

export default Note;
