import { useState } from "react";

import Header from "./components/Header";
import NoteFormModal from "./components/NoteFormModal";
import Note from "./components/Note";

function App() {
  const [displayNoteFormModal, setDisplayNoteFormModal] = useState(false);
  const [noteEditMode, setNoteEditMode] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);
  const [notes, setNotes] = useState([]);

  const toggleNoteFormModalHandler = val => {
    setDisplayNoteFormModal(val);
  };

  const addNote = (title, content) => {
    const localArr = [...notes];
    localArr.push({ title: title, content: content, id: localArr.length + 1 });
    setNotes(localArr);
  };

  const deleteNote = id => {
    const localArr = [...notes];
    const index = localArr.findIndex(ele => ele.id === id);
    localArr.splice(index, 1);
    setNotes(localArr);
  };

  const editNoteFormModal = id => {
    toggleNoteFormModalHandler(true);
    setNoteEditMode(true);
    setEditNoteId(id);
  };

  const editNote = (editedTitle, editedContent) => {
    const localArr = [...notes];
    const index = localArr.findIndex(ele => ele.id === editNoteId);
    localArr[index].title = editedTitle;
    localArr[index].content = editedContent;
    setNotes(localArr);
    setNoteEditMode(false);
    setEditNoteId(null);
  };

  return (
    <>
      <Header toggleNoteFormModal={toggleNoteFormModalHandler} />
      {displayNoteFormModal ? (
        <NoteFormModal
          toggleNoteFormModal={toggleNoteFormModalHandler}
          addNote={addNote}
          editNote={editNote}
          noteEditMode={noteEditMode}
          title={
            noteEditMode
              ? notes.find(note => note.id === editNoteId).title
              : null
          }
          content={
            noteEditMode
              ? notes.find(note => note.id === editNoteId).content
              : null
          }
        />
      ) : null}
      {notes.length > 0
        ? notes.map(note => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              id={note.id}
              editNoteFormModal={editNoteFormModal}
              deleteNote={deleteNote}
            />
          ))
        : null}
    </>
  );
}

export default App;
