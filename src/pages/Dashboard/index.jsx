
import styles from './style.module.scss';
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
import setting from '../../assets/icons/setting.svg';
import transaction from '../../assets/icons/transaction.svg';
import TableComponent from '../../components/Table';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import GeneralButton from '../../components/Buttons/GeneralButton';
import IconButton from '../../components/Buttons/IconButton';
import Card from '../../components/Card';
import add from '../../assets/icons/add.svg';
import order from '../../assets/icons/order.svg';
import delivered from '../../assets/icons/delivered.svg';
import returns from '../../assets/icons/returns.svg';
import orderValue from '../../assets/icons/orderValue.svg';
import GraphCard from '../../components/GraphCard';
import httpBrowsing from '../../Services/httpBrowsing';
import ReactLoader from 'react-loader';



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
    const [cardData, setCardData] = useState()
    const [orderData, setOrderData] = useState()
    const [itemOffset, setItemOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
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

    useEffect(() => {


        httpBrowsing.get('/order/homepage-count')
            .then((res) => {
                setCardData(res.data.data.data)
                console.log("This is response", res.data)
            })
            .catch(err => console.log("This is error", err))
        httpBrowsing.get('/order')
            .then((res) => {
                setOrderData(res.data.data.data)
                console.log("This is response2", res.data)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(false))
    }, [])

    console.log("This is card data", cardData)
    console.log("This is card data1", orderData)
    const totalOrder = cardData && cardData.ALL && cardData.ALL.length ? cardData.ALL[0].count : '-'
    const newOrder = cardData && cardData['New Order'] && cardData['New Order'].length ? cardData['New Order'][0].count : '-'
    const totalDelivered = cardData && cardData.Delivered && cardData.Delivered.length ? cardData.Delivered[0].count : '-'
    const inProgress = cardData && cardData.Processing && cardData.Processing.length ? cardData.Processing[0].count : '-'
    const totalReturns = cardData && cardData.Returns && cardData.Returns.length ? cardData.Returns[0].count : '-'
    const totalOrderedvalue = cardData && cardData.TOTAL_ORDER_VALUE && cardData.TOTAL_ORDER_VALUE.length ? cardData.TOTAL_ORDER_VALUE[0].TotalOrderValue : '-'
    const today = cardData && cardData.ORDER_VALUE_PER_DAY && cardData.ORDER_VALUE_PER_DAY.length ? cardData.ORDER_VALUE_PER_DAY[0].PerDayOrderValue : '-'
    const weekOrder = cardData && cardData.ORDER_VALUE_PER_WEEK ? cardData.ORDER_VALUE_PER_WEEK.orders : '-'
    const week = [{ name: 'Sunday', value: 'S' },
    { name: 'Monday', value: 'M' },
    {
        name: 'Tuesday',
        value: 'T'
    },
    {
        name: 'Wednesday',
        value: 'W'
    },
    {
        name: 'Thursday',
        value: 'T'
    },
    {
        name: 'Friday',
        value: 'F'
    },
    {
        name: 'Saturday',
        value: 'S'
    }
    ]
    const graphData = cardData && cardData.GRAPH_COUNT && cardData.GRAPH_COUNT.length
        ? cardData.GRAPH_COUNT : []
    const finalGraphData = graphData && graphData.length ? week.map((item) => {
        // return({
        //     day:item.value,
        //     value:graphData
        // })
        // const receivedData = graphData.map((data) => {
        //     return ({
        //         day: item.value,
        //         value: data.day === item.value ? data.orderValue : 0
        //     })
        // })
        const receivedData = graphData.filter((data) => data.day === item.name).length ? graphData.filter((data) => data.day === item.name)[0].orderValue : 0
        return ({
            day: item.value,
            value: receivedData
        })

    }) : []

    const tableHeader = [{ name: 'Order ID', value: 'orderId' }, { name: 'Date', value: 'createdAt' },
    { name: 'Receiver Name', value: 'customerFirstName' }, { name: 'District', value: 'district' },
    { name: 'Area', value: 'area' }, { name: 'Phone', value: 'customerPhoneNumber' }, { name: 'COD Amount', value: 'cod' },
    { name: 'Delivery Charge', value: 'codCharge' }, { name: 'Status', value: 'deliveryStatus' }, { name: 'Actions', value: '' }]
    const finalOrderData = orderData && orderData.data.map((item) => {
        const data = tableHeader.map((data) => ({ ...data, [data.value]: item[data.value] }))
        return (data)
    })
    console.log("Output", finalOrderData)
    console.log("This is week order", orderData)
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
            {

                isLoading ? <ReactLoader /> :

                    <>
                        <div className={styles.cardList} >
                            <Card
                                title="Total Orders"
                                imgSource={order}
                                footerText="New Orders"
                                value={totalOrder}
                                footerValue={newOrder}
                                titleTextFieldWidth={65}
                            />
                            <Card
                                title="Total Delivered"
                                imgSource={delivered}
                                footerText="In Process"
                                value={totalDelivered}
                                footerValue={inProgress}
                                titleTextFieldWidth={65}
                            />
                            <Card
                                title="Total Returns"
                                imgSource={returns}
                                footerText="In Process"
                                value={totalReturns}
                                footerValue={12}
                                titleTextFieldWidth={65}
                            />
                            <Card
                                title="Total Ordered Value"
                                imgSource={orderValue}
                                footerText="Today"
                                value={totalOrderedvalue}
                                footerValue={today}
                                titleTextFieldWidth={80}
                            />
                            <GraphCard
                                data={finalGraphData}
                                weekOrder={weekOrder}
                            />
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
                                <TableComponent
                                    header={tableHeader}
                                    data={orderData}
                                />
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
                    </>
            }
        </div>

    )
}


export default Dashboard;