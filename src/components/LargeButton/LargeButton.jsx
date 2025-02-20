import TXTPlain from '../TXTPlain/TXTPlain';
import './LargeButton.scss';
export default ({ text, action = () => { }, nm }) => {
    return (
        <div className={`LargeButton ${nm && 'LargeButton_nm'}`} onClick={action}>
            <TXTPlain white>
                {text}
            </TXTPlain>
        </div>
    )
}