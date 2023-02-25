const Status = ({ color }) => {
    const dotStyle = {
        'background': color,
        'width': '10px',
        'height': '10px',
        'border-radius': '50%'
    }
    return (
        <div style={dotStyle}></div>
    );
}
export default Status;