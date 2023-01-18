import React from "react";

import './style.css'

const Checkbox = (props) => {
    const {
        checked = false,
        handleChange
    } = props
    return (
        <div className="checkbox-component-01-container">
            <input type="checkbox" checked={checked} onChange={() => null} />
            <span className="checkbox-component-01-checkmark" onClick={handleChange}></span>
        </div>
    )
}

export default Checkbox;