const Text = ({ weight, color, opacity, size, height, label }) => {
    const labelStyles = {
        'font-weight': weight,
        'font-size': size + 'px',
        'line-height': height + 'px',
        'color': color,
        'opacity': opacity,
    }
    return (
        <label style={labelStyles} >{label}</label>
    );
}
export default Text;