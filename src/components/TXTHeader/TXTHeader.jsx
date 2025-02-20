import './TXTHeader.scss';
export default ({ children, className, left }) => {
    return (
        <div className={`TXTHeader ${className} ${left && 'TXTHeader_left'}`}>
            {children}
        </div>
    )
}