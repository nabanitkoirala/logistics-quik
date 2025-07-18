import dashboardBreadCrump from '../../../assets/icons/dashboardBreadCrump.svg';
import { useEffect, useState } from 'react';
import GeneralButton from '../../../components/Buttons/GeneralButton';
import IconButton from '../../../components/Buttons/IconButton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './style.module.scss'
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
import PopDiv from '../../../components/PopupDiv'
import closeButton from '../../../assets/icons/closeButton.svg';
import commentUser from '../../../assets/icons/commentUser.svg';
import replyUser from '../../../assets/icons/commentReply.svg';
import signature from '../../../assets/icons/signature.svg';
import moreButtonSelect from '../../../assets/icons/moreButtonSelect.svg';
import httpBrowsing from '../../../Services/httpBrowsing';
import ReactLoader from 'react-loader';
import { DateConverter } from '../../../Services/Utils';
const OrderDetails = () => {
    const params = useParams();
    const [postComment, setPostComment] = useState(false)
    const [showProofDelivery, setShowProofDelivery] = useState(false)
    const [clickDownloadIcon, setClickDownloadIcon] = useState(false)
    const [orderDetails, setOrderDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)
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


    useEffect(() => {
        httpBrowsing.get(`/order?orderId=${params.id}`)
            .then((res) => {
                setOrderDetails(res.data.data.data.data)
                setIsLoading(false)
                console.log("This is final response", res.data)
            })
            .catch(err => setIsLoading(false))
    }, [])

    console.log("orderDetails", orderDetails)
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/" className={styles.routeLink}>
                    <span>Dashboard</span>
                </Link>

                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <Link to="/orders" className={styles.routeLink}>
                    <span>Orders</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Order details</span>
            </div>
            {
                isLoading ? <ReactLoader /> :
                    <>
                        <div className={styles.mainFormDataContainer}>
                            <div className={styles.formDataContainer} >
                                <div className={styles.firstPart} >
                                    <div className={styles.containerHeader} >
                                        <div className={styles.headerBeginner} >
                                            <span className={styles.orderId} >Order Id:</span>
                                            <span className={styles.orderIdValue} >{orderDetails[0].orderId}</span>
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
                                            <span>{DateConverter(orderDetails[0].createdAt)}</span>
                                        </div>
                                    </div>
                                    <div className={styles.containerDate2} >
                                        <div className={styles.dateHeading}>
                                            <img src={route} alt='' />
                                            <span>Status</span>
                                        </div>
                                        <div className={styles.statusValue} >
                                            {orderDetails[0].deliveryStatus}
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
                                                    <span>{orderDetails[0].trackingId}</span>
                                                </div>
                                            </div>


                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={weight} alt='' />
                                                    <span>Weight</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].itemWeight}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={codAmount} alt='' />
                                                    <span>COD Amount</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].itemCodAmount}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={deliveryCharge} alt='' />
                                                    <span>Delivery Charge</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].codCharge}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={packageType} alt='' />
                                                    <span>Package Type</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].itemType}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={packageHandling} alt='' />
                                                    <span>Package Handling</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].packageHandle}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={instructions} alt='' />
                                                    <span>Instructions</span>
                                                </div>
                                                <div className={styles.categoryValue} >
                                                    <span>{orderDetails[0].packageInstructions}</span>
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
                                                    <span>{`${orderDetails[0].customerFirstName} ${orderDetails[0].customerLastName}`}</span>
                                                </div>
                                            </div>


                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={phoneCall} alt='' />
                                                    <span>Phone</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].customerPhoneNumber}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={altCall} alt='' />
                                                    <span>Alternative Phone</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].customerAlternativeNumber || '-'}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={house} alt='' />
                                                    <span>Address</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].address}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={district} alt='' />
                                                    <span>District</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].district}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={area} alt='' />
                                                    <span>Area</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].area}</span>
                                                </div>
                                            </div>

                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={street} alt='' />
                                                    <span>Street</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].street}</span>
                                                </div>
                                            </div>
                                            <div className={styles.categoryNameValue} >
                                                <div className={styles.categoryName} >
                                                    <img src={landmark} alt='' />
                                                    <span>Landmark</span>
                                                </div>
                                                <div className={`${styles.categoryValue} ${styles.breakMaxWidth}`} >
                                                    <span>{orderDetails[0].landMark || '-'}</span>
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
                                    <div className={`${styles.mainComment} ${styles.rply} `} >
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
                    </>
            }
        </div >
    )
}


export default OrderDetails