import styles from './style.module.scss';


const IconButton = ({ imgSource, className, onClick }) => {
    return (
        <button type='button' className={`${className} ${styles.settingButton}`} onClick={onClick}  >
            <img src={imgSource} alt="" height={36} width={36} />
        </button>
    )
}


export default IconButton;