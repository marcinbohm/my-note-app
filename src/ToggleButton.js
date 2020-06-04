import React from 'react';
import "./index.css";

const ToggleButton = props => (
    <button className="toggle_button">
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
);

export default ToggleButton;