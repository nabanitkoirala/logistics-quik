
import styles from './style.module.scss';
import order from '../../assets/icons/order.svg';
import delivered from '../../assets/icons/delivered.svg';
import returns from '../../assets/icons/returns.svg';
import orderValue from '../../assets/icons/orderValue.svg';
import orderDays from '../../assets/icons/orderDays.svg';
const Card = ({ title, imgSource, footerText, value, footerValue, titleTextFieldWidth }) => {
    return (
        <>
            <div className={styles.card} >
                <div className={styles.details} >
                    <span style={{ width: `${titleTextFieldWidth}px` }} >
                        {title}
                    </span>
                    <img src={imgSource} alt="" height={40} width={40} />
                </div>
                <div style={{ marginLeft: '16px', fontSize: '16px', fontWeight: '600', color: '#03373E', marginBottom: '10px' }}>{value}</div>
                <div className={styles.footerDetails} >
                    <span>{footerText}</span>
                    <span>{footerValue}</span>
                </div>

            </div>
        </>
    )
}


export default Card;