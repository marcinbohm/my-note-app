import React from 'react';
import { Fab } from '@rmwc/fab';
import "./index.css";

const EditNoteModal = props => (
    <div className="add_note_modal">
        <header className="add_note_header"><h2>Edit note</h2></header>
        <hr className="add_note_hr" />
        <section className="new_note_title">
            <h3>Title</h3>
            <textarea value={props.title} />
        </section>
        <section className="new_note_content">
            <h3>Content</h3>
            <textarea value={props.content} />
        </section>
        <Fab className="save_note" label="Save" />
        <Fab onClick={props.closeNote} style={{ backgroundColor: 'var(--mdc-theme-error)' }} theme={['onError']} label="Cancel" />
    </div>
);

export default EditNoteModal;