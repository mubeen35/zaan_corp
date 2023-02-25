import styles from '@/styles/Workflow.module.css';
import line from '@/styles/Navbar.module.css';
import Image from 'next/image';
import ImageCount from './imageCount';
import Button from './iconButton';

const genStyle = {
    'width': '30px',
    'height': '30px',
    'border': 0,
    'border-radius': '15px'
};
const WorkflowBar = () => {
    return (
        <>
            <div className={styles.l_container}>
                <h3>Workflow</h3>
                <div className={styles.l_sub}>
                    <div className={styles.btn_container}>
                        <button type='button' className={styles.w_btn} style={genStyle} >
                            <Image src='/Workflow2.png' className={styles.img1} width={15} height={15} />
                        </button>
                        <button type='button' className={styles.btn1} style={genStyle}>
                            <Image className={styles.img} src='/Design.png' width={15} height={15} />
                        </button>
                        <button type='button' className={styles.btn2} style={genStyle}>
                            <Image src='/Code.png' className={styles.img} width={15} height={15} />
                        </button>
                        <button type='button' className={styles.btn3} style={genStyle}>
                            <Image src='/Annoucement.png' className={styles.img} width={15} height={15} />
                        </button>
                    </div>
                    <div className={line.vl}></div>
                    <div className={styles.btn_container}>
                        <ImageCount image='/user_1.jpg' count={2} />
                        <ImageCount image='/user2.jpg' count={5} />
                        <ImageCount image='/user3.jpg' count={1} />
                        <ImageCount image='/user4.jpg' count={4} />

                    </div>
                </div>

            </div>
            <div className={styles.r_container}>
                <Button color="#FFFFFF" icon="/Pinned.png" width='36px' height='36px' iconWidth='20px' iconHeight='20px' />
                <Button color="#FFFFFF" icon="/double file.png" width='36px' height='36px' iconWidth='20px' iconHeight='20px' />
                <Button color="#FFFFFF" icon="/Save.png" text='Views' width='74px' height='36px' iconWidth='16px' iconHeight='16px' />
                <Button color="#FFFFFF" icon="/filter.png" text='Filter' width='74px' height='36px' iconWidth='14px' iconHeight='10px' />
                <Button color="#FFFFFF" icon="/Sort by.png" text='Sort by' width='81px' height='36px' iconWidth='16px' iconHeight='16px' />
            </div>
        </>
    );
}
export default WorkflowBar;