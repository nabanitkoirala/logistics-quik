import React from 'react';
import GeneralButton from '../../../../components/Buttons/GeneralButton';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import dashboardBreadCrump from '../../../../assets/icons/dashboardBreadCrump.svg';
import BulkUpload from '../../../../components/BulkUpload';
import download from '../../../../assets/icons/downloadBright.svg';
const BulkOrder = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.mainContainer} >
            <div className={styles.breadCrump} >
                <img src={dashboardBreadCrump} alt="" />
                <Link to="/" className={styles.dashboard} >
                    <span style={{ color: '#667085', fontWeight: '400' }} >Dashboard</span>
                </Link>

                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <Link to="/orders">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Orders</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <Link to="/orders/new-order">
                    <span style={{ color: '#667085', fontWeight: '400' }} >Create New Order</span>
                </Link>
                <span style={{ color: '#667085', fontWeight: '400' }}>/</span>
                <span>Upload Bulk Order</span>
            </div>
            <div className={styles.mainFormDataContainer} style={{ flexDirection: 'column' }}>
                <div className={styles.mainDiv} >
                    <div className={styles.subMainDiv} >
                        <span className={styles.addComment} >
                            Upload Bulk Order
                        </span>
                        <GeneralButton
                            title="Add Individual Order"
                            className={styles.cancelOrderButton}
                            onClick={() => navigate('/orders/new-order')}
                        />

                    </div>
                    <div className={styles.description} >
                        <span>
                            Download sample file<Link to="/" style={{ color: '#03373E' }} > here.</Link>
                        </span>
                        <span>
                            For returns & cancellation head over to<Link to="/" style={{ color: '#03373E' }}> orders page.</Link>
                        </span>
                    </div>

                </div>
                <div className={styles.secondaryDiv} >
                    <div className={styles.noCommentDiv} >
                        <BulkUpload />
                        {/* <img src={comment} alt="" height={60} width={60} /> */}
                        {/* <span className={styles.noComments} >No comments available</span>
                        <span className={styles.clickForComment} >Click to add new comment </span> */}
                    </div>


                </div>
                <div className={styles.footerFormDataContainer} >
                    <div className={styles.containerHeader} >

                        <div className={styles.submitButton}>
                            <GeneralButton
                                title="Cancel"
                                className={styles.downloadButton}
                                onClick={() => navigate('/')}
                            />
                            <GeneralButton
                                title="Proceed"
                                className={styles.orderButton}


                            />
                        </div>
                    </div>
                    <div className={styles.headerBeginner} >
                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }} >
                            <span>Only .xlsx file type is supported </span>
                            <span>Filename should not include symbols (!,@,#,$,%,^,&,*,(,), _ etc).</span>
                            <span>Make sure al the details in the uploaded file are correct</span>
                        </div>
                        <GeneralButton
                            title="Download Sample File"
                            className={styles.cancelOrderButton}
                            imgSource={download}
                        // onClick={() => setPostComment(true)}
                        />
                    </div>

                </div>


            </div>
        </div>
    )
}


export default BulkOrder;