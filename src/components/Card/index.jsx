
import styles from './style.module.scss';
import order from '../../assets/icons/order.svg';
import delivered from '../../assets/icons/delivered.svg';
import returns from '../../assets/icons/returns.svg';
import orderValue from '../../assets/icons/orderValue.svg';
import orderDays from '../../assets/icons/orderDays.svg';
const Card = () => {
    return (
        <>
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
        </>
    )
}


export default Card;