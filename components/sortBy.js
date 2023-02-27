import styles from '@/styles/SortBy.module.css';
import Button from './iconButton';
import { useState } from 'react';
import Image from 'next/image';
const SortBy = ({ iconBased }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            {!iconBased && <Button onClick={handleOpen} color="#FFFFFF" icon="/Sort by.png" text='Sort by' width='81px' height='36px' iconWidth='16px' iconHeight='16px' />}
            {iconBased && <Image onClick={handleOpen} className={styles.icn} src='/Sort by.png' width={12} height={12} />}

            {open ? (
                <div className={styles.menu}>
                    <div className={styles.sort_header}>
                        <div className={styles.sort_left}>
                            <Image className={styles.sort_icon} src='/Sort by.png' width={18} height={18} />
                            <span className={styles.txt}>Sort by</span>
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />

                    </div>
                    <div className={styles.sort_body}>
                        <p className={styles.options}>Order</p>
                        <p className={styles.options}>Created date</p>
                        <p className={styles.options}>Due date</p>
                        <p className={styles.options}>Sitting count</p>
                        <p className={styles.options}>Move count</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default SortBy;