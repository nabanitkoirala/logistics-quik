

import dashboardBreadCrump from '../../../assets/icons/dashboardBreadCrump.svg';
import setting from '../../../assets/icons/setting.svg';
import transaction from '../../../assets/icons/transaction.svg';
import TableComponent from '../../../components/Table';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import GeneralButton from '../../../components/Buttons/GeneralButton';
import IconButton from '../../../components/Buttons/IconButton';
import Card from '../../../components/Card';
import add from '../../../assets/icons/add.svg';
import order from '../../../assets/icons/order.svg';
import delivered from '../../../assets/icons/delivered.svg';
import returns from '../../../assets/icons/returns.svg';
import orderValue from '../../../assets/icons/orderValue.svg';
import orderDays from '../../../assets/icons/orderDays.svg';
import GraphCard from '../../../components/GraphCard';
import upload from '../../../assets/icons/upload.svg';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss'
import DropdownButton from '../../../components/Buttons/Dropdown';

import dropdownSelect from '../../../assets/icons/dropdownSelect.svg';
import moreButton from '../../../assets/icons/moreButton.svg';
import arrowRight from '../../../assets/icons/arrowRight.svg';
import calendar from '../../../assets/icons/calendar.svg';
import route from '../../../assets/icons/route.svg';
import scan from '../../../assets/icons/scan.svg';
import weight from '../../../assets/icons/weight.svg';
import codAmount from '../../../assets/icons/codAmount.svg';
import deliveryCharge from '../../../assets/icons/deliveryCharge.svg';
import packageType from '../../../assets/icons/packageType.svg';
import packageHandling from '../../../assets/icons/packageHandling.svg';
import instructions from '../../../assets/icons/instructions.svg';
import customer from '../../../assets/icons/customer.svg';
import phoneCall from '../../../assets/icons/phoneCall.svg';
import altCall from '../../../assets/icons/altCall.svg';
import house from '../../../assets/icons/house.svg';
import district from '../../../assets/icons/district.svg';
import area from '../../../assets/icons/area.svg';
import street from '../../../assets/icons/street.svg';
import landmark from '../../../assets/icons/landmark.svg';
import circle from '../../../assets/icons/circle.svg';
import line from '../../../assets/icons/line1.svg';
import watch from '../../../assets/icons/watch.svg';
import delivery from '../../../assets/icons/delivery.svg';
import comment from '../../../assets/icons/comment.svg';
import PopDiv from '../../../components/PopupDiv'
import closeButton from '../../../assets/icons/closeButton.svg';
import commentUser from '../../../assets/icons/commentUser.svg';
import replyUser from '../../../assets/icons/commentReply.svg';
import signature from '../../../assets/icons/signature.svg';
import moreButtonSelect from '../../../assets/icons/moreButtonSelect.svg';
const OrderDetails = () => {
    const [postComment, setPostComment] = useState(false)
    const [showProofDelivery, setShowProofDelivery] = useState(false)
    const [clickDownloadIcon, setClickDownloadIcon] = useState(false)
    const [test, setTest] = useState(false)
    const [data, setData] = useState([
        "ram", 'shyam', 'hari', 'hariram'
    ])
    const [backup, setBackup] = useState([
        "ram", 'shyam', 'hari', 'hariram'
    ])
    const [reserveValue, setReserveValue] = useState('')
    console.log("Is this displayed")
    const navigate = useNavigate()
    // const data = ["ram", 'shyam', 'hari', 'hariram']


    const filterdata = data.filter(i => i.includes('Ra'.toLowerCase()));
    console.log(filterdata)

    useEffect(() => {

        console.log("This is backup", reserveValue)
        const filterdata = backup.filter(i => i.includes(reserveValue.toLowerCase()));

        setData(filterdata)

    }, [reserveValue])
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Dashboard</span>
                </Link>

                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <Link to="/orders">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Orders</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Order details</span>
            </div>
            <div className={styles.mainFormDataContainer}>
                <div className={styles.formDataContainer} >
                    <div className={styles.firstPart} >
                        <div className={styles.containerHeader} >
                            <div className={styles.headerBeginner} >
                                <span className={styles.orderId} >Order Id:</span>
                                <span className={styles.orderIdValue} >#847943</span>
                            </div>
                            <div className={styles.buttonGroup} >
                                <div className={styles.groupButtons} >
                                    <GeneralButton
                                        title="Return Order"
                                        className={styles.cancelOrderButton}

                                    />

                                    <GeneralButton
                                        title="Exchange Order"
                                        className={styles.exchangeOrderButton}

                                    />
                                    {/* <GeneralButton
                                    title="See Old Order Details"
                                    className={styles.exchangeOrderButton}

                                />
                                <GeneralButton
                                    title="Cancel Exchaneg Order"
                                    className={styles.cancelOrderButton}

                                /> */}


                                    {/* <GeneralButton
                                    title="Cancel Order"
                                    className={styles.cancelOrderButton}

                                /> */}
                                    <GeneralButton
                                        title="Edit details"
                                        className={styles.editOrderButton}

                                    />
                                </div>

                                <IconButton
                                    imgSource={clickDownloadIcon ? moreButtonSelect : moreButton}
                                    onClick={() => setClickDownloadIcon(true)}
                                    className={styles.clickedButton}

                                />
                                <div style={{ position: 'relative', height: '10px' }} >
                                    <PopDiv
                                        show={clickDownloadIcon}
                                        setShowInfo={setClickDownloadIcon}
                                        className={styles.dropdown}

                                    >
                                        <div className={styles.notificationContainer} style={{ position: 'absolute', top: '-18px', left: '-178px' }} >
                                            <div className={styles.header} >
                                                Print Invoice
                                            </div>
                                            <div className={styles.secondHeader} >
                                                Print Shipping Label
                                            </div>

                                        </div>
                                    </PopDiv>
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerAddressShipping} >
                            <span>Tinkune</span>
                            <img src={arrowRight} alt='' />


                            <span>Naxal</span>

                        </div>
                        <div className={styles.containerDate} >
                            <div className={styles.dateHeading} >
                                <img src={calendar} alt='' />
                                <span>Date Created</span>
                            </div>
                            <div className={styles.dateHeadingValue} >
                                <span>Jan 5, 2022 6:43 PM</span>
                            </div>
                        </div>
                        <div className={styles.containerDate2} >
                            <div className={styles.dateHeading}>
                                <img src={route} alt='' />
                                <span>Status</span>
                            </div>
                            <div className={styles.statusValue} >
                                Dispatched
                            </div>
                            {/* <div className={styles.statusValue} >
                                Delivered
                            </div> */}
                            {/* <div className={styles.statusValueUndelivered} >
                                Undelivered
                            </div> */}
                            {/* <div className={styles.statusValueExchange} >
                                Exchange
                            </div> */}
                        </div>

                    </div>
                    <div className={styles.secondPart} >
                        <div className={`${styles.firstRow} ${styles.firstRowBorderRight}`} >
                            <div className={styles.categoryHeading} >
                                <span>
                                    Package Details

                                </span>
                            </div>
                            <div className={styles.category} >
                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={scan} alt='' />
                                        <span>Tracking ID</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>CLB269BCF6</span>
                                    </div>
                                </div>


                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={weight} alt='' />
                                        <span>Weight</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>1 Kg</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={codAmount} alt='' />
                                        <span>COD Amount</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>2000</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={deliveryCharge} alt='' />
                                        <span>Delivery Charge</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>75.00</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={packageType} alt='' />
                                        <span>Package Type</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>Cosmetics</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={packageHandling} alt='' />
                                        <span>Package Handling</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>Fragile</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={instructions} alt='' />
                                        <span>Instructions</span>
                                    </div>
                                    <div className={styles.categoryValue} >
                                        <span>Glass bottle, handle
                                            with care</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.firstRow} >
                            <div className={styles.categoryHeading} >
                                <span>
                                    Customer Information

                                </span>
                            </div>
                            <div className={styles.category} >
                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={customer} alt='' />
                                        <span>Customer Name</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>Kiran Shrestha</span>
                                    </div>
                                </div>


                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={phoneCall} alt='' />
                                        <span>Phone</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>9812536578</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={altCall} alt='' />
                                        <span>Alternative Phone</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>-</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={house} alt='' />
                                        <span>Address</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>Koteshwor-35, Kathmandu</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={district} alt='' />
                                        <span>District</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>Kathmandu</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={area} alt='' />
                                        <span>Area</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>Koteshwor</span>
                                    </div>
                                </div>

                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={street} alt='' />
                                        <span>Street</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>Setiopi</span>
                                    </div>
                                </div>
                                <div className={styles.categoryNameValue} >
                                    <div className={styles.categoryName} >
                                        <img src={landmark} alt='' />
                                        <span>Landmark</span>
                                    </div>
                                    <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                        <span>-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.trackData} >
                    <div className={styles.mainTrackDataDiv} >


                        <div className={styles.heading}>
                            <span>
                                Tracking
                            </span>
                        </div>
                        <div className={styles.titleDiv} >
                            <div className={styles.titleSubCategory} >
                                <div className={styles.imageCategory} style={{ padding: '0px', margin: '2px 0px' }}>
                                    <img src={circle} alt='' height={8} width={8} />
                                    <img src={line} alt='' height={64} />
                                </div>
                                <div className={styles.details} >
                                    <span>Package Order Created</span>
                                    <div className={styles.timeDetails} >
                                        <img src={watch} alt='' />
                                        <span>
                                            7:00 am Tue 1/10/2023
                                        </span>
                                    </div>
                                    <span>-</span>
                                </div>
                            </div>
                            <div className={styles.titleSubCategory} >
                                <div className={styles.imageCategory} style={{ padding: '0px', margin: '2px 0px' }}>
                                    <img src={circle} alt='' height={8} width={8} />
                                    <img src={line} alt='' height={64} />
                                </div>
                                <div className={styles.details} >
                                    <span>Package Received At Warehouse</span>
                                    <div className={styles.timeDetails} >
                                        <img src={watch} alt='' />
                                        <span>
                                            7:00 am Tue 1/10/2023
                                        </span>
                                    </div>
                                    <span>-</span>
                                </div>
                            </div>
                            <div className={styles.titleSubCategory} >
                                <div className={styles.imageCategory} style={{ padding: '0px', marginTop: '2px' }}>
                                    <img src={circle} alt='' height={8} width={8} />
                                    <img src={line} alt='' height={64} />
                                </div>
                                <div className={styles.details} >
                                    <span>Package Processing</span>
                                    <div className={styles.timeDetails} >
                                        <img src={watch} alt='' />
                                        <span>
                                            7:00 am Tue 1/10/2023
                                        </span>
                                    </div>
                                    <span>-</span>
                                </div>
                            </div>
                            <div className={styles.titleSubCategory} >
                                <div className={styles.imageCategory} style={{ padding: '0px', gap: 'unset' }} >
                                    <img src={delivery} alt='' height={28} width={28} />
                                    <img src={line} alt='' height={36} />
                                </div>
                                <div className={styles.details} >
                                    <span>Package Dispatched For Delivery</span>
                                    <div className={styles.timeDetails} >
                                        <img src={watch} alt='' />
                                        <span>
                                            7:00 am Tue 1/10/2023
                                        </span>
                                    </div>
                                    <span>-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerButton} >
                        <GeneralButton
                            title="See Proof Of Delivery"
                            className={styles.editOrderButton}
                            onClick={() => setShowProofDelivery(true)}

                        />
                        <div style={{ position: 'relative', height: '10px' }} >
                            <PopDiv
                                show={showProofDelivery}
                                setShowInfo={setShowProofDelivery}
                                className={styles.dropdown}

                            >
                                <div className={styles.notificationContainer} style={{ position: 'absolute', top: '-345px', left: '-353px' }} >
                                    <div className={styles.header} >
                                        <span className={styles.notificationText} >Proof Of Delivery</span>
                                        <img src={closeButton} alt="" onClick={() => setShowProofDelivery(false)} height={18} width={18} />
                                    </div>
                                    <div className={styles.secondHeader}  >
                                        <div className={styles.signature} >

                                            <img src={signature} alt="" width={171.28} height={75.12} />
                                        </div>
                                    </div>
                                    <div className={styles.secondHeader}  >
                                        <div className={styles.signature} style={{ border: 'none', gap: '10px', flexDirection: 'column', justifyContent: 'unset', alignItems: 'unset' }}>
                                            <span>Picture</span>
                                            <div style={{ height: '117px' }} >

                                                {/* <img src={signature} alt="" width={171.28} height={75.12} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PopDiv>
                        </div>
                    </div>


                </div >


            </div >
            <div className={styles.mainFormDataContainer} style={{ flexDirection: 'column' }}>
                <div className={styles.mainDiv} >
                    <div className={styles.subMainDiv} >
                        <span className={styles.addComment} >
                            Add Order Comments
                        </span>
                        <GeneralButton
                            title="Post Comment"
                            className={styles.cancelOrderButton}
                            onClick={() => setPostComment(true)}
                        />

                    </div>
                    <div style={{ position: 'relative', height: '10px' }} >
                        <PopDiv
                            show={postComment}
                            setShowInfo={setPostComment}
                            className={styles.dropdown}

                        >
                            <div className={styles.notificationContainer} style={{ position: 'absolute', top: '-120px', left: '-262px' }} >
                                <div className={styles.header} >
                                    <span className={styles.notificationText} >Add Order Comment</span>
                                    <img src={closeButton} alt="" onClick={() => setPostComment(false)} height={18} width={18} />
                                </div>
                                <div className={styles.secondHeader} >
                                    <span>Comment</span>
                                    <textarea type="text" />
                                </div>
                                <div className={styles.submitButton}>
                                    <GeneralButton
                                        title="Cancel"
                                        className={styles.downloadButton}
                                        onClick={() => navigate('/')}
                                    />
                                    <GeneralButton
                                        title="Post"
                                        className={styles.orderButton}


                                    />
                                </div>
                            </div>
                        </PopDiv>
                    </div>
                    <p>Please use comments for any edits or changes
                        after the order has been processed or contact our <Link to="/">Support</Link></p>
                </div>
                <div className={styles.secondaryDiv} >
                    {/* <div className={styles.noCommentDiv} >
                        <img src={comment} alt="" height={60} width={60} />
                        <span className={styles.noComments} >No comments available</span>
                        <span className={styles.clickForComment} >Click to add new comment </span>
                    </div> */}
                    <div className={styles.comment} >
                        <img src={commentUser} alt="" height={30} width={30} />
                        <div className={styles.mainComment} >
                            <p>
                                Please change COD amount to 3000 instead of 2000, it was entered by mistake
                            </p>

                            <div className={styles.timeDetails} >
                                <img src={watch} alt='' />
                                <span>
                                    7:00 am Tue 1/10/2023
                                </span>
                            </div>
                        </div>


                    </div>
                    <div className={`${styles.comment} ${styles.replyComment}`} >
                        <img src={replyUser} alt="" height={30} width={30} />
                        <div className={styles.mainComment} >
                            <p>
                                Please change COD amount to 3000 instead of 2000, it was entered by mistake
                            </p>

                            <div className={styles.timeDetails} >
                                <img src={watch} alt='' />
                                <span>
                                    7:00 am Tue 1/10/2023
                                </span>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div >
    )
}


export default OrderDetails