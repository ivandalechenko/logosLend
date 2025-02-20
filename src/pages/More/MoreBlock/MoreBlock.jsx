import TXTPlain from '../../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../../components/TXTSubheader/TXTSubheader';
import './MoreBlock.scss';
export default ({ imgsrc, title, description }) => {
    return (
        <div className='More__block-item'>
            <img src={imgsrc} alt="" />
            <div className='More__block-item-item'>
                <TXTSubheader>
                    {title}
                </TXTSubheader>
                {/* <p className='More__block-item-item-title'> */}
                {/* </p> */}
                <TXTPlain>
                    {description}
                </TXTPlain>
                <p className='More__block-item-item-description'>
                </p>
            </div>
        </div>
    )
}