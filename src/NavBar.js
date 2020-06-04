import React from 'react';
import {Link} from 'react-router-dom';
import 'rmwc/dist/styles';
import './index.css';
import ToggleButton from './ToggleButton';

const NavBar = props => (
    <header className="navbar">
        <nav className="navigation">
            <div>
                <ToggleButton click={props.ToggleButtonClick} />
            </div>
            <div><Link className="navbar_logo" to="/">myNote</Link></div>
        </nav>
    </header>
);

export default NavBar;