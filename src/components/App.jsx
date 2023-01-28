import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // for notes array
  const [notes, setNotes] = useState([]);

  // for adding the new note
  function addNote(newNote) {
    setNotes((prevNotes) => {
      // adding new note in array
      return [...prevNotes, newNote];
    });
  }

  // for deleting note
  function deleteNote(id) {
    setNotes((prevNotes) => {
      // return all except index matches with id
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
