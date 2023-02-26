import styles from '@/styles/Modal.module.css';
import Image from 'next/image';

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modal}>

            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Delete</h4>
                    <Image onClick={onClose} className={styles.close} src='/Close.png' width={16} height={16} />
                </div>
                <div className={styles.modal_body}>
                    <span className={styles.content}>
                        Are you sure you want to delete?

                    </span>
                </div>
                <div className={styles.modal_footer}>
                    <button onClick={onClose} className={styles.button}>Close</button>
                    <button onClick={onClose} className={styles.delete_button}>Delete</button>

                </div>
            </div>
        </div>)
}

export default Modal