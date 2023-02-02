import styles from './style.module.scss';
import dashboardBreadCrump from '../../assets/icons/dashboardBreadCrump.svg';
import TableComponent from '../../components/Table';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
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

    const [clickDownloadIcon, setClickDownloadIcon] = useState(false)
    const [clickedFilter, setClickedFilter] = useState(false)
    const [orderFilterId, setOrderFilterId] = useState(1)
    const [itemOffset, setItemOffset] = useState(0);
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
            value: 'Today'
        },
        {
            id: 2,
            value: 'All Orders'
        },
        {
            id: 3,
            value: 'In Process'
        },
        {
            id: 4,
            value: 'Dispatched'
        },
        {
            id: 5,
            value: 'Delivered'
        },
        {
            id: 6,
            value: 'Canceled'
        },
        {
            id: 7,
            value: 'Returns'
        },
        {
            id: 8,
            value: 'Trash'
        }
    ]
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
            <div className={styles.mainTableContainer}>
                <div className={styles.tableContainer} >
                    <div className={styles.containerHeader} >
                        <div className={styles.headerBeginner} >
                            <span>Orders</span>
                            <div className={styles.orderIndicator} >100 Orders</div>
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
                    />
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


export default Order;