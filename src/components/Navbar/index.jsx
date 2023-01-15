import React, { useState } from 'react'
import styles from './style.module.scss';
import notification from '../../assets/icons/notification.svg';
import userImage from '../../assets/icons/user.svg';
import dropDown from '../../assets/icons/dropdown.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [routeId, setRouteId] = useState(1)
    return (
        <div className={styles.mainContainer} >
            <div>
                Quik
            </div>
            <div className={styles.subContainer}>
                <div className={styles.subContainerRight} >
                    <Link to="/" className={`${styles.pageLink} ${routeId === 1 ? styles.activeRoute : ''}`} onClick={() => setRouteId(1)}>

                        Dashboard

                    </Link>
                    <Link to="/orders" className={`${styles.pageLink} ${routeId === 2 ? styles.activeRoute : ''}`} onClick={() => setRouteId(2)}>

                        Orders

                    </Link>

                    <Link to="/transaction" className={`${styles.pageLink} ${routeId === 3 ? styles.activeRoute : ''}`} onClick={() => setRouteId(3)}>Transactions</Link>


                    <Link to="/setting" className={`${styles.pageLink} ${routeId === 4 ? styles.activeRoute : ''}`} onClick={() => setRouteId(4)}>Settings</Link>

                </div>
                <div className={styles.subContainerSecondary} >

                    <div className={styles.notification} >
                        <img src={notification} alt="" height={20} width={20} />
                        <div className={styles.notificationCount} >6</div>
                    </div>

                    <div className={styles.userLogin} >
                        <img src={userImage} alt="" height={30} width={30} />
                        <span>Arun</span>
                        <img src={dropDown} alt="" height={10} width={10} />

                    </div>
                </div>


            </div>


        </div>
    )
}


export default Navbar