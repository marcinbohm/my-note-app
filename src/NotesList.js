import React from 'react';
import {Link} from 'react-router-dom';

const NotesList = ({ notes }) => (
    <>
        {notes.map((note, key) => (
            <Link key={key} to={`/note/${note.title}`}>
                <h3>{note.title}</h3>
                <p>{note.content[0].substring(0, 10)}...</p>
            </Link>
        ))}
    </>
);

export default NotesList;