import React from 'react';
import styles from './style.module.scss';


const DropdownButton = ({ className }) => {
    return (
        <div className={`${className} ${styles.select}`}>
            <span>District:</span>
            <select name="cars" id="cars"  >
                <option value="volvo">All</option>
                <option value="saab">Saab sadasdasdasdasdadasd</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default DropdownButton