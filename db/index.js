const util = require('util');
const fs = require('fs');



addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    };

    
    const newNote = { title, text };

    
    return this.retrieveNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  };

  deleteNote(note) {
    return this.retrieveNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes));
}
  
