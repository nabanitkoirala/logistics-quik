

import styles from './style.module.scss'
import Navbar from '../Navbar';



const Layout = ({ children }) => {
    return (
        <div className={styles.mainContainer} >
            <Navbar />
            {children}
        </div>
    )
}



export default Layout;