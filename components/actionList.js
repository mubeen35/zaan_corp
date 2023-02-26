import styles from '@/styles/SortBy.module.css';
import Button from './iconButton';
import { useState } from 'react';
import Image from 'next/image';
const ActionList = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Image onClick={handleOpen} src='/Menu Dot.png' width={16} height={16} />

            {open ? (
                <div className={styles.menu2}>
                    <div className={styles.sort_header}>
                        <div className={styles.sort_left}>
                            <span className={styles.txt}>List Actions</span>
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />

                    </div>
                    <div className={styles.sort_body}>
                        <p className={styles.options}>Move all cards in this list</p>
                        <p className={styles.options}>Archive all cards in this list</p>
                    </div>
                </div>
            ) : null}
        </>
    );
};
export default ActionList;