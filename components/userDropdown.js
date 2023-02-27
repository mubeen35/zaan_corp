import styles from '@/styles/Dropdown.module.css';
import { useState, useContext } from 'react';
import Image from 'next/image';
import Status from './statusDot';
import Text from './label';
import addCard from '@/context/addContext';

const UserDropdown = () => {
    const [open, setOpen] = useState(false);

    const { project, setValue } = useContext(addCard);
    const handleOpen = (value) => {
        setOpen(!open);
        setValue(value);
    };

    return (
        <div className={styles.user_dropdown}>
            <div className={styles.drop} onClick={handleOpen} >
                <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label={'Enter or select name'} />
                <Image className={styles.drop_icon} src='/Arrow Chevron.png' width={16} height={16} />
            </div>

            {open ? (
                <div className={styles.user_menu}>

                    <div className={styles.drop_body}>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user4.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Savannah Naguyen" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user3.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Dianne Russle" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user4.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Bessie Cooper" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user3.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Jane Cooper" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user4.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Cody Fisher" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user3.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Jane Cooper" />
                        </div>
                        <div className={styles.opt}>
                            <input type={'checkbox'} className={styles.chk_box} />
                            <Image className={styles.img} src='/user4.jpg' width={24} height={24} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Cody Fisher" />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default UserDropdown;