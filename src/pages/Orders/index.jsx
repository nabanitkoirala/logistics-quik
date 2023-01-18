



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
import { Link } from 'react-router-dom';
import TabSwitch from '../../components/TabSwitch';
import DropdownButton from '../../components/Buttons/Dropdown';
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
    const [orderFilterId, setOrderFilterId] = useState(1)
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
                <Link to="/">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Dashboard</span>
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

                        <div style={{ display: 'flex', gap: '12px' }} >
                            <GeneralButton
                                title="Download Data"
                                imgSource={download}
                                className={styles.downloadButton}

                            />

                            <GeneralButton
                                title="Bulk Order"
                                className={styles.downloadButton}
                                imgSource={upload}

                            />
                            <GeneralButton
                                title="Print Shipping labels"
                                imgSource={shippingLabel}
                                className={styles.downloadButton}


                            />

                            <GeneralButton
                                title="New order"
                                className={styles.orderButton}
                                imgSource={add}
                            />
                        </div>

                    </div>
                    <span>Find everything about your orders here.</span>

                </div>
                <div className={styles.searchFilterContainer} >
                    <input type="text" placeholder="Search" className={styles.searchBox} />
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
                    <TabSwitch />
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