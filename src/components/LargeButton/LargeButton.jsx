import TXTPlain from '../TXTPlain/TXTPlain';
import './LargeButton.scss';
export default ({ text, action = () => { } }) => {
    return (
        <div className='LargeButton' onClick={action}>
            <TXTPlain white>
                {text}
            </TXTPlain>
        </div>
    )
}