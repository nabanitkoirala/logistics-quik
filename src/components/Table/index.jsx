import { useState } from 'react';
import Checkbox from '../Checkbox';
import styles from './style.module.scss';
import edit from '../../assets/icons/edit.svg';
import printer from '../../assets/icons/printer.svg';
import trash from '../../assets/icons/trash.svg';
import { useNavigate } from 'react-router-dom';

const TableComponent = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    return (
        <table className={styles.tableWithData} >
            <thead>
                <tr>
                    <th><Checkbox checked={checked} handleChange={() => {


                        if (checked) {
                            setChecked(false)
                            setSelectedRow(null)
                        } else {
                            setChecked(true)
                            setSelectedRow('all')
                        }
                    }} /></th>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Receiver Name</th>
                    <th>District</th>
                    <th>Area</th>
                    <th>Phone</th>
                    <th>COD Amount</th>
                    <th>Delivery Charge</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className={(selectedRow === 1 || selectedRow === 'all') ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}

                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(1)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 2 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(2)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 3 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(3)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 4 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(4)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 5 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(5)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 6 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(6)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
                <tr className={selectedRow === 7 || selectedRow === 'all' ? `${styles.activeRow}` : ''}
                    onClick={() => navigate('/orders/123658')}
                >
                    <td><Checkbox checked={checked} handleChange={() => {
                        setSelectedRow(7)
                        setChecked(!checked)
                    }} /></td>
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
                    <td>
                        <div className={styles.actionButtons} >
                            <img src={printer} alt="" height={16} width={16} />
                            <img src={edit} alt="" height={16} width={16} />
                            <img src={trash} alt="" height={16} width={16} />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table >
    )
}

export default TableComponent