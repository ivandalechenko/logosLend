import './MoreBlock.scss';
export default ({ imgsrc, title, description }) => {return (
        <div className='More__block-item'>
            <img src={imgsrc} alt="" />
            <div className='More__block-item-item'>
                <p className='More__block-item-item-title'>{title}</p>
                <p className='More__block-item-item-description'>{description}</p>
            </div>
        </div>
)}