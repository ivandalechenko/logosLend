import './TXTSubheader.scss';
export default ({ children, className, small, w100, wide }) => {
    return (
        <div className={`TXTSubheader ${className} ${small && 'TXTSubheader_small'}  ${w100 && 'TXTSubheader_w100'} ${wide && 'TXTSubheader_wide'}`}>
            {children}
        </div>
    )
}