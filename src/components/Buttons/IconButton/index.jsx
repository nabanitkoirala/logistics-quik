import styles from './style.module.scss';


const IconButton = ({ imgSource, className }) => {
    return (
        <button type='button' className={`${className} ${styles.settingButton}`}  >
            <img src={imgSource} alt="" height={36} width={36} />
        </button>
    )
}


export default IconButton;