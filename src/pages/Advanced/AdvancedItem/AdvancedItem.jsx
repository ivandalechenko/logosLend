import TXTPlain from '../../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../../components/TXTSubheader/TXTSubheader';
import './AdvancedItem.scss';
export default ({ imgsrc, title, description }) => {
    return (
        <div className='AdvancedItem'>
            <img src={imgsrc} alt="" />
            <div className='AdvancedItem__description'>
                <TXTSubheader>
                    {title}
                </TXTSubheader>
                <TXTPlain>
                    {description}
                </TXTPlain>
                {/* <p className='AdvancedItem__description-description'>
                    </p> */}
            </div>
        </div>
    )
}