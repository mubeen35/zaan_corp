import styles from '@/styles/Dropdown.module.css';
import { useState, useContext } from 'react';
import Image from 'next/image';
import Status from './statusDot';
import Text from './label';
import addCard from '@/context/addContext';

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const { project, setValue } = useContext(addCard);
    const handleOpen = (value) => {
        setOpen(!open);
        setValue(value);
    };

    console.log(project);
    return (
        <div className={styles.dropdown}>
            <div className={styles.drop} onClick={handleOpen} >
                <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label={project} />
                <Image className={styles.drop_icon} src='/Arrow Chevron.png' width={16} height={16} />
            </div>

            {open ? (
                <div className={styles.menu}>

                    <div className={styles.drop_body}>
                        <div className={styles.status_container} onClick={() => handleOpen('ContactRM')} >
                            <Status color={'#FF3477'} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="ContactRM" />
                        </div>
                        <div className={styles.status_container} onClick={() => handleOpen('AgentBook')} >
                            <Status color={'#FF9F1A'} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="AgentBook" />
                        </div>
                        <div className={styles.status_container} onClick={() => handleOpen('W4RTeam')} >
                            <Status color={'#6248FF'} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="W4RTeam" />
                        </div>
                        <div className={styles.status_container} onClick={() => handleOpen('LeadBank')} >
                            <Status color={'#8F76FF'} />
                            <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="LeadBank" />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default Dropdown;