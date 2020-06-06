import React from 'react';
import notes from './CustomNotes';
import './index.css';

const chosenNote = ({ match }) => {

    const title = match.params.title;
    const note = notes.find(note => note.title === title);

    return (
        <>
            <div className="chosen_note">
                <h2>{note.title}</h2>
                <hr />
                <p>{note.content}</p>
            </div>
        </>
    );
}

export default chosenNote;