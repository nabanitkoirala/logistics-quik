
import styles from './style.module.scss';
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
import setting from '../../assets/icons/setting.svg';
import transaction from '../../assets/icons/transaction.svg';
import TableComponent from '../../components/Table';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import GeneralButton from '../../components/Buttons/GeneralButton';
import IconButton from '../../components/Buttons/IconButton';
import Card from '../../components/Card';
import add from '../../assets/icons/add.svg';
import order from '../../assets/icons/order.svg';
import delivered from '../../assets/icons/delivered.svg';
import returns from '../../assets/icons/returns.svg';
import orderValue from '../../assets/icons/orderValue.svg';
import GraphCard from '../../components/GraphCard';
import useRedirectLoggedOutUser from '../../CustomHook/UserRedirectLoggedOutUser';
import UpdateCsrfToken from '../../CustomHook/UpdateCsrfToken';



const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}
const Dashboard = ({ itemsPerPage }) => {
    // useRedirectLoggedOutUser("/")
    UpdateCsrfToken();
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 1);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <span>Dashboard</span>
            </div>
            <div className={styles.headerButtons}>
                <div className={styles.details} >
                    <h2>Dashboard Overview</h2>
                    <span style={{ fontSize: '12px', color: '#0C0F1E', fontWeight: '400' }} >Wednesday</span>
                    <span style={{ marginLeft: '8px', fontWeight: '400', fontSize: '12px', color: '#667085' }} >Jan 5,2022</span>
                </div>
                <div className={styles.buttons} >
                    <IconButton
                        imgSource={setting}
                    />
                    <GeneralButton
                        title="Transactions"
                        imgSource={transaction}

                    />
                    <div style={{
                        height: '36px',
                        backgroundColor: '#F2F2F2',
                        border: '1px solid #EAECF0',
                    }} ></div>
                    <GeneralButton
                        title="New order"
                        imgSource={add}
                        className={styles.orderButton}
                    />
                </div>
            </div>
            <div className={styles.cardList} >
                <Card
                    title="Total Orders"
                    imgSource={order}
                    footerText="New Orders"
                    value={230}
                    footerValue={12}
                    titleTextFieldWidth={65}
                />
                <Card
                    title="Total Delivered"
                    imgSource={delivered}
                    footerText="New Orders"
                    value={230}
                    footerValue={12}
                    titleTextFieldWidth={65}
                />
                <Card
                    title="Total Returns"
                    imgSource={returns}
                    footerText="New Orders"
                    value={230}
                    footerValue={12}
                    titleTextFieldWidth={65}
                />
                <Card
                    title="Total Ordered Value"
                    imgSource={orderValue}
                    footerText="New Orders"
                    value={230}
                    footerValue={12}
                    titleTextFieldWidth={80}
                />
                <GraphCard />
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
                <div>
                    <ReactPaginate
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< Previous"
                        pageClassName={`page-item`}
                        pageLinkClassName={`page-link ${styles.pageLinkClassName}`}
                        previousClassName={`page-item ${styles.previousClassName}`}
                        previousLinkClassName={`page-link ${styles.previousNextClassName}`}
                        nextClassName={`page-item ${styles.nextClassName}`}
                        nextLinkClassName={`page-link ${styles.previousNextClassName}`}
                        breakLabel="..."
                        breakClassName={`page-item`}
                        breakLinkClassName={`page-link ${styles.pageLinkClassName}`}
                        containerClassName={`pagination ${styles.containerClassNamePagination}`}
                        renderOnZeroPageCount={null}
                        activeClassName={`active `}
                        activeLinkClassName={`${styles.activeClassName}`}
                        disabledLinkClassName={styles.disabledLinkClassName}
                    />
                </div>
            </div>
        </div>

    )
}


export default Dashboard;