
import styles from './style.module.scss';
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.png';
import setting from '../../assets/icons/setting.png';
import transaction from '../../assets/icons/transaction.png';
import order from '../../assets/icons/order.png';
import orderValue from '../../assets/icons/orderValue.png';
import returns from '../../assets/icons/returns.png';
import delivered from '../../assets/icons/delivered.png';
import orderDays from '../../assets/icons/orderDays.png';
import TableComponent from '../../components/Table';
const Dashboard = () => {
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" height={13.32} width={13.33} />
                <span>Dashboard</span>
            </div>
            <div className={styles.headerButtons}>
                <div className={styles.details} >
                    <h2>Dashboard Overview</h2>
                    <span style={{ fontSize: '12px', color: '#0C0F1E', fontWeight: '400' }} >Wednesday</span>
                    <span style={{ marginLeft: '5px', fontWeight: '400', fontSize: '12px', color: '#667085' }} >Jan 5,2022</span>
                </div>
                <div className={styles.buttons} >
                    <button type='button' className={styles.settingButton}  >
                        <img src={setting} alt="" height={16} width={16} />
                    </button>

                    <button type='button' className={styles.mainButtons}>
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <img src={transaction} alt="" height={16} width={16} />
                            <span>

                                Transactions
                            </span>
                        </div>

                    </button>
                    <div style={{ height: '36px', backgroundColor: '#F2F2F2', border: '1px solid #EAECF0', margin: '0px 10px' }} ></div>
                    <button type='button' className={`${styles.mainButtons} ${styles.orderButton}`}>
                        <span>
                            + New order
                        </span>
                    </button>


                </div>
            </div>
            <div className={styles.cardList} >
                <div className={styles.card} >
                    <div className={styles.details} >
                        <span>
                            Total<br /> Orders
                        </span>
                        <img src={order} alt="" height={40} width={40} />
                    </div>
                    <div style={{ marginLeft: '16px', fontSize: '16px', fontWeight: '600', color: '#03373E', marginBottom: '10px' }}>230</div>
                    <div className={styles.footerDetails} >
                        <span>New Orders</span>
                        <span>12</span>
                    </div>

                </div>
                <div className={styles.card}  >
                    <div className={styles.details}>
                        <span>
                            Total<br /> Delivered
                        </span>
                        <img src={delivered} alt="" height={40} width={40} />
                    </div>
                    <div style={{ marginLeft: '16px', fontSize: '16px', fontWeight: '600', color: '#03373E', marginBottom: '10px' }}>230</div>
                    <div className={styles.footerDetails}>
                        <span>New Orders</span>
                        <span>12</span>
                    </div>

                </div>
                <div className={styles.card} >
                    <div className={styles.details}>
                        <span>
                            Total<br /> Returns
                        </span>
                        <img src={returns} alt="" height={40} width={40} />
                    </div>
                    <div style={{ marginLeft: '16px', fontSize: '16px', fontWeight: '600', color: '#03373E', marginBottom: '10px' }} >230</div>
                    <div className={styles.footerDetails}>
                        <span>New Orders</span>
                        <span>12</span>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.details}>
                        <span>
                            Total Ordered <br />Value
                        </span>
                        <img src={orderValue} alt="" height={40} width={40} />
                    </div>
                    <div style={{ marginLeft: '16px', fontSize: '16px', fontWeight: '600', color: '#03373E', marginBottom: '10px' }}>230</div>
                    <div className={styles.footerDetails}>
                        <span>New Orders</span>
                        <span>12</span>
                    </div>

                </div>
                <div className={styles.graphCard}>
                    <div className={styles.graphCardDetails} >
                        <span>Orders in <br />Last 7 Days</span>
                        <div className={styles.count} >
                            <span>60</span>
                            <img src={orderDays} alt="" />
                        </div>
                    </div>
                    <div className={styles.mainGraph} >
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>S</span>
                            <div style={{ height: '10%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>M</span>
                            <div style={{ height: '30%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>T</span>
                            <div style={{ height: '40%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>W</span>
                            <div style={{ height: '80%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>T</span>
                            <div style={{ height: '90%', width: '15px', backgroundColor: '#5DBB99', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>F</span>
                            <div style={{ height: '45%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', margin: '0px 5px' }} >
                            <span>S</span>
                            <div style={{ height: '30%', width: '15px', backgroundColor: '#BFEAE0', borderRadius: '5px' }} ></div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.mainTableContainer}>
                <div className={styles.tableContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <span>Recent Orders</span>
                            <div className={styles.orderIndicator} >20 New Orders</div>
                        </div>


                        <button type='button' className={styles.mainButtons}>
                            <div style={{ display: 'flex', alignItems: 'center' }} >

                                <span>

                                    See All
                                </span>
                            </div>

                        </button>
                    </div>
                    <span>Your most recent orders appear here</span>

                </div>
                <div className={styles.dataTable} >
                    <TableComponent />
                </div>
            </div>
        </div>

    )
}


export default Dashboard;