
const Label = ({ label, color }) => {

    const labelStyles = {
        'display': 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'padding': '0px 4px 2px',
        'gap': '10px',
        'min-height': '6px',
        'width': label ? 'max-content' : '43px',
        'background': color,
        'border-radius': '8px',
    }
    const lbl = {
        'height': '10px',
        'font-weight': '400',
        'font-size': '10px',
        'line-height': '10px',
        'color': '#070F21',
        'opacity': 0.8,
    }
    return (
        <div style={labelStyles}>
            <span style={lbl}>{label}</span>
        </div>
    );
}
export default Label;