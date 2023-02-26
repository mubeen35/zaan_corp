import styles from '@/styles/ArchiveSnooze.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Text from './label';
import Button from './iconButton';
import ToDo from '../mock data/todoData';
import Card from './card';
import backlog from '../mock data/mockData'

const ArchiveSnooze = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [archive] = useState(ToDo);
    const [snooze] = useState(backlog);


    const handleOpen = () => {
        setOpen(!open);
    };
    const handleActive = () => {
        setActive(!active);
    };
    return (
        <div className={styles.as_container}>
            <Button onClick={handleOpen} color="#FFFFFF" icon="/double file.png" width='36px' height='36px' iconWidth='20px' iconHeight='20px' />

            {open ? (
                <div className={styles.menu}>
                    <div className={styles.as_header}>
                        <div className={styles.as_left}>
                            <div onClick={handleActive} className={!active ? styles.archive_active : styles.archive} >
                                <Image className={!active ? styles.ar_icon : null} src='/Archive.png' width={16} height={16} />
                                <Text weight={400} color={!active ? '#FFFFFF' : '#070F21'} opacity={0.8} size={12} height={16} label={'Archive'} />
                            </div>
                            <div onClick={handleActive} className={active ? styles.snooze_active : styles.snooze}>
                                <Image className={active ? styles.sn_icon : null} src='/Snooze.png' width={16} height={16} />
                                <Text weight={400} color={active ? '#FFFFFF' : '#070F21'} opacity={0.8} size={12} height={16} label={'Snooze'} />
                            </div>
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />

                    </div>
                    <div className={styles.search_container}>
                        <Image className={styles.search_icon} src='/Search.png' width={16} height={16} />
                        <input type='text' className={styles.searchfield} placeholder='Search' />
                    </div>
                    <div className={styles.as_body}>
                        {!active && archive.map(i => (<Card key={i.title} {...i} />))}
                        {active && snooze.map(i => (<Card key={i.title} {...i} />))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default ArchiveSnooze;