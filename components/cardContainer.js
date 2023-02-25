import styles from '@/styles/CardContainer.module.css';
import Image from 'next/image';
const CardContainer = ({ title, cardNo, children }) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h6 className={styles.title}>{title}</h6>
                    {cardNo && <span className={styles.card_no}>{'(' + cardNo + ')'}</span>}
                    <Image className={styles.icn2} src='/Filter.png' width={10} height={8} />
                    <Image className={styles.icn} src='/Sort by.png' width={10} height={12} />
                </div>
                <Image src='/Menu Dot.png' width={14} height={14} />
            </div>
            <div className={styles.card_sub}>
                <div className={styles.content_container}>
                    {children}
                </div>
            </div>
            <button type='button' className={styles.add_btn}>
                <div className={styles.btn}>
                    <Image className={styles.btn_icon} src='/plus2.png' width={18} height={18} />
                    <span className={styles.btn_txt}> Add Button</span>
                </div>
            </button>
        </div>
    );
}
export default CardContainer;