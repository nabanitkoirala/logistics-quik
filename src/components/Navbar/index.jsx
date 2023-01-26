import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import notification from '../../assets/icons/notification.svg';
import userImage from '../../assets/icons/user.svg';
import dropDown from '../../assets/icons/dropdown.svg';
import mainLogo from '../../assets/icons/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PopupDiv from '../PopupDiv';
import notification1 from '../../assets/icons/notification1.svg';
import notification2 from '../../assets/icons/notification2.svg';
import clock from '../../assets/icons/clock.svg';
import accountSetting from '../../assets/icons/accountSetting.svg';
import GeneralButton from '../Buttons/GeneralButton';
import IconButton from '../Buttons/IconButton';
import iconButtonNavbar from '../../assets/icons/iconButtonNavbar.svg';
import locationNavbar from '../../assets/icons/locationNavbar.svg';

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [showNotification, setShowNotification] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    console.log("This is location", location)
    return (
        <div className={styles.mainContainer} >

            <div className={styles.subMainContainer} >


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
                                className={styles.mainDivNotification}


                            >
                                <div className={styles.notificationContainerFullScreen} >
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
                                {showMobileMenu ? "Close" : "Menu"}
                            </span>

                        </button>
                    </div>


                </div>

            </div>
            <div style={{ position: 'relative', width: '100%' }}>
                <PopupDiv
                    show={showMobileMenu}
                    setShowInfo={setShowMobileMenu}
                    className={styles.mainDivNotification}

                >
                    <div className={styles.notificationContainer1} >
                        <div className={styles.header} >
                            <img src={userImage} alt="" height={32} width={32} />
                            <span> Vendor ID. 3728</span>
                        </div>
                        <Link to="/" className={styles.header} onClick={() => setShowMobileMenu(false)} >
                            <span>Dashboard</span>
                        </Link>
                        <Link to="/orders" className={styles.header} onClick={() => setShowMobileMenu(false)} >
                            <span>

                                Orders
                            </span>
                        </Link>
                        <Link to="/transaction" className={styles.header} onClick={() => setShowMobileMenu(false)} >
                            <span>

                                Transactions
                            </span>
                        </Link>

                        <Link to="/setting" className={styles.header} onClick={() => setShowMobileMenu(false)} >
                            <span>

                                <span>

                                    Account Settings
                                </span>

                                <img src={accountSetting} alt="" height={16} width={16} />
                            </span>
                        </Link>


                        <div className={styles.header} >
                            <span>

                                Log Out
                            </span>
                        </div>
                        <div className={styles.header} >
                            <span>

                                Website
                            </span>
                        </div>
                        <div className={styles.headerButtom} >
                            <GeneralButton
                                title="Support"
                                // imgSource={download}
                                className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                            />
                            <GeneralButton
                                title="Contact Us"
                                // imgSource={download}
                                className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                            />
                            <IconButton
                                imgSource={iconButtonNavbar}
                                onClick={() => setClickDownloadIcon(true)}
                                className={styles.clickedButton}

                            />
                            <GeneralButton
                                title="hello@quik.asia"
                                // imgSource={download}
                                className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                            />
                            <GeneralButton
                                title="+977 9815624570"
                                // imgSource={download}
                                className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                            />
                            <GeneralButton
                                title="Shatinagar, Kathmandu"
                                imgSource={locationNavbar}
                                className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                            />


                        </div>

                    </div>
                </PopupDiv>
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
                <PopupDiv
                    show={showNotification}
                    setShowInfo={setShowNotification}
                    className={styles.mainDivNotification}


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
        </div>
    )
}


export default Navbar