

import styles from './style.module.scss'
import Navbar from '../Navbar';



const Layout = ({ children }) => {
    return (
        <div className={styles.mainContainer} >
            <Navbar />
            <div className={styles.subContainer} >
                {children}
            </div>

        </div>
    )
}



export default Layout;