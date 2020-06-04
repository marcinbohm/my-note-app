import React from 'react';
import './index.css';
import { Fab } from '@rmwc/fab';

const SideBar = props => (
    <nav className="sidebar">
        <div className="sidebar_items">
                <ul>
                    <li>Your notes:</li>
                    <li><Fab label="Create new" /></li>
                </ul>
        </div>
    </nav>
);

export default SideBar;