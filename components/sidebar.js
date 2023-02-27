import styles from '@/styles/Layout.module.css';
import Image from "next/image";
import { useState } from 'react';
import Status from './statusDot';

const Sidebar = () => {

    const [collapse, setCollapse] = useState(false);
    const [selected, setSelected] = useState('workflow');


    const handleCollapse = (e, val) => {
        e.stopPropagation();
        setCollapse(val)
    }

    const handleSelection = (val) => {
        console.log(val);
        setSelected(val);
    }
    return (
        <div onClick={(e) => handleCollapse(e, false)} className={collapse ? styles.collapse : styles.sidebar}>
            <div className={styles.left_head}>
                <div className={styles.top}>
                    {/* <Image src='/Vector.png' width={14} height={14} /> */}
                    <Status color={'#27E1BF'} />
                    <select name="ZaanCorp" className={collapse ? styles.d_none : styles.company_name}>
                        <option value="Zaan Corp">Zaan Corp</option>
                        <option value="Zaan Corp2">Zaan Corp2</option>
                    </select>
                </div>
                <Image onClick={(e) => handleCollapse(e, true)} src='/Double arrow.svg' className={collapse ? styles.d_none : styles.arrow} width={14} height={14} />

            </div>
            <div className={styles.menu}>
                <div className={selected == 'dasboard' ? styles.panel2 : styles.panel} onClick={() => handleSelection('dashboard')}  >
                    <Image className={styles.icon} src='/Dashboad.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title} >Dashboard</span>
                </div>
                <div className={selected == 'workflow' ? styles.panel2 : styles.panel} onClick={() => handleSelection('workflow')}>
                    <Image className={styles.icon} src='/Workflow.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Workflow</span>
                </div>
                <div className={selected == 'calendar' ? styles.panel2 : styles.panel} onClick={() => handleSelection('calendar')}>
                    <Image className={styles.icon} src='/Calendar.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Calendar</span>
                </div>
                <div className={selected == 'socialmedia' ? styles.panel2 : styles.panel} onClick={() => handleSelection('socialmedia')}>
                    <Image className={styles.icon} src='/social media.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>socialRM</span>
                </div>
                <div className={selected == 'analytic' ? styles.panel2 : styles.panel} onClick={() => handleSelection('analytic')}>
                    <Image className={styles.icon} src='/Analytic.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Metrics</span>
                </div>
                <div className={selected == 'userlead' ? styles.panel2 : styles.panel} onClick={() => handleSelection('userlead')}>
                    <Image className={styles.icon} src='/User Lead.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Leads</span>
                </div>
                <div className={selected == 'userstar' ? styles.panel2 : styles.panel} onClick={() => handleSelection('userstar')}>
                    <Image className={styles.icon} src='/Userstar.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Users</span>
                </div>
                <div className={selected == 'notifications' ? styles.panel2 : styles.panel} onClick={() => handleSelection('notifications')}>
                    <Image className={styles.icon} src='/Notifications.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Notifications</span>
                </div>
                <div className={selected == 'documents' ? styles.panel2 : styles.panel} onClick={() => handleSelection('documents')} >
                    <Image className={styles.icon} src='/Documents.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Documents</span>
                </div>
                <div className={selected == 'segments' ? styles.panel2 : styles.panel} onClick={() => handleSelection('segments')}>
                    <Image className={styles.icon} src='/Segments.png' width={22} height={22} />
                    <span className={collapse ? styles.d_none : styles.sidebar_title}>Segments</span>
                </div>
            </div>
            <div className={selected == 'filecheck' ? styles.panel2 : styles.panel} onClick={() => handleSelection('filecheck')}>
                <Image className={styles.icon} src='/File check.png' width={22} height={22} />
                <span className={collapse ? styles.d_none : styles.sidebar_title}>Company</span>
            </div>
        </div>
    )
}
export default Sidebar;