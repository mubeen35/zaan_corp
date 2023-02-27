import styles from '@/styles/Navbar.module.css';
import Image from "next/image";
import Ticker from './ticker';
import Button from './iconButton';
import Search from './searchBar';
import SaveModal from './saveModal';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleModal = (e) => {
        e.stopPropagation();
        setOpen(!open);
    }
    return (
        <nav className={styles.nav}>
            {open && <SaveModal onClose={handleModal} />}
            <div className={styles.nav_container}>
                <div className={styles.left_container}>
                    <Image className={styles.dp} src={'/user_1.jpg'} width={30} height={30} />
                    <Ticker color='#FAAD14' value={15} />
                    <div className={styles.vl}></div>
                    <Image className={styles.dp} src={'/user4.jpg'} width={30} height={30} />
                    <Ticker color='#B0A1DF' value={11} />
                    <button type='button' className={styles.button}>
                        <Image src='/Arrow Chevron.png' width={20} height={20} />
                    </button>

                </div>
                <div className={styles.middle_container}>
                    <Button color="#FFFFFF" icon="/Suggestions.png" width='40px' height='40px' iconWidth='24px' iconHeight='24px' />

                    <Button onClick={handleModal} color="#0E8CFF" icon="/Plus.png" width='40px' height='40px' iconWidth='22px' iconHeight='22px' />
                    <Search />
                </div>
                <div className={styles.right_container}>
                    <Button color="#FFFFFF" icon="/Annoucement.png" width='40px' height='40px' iconWidth='24px' iconHeight='24px' />
                    <Button color="#FFFFFF" icon="/Calendar.png" width='40px' height='40px' iconWidth='24px' iconHeight='24px' />
                    <Button color="#FFFFFF" icon="/chat.png" width='40px' height='40px' iconWidth='24px' iconHeight='24px' />
                    <Image className={styles.dp} src={'/user3.jpg'} width={40} height={40} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;