import styles from '@/styles/CardContainer.module.css';
import Text from './label';
import Image from 'next/image';
import Dropdown from './customDropdown';
import addCard from '@/context/addContext';
import { useContext } from 'react';
const AddCard = ({ onClose }) => {
    const { project, setValue } = useContext(addCard);

    return (

        <div className={styles.add_card_container}>
            <div className={styles.add_card_header}>
                <Text weight={500} color={'#070F21'} opacity={0.8} size={13} height={16} label="Card title" />
                <Image onClick={onClose} className={styles.close_icn} src="/Close2.png" width={14} height={14} />
            </div>
            <div className={styles.add_card_body}>
                <input type='text' className={styles.textfield} placeholder='Enter card name' />
                <div className={styles.add_card_body_input}>
                    <addCard.Provider value={{ project, setValue }}>
                        <Dropdown />
                    </addCard.Provider>

                    <button type='button' className={styles.new_add}>Add</button>
                </div>

            </div>

        </div>
    );
}
export default AddCard;