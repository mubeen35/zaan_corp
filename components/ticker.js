const Ticker = ({ color, value }) => {
    return (
        <div className='ticker'>
            <span className='ticker_value'>{value}</span>
            <style jsx>{`
            .ticker {
                width : 24px;
                height: 20px;
                background : ${color};
                display: flex;
                justify-content : center;
                align-items:center;
                border-radius:5px;
            }
            .ticker_value{
                width: 18px;
                height: 12px;
                left: 37px;
                top: 9px;
                color:#ffffff;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
            }
        `}</style>
        </div>
    );
}
export default Ticker;