import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // for storing notes array
  const [notes, setNotes] = useState([]);

  // for adding new note
  function addNote(newNote) {
    // adding new note in array
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // for deleting the note
  function deleteNote(id) {
    setNotes((prevNotes) => {
      // return all except the id mateches with index
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
