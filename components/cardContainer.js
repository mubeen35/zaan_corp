import styles from '@/styles/CardContainer.module.css';
import Image from 'next/image';
import ActionList from './actionList';
import SortBy from './sortBy';
import Filter from './filter';
import AddCard from './addCard';
import { useState } from 'react';
const CardContainer = ({ title, cardNo, children }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className={styles.card_container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h6 className={styles.title}>{title}</h6>
                    {cardNo && <span className={styles.card_no}>{'(' + cardNo + ')'}</span>}
                    {/* <Image className={styles.icn2} src='/Filter.png' width={12} height={12} /> */}
                    <Filter iconBased={true} />
                    {/* <Image className={styles.icn} src='/Sort by.png' width={12} height={12} /> */}
                    <SortBy iconBased={true} />

                </div>
                {/* <Image src='/Menu Dot.png' width={14} height={14} /> */}
                <ActionList />
            </div>
            <div className={styles.card_sub}>
                <div className={styles.content_container}>
                    {children}
                </div>
            </div>
            {!open && <button onClick={handleOpen} type='button' className={styles.add_btn}>
                <div className={styles.btn}>
                    <Image className={styles.btn_icon} src='/plus2.png' width={18} height={18} />
                    <span className={styles.btn_txt}> Add Button</span>
                </div>
            </button>}
            {open && <AddCard onClose={handleOpen} />}

        </div>
    );
}
export default CardContainer;