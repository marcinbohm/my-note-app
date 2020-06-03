import React from 'react';
import {Link} from 'react-router-dom';
import 'rmwc/dist/styles';
import { Fab } from '@rmwc/fab';

const NavBar = () => (
    <nav>
        <div></div>
        <div><Link to="/">My Note</Link></div>
        <div>
            <ul>
                <li>Your notes:</li>
                <li><Fab label="Create new" /></li>
            </ul>
        </div>
    </nav>
);

export default NavBar;