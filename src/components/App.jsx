import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setArray] = useState([]);

  function addNote(note) {
    setArray((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(noteid) {
    setArray((prevNotes) => {
      let existingNotes = prevNotes.filter((note, index) => {
        return index !== noteid;
      });
      return [...existingNotes];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArray.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index)}
            uniqId={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;