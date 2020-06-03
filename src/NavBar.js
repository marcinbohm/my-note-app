import React from 'react';
import {Link} from 'react-router-dom';
import 'rmwc/dist/styles';
import { Fab } from '@rmwc/fab';
import './index.css';

const NavBar = () => (
    <header className="navbar">
        <nav className="navigation">
            <div></div>
            <div><Link className="navbar_logo" to="/">My Note</Link></div>
            <div className="navigation_items">
                <ul>
                    <li>Your notes:</li>
                    <li><Fab label="Create new" /></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;