import Image from "next/image";
import styles from '@/styles/ImageCount.module.css';

const box = {
    "width": '30px',
    "height": '30px',
    "position": 'absolute',
    "top": 0,
    "left": 0,
    "opacity": 0.7,
    "background": '#0057e3',
    "border- radius": "15px"
}
const ImageCount = ({ image, count }) => {
    return (
        <div className={styles.outer_circle}>
            <Image className={styles.inner_image} src={image} width={20} height={20} />
            <div className={styles.inner_circle}>
                <span className={styles.inside_content}>{count}</span>
            </div>
        </div>
    );
}
export default ImageCount;