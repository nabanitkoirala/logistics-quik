import styles from './style.module.scss';
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
import TableComponent from '../../components/Table';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import GeneralButton from '../../components/Buttons/GeneralButton';
import download from '../../assets/icons/download.svg';
import upload from '../../assets/icons/upload.svg';
import shippingLabel from '../../assets/icons/shippingLabel.svg';
import add from '../../assets/icons/add.svg';
import { Link, useNavigate } from 'react-router-dom';
import TabSwitch from '../../components/TabSwitch';
import DropdownButton from '../../components/Dropdown';
import IconButton from '../../components/Buttons/IconButton';
import moreButton from '../../assets/icons/moreButton.svg';
import PopupDiv from '../../components/PopupDiv';
import close from '../../assets/icons/close.svg';
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
const Order = ({ itemsPerPage }) => {
    const [cardData, setCardData] = useState()
    const [clickDownloadIcon, setClickDownloadIcon] = useState(false)
    const [clickedFilter, setClickedFilter] = useState(false)
    const [orderFilterId, setOrderFilterId] = useState(1)
    const [itemOffset, setItemOffset] = useState(0);
    const [orderData, setOrderData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();


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
    const tabSwitch = [
        {
            id: 1,
            value: 'Today',
            data: ''
        },
        {
            id: 2,
            value: 'All Orders',
            data: ''
        },
        {
            id: 3,
            value: 'In Process',
            data: 'Processing'
        },
        {
            id: 4,
            value: 'Dispatched',
            data: ''
        },
        {
            id: 5,
            value: 'Delivered',
            data: 'Delivered'
        },
        {
            id: 6,
            value: 'Canceled',
            data: 'Canceled'
        },
        {
            id: 7,
            value: 'Returns',
            data: 'Returns'
        },
        {
            id: 8,
            value: 'Trash',
            data: ''
        }
    ]
    const tableHeader = [{ name: 'Order ID', value: 'orderId' }, { name: 'Date', value: 'createdAt' },
    { name: 'Receiver Name', value: 'customerFirstName' }, { name: 'District', value: 'district' },
    { name: 'Area', value: 'area' }, { name: 'Phone', value: 'customerPhoneNumber' }, { name: 'COD Amount', value: 'cod' },
    { name: 'Delivery Charge', value: 'codCharge' }, { name: 'Status', value: 'deliveryStatus' }, { name: 'Actions', value: '' }]
    useEffect(() => {
        httpBrowsing.get('/order/homepage-count')
            .then((res) => {
                setCardData(res.data.data.data)
                console.log("This is response", res.data)
            })
            .catch(err => console.log("This is error", err))
    }, [])
    useEffect(() => {
        const filteredTab = tabSwitch.find((item => item.id === orderFilterId)).data
        httpBrowsing.get(`/order?deliveryStatus=${filteredTab}`)
            .then((res) => {
                setOrderData(res.data.data.data)
                console.log("This is response2", res.data)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(false))
    }, [orderFilterId])



    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/" className={styles.routeLink}>
                    <span>Dashboard</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Orders</span>
            </div>
            {
                isLoading ? <ReactLoader /> :

                    <div className={styles.mainTableContainer}>
                        <div className={styles.tableContainer} >
                            <div className={styles.containerHeader} >
                                <div className={styles.headerBeginner} >
                                    <span>Orders</span>
                                    <div className={styles.orderIndicator} >{`${cardData && cardData['New Order'].length ? cardData['New Order'][0].count : '-'} Orders`}</div>
                                </div>
                                <span className={styles.orderContentText} >Find everything about your orders here.</span>
                            </div>
                            <div className={styles.downloadButtonsGroup} >
                                <GeneralButton
                                    title="Download Data"
                                    imgSource={download}
                                    className={`${styles.removeOnMobile} ${styles.downloadButton}`}

                                />
                                <IconButton
                                    imgSource={moreButton}
                                    onClick={() => setClickDownloadIcon(true)}
                                    className={styles.clickedButton}

                                />
                                <div style={{ position: 'relative' }} className={styles.popupDivMainContainer} >
                                    <PopupDiv
                                        show={clickDownloadIcon}
                                        setShowInfo={setClickDownloadIcon}

                                    >
                                        <div className={styles.notificationContainer} style={{ position: 'absolute', top: '-12px', left: '-70px' }} >
                                            <div className={styles.header} >
                                                Download Data
                                            </div>
                                            <div className={styles.secondHeader} >
                                                Print Shipping labels
                                            </div>

                                        </div>
                                    </PopupDiv>
                                </div>

                                <GeneralButton
                                    title="Bulk Order"
                                    className={styles.downloadButton}
                                    imgSource={upload}
                                    onClick={() => navigate('/orders/bulk-upload')}

                                />
                                <GeneralButton
                                    title="Print Shipping labels"
                                    imgSource={shippingLabel}
                                    className={`${styles.removeOnMobile} ${styles.downloadButton}`}


                                />

                                <GeneralButton
                                    title="New order"
                                    className={styles.orderButton}
                                    imgSource={add}
                                    onClick={() => navigate('/orders/new-order')}
                                />
                            </div>

                        </div>
                        <div className={styles.searchFilterContainer} >
                            <input type="text" placeholder="Search" className={styles.searchBox} />
                            <GeneralButton
                                title="Filters"
                                className={styles.responsiveFilter}
                                onClick={() => setClickedFilter(true)}


                            />
                            <div style={{ position: 'relative' }} >
                                <PopupDiv
                                    show={clickedFilter}
                                    setShowInfo={setClickedFilter}

                                >
                                    <div className={styles.filterNotificationContainer}
                                        style={{ position: 'absolute', top: '-87px', left: '-235px' }} >
                                        <div className={styles.header} >
                                            <span>Filters</span>
                                            <img src={close} alt='' height={18} width={18} onClick={() => setClickedFilter(false)} />
                                        </div>
                                        <div className={styles.secondHeader} >
                                            <DropdownButton className={styles.dropdowns} />
                                            <DropdownButton className={styles.dropdowns} />
                                            <DropdownButton className={styles.dropdowns} />
                                            <GeneralButton
                                                title="Reset"
                                                className={styles.resetButton}
                                            />
                                        </div>

                                    </div>
                                </PopupDiv>
                            </div>
                            <div className={styles.filterContainer} >
                                <DropdownButton />
                                <DropdownButton />
                                <DropdownButton />
                                <GeneralButton
                                    title="Reset"
                                    className={styles.resetButton}
                                />

                            </div>
                        </div>
                        <div className={` ${styles.orderFilterTab}`} >
                            <TabSwitch
                                tabs={tabSwitch}
                                setOrderFilterId={setOrderFilterId}
                                orderFilterId={orderFilterId}

                            />
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
                    </div>}
        </div>

    )
}


export default Order;