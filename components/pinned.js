import styles from '@/styles/ArchiveSnooze.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Text from './label';
import Button from './iconButton';
import ToDo from '../mock data/todoData';
import Card from './card';
import backlog from '../mock data/mockData'

const Pinned = () => {
    const [open, setOpen] = useState(false);
    const [pinned] = useState(backlog);


    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.as_container}>
            <Button onClick={handleOpen} color="#FFFFFF" icon="/Pinned.png" width='36px' height='36px' iconWidth='20px' iconHeight='20px' />

            {open ? (
                <div className={styles.pin_menu}>
                    <div className={styles.pin_header}>
                        <div className={styles.pin_left}>
                            <Image className={styles.pin_icon} src='/Pinned.png' width={16} height={16} />
                            <Text weight={500} color={'#070F21'} opacity={0.8} size={15} height={20} label={'Pinned Card'} />
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />

                    </div>
                    <div className={styles.search_container}>
                        <Image className={styles.search_icon} src='/Search.png' width={16} height={16} />
                        <input type='text' className={styles.searchfield} placeholder='Search' />
                    </div>
                    <div className={styles.pin_body}>
                        {pinned.map(i => (<Card key={i.title} {...i} />))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default Pinned;