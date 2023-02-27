import styles from '@/styles/Modal.module.css';
import Image from 'next/image';
import UserDropdown from './userDropdown';
const SaveModal = ({ onClose }) => {
    return (
        <div className={styles.modal}>

            <div className={styles.save_modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Delete</h4>
                    <Image onClick={onClose} className={styles.close} src='/Close.png' width={16} height={16} />
                </div>
                <div className={styles.save_modal_body}>
                    <span className={styles.content}>
                        View Name
                    </span>
                    <div className={styles.color_picker}>
                        <input type={'text'} className={styles.in} placeholder='Enter Name' />
                        <button type='button' className={styles.btn}>
                            <input type={'color'} className={styles.clr} />
                            <Image className={styles.chevron} src='/Arrow Chevron.png' width={16} height={16} />
                        </button>
                    </div>
                    <span className={styles.content}>
                        Share with others                    </span>
                    <div className={styles.user_dropdown}>
                        <UserDropdown />
                    </div>
                </div>
                <div className={styles.modal_footer}>
                    <button onClick={onClose} className={styles.button}>Close</button>
                </div>
            </div>
        </div>)
}

export default SaveModal