import './ButtonOut.scss';
export default ({ text, action = () => { }, onMouseEnter = () => { }, className }) => {
    return (
        <div className={`ButtonOut ${className}`} onClick={action} onMouseEnter={onMouseEnter}>
            {text}
            <img src="/img/buttonWhitepapper.svg" alt="" />
        </div>
    )
}