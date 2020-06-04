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
            <div className="navbar_logo"><Link to="/">myNote</Link></div>
        </nav>
    </header>
);

export default NavBar;