import React from 'react';
import './index.css';
import { Fab } from '@rmwc/fab';

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
                        <li><Fab onClick={props.showAddNote} label="Create new" /></li>
                    </ul>
            </div>
        </nav>
    );
};

export default SideBar;