import Image from "next/image";
import styles from '@/styles/Button.module.css';

const Button = ({ color, icon, text, onClick, width, height, iconWidth, iconHeight }) => {
    const btnStyle = {
        'width': width,
        'height': height,
        'background': color,
        'position': 'relative'
    }
    const iconStyle = {
        'width': iconWidth,
        'height': iconHeight,
    }
    return (
        <button type='button' onClick={onClick} className={styles.ic_button} style={btnStyle}>
            {icon && <Image style={iconStyle} src={icon} width={20} height={20} />}
            {text && <span className={styles.txt}>{text}</span>}
        </button>
    );
}
export default Button;