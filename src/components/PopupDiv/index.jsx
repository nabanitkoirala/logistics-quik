/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const InfoBox = ({
    show,
    children,
    setShowInfo,
    className
}) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowInfo(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
    }, []);

    if (!show) { return null; }

    return (
        <div ref={ref} id="12" className={`${className} ${styles.mainContainer}`} >
            {children}
        </div>
    );
};

export default InfoBox;
