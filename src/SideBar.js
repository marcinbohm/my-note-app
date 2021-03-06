import React from 'react';
import './index.css';
import { Fab } from '@rmwc/fab';
import NotesList from './NotesList';
import notes from './CustomNotes';

const SideBar = props => {

    let sidebarClasses = ['sidebar'];
    if(props.show) {
        sidebarClasses = ['sidebar open'];
    }

    return (
        <nav className={sidebarClasses}>
            <div className="sidebar_items">
                    <ul>
                        <li>Your notes:</li>
                        <hr className="sidebar_hr" />
                        <NotesList notes={notes} editclick={props.editChosenNote} />
                        <li><Fab className="sidebar_btn" onClick={props.showAddNote} label="Create new" /></li>
                    </ul>
            </div>
        </nav>
    );
};

export default SideBar;