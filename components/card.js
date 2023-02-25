import styles from '@/styles/Card.module.css';
import Status from './statusDot';
import Image from 'next/image';
import Label from './apiLabels';

const Card = ({ statusColor, company, title, userIcon, searchIcon, fileIcon, labels, disc, message, count, checklist, nCount, dCount, link, count2, createdOn, createdBy }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.title_panel}>
                    <Status color={statusColor} />
                    <span className={styles.card_title}>
                        {company}
                    </span>
                </div>
                {userIcon && <Image src={'/Userstar.png'} className={styles.header_icon} width={14} height={14} />}
                {searchIcon && <Image src={'/User Lead.png'} className={styles.header_icon} width={14} height={14} />}
                {fileIcon && <Image src={'/File check.png'} className={styles.header_icon} width={14} height={14} />}

            </div>
            <div className={styles.card_body}>
                <span className={styles.body_title}>
                    {title}
                </span>
                <div className={styles.api_labels}>
                    {labels.map((i) => (<Label key={i.label} label={i.label} color={i.color} />))}
                </div>
                <div className={styles.icon_container}>
                    {disc && <Image src='/description.png' className={styles.header_icon} width={14} height={14} />}
                    {message && <Image src='/Message.png' className={styles.header_icon} width={14} height={14} />}
                    {count && <span className={styles.counts}>{count}</span>}
                    {checklist && <Image src='/Checklist 2.png' className={styles.header_icon} width={14} height={14} />}
                    {(nCount && dCount) && <span className={styles.counts}>{nCount + '/' + dCount}</span>}
                    {link && <Image src='/Link.png' className={styles.header_icon} width={14} height={14} />}
                    {count2 && <span className={styles.counts}>{count2}</span>}

                </div>
                <div className={styles.footer}>
                    <div className={styles.created_on}>
                        <span className={styles.created_title}>
                            Created {createdOn} days ago
                        </span>
                    </div>
                    <Image className={styles.user_dp} src={createdBy} width={18} height={18} />
                </div>
            </div>
        </div>
    );
}
export default Card;