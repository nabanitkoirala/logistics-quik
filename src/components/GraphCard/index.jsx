
import styles from './style.module.scss';
import orderDays from '../../assets/icons/orderDays.svg';
const GraphCard = () => {
    return (
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
    )
}


export default GraphCard;