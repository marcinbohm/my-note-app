import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";
import EditButton from './ChosenNoteEditBtn';

const NotesList = ({ notes, editclick }) => (
    <>
        {notes.map((note, key) => (
            <Link className="note_sidebar" key={key} to={`/note/${note.title}`}>
                <h3>{note.title}</h3>
                <p>{note.content[0].substring(0, 15)}...</p>
                <EditButton click={editclick}/>
            </Link>   
        ))}
    </>
);

export default NotesList;