import styles from '@/styles/SortBy.module.css';
import Button from './iconButton';
import { useState } from 'react';
import Image from 'next/image';
import Status from './statusDot';
import Text from './label';
import Modal from './modal';
const Views = () => {
    const [open, setOpen] = useState(false);
    const [mOpen, setModelOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleModal = (e) => {
        e.stopPropagation();
        setOpen(!open);
        setModelOpen(!mOpen)
    }

    return (
        <div className="dropdown">
            {mOpen && <Modal onClose={handleModal} />}
            <Button onClick={handleOpen} color="#FFFFFF" icon="/Save.png" text='Views' width='81px' height='36px' iconWidth='16px' iconHeight='16px' />
            {open ? (
                <div className={styles.views}>
                    <div className={styles.views_header}>
                        <div className={styles.sort_left}>
                            <Image className={styles.sort_icon} src='/Save.png' width={18} height={18} />
                            <span className={styles.txt}>Views</span>
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />

                    </div>
                    <div className={styles.sort_body}>
                        <div className={styles.sub_option}>
                            <div className={styles.option_container}>
                                <Status color="#6248FF" />
                                <Text weight={400} color={'#070F21'} opacity={0.7} size={14} height={20} label="My first filter" />
                            </div>
                        </div>
                        <div className={styles.sub_option}>

                            <div className={styles.option_container}>
                                <Status color="#FF3477" />
                                <Text weight={400} color={'#070F21'} opacity={0.7} size={14} height={20} label="Available for me" />
                            </div>
                        </div>
                        <div className={styles.sub_option}>

                            <div className={styles.option_container}>
                                <Status color="#27E1BF" />
                                <Text weight={400} color={'#070F21'} opacity={0.7} size={14} height={20} label="Current Tasks" />
                            </div>
                            <Image onClick={handleModal} src='/delete red.png' width={16} height={16} />

                        </div>
                        <div className={styles.sub_option}>

                            <div className={styles.option_container}>
                                <Status color="#FF9F1A" />
                                <Text weight={400} color={'#070F21'} opacity={0.7} size={14} height={20} label="Top Project" />
                            </div>
                        </div>
                        <div className={styles.sub_option}>

                            <div className={styles.option_container}>
                                <Status color="#34CEFF" />
                                <Text weight={400} color={'#070F21'} opacity={0.7} size={14} height={20} label="Favorites" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default Views;