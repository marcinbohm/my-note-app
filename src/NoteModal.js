import React from 'react';
import { Fab } from '@rmwc/fab';
import "./index.css"

const noteModal = props => (
    <div className="add_note_modal">
        <header>New note</header>
        <section className="new_note_title"></section>
        <section className="new_note_content"></section>
        <Fab label="Save" />
    </div>
);

export default noteModal;