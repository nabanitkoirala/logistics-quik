import styles from './style.module.scss';


const TableComponent = () => {
    return (
        <table className={styles.tableWithData} >
            <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Receiver Name</th>

                <th>District</th>
                <th>Area</th>
                <th>Phone</th>

                <th>COD Amount</th>
                <th>Delivery Charge</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>
                    <div style={{
                        color: '#7063EC',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center', width: '86px',
                        height: '22px', backgroundColor: '#F1EFFD',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        New Order
                    </div>

                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#03373E',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px',
                        backgroundColor: 'rgba(3, 55, 62, 0.1)',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Processing
                    </div>
                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#03373E',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px', backgroundColor: 'rgba(3, 55, 62, 0.1)',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Processing
                    </div>
                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#03373E',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px', backgroundColor: 'rgba(3, 55, 62, 0.1)',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Processing
                    </div>
                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#2ABB9A',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px', backgroundColor: '#EAF8F5',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Dispatched
                    </div>
                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#00CC66',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px', backgroundColor: 'rgba(0, 204, 102, 0.1)',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Delivered
                    </div>
                </td>
            </tr>
            <tr>
                <td>79301</td>
                <td>Apr 25,2019 8:49</td>
                <td>Arun Kumar Mandal</td>
                <td>Morang</td>
                <td>Biratnagar</td>
                <td>9842084839</td>
                <td>2350</td>
                <td>100</td>
                <td>

                    <div style={{
                        color: '#03373E',
                        fontWeight: '400', fontSize: '12px',
                        lineHeight: '150%', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        width: '86px', height: '22px', backgroundColor: 'rgba(3, 55, 62, 0.1)',
                        borderRadius: '15px', padding: '2px 12px'
                    }} >
                        Processing
                    </div>
                </td>
            </tr>
        </table>
    )
}


export default TableComponent