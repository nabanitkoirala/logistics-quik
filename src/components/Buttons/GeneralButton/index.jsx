
import styles from './style.module.scss';


const GeneralButton = ({ imgSource, title, className }) => {

    return (
        <button type='button' className={`${className} ${styles.mainButtons}`}>
            <div style={{ display: 'flex', alignItems: 'center' }} >
                {imgSource && <img src={imgSource} alt="" height={16} width={16} />}
                <span>

                    {title}
                </span>
            </div>
        </button>
    )
}

export default GeneralButton;