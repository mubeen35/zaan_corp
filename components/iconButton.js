import Image from "next/image";
import styles from '@/styles/Button.module.css';

const Button = ({ color, icon, text, handleButton, width, height, iconWidth, iconHeight }) => {
    const btnStyle = {
        'width': width,
        'height': height,
        'background': color,
    }
    const iconStyle = {
        'width': iconWidth,
        'height': iconHeight,
    }
    return (
        <button type='button' onClick={handleButton} className={styles.ic_button} style={btnStyle}>
            <Image style={iconStyle} src={icon} width={20} height={20} />
            {text && <span className={styles.txt}>{text}</span>}
        </button>
    );
}
export default Button;