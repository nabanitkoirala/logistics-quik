import React from 'react';
import { useState } from 'react';
import styles from './style.module.scss';
import dropdownButton from '../../assets/icons/dropdownButton.svg';
import PopUpDiv from '../../components/PopupDiv';
const DropdownButton = ({ className }) => {
    const [openContainer, setOpenContainer] = useState(false)

    return (
        <div className={styles.mainContainer} >
            <div className={styles.dropdown} onClick={() => setOpenContainer(true)} >
                <span className={styles.name} >District:</span>
                <span className={styles.value} >Kathmandu</span>
                <img src={dropdownButton} alt="" />
            </div>

            <PopUpDiv
                show={openContainer}
                setShowInfo={setOpenContainer}
                className={styles.mainDropdownContainer}
            >
                <div className={styles.dropdownContainer} >
                    <div className={styles.dropdownList}>
                        <span>
                            Kathmandu
                        </span>
                    </div>
                    <div className={styles.dropdownList}>
                        <span>
                            Lalitpur
                        </span>
                    </div>
                    <div className={styles.dropdownList}>
                        <span>
                            Lalitpur
                        </span>
                    </div>
                </div>
            </PopUpDiv>
        </div>
    )
}

export default DropdownButton