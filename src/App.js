import { useState } from "react";

import Header from "./components/Header";
import NoteFormModal from "./components/NoteFormModal";
import Note from "./components/Note";

function App() {
  const [displayNoteFormModal, setDisplayNoteFormModal] = useState(false);
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
    const index = localArr.findIndex(ele => {
      return ele.id === id;
    });
    localArr.splice(index, 1);
    setNotes(localArr);
  };

  return (
    <>
      <Header toggleNoteFormModal={toggleNoteFormModalHandler} />
      {displayNoteFormModal ? (
        <NoteFormModal
          toggleNoteFormModal={toggleNoteFormModalHandler}
          addNote={addNote}
        />
      ) : null}
      {notes.length > 0
        ? notes.map(note => (
            <Note
              key={note.id}
              title={note.title}
              content={note.content}
              id={note.id}
              deleteNote={deleteNote}
            />
          ))
        : null}
    </>
  );
}

export default App;
