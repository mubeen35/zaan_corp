import styles from '@/styles/Layout.module.css';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>

            {children}
        </div>
    )
}

export default Layout;