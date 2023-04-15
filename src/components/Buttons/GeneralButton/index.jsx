
import styles from './style.module.scss';


const GeneralButton = ({ imgSource, title, className, onClick, disable }) => {

    return (
        <button type='button' className={`${className} ${styles.mainButtons}`} onClick={onClick} disabled={disable} >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} >
                {imgSource && <img src={imgSource} alt="" height={16} width={16} />}
                <span>

                    {title}
                </span>
            </div>
        </button>
    )
}

export default GeneralButton;