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
import DropdownButton from '../../components/Buttons/Dropdown';
import IconButton from '../../components/Buttons/IconButton';
import moreButton from '../../assets/icons/moreButton.svg';
import PopupDiv from '../../components/PopupDiv';
import close from '../../assets/icons/close.svg';
import RsIcon from '../../assets/icons/rs.svg';
import rsBlack from '../../assets/icons/rsBlack.svg';
import down from '../../assets/icons/down.svg';
import dropdownButton from '../../assets/icons/dropdownButton.svg';
import GraphCard from '../../components/GraphCard';
import Graph from '../../components/Graph';
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
const data = [
    {
        day: '01',
        value: 5000
    },
    {
        day: '02',
        value: 2000
    },
    {
        day: '03',
        value: 1200
    }, {
        day: '04',
        value: 8000
    },
    {
        day: '05',
        value: 800
    },
    {
        day: '06',
        value: 1300
    },
    {
        day: '07',
        value: 1800
    },

    {
        day: '08',
        value: 2000
    },
    {
        day: '09',
        value: 1900
    },
    {
        day: '10',
        value: 200
    },
    {
        day: '11',
        value: 1568
    },
    {
        day: '12',
        value: 254
    },
]
const Transactions = ({ itemsPerPage }) => {
    const [openYearFilter, setOpenYearFilter] = useState(false)
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
            value: 'COD Transfers'
        },
        {
            id: 2,
            value: 'Order Wise Payments'
        }
    ]

    console.log("This is value filter", tabSwitch);

    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Dashboard</span>
                </Link>

                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Transactions</span>
            </div>
            <div className={styles.mainDiv} >
                <div className={styles.details} >
                    <div className={styles.firstDiv} >
                        <span>Balance Available</span>
                        <div className={styles.subFirstDiv} >

                            <div className={styles.subSecondDiv} >
                                <img src={RsIcon} alt='' />
                                <span>1,10,150.00</span>
                            </div>
                            <GeneralButton
                                title="Withdraw"
                                className={styles.orderButton}


                            />
                        </div>
                    </div>
                    <div className={styles.secondDiv} >
                        <div className={styles.subSecondDiv} >
                            <span>Lifetime COD</span>
                            <div className={styles.subSecondCount} >
                                <img src={rsBlack} alt="" />
                                <span>6,70,900.00</span>
                            </div>
                        </div>
                        <div className={styles.subSecondDiv} style={{ borderLeft: "1px solid #EAECF0" }} >
                            <span>This Month COD</span>
                            <div className={styles.subSecondCount}>
                                <img src={rsBlack} alt="" />
                                <span>6,70,900.00</span>
                                <img src={down} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={styles.thirdDiv}>
                        <span>Month wise COD</span>
                        <div className={styles.dropdownButton} style={clickDownloadIcon ? { backgroundColor: '#DDE2E3' } : {}} onClick={() => setClickDownloadIcon(true)} >
                            <span>2022</span>
                            <img src={dropdownButton} alt="" />
                        </div>

                    </div>
                    <div style={{ position: 'relative', height: '10px' }} >
                        <PopupDiv
                            show={clickDownloadIcon}
                            setShowInfo={setClickDownloadIcon}
                            className={styles.dropdown}

                        >
                            <div className={styles.notificationContainer} style={{ position: 'absolute', top: '-18px', left: '24px' }} >
                                <div className={styles.header} >
                                    2021
                                </div>
                                <div className={styles.secondHeader} >
                                    2020
                                </div>

                            </div>
                        </PopupDiv>
                    </div>
                    <div className={styles.fourthDiv} >
                        <Graph
                            data={data}
                            barwidth={styles.barwidth}
                        />
                    </div>

                </div>

                <div className={styles.mainTableContainer}>
                    <div className={styles.tableContainer} >
                        <div className={styles.containerHeader} >
                            <div className={styles.headerBeginner} >
                                <span>Transactions</span>

                            </div>
                            <GeneralButton
                                title="Download Data"
                                imgSource={download}
                                className={`${styles.downloadButton}`}

                            />
                        </div>
                        <span className={styles.orderContentText} >All pending balances are consolidated on every withdrawal. </span>




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
        </div >

    )
}


export default Transactions;