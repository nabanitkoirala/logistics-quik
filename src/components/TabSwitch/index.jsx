import React, { useState } from 'react';
import styles from './style.module.scss';



const TabSwitch = ({ tabs, setOrderFilterId, orderFilterId }) => {

    console.log("This is tabsss", orderFilterId)
    return (
        <React.Fragment>
            {tabs && tabs.length && tabs.map((item) => (
                <div className={`${orderFilterId === item.id ? styles.active : ''} ${styles.orderFilterCategories}`}
                    key={item.id}
                    role="presentation"
                    onClick={() => setOrderFilterId(item.id)}
                >
                    {item.value}
                </div>
            ))}
        </React.Fragment>
    )
}

export default TabSwitch;