function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div
        className="note-delete"
        onClick={props.deleteNote.bind(this, props.id)}
      >
        <span>Delete</span>
      </div>
      <div className="note-edit">
        <span>Edit</span>
      </div>
    </div>
  );
}

export default Note;
