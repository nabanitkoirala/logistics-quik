import React, { useState } from 'react';
import styles from './style.module.scss';



const TabSwitch = () => {
    const [orderFilterId, setOrderFilterId] = useState(1)
    return (
        <React.Fragment>
            <div className={`${orderFilterId === 1 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(1)}
            >
                <span>Today</span>
            </div>
            <div className={`${orderFilterId === 2 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(2)}
            >All Orders</div>
            <div className={`${orderFilterId === 3 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(3)}
            >In Process</div>
            <div className={`${orderFilterId === 4 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(4)}
            >Dispatched</div>
            <div className={`${orderFilterId === 5 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(5)}
            >Delivered</div>
            <div className={`${orderFilterId === 6 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(6)}
            >Canceled</div>
            <div className={`${orderFilterId === 7 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(7)}
            >Returns</div>
            <div className={`${orderFilterId === 8 ? styles.active : ''} ${styles.orderFilterCategories}`}
                role="presentation"
                onClick={() => setOrderFilterId(8)}
            >Trash</div>
        </React.Fragment>
    )
}

export default TabSwitch;