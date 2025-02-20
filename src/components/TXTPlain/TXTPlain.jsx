import './TXTPlain.scss';
export default ({ children, className, tac, mac, style, white, small, inline }) => {
    return (
        <div className={`TXTPlain ${className} ${tac && 'TXTPlain_tac'} ${mac && 'TXTPlain_mac'} ${white && 'TXTPlain_white'} ${small && 'TXTPlain_small'} ${inline && 'TXTPlain_inline'} `} style={style}>
            {
                children
            }
        </div>
    )
}