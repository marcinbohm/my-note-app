import React from 'react';
import "./index.css";

const ToggleButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
);

export default ToggleButton;