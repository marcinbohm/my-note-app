import React from 'react';
import notes from './CustomNotes';

const chosenNote = ({ match }) => {

    const title = match.params.title;
    const note = notes.find(note => note.title === title);

    return (
        <>
            <h2>{note.title}</h2>
        </>
    );
}

export default chosenNote;