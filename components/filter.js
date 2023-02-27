import styles from '@/styles/Filter.module.css';
import Button from './iconButton';
import { useState } from 'react';
import Image from 'next/image';
import Status from './statusDot';
import Text from './label';
import Label from './apiLabels';

const Filter = ({ iconBased }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            {!iconBased && <Button onClick={handleOpen} color="#FFFFFF" icon="/liter.png" text='Filter' width='81px' height='36px' iconWidth='16px' iconHeight='16px' />}
            {iconBased && <Image onClick={handleOpen} className={styles.icn2} src='/liter.png' width={12} height={12} />}
            {open ? (
                <div className={styles.menu}>
                    <div className={styles.filter_header}>
                        <div className={styles.filter_left}>
                            <Image className={styles.filter_icon} src='/Filter.png' width={18} height={18} />
                            <span className={styles.txt}>Filter by</span>
                        </div>
                        <Image onClick={handleOpen} className={styles.close_icon} src='/Close.png' width={16} height={16} />
                    </div>
                    <div className={styles.filter_body}>
                        <div className={styles.project_container}>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} checked={true} />
                                <div className={styles.status_container}>
                                    <Status color={'#FF3477'} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="ContactRM" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />

                                <div className={styles.status_container}>
                                    <Status color={'#FF9F1A'} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="AgentBook" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />

                                <div className={styles.status_container}>
                                    <Status color={'#6248FF'} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="W4RTeam" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />

                                <div className={styles.status_container}>
                                    <Status color={'#8F76FF'} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="LeadBank" />
                                </div>
                            </div>
                            <Text weight={400} color={'#0E8CFF'} size={12} height={20} label="Show all..." />

                        </div>
                        <div className={styles.tags_container}>

                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} checked={true} />
                                <div className={styles.status_container}>
                                    <Label label={'api.contactrm.com'} color={'#FFEEDE'} />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Label label={'api.contactrm'} color={'#FFDEFC'} />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Label label={'Respective APIs'} color={'#E4F5FF'} />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Label label={'api.agentbook.com'} color={'#DDE6FE'} />
                                </div>
                            </div>
                            <Text weight={400} color={'#0E8CFF'} size={12} height={20} label="Show all..." />
                        </div>
                        <div className={styles.assignee_container}>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} checked={true} />
                                <div className={styles.status_container}>
                                    <Image src={'/user4.jpg'} width={24} height={24} className={styles.user} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Savannah Naguyen" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Image src={'/user3.jpg'} width={24} height={24} className={styles.user} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Wade Warren" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Image src={'/user4.jpg'} width={24} height={24} className={styles.user} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Wade Warren" />
                                </div>
                            </div>
                            <div className={styles.sub_project}>
                                <input className={styles.checkbox} type={'checkbox'} />
                                <div className={styles.status_container}>
                                    <Image src={'/user3.jpg'} width={24} height={24} className={styles.user} />
                                    <Text weight={400} color={'#070F21'} opacity={0.7} size={13} height={20} label="Jane Cooper" />
                                </div>
                            </div>
                            <Text weight={400} color={'#0E8CFF'} size={12} height={20} label="Show all..." />
                        </div>

                    </div>
                    <div className={styles.filter_footer}>
                        <button type='button' className={styles.clear_btn} >Clear</button>
                        <button type='button' className={styles.apply_btn} >Apply</button>

                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default Filter;