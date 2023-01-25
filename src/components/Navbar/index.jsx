import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import notification from '../../assets/icons/notification.svg';
import userImage from '../../assets/icons/user.svg';
import dropDown from '../../assets/icons/dropdown.svg';
import mainLogo from '../../assets/icons/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import PopupDiv from '../PopupDiv';
import notification1 from '../../assets/icons/notification1.svg';
import notification2 from '../../assets/icons/notification2.svg';
import clock from '../../assets/icons/clock.svg';





const Navbar = () => {
    const { pathname } = useLocation();

    const [showNotification, setShowNotification] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    console.log("This is location", location)
    return (
        <div className={styles.mainContainer} >

            <div className={styles.subMainContainer} >
                <PopupDiv
                    show={showMobileMenu}
                    setShowInfo={setShowMobileMenu}

                >
                    <div className={styles.notificationContainer} >
                        <div className={styles.header} >
                            Vendor ID. 3728
                        </div>
                        <div className={styles.header} >
                            Dashboard
                        </div>
                        <div className={styles.header} >
                            Orders
                        </div>
                        <div className={styles.header} >
                            Transactions
                        </div>
                        <div className={styles.header} >
                            Account Settings
                        </div>
                        <div className={styles.header} >
                            Log Out
                        </div>
                        <div className={styles.header} >
                            Website
                        </div>
                        <div className={styles.header} >
                            Support
                        </div>
                        <div className={styles.header} >
                            Contact Us
                        </div>
                    </div>
                </PopupDiv>

                <div className={styles.logo} >
                    <img src={mainLogo} alt="" />

                </div>
                <div className={styles.subContainer}>
                    <div className={styles.subContainerRight} >
                        <Link to="/" className={`${styles.pageLink} ${pathname === "/" ? styles.activeRoute : ''}`}>

                            Dashboard

                        </Link>
                        <Link to="/orders" className={`${styles.pageLink} ${pathname === "/orders" || pathname === "/orders/new-order" || pathname === "/orders/123658" ? styles.activeRoute : ''}`}>

                            Orders

                        </Link>

                        <Link to="/transaction" className={`${styles.pageLink} ${pathname === "/transaction" ? styles.activeRoute : ''}`}>Transactions</Link>


                        <Link to="/setting" className={`${styles.pageLink} ${pathname === "/setting" ? styles.activeRoute : ''}`}>Settings</Link>

                    </div>
                    <div className={styles.subContainerSecondary} >

                        <div className={styles.notification}
                            onClick={() => {
                                setShowNotification(true);
                            }}
                            role="presentation"
                        >
                            <img className={styles.mainImage} src={notification} alt="" />
                            <div className={styles.notificationCount} >6</div>


                            <PopupDiv
                                show={showNotification}
                                setShowInfo={setShowNotification}

                            >
                                <div className={styles.notificationContainer} >
                                    <div className={styles.header} >
                                        <span className={styles.notificationText} >Notification</span>
                                        <span className={styles.markRead} >Mark all as read</span>
                                    </div>

                                    <div className={styles.today} >Today</div>
                                    <div className={styles.notificationDesc} >

                                        <img src={notification1} alt="" width={32} height={32} />
                                        <div className={styles.details} >
                                            <span>
                                                Your issue with order #230456 has been resolved
                                            </span>
                                            <div className={styles.timeDetails} >
                                                <img src={clock} alt="" height={10} width={10} />
                                                <span>9:15 am</span>
                                                <span>Tue</span>
                                                <span>1/10/2023</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.notificationDesc} >
                                        <img src={notification2} alt="" width={32} height={32} />
                                        <div className={styles.details} >
                                            <span>
                                                Withdrawal request verified
                                            </span><br />
                                            <span className={styles.contentData} >
                                                Your issue with order #230456 has been resolved
                                            </span>
                                            <div className={styles.timeDetails} >
                                                <img src={clock} alt="" height={10} width={10} />
                                                <span>9:15 am</span>
                                                <span>Tue</span>
                                                <span>1/10/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.today} >Earlier</div>
                                    <div className={styles.notificationDesc} >
                                        <img src={notification1} alt="" width={32} height={32} />
                                        <div className={styles.details} >
                                            <span>
                                                Your issue with order #230456 has been resolved
                                            </span>
                                            <div className={styles.timeDetails} >
                                                <img src={clock} alt="" height={10} width={10} />
                                                <span>9:15 am</span>
                                                <span>Tue</span>
                                                <span>1/10/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.notificationDesc} >
                                        <img src={notification2} alt="" width={32} height={32} />
                                        <div className={styles.details} >
                                            <span>
                                                Order no #567850 not delivered
                                            </span>
                                            <div className={styles.timeDetails} >
                                                <img src={clock} alt="" height={10} width={10} />
                                                <span>9:15 am</span>
                                                <span>Tue</span>
                                                <span>1/10/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.notificationDesc} >
                                        <img src={notification2} alt="" width={32} height={32} />
                                        <div className={styles.details} >
                                            <span>
                                                Order no #567851 not delivered
                                            </span>
                                            <div className={styles.timeDetails} >
                                                <img src={clock} alt="" height={10} width={10} />
                                                <span>9:15 am</span>
                                                <span>Tue</span>
                                                <span>1/10/2023</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.seeAll} >See All</div>

                                </div>

                            </PopupDiv>
                        </div>

                        <div className={styles.userLogin}
                            onClick={() => {
                                setShowLogin(true);
                            }}
                            role="presentation"
                        >
                            <img src={userImage} alt="" height={32} width={32} />
                            <span>Arun</span>
                            <img src={dropDown} alt="" height={10} width={10} />
                            <PopupDiv
                                show={showLogin}
                                setShowInfo={setShowLogin}

                            >
                                <div className={styles.notificationContainer} >
                                    <div className={styles.header} >
                                        Vendor ID. 3728
                                    </div>
                                    <div className={styles.header} >
                                        Dashboard
                                    </div>
                                    <div className={styles.header} >
                                        Orders
                                    </div>
                                    <div className={styles.header} >
                                        Transactions
                                    </div>
                                    <div className={styles.header} >
                                        Account Settings
                                    </div>
                                    <div className={styles.header} >
                                        Log Out
                                    </div>
                                    <div className={styles.header} >
                                        Website
                                    </div>
                                    <div className={styles.header} >
                                        Support
                                    </div>
                                    <div className={styles.header} >
                                        Contact Us
                                    </div>
                                </div>

                            </PopupDiv>
                        </div>
                        <button type='button' onClick={() => setShowMobileMenu(true)} className={`${styles.mainButtons} ${styles.orderButton} ${styles.mobileButton}`}>
                            <span>
                                Menu
                            </span>

                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}


export default Navbar